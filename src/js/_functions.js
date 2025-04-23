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
initMap();

async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    // Инициализируем карту с центром в России
    const map = new YMap(
        document.getElementById('map'), {
            location: {
                center: [60.597465, 56.838011], // Центр России
                zoom: 5
            },
            mode: 'vector',
            behaviors: [] // полное отключение
        }
    );

    // Добавляем слои
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    // Создаем боковое меню
    const sidebar = document.createElement('div');
    sidebar.id = 'map-sidebar';

    document.getElementById('map').appendChild(sidebar);

    // Координаты городов и их описания
    const cities = [{
            name: "Москва",
            img: "img/city3.jpg",
            coords: [37.6176, 55.7558],
            adress: "ул. Ленинская Слобода, 26, Москва",
            phone: "+7(999) 999 99-99"
        },
        {
            name: "Санкт-Петербург",
            img: "img/city4.jpg",
            coords: [30.3351, 59.9343],
            adress: "Столярный пер., 13, Санкт-Петербург",
            phone: "+7(999) 999 99-99"
        },
        {
            name: "Омск",
            img: "img/city2.jpg",
            coords: [73.3686, 54.9914],
            adress: "ул. Гусарова, 51, Омск",
            phone: "+7(999) 999 99-99"
        },
        {
            name: "Новосибирск",
            img: "img/city6.jpg",
            coords: [82.9204, 55.0302],
            adress: "Новосибирск, улица Кирова",
            phone: "+7(999) 999 99-99"
        },
        {
            name: "Тюмень",
            img: "img/city1.jpg",
            coords: [65.5343, 57.1530],
            adress: "ул. Николая Машарова, 2, Тюмень",
            phone: "+7(999) 999 99-99"
        },
        {
            name: "Казань",
            img: "img/city5.jpg",
            coords: [49.1221, 55.7887],
            adress: "Волгоградская ул., 8, корп. 2, Казань",
            phone: "+7(999) 999 99-99"
        }
    ];

    // Функция создания метки с изображением
    function createImageMarker(coords, cityData) {
        const element = document.createElement('div');
        element.className = 'city-marker';
        element.style.cursor = 'pointer';

        const img = document.createElement('img');
        img.src = 'img/marker.svg';
        img.alt = cityData.name;


        element.appendChild(img);

        // Обработчик клика
        element.addEventListener('click', (e) => {
            e.stopPropagation();
            showSidebar(cityData);
        });

        return new YMapMarker({
                coordinates: coords,
                title: cityData.name
            },
            element
        );
    }

    // Функция показа бокового меню
    function showSidebar(cityData) {
        sidebar.innerHTML = `
        <img class="img-sidebar" src="${cityData.img}">
            <h2>${cityData.name}</h2>
            <a href="tel:${cityData.phone}">${cityData.phone}</a>
            <p>${cityData.adress}</p>
            <button id="close-sidebar">Закрыть</button>
        `;

        sidebar.style.right = '15px';

        document.getElementById('close-sidebar').addEventListener('click', () => {
            sidebar.style.right = '-450px';
        });
    }

    // Закрытие меню при клике на карту
    map.container.addEventListener('click', () => {
        sidebar.style.right = '-450px';
    });

    // Добавляем метки для каждого города
    cities.forEach(city => {
        const marker = createImageMarker(city.coords, city);
        map.addChild(marker);
    });
}

// const container = document.querySelector(".page__body");
// const header = document.querySelector(".header");
// console.log(container)
// console.log(header)
// window.addEventListener("scroll", (event) => {
//     console.log(container.scrollTop)

//     if (container.scrollTop > 150) {
//         header.classList.add('active');
//     } else {
//         header.classList.remove('active');
//     }
// });

window.addEventListener('scroll', function() {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});