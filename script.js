(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  // Theme: default to dark, respect saved choice
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light') {
    root.setAttribute('data-theme', 'light');
  }

  themeToggle.addEventListener('click', function () {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
      root.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  });

  // Mobile nav
  navToggle.addEventListener('click', function () {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Footer year
  const yearEl = document.querySelector('.footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
