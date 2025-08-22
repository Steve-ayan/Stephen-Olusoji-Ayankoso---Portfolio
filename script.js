// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('active');
  menu.classList.toggle('active', open);
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Close menu when clicking a link (on mobile)
menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  })
);
