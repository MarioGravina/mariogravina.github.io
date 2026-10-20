(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-navigation');
  if (menu && nav) {
    const close = () => {nav.classList.remove('is-open'); menu.setAttribute('aria-expanded','false');};
    menu.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {if (e.key === 'Escape') close();});
    document.addEventListener('click', e => {if (!nav.contains(e.target) && !menu.contains(e.target)) close();});
  }
  document.querySelectorAll('[data-year]').forEach(el => {el.textContent = new Date().getFullYear();});
})();
