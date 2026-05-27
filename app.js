const header = document.getElementById('header');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const glow = document.getElementById('cursorGlow');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
menu?.addEventListener('click', () => nav.classList.toggle('open'));

document.addEventListener('mousemove', e => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
