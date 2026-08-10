// Rest Assured Moving LLC — site script
// Mobile nav toggle, dynamic footer year, and lightweight contact form handling.

document.addEventListener('DOMContentLoaded', function () {
  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a nav link is tapped (mobile)
    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Footer year ----
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Quote request form ----
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var data = new FormData(form);
      var name = data.get('name') || '';
      var email = data.get('email') || '';
      var phone = data.get('phone') || '';
      var moveDate = data.get('move_date') || '';
      var serviceType = data.get('service_type') || '';
      var details = data.get('details') || '';

      // Build a mailto fallback so the request reaches the inbox even
      // without a backend/form-processing service wired up yet.
      var subject = encodeURIComponent('Quote Request: ' + name + ' (' + serviceType + ')');
      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        'Preferred move date: ' + moveDate,
        'Service needed: ' + serviceType,
        '',
        'Details:',
        details
      ];
      var body = encodeURIComponent(bodyLines.join('\n'));
      var mailtoLink = 'mailto:quotes@restassuredmovingllc.com?subject=' + subject + '&body=' + body;

      var successBox = document.getElementById('form-success');
      if (successBox) {
        successBox.classList.add('visible');
        successBox.innerHTML =
          'Thanks, ' + escapeHtml(name) + ' — your request is ready to send. ' +
          '<a href="' + mailtoLink + '">Click here if your email client did not open</a>, ' +
          'or call us directly at <strong>(971) 302-0120</strong>.';
        successBox.setAttribute('tabindex', '-1');
        successBox.focus();
      }

      window.location.href = mailtoLink;
      form.reset();
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
