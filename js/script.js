$(document).ready(function () {
  function HeaderMargin() {
    var HeaderBlock = $('.header')
    var HeaderBlockHeight = $('.header').outerHeight()
    var HeaderHeight = $('.header').outerHeight()
    var Body = $('body')
    if ($(this).scrollTop() > HeaderHeight){
      Body.css('padding-top', HeaderBlockHeight);
      HeaderBlock.addClass('sticky');
    }
    else{
      Body.css('padding-top', 0);
      HeaderBlock.removeClass('sticky');
    }
  }

  /*HeaderMargin();

  $(window).scroll(function() {
    HeaderMargin();
  });*/

  try{
    $('[data-fancybox]').fancybox({});
  } catch(e){}

  if($('#main-slider').length > 0){

    $('.main-slider__curr-num').html('1');
    $('.main-slider__all').html($('#main-slider .item').length);

    $('#main-slider').slick({
      slidesToShow: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite : true,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      swipe: true,
      touchMove: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      pauseOnHover: false,
      variableWidth: false,
      centerMode: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            variableWidth: false
          }
        }
      ]
    });
  }

  //прилепили футер к низу
  if ($(document).height() <= $(window).height()) {
    $("footer.footer").addClass("footer-fixed-bottom");
  }

  // $('[data-fancybox]').fancybox();

  // ОТКРЫТИЕ МЕНЮ
  // $('.main-navigation-btn').on('click', function(){
  //   $('.aside').addClass('opened');
  //   $('body').addClass('overflow-hid').addClass('dark');
  //   $('body::after');
  // })

  const mobileCatalog = $('.aside');
  const mobileMenu = $('.main-navigation');
  const cartBtn = $('.header .header-cart');

  const mobileCatalogBtn = $('.mobile-catalog-btn');
  const mobileMenuBtn = $('.main-navigation-btn');
  const cartAside = $('.cart');

  function clickDarkBodyHandler(event){
    const target = $(event.target);
    if(target.is('body.dark')){
      $('body.dark').off('click', clickDarkBodyHandler);
      $('.opened').removeClass('opened');
      $(document.body).removeClass('dark').removeClass('overflow-hid');
    }
  }

  $(mobileCatalogBtn).click(function () {
    $(mobileCatalog).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  $(mobileMenuBtn).click(function () {
    $(mobileMenu).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  $(cartBtn).click(function (e) {
    e.preventDefault();
    console.log('open');
    $(cartAside).toggleClass('opened');
    $(document.body).toggleClass('dark').addClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  $('.aside .close-btn').click(function(){
    $('.aside').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  $('.main-navigation .close-btn').click(function(){
    $('.main-navigation').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  $('.cart .cart-header__close-btn').click(function(){
      console.log('close');
    $('.cart').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

});
