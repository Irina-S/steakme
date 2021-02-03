$(document).ready(function () {

  // try{
  //       $('body').mCustomScrollbar({
  //         axis:"y",
  //         theme:"dark"
  //       });
  //     }catch(e){}

  function HeaderMargin() {
    var HeaderBlock = $('.header')
    var HeaderBlockHeight = $('.header').outerHeight()
    var HeaderHeight = $('.header').outerHeight()
    var Wrapper = $('.wrapper')
    if ($(this).scrollTop() > HeaderHeight){
      Wrapper.css('padding-top', HeaderBlockHeight);
      HeaderBlock.addClass('sticky');
    }
    else{
      Wrapper.css('padding-top', 0);
      HeaderBlock.removeClass('sticky');
    }
  }

  HeaderMargin();

  $(window).scroll(function() {
    HeaderMargin();
    $(".sticky").sticky({topSpacing:0});
  });

  // $(".sticky-wrapper").sticky({topSpacing:120});

  // FANCBOX
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

  // ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ, КАТАЛОГА, КОРЗИНЫ
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

  // КАТАЛОГ
  $(mobileCatalogBtn).click(function () {
    $(mobileCatalog).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // НАВИГАЦИЯ
  $(mobileMenuBtn).click(function () {
    $(mobileMenu).toggleClass('opened');
    $(document.body).toggleClass('dark').toggleClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // КОРЗИНА
  $(cartBtn).click(function (e) {
    e.preventDefault();
    $(cartAside).toggleClass('opened');
    $(document.body).toggleClass('dark').addClass('overflow-hid');

    if($(document.body).hasClass('dark')){
      $('body.dark').on('click', clickDarkBodyHandler);
    }
  });

  // КАТАЛОГ ЗАКРЫТИЕ
  $('.aside .close-btn').click(function(){
    $('.aside').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // НАВИГАЦИЯ ЗАКРЫТИЕ
  $('.main-navigation .close-btn').click(function(){
    $('.main-navigation').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  // КОРЗИНА ЗАКРЫТИЕ
  $('.cart .cart-header__close-btn').click(function(){
    $('.cart').removeClass('opened');
    $(document.body).removeClass('dark').removeClass('overflow-hid');
  });

  //СКРОЛЛ СТРАНИЦЫ И ТОВАРОВ В КОРЗИНЕ
  try{
    // $("body").niceScroll({
    //   cursorcolor:"#4D4238",
    //   cursorwidth:"8px",
    //   background:"#292929;",
    //   cursorborder:"none"
    // });

    $(".cart").niceScroll({
      cursorcolor:"#4D4238",
      cursorwidth:"8px",
      background:"#292929;",
      cursorborder:"none"
    });
  }catch(e){}

  // СТРАНИЦА ОФРМЛЕНИЯ ЗАКАЗА--------------------------------------------------------------------

  // СВЯЗЬ РАДИО-КНОПОК ДОСТАВКИ И ОПЛАТЫ
  function setPayment(){
    const deliveryType = $('input[name="shk_delivery"]:checked').attr('id');
    if (deliveryType=='delivery'){
        $('label[for="pay-1"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        
    }
    else if (deliveryType=='by-myself'){
        $('label[for="pay-1"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-2"]').css('display', 'none').closest('.field-group').removeClass('curr-pay');
        $('label[for="pay-4"]').css('display', 'block').closest('.field-group').addClass('curr-pay');
    }
    $('input[name="payment"]').prop('checked', false);
  }

  // setPayment();

  // РАДИОКНОПКИ ДОСТАВКА/САМОВЫВОЗ
  $('#shopOrderForm input[name="shk_delivery"]').on('click change', function(){
    // console.dir(this);
    const delivType = $(this).attr('id');
    if (delivType=='delivery'){
      $('.delivery-tab').addClass('checked');
      $('.bymslf-tab').removeClass('checked');
    }
    else if (delivType=='by-myself'){
      $('.delivery-tab').removeClass('checked');
      $('.bymslf-tab').addClass('checked');
    }
    setPayment();
  });

  // РАДИОКНОПКИ КАК МОЖНО СКОРЕЕ/К ВЫБРАННОМУ ВРЕМЕНИ
  $('#shopOrderForm input[name="time"]').on('click change', function(){
    const timeType = $(this).attr('id');
    console.log(timeType);
    if (timeType=='time-1'){
      $('.choose-time-tab').removeClass('checked');
    }
    else if (timeType=='time-2'){
      $('.choose-time-tab').addClass('checked');
    }
  });

  $('select').niceSelect();

  // ДОБАВЛЕНИЕ КЛАССОВ НЕ ПУСТОГО ПОЛЯ ДЛЯ ПСЕВДОПЛЭЙСХОЛДЕРОВ
  $('input[type=text], textarea').on('change', function(){
    if ($(this).val()!='')
      $(this).addClass('not-empty')
    else
      $(this).removeClass('not-empty');
  })

});
