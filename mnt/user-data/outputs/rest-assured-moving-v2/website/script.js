/* ============================================================
   Rest Assured Moving LLC — Site JavaScript v2
   Vanilla JS, no dependencies, GitHub Pages compatible.
   ============================================================ */

(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────────────────── */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function on(el, ev, fn) { if (el) el.addEventListener(ev, fn); }
  function esc(str) { var d = document.createElement('div'); d.textContent = str; return d.innerHTML; }

  /* ── Footer year ─────────────────────────────────────── */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ── Sticky header shadow ─────────────────────────────── */
  var header = $('.site-header');
  if (header) {
    function updateHeader() {
      header.classList.toggle('scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ── Mobile nav toggle ───────────────────────────────── */
  var toggle = $('.nav-toggle');
  var nav    = $('.nav');
  if (toggle && nav) {
    on(toggle, 'click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    /* Close when a link is tapped */
    $$('.nav-links a').forEach(function (a) {
      on(a, 'click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    /* Close on outside click */
    on(document, 'click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── FAQ accordion (supplement <details> native) ─────── */
  $$('.faq-item').forEach(function (item) {
    var summary = $('summary', item);
    if (!summary) return;
    /* Ensure toggle icon updates */
    on(item, 'toggle', function () {
      var icon = $('.faq-toggle', item);
      if (icon) icon.textContent = item.open ? '×' : '+';
    });
  });

  /* ── Multi-step quote form ───────────────────────────── */
  var quoteForm = $('#quote-form');
  if (quoteForm) {
    var steps      = $$('.form-step', quoteForm);
    var stepInds   = $$('.step-ind');
    var current    = 0;

    function showStep(idx) {
      steps.forEach(function (s, i) {
        s.classList.toggle('active', i === idx);
      });
      stepInds.forEach(function (ind, i) {
        ind.classList.toggle('active',   i === idx);
        ind.classList.toggle('complete', i < idx);
      });
      current = idx;
      /* Scroll to top of form on step change */
      quoteForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* Validate a single step's required fields */
    function validateStep(idx) {
      var step = steps[idx];
      var fields = $$('[required]', step);
      var valid = true;
      fields.forEach(function (f) {
        var err = f.parentElement.querySelector('.field-error');
        if (!f.value.trim()) {
          f.classList.add('error');
          if (err) err.classList.add('visible');
          valid = false;
        } else {
          f.classList.remove('error');
          if (err) err.classList.remove('visible');
        }
      });
      /* Email pattern */
      var email = $('[type="email"]', step);
      if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        var emailErr = email.parentElement.querySelector('.field-error');
        if (emailErr) { emailErr.textContent = 'Please enter a valid email.'; emailErr.classList.add('visible'); }
        valid = false;
      }
      return valid;
    }

    /* Next buttons */
    $$('.next-btn', quoteForm).forEach(function (btn) {
      on(btn, 'click', function () {
        if (validateStep(current)) showStep(current + 1);
      });
    });

    /* Back buttons */
    $$('.back-btn', quoteForm).forEach(function (btn) {
      on(btn, 'click', function () { showStep(current - 1); });
    });

    /* Clear error on input */
    $$('input,select,textarea', quoteForm).forEach(function (f) {
      on(f, 'input', function () {
        f.classList.remove('error');
        var err = f.parentElement.querySelector('.field-error');
        if (err) err.classList.remove('visible');
      });
    });

    /* Submission */
    on(quoteForm, 'submit', function (e) {
      e.preventDefault();
      if (!validateStep(current)) return;

      var data   = new FormData(quoteForm);
      var name   = data.get('name') || '';
      var phone  = data.get('phone') || '';
      var email  = data.get('email') || '';
      var date   = data.get('move_date') || '';
      var svcs   = data.getAll('services').join(', ');
      var size   = data.get('home_size') || '';
      var pickup = data.get('pickup') || '';
      var dest   = data.get('destination') || '';
      var notes  = data.get('notes') || '';
      var refer  = data.get('referral') || '';

      var subject = encodeURIComponent('Quote Request — ' + name + ' | ' + (date || 'Date TBD'));
      var body = encodeURIComponent(
        'Name: '        + name   + '\n' +
        'Phone: '       + phone  + '\n' +
        'Email: '       + email  + '\n' +
        'Move Date: '   + date   + '\n' +
        'Services: '    + svcs   + '\n' +
        'Home Size: '   + size   + '\n' +
        'Pickup: '      + pickup + '\n' +
        'Destination: ' + dest   + '\n' +
        'Notes: '       + notes  + '\n' +
        'Referred by: ' + refer
      );
      var mailto = 'mailto:Shawn@restassuredmoving.net?subject=' + subject + '&body=' + body;

      /* Show success message */
      var box = $('#form-success');
      if (box) {
        box.innerHTML = '<strong>Thanks, ' + esc(name) + '!</strong> Your quote request is ready. ' +
          'If your email client didn\'t open automatically, <a href="' + mailto + '" style="color:var(--emerald-700);text-decoration:underline;">click here to send it</a>, ' +
          'or call us at <strong>(971) 302-0120</strong>.';
        box.classList.add('visible');
        box.setAttribute('tabindex', '-1');
        box.focus();
      }
      window.location.href = mailto;
      quoteForm.reset();
    });

    /* Init first step */
    showStep(0);
  }

  /* ── Simple contact form (contact.html) ─────────────── */
  var contactForm = $('#contact-form');
  if (contactForm) {
    on(contactForm, 'submit', function (e) {
      e.preventDefault();
      var d    = new FormData(contactForm);
      var name = d.get('name') || '';
      var subj = encodeURIComponent('Website Inquiry from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nPhone: ' + (d.get('phone') || '') + '\nEmail: ' + (d.get('email') || '') + '\nMessage:\n' + (d.get('message') || ''));
      window.location.href = 'mailto:Shawn@restassuredmoving.net?subject=' + subj + '&body=' + body;
      var box = $('#contact-success');
      if (box) { box.classList.add('visible'); }
    });
  }

  /* ── Smooth-scroll anchor links ──────────────────────── */
  $$('a[href^="#"]').forEach(function (a) {
    on(a, 'click', function (e) {
      var id   = a.getAttribute('href');
      var dest = $(id);
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
        var el    = entry.target;
        var end   = parseInt(el.dataset.count, 10);
        var dur   = 1200;
        var step  = 16;
        var inc   = end / (dur / step);
        var cur   = 0;
        var timer = setInterval(function () {
          cur = Math.min(cur + inc, end);
          el.textContent = Math.round(cur) + (el.dataset.suffix || '');
          if (cur >= end) clearInterval(timer);
        }, step);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    statEls.forEach(function (el) { io.observe(el); });
  }

})();
