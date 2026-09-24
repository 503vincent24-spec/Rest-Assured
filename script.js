/* ============================================================
   Rest Assured Moving LLC — Site JavaScript v3
   Vanilla JS, no dependencies, GitHub Pages compatible.
   ============================================================ */

(function () {
  'use strict';

  /* ── Lead delivery config ─────────────────────────────────
     Leads are POSTed to FormSubmit (free, no account, no backend).
     The FIRST submission triggers a one-time activation email to
     LEAD_EMAIL — click "Activate Form" in it or no leads arrive.
     After activating, FormSubmit emails you a random alias string;
     paste it into FORM_ID so your address is not in the page source.
     If the POST fails for any reason, the visitor falls back to a
     pre-filled email, so a lead is never silently dropped.        */
  var LEAD_EMAIL = 'Shawn@restassuredmoving.net';
  var FORM_ID    = LEAD_EMAIL;  // ← replace with FormSubmit alias after activation
  var ENDPOINT   = 'https://formsubmit.co/ajax/' + FORM_ID;
  var PHONE      = '(971) 302-0120';
  var TEL        = '+19713020120';
  var THANK_YOU  = 'thank-you.html';

  /* ── Helpers ─────────────────────────────────────────── */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function on(el, ev, fn) { if (el) el.addEventListener(ev, fn); }
  function esc(str) { var d = document.createElement('div'); d.textContent = str; return d.innerHTML; }
  function store(key, val) {
    try {
      if (val === undefined) return sessionStorage.getItem(key);
      sessionStorage.setItem(key, val);
    } catch (e) { /* private mode / blocked storage: attribution is best-effort */ }
    return null;
  }

  /* ── Lead source attribution ─────────────────────────────
     Remember how the visitor first arrived (ad click, Google,
     Facebook…) so every lead says which marketing paid for it. */
  (function captureSource() {
    if (store('ra_source')) return;
    var params = new URLSearchParams(window.location.search);
    var parts = [];
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'gclid', 'fbclid'].forEach(function (k) {
      if (params.get(k)) parts.push(k + '=' + params.get(k));
    });
    var ref = document.referrer && document.referrer.indexOf(location.host) === -1 ? document.referrer : '';
    store('ra_source', parts.join(' · ') || (ref ? 'referrer: ' + ref : 'direct'));
    store('ra_landing', location.pathname);
  })();

  /* ── Lead submission ─────────────────────────────────────
     fields: ordered [label, value] pairs. Resolves true when
     delivered, false when the visitor had to use the fallback. */
  function mailtoFor(subject, fields) {
    var body = fields.map(function (f) { return f[0] + ': ' + f[1]; }).join('\n');
    return 'mailto:' + LEAD_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function sendLead(form, subject, fields) {
    var payload = { _subject: subject, _template: 'table', _captcha: 'false' };
    fields.forEach(function (f) { payload[f[0]] = f[1]; });
    var hp = $('[name="_honey"]', form);
    payload._honey = hp ? hp.value : '';
    var reply = $('[name="email"]', form);
    if (reply && reply.value) payload._replyto = reply.value;

    if (!window.fetch) return Promise.resolve(false);
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 15000) : null;
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (json) {
        // FormSubmit answers 200 with success:"false" (e.g. form not yet activated)
        return res.ok && String(json.success) !== 'false';
      });
    }).catch(function () { return false; })
      .finally(function () { if (timer) clearTimeout(timer); });
  }

  function trackLead(kind) {
    // Picked up by Google Ads / GA4 / Meta if their tags are added later; no-op otherwise.
    try {
      (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_type: kind });
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
    } catch (e) { /* analytics must never block a lead */ }
  }

  function submitLead(form, kind, subject, fields, box, button) {
    fields.push(['Lead source', store('ra_source') || 'unknown']);
    fields.push(['Landing page', store('ra_landing') || '']);
    fields.push(['Submitted from', location.pathname]);

    var label = button ? button.innerHTML : '';
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }

    sendLead(form, subject, fields).then(function (delivered) {
      trackLead(kind);
      if (delivered) { window.location.href = THANK_YOU; return; }

      // Delivery failed: hand the visitor a pre-filled email so the lead still lands.
      var mailto = mailtoFor(subject, fields);
      if (button) { button.disabled = false; button.innerHTML = label; }
      if (box) {
        box.innerHTML = '<strong>Almost there!</strong> We couldn\'t send your request automatically. ' +
          '<a href="' + esc(mailto) + '" style="color:var(--emerald-700);text-decoration:underline;font-weight:700;">Tap here to send it by email</a> ' +
          '(it\'s already filled in), or call us at <a href="tel:' + TEL + '" style="font-weight:700;">' + PHONE + '</a>.';
        box.classList.add('visible');
        box.setAttribute('tabindex', '-1');
        box.focus();
      }
      window.location.href = mailto;
    });
  }

  /* ── Field validation ────────────────────────────────── */
  function setError(field, msg, show) {
    var group = field.closest('.form-group') || field.parentElement;
    var err = group.querySelector('.field-error');
    field.classList.toggle('error', show);
    if (err) {
      if (msg) err.textContent = msg;
      err.classList.toggle('visible', show);
    }
  }

  function validateFields(scope) {
    var firstBad = null;
    $$('[required]', scope).forEach(function (f) {
      var val = f.value.trim();
      var bad = !val;
      var msg = null;
      if (!bad && f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        bad = true; msg = 'Please enter a valid email address.';
      }
      if (!bad && f.type === 'tel' && val.replace(/\D/g, '').length < 10) {
        bad = true; msg = 'Please enter a 10-digit phone number.';
      }
      setError(f, msg, bad);
      if (bad && !firstBad) firstBad = f;
    });
    $$('[data-require-one]', scope).forEach(function (group) {
      var bad = !$$('input:checked', group).length;
      var err = group.parentElement.querySelector('.field-error');
      if (err) err.classList.toggle('visible', bad);
      if (bad && !firstBad) firstBad = $('input', group);
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }

  /* ── Footer year ─────────────────────────────────────── */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ── Sticky header shadow ─────────────────────────────── */
  var header = $('.site-header');
  if (header) {
    var updateHeader = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ── Mobile nav toggle ───────────────────────────────── */
  var toggle = $('.nav-toggle');
  var nav    = $('.nav');
  if (toggle && nav) {
    var closeNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    on(toggle, 'click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('.nav-links a').forEach(function (a) { on(a, 'click', closeNav); });
    on(document, 'click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) closeNav();
    });
    on(document, 'keydown', function (e) { if (e.key === 'Escape') closeNav(); });
  }

  /* ── FAQ accordion (supplement <details> native) ─────── */
  $$('.faq-item').forEach(function (item) {
    on(item, 'toggle', function () {
      var icon = $('.faq-toggle', item);
      if (icon) icon.textContent = item.open ? '×' : '+';
    });
  });

  /* ── Clear a field's error as soon as it's edited ────── */
  $$('form input, form select, form textarea').forEach(function (f) {
    var clear = function () {
      if (f.type === 'checkbox') {
        var grp = f.closest('[data-require-one]');
        var err = grp && grp.parentElement.querySelector('.field-error');
        if (err) err.classList.remove('visible');
      } else {
        setError(f, null, false);
      }
    };
    on(f, 'input', clear);
    on(f, 'change', clear);
  });

  /* ── Multi-step quote form (quote.html) ──────────────── */
  var quoteForm = $('#quote-form');
  if (quoteForm) {
    var steps    = $$('.form-step', quoteForm);
    var stepInds = $$('.step-ind');
    var current  = 0;
    quoteForm.classList.add('js-steps');

    var showStep = function (idx, scroll) {
      idx = Math.max(0, Math.min(idx, steps.length - 1));
      steps.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      stepInds.forEach(function (ind, i) {
        ind.classList.toggle('active',   i === idx);
        ind.classList.toggle('complete', i < idx);
      });
      current = idx;
      if (scroll) quoteForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    $$('.next-btn', quoteForm).forEach(function (btn) {
      on(btn, 'click', function () { if (validateFields(steps[current])) showStep(current + 1, true); });
    });
    $$('.back-btn', quoteForm).forEach(function (btn) {
      on(btn, 'click', function () { showStep(current - 1, true); });
    });

    /* Prefill from the cost estimator (estimate.html → quote.html?…) */
    var qs = new URLSearchParams(window.location.search);
    var preSvcs = (qs.get('services') || '').split(',').map(function (s) { return s.trim(); });
    $$('input[name="services"]', quoteForm).forEach(function (cb) {
      if (preSvcs.indexOf(cb.value) !== -1) cb.checked = true;
    });
    var preSize = qs.get('home_size');
    var sizeSel = $('[name="home_size"]', quoteForm);
    if (preSize && sizeSel) {
      $$('option', sizeSel).forEach(function (o) { if (o.textContent === preSize) sizeSel.value = o.value || o.textContent; });
    }
    var preAccess = qs.get('access');
    var notes = $('[name="notes"]', quoteForm);
    if (preAccess && notes && !notes.value) notes.value = 'Access: ' + preAccess;
    var preEstimate = qs.get('estimate');
    var estField = $('[name="online_estimate"]', quoteForm);
    if (preEstimate && estField) estField.value = preEstimate;

    on(quoteForm, 'submit', function (e) {
      e.preventDefault();
      // Enter key in an early step should advance, not submit a half-filled request.
      if (current < steps.length - 1) {
        if (validateFields(steps[current])) showStep(current + 1, true);
        return;
      }
      // Re-check every step: a field may have been cleared after moving on.
      for (var i = 0; i < steps.length; i++) {
        if (!validateFields(steps[i])) { showStep(i, true); validateFields(steps[i]); return; }
      }

      var d = new FormData(quoteForm);
      var g = function (k) { return (d.get(k) || '').toString().trim(); };
      var name = g('name');
      var fields = [
        ['Name', name],
        ['Phone', g('phone')],
        ['Email', g('email')],
        ['Best time to call', g('best_time') || 'No preference'],
        ['Services', d.getAll('services').join(', ')],
        ['Move date', g('move_date') || 'Not set'],
        ['Date flexibility', g('date_flex')],
        ['Home size', g('home_size') || 'Not given'],
        ['Truck / container', g('truck_arranged')],
        ['Pickup', g('pickup') || '—'],
        ['Destination', g('destination') || '—'],
        ['Notes', g('notes') || '—'],
        ['Heard about us', g('referral') || '—']
      ];
      if (g('online_estimate')) fields.push(['Online estimate shown', g('online_estimate')]);
      var subject = 'New Quote Request: ' + name + ' | ' + (g('move_date') || 'Date TBD');
      submitLead(quoteForm, 'quote', subject, fields, $('#form-success'), $('button[type="submit"]', quoteForm));
    });

    showStep(0, false);
  }

  /* ── Contact form (contact.html) ─────────────────────── */
  var contactForm = $('#contact-form');
  if (contactForm) {
    on(contactForm, 'submit', function (e) {
      e.preventDefault();
      if (!validateFields(contactForm)) return;
      var d = new FormData(contactForm);
      var g = function (k) { return (d.get(k) || '').toString().trim(); };
      var fields = [
        ['Name', g('name')],
        ['Phone', g('phone')],
        ['Email', g('email')],
        ['Service', g('service') || '—'],
        ['Message', g('message')]
      ];
      submitLead(contactForm, 'contact', 'New Website Inquiry: ' + g('name'), fields,
        $('#contact-success'), $('button[type="submit"]', contactForm));
    });
  }

  /* ── Smooth-scroll anchor links ──────────────────────── */
  $$('a[href^="#"]').forEach(function (a) {
    on(a, 'click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var dest = document.getElementById(id.slice(1));
      if (dest) {
        e.preventDefault();
        dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dest.setAttribute('tabindex', '-1');
        dest.focus({ preventScroll: true });
      }
    });
  });

  /* ── Animate numbers on scroll (stats bar) ───────────── */
  var statEls = $$('[data-count]');
  if (statEls.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el  = entry.target;
        var end = parseInt(el.dataset.count, 10);
        var inc = end / (1200 / 16);
        var cur = 0;
        var timer = setInterval(function () {
          cur = Math.min(cur + inc, end);
          el.textContent = Math.round(cur) + (el.dataset.suffix || '');
          if (cur >= end) clearInterval(timer);
        }, 16);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    statEls.forEach(function (el) { io.observe(el); });
  }

})();
