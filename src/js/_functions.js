// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from "./functions/check_client_width";

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Подключение свайпера
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade]);
const swiper = new Swiper('.mySwiper', {

    slidesPerView: 'auto',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span><div class='swiper-line'></div>";
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//AOS
import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// функция блокировки и разблокировки скролла
// import { disable_scroll, enable_scroll } from "./functions/scroll";
// disable_scroll();
// enable_scroll();

// добавление маски на телефон
// import phone_mask from "./functions/phone_mask";
// phone_mask();

// функция для добавления ограничения символов
// import character_restriction from "./functions/character_restriction";
// добавлять атрибуты на поля
// data-ru-field - русские символы
// data-num-field - цифры
// data-eng-field - английские символы
// data-email-field - ограничение символов для почты
// data-allowed-field - создано для каких-то резиновых ограничений, можно менять