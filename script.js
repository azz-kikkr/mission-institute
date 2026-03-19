/* ============================================================
   MISSION INSTITUTE OF TECHNOLOGY
   Script — scroll reveals, nav, mobile menu
   ============================================================ */

(function () {
  'use strict';

  // ---- NAV SCROLL STATE ----
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY;
    if (y > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- MOBILE MENU ----
  const toggle = document.querySelector('.nav-mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- SCROLL REVEAL ----
  var reveals = document.querySelectorAll('.anim-reveal');

  function showAll() {
    reveals.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: if anything is still hidden after 4s, show it
    setTimeout(showAll, 4000);
  } else {
    showAll();
  }

  // ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
})();
