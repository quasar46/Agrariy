ymaps.ready(init);
var myMap,
    myMap2,
    myPlacemark,
    myPlacemark2,
    myPlacemark3,
    myPlacemark4;

function init() {
    myMap = new ymaps.Map("map", {
        center: [51.746016, 36.186781],
        zoom: 16,
        behaviors: ['drag']
    });

    myMap2 = new ymaps.Map("map2", {
        center: [51.780175, 36.295252],
        zoom: 16,
        behaviors: ['drag2']
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/icons/baloon.png',
        // Размеры метки.
        iconImageSize: [45, 45],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {}, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/icons/baloon.png',
        // Размеры метки.
        iconImageSize: [45, 45],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    myPlacemark3 = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/icons/baloon.png',
        // Размеры метки.
        iconImageSize: [45, 45],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    myPlacemark4 = new ymaps.Placemark(myMap2.getCenter(), {}, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/icons/baloon.png',
        // Размеры метки.
        iconImageSize: [45, 45],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    if (window.matchMedia("(max-width: 991px)").matches) {
        myMap.behaviors
            .disable('drag')
            .enable('multiTouch');
        myMap2.behaviors
            .disable('drag2')
            .enable('multiTouch');
    };

    myMap.geoObjects.add(myPlacemark)
    myMap.geoObjects.add(myPlacemark2)
    myMap2.geoObjects.add(myPlacemark3)
    myMap2.geoObjects.add(myPlacemark4);
}