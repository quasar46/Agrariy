$(document).ready(function () {
  $(".hero__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  $(".news-index__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      }
    ]
  });

  $(".partners-inner__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $(".about__stats").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 361,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }]
  })

  $('#burger').on('click', function () {
    if (window.innerWidth > 360) {
      $('body').toggleClass('hidden');
      $(this).toggleClass('active');
      $('.main-menu').toggleClass('show');
    } else {
      $('body').toggleClass('hidden');
      $(this).toggleClass('active');
      $('.header__nav > ul').toggleClass('show');
    }
  })

  $(".aside").hover(
    function () {
      $(this).addClass("show")
    },
    function () {
      $(this).removeClass("show")
    }
  );

  $(function () {
    $(".phone-input").mask("+7(999) 999-99-99");
  });

  $(".search").on("click", function () {
    $(this).addClass("active");
  });
  // сварачиваем поиск по клику на пустое место
  $(document).mouseup(function (e) {
    if ($(".search").has(e.target).length === 0) {
      $(".search").removeClass("active");
    }
  });
  $("#buttonCall").on("click", function () {
    $(".modal").addClass("show");
    $(".modal__call").addClass("show");
  });
  $("#buttonLk").on("click", function () {
    $(".modal").addClass("show");
    $(".modal__call").addClass("show");
  });
  // закрываем модальное окно
  $(".cross").on("click", function () {
    $(".modal").removeClass("show");
  });

  if (window.innerWidth < 361) {
    $('.inner-block__header a').html('Все');
  }

  $('#footerNav').on('click', function () {
    $(this).toggleClass('active');
    $('.footer__nav nav').toggleClass('active');
  })

  // tabs
  $(function () {
    $('.tabs__header').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

  // отоброжание количества прикрепленных файлов
  let inputs = document.querySelectorAll('.input__file');
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
      else
        label.querySelector('.input__file-button-text').innerText = labelVal;
    });
  });

  //- инициализация fancybox
  $('[data-fancybox="video-gallery"]').fancybox({
    // Options will go here
  });

  $('.toggle').on('click', function () {
    $(this).next().toggle();
    $(this).toggleClass('active');
  })
});