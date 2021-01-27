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

  $('[data-fancybox]').fancybox();
});
