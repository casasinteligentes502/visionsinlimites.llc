(() => {
  document.body.classList.add('js-ready');
  const header = document.getElementById('encabezado');
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('menu-principal');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive:true});
  const closeMenu = () => {nav?.classList.remove('open'); menu?.setAttribute('aria-expanded','false'); menu?.setAttribute('aria-label','Abrir menú');};
  menu?.addEventListener('click', () => { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => { if (!nav?.contains(e.target) && !menu?.contains(e.target)) closeMenu(); });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)} }), {rootMargin:'0px 0px -35px 0px',threshold:0.08});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));}
  const year=document.getElementById('year'); if(year)year.textContent=String(new Date().getFullYear());
  const quote = document.getElementById('quote-form');
  quote?.addEventListener('submit', e => {
    e.preventDefault();
    if (!quote.reportValidity()) return;
    const name=document.getElementById('client-name').value.trim();
    const service=document.getElementById('service-type').value.trim();
    const details=document.getElementById('project-details').value.trim();
    if(!name || !service || !details)return;
    const message=`Hola, deseo cotizar un proyecto con TACSA Empresarial.\n\nNombre / empresa: ${name}\nServicio: ${service}\nDescripción: ${details}`;
    const href='https://wa.me/50254609989?text='+encodeURIComponent(message);
    window.location.assign(href);
  });
})();
