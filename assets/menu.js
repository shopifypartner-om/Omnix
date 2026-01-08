document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');

  if(openBtn) {
    openBtn.addEventListener('click', () => drawer.classList.add('active'));
  }
  if(closeBtn) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
  }
});