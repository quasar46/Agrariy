$(document).ready(function () {
    $('.hero__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    })

    $('.news-inner__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    })

    $('.partners-inner__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    })

    $('.header__burger').on('click', function () {
        $('.aside').toggleClass('active');
    })

    $(function () {
        $('.phone-input').mask("+7(999) 999-99-99");
    })
})