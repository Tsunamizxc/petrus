import { disable_scroll } from '../functions/scroll';
import { enable_scroll } from '../functions/scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const body = document?.querySelector('body'); 

  burger?.addEventListener('click', (e) => {
    e.preventDefault();
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    overlay?.classList.toggle('overlay--active');
    body?.classList.toggle('sroll--active');
    body
    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disable_scroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enable_scroll();
    }
  });

  overlay?.addEventListener('click', (e) => {
    e.preventDefault();
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    overlay?.classList.remove('overlay--active');
    menu.classList.remove('menu--active');
    enable_scroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enable_scroll();
    });
  });
})();
