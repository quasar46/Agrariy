$(document).ready(function () {
  $(".hero__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  $(".news-inner__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  });

  $(".partners-inner__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  });

  // $(".header__burger").on("click", function () {
  //   $(".aside").toggleClass("active");
  // });
  $('#burger').on('click', function() {
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('show');
  })

  $(".aside").hover(
    function() {
      $(this).addClass("show")
    },
    function() {
      $(this).removeClass("show")
    }
  );

  $(function () {
    $(".phone-input").mask("+7(999) 999-99-99");
  });

  $(".hero__search").on("click", function () {
    $(this).addClass("active");
  });
  // сварачиваем поиск по клику на пустое место
  $(document).mouseup(function (e) {
    if ($(".hero__search").has(e.target).length === 0) {
      $(".hero__search").removeClass("active");
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
});
