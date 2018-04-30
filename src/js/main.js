$(document).ready(function() {

  $("#dishes__slide-trigger").click(function() {
    $("#dishes__slide-info").toggle(600);
    $(this).toggleClass("active");
    return false;
  });

  //slider1
  $("#dishes__slide-item").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: "#dishes__slider",
    arrows: false,
    focusOnSelect: true
  });
  $("#dishes__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: "#dishes__slide-item",
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 1000,
    nextArrow: '<button type="button" class="slick-next2"> <i class= "fas fa-chevron-right" ></i> </button>',
    prevArrow: '<button type="button" class="slick-prev2"> <i class= "fas fa-chevron-left" ></i> </button>',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
    {
      breakpoint: 697,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 475,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
  });

  //slider2
  $slideShow = $('#breakfast__slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    touchMove: true,
    cssEase: 'linear'
  });
  $('.breakfast__slide-item').click(function() {
    $slideShow.slick('slickNext');
  });

  // open modal
  $(".btn--show-modal").click(function() {
    $('#modal').addClass('modal--show');
    $('body').addClass('body-hidden');
  });

  // close modal
  $('.modal__btn--close, .modal__btn--cancel').click(function() {
    $('#modal').removeClass('modal--show');
    $('body').removeClass('body-hidden');
  });

  // close modal by clicking outside of modal content
  $(document).click(function (event) {
    if (!$(event.target).closest(".modal__wrapper, .btn--show-modal").length) {
      $("#modal").removeClass("modal--show");
      $('body').removeClass('body-hidden');
    }
  });

  // add active class to clicked nav item
  $(".header__nav-main a").click(function(event) {
    event.preventDefault();
    $(".header__nav-main a").removeClass('active');
    $(this).addClass('active');
  });

  //sticky-header
  $(window).scroll(function() {
    const HEADERMENU = $(".header");
    let headerHeight = HEADERMENU.height();
    let scrollTop = $(window).scrollTop();
    if (scrollTop > headerHeight) {
      HEADERMENU.addClass("header--sticky");
    } else {
      HEADERMENU.removeClass("header--sticky");
    }
  });

  // footer-logo__page-up
  $(".footer-menu__logo a").click(function(e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 900);
  });

  // Slow scroll from #a to current section
  $(".mainscreen__skroll-btn a, .mainscreen-contact__skroll-btn a").click(function(event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeightMenu = $(".header").height();

    let scrollTop = top - headerHeightMenu;
    $("body, html").animate({ scrollTop }, 900 );
  });

  // show media-header navigation
  $('.header__nav-btn').click(function() {
    $('.header__nav-main').toggleClass('header__nav-main--show');
    $(this).toggleClass('is-active');
  });

});