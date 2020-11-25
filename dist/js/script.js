$(document).ready(function () {

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('.reviews__items').slick({
      centerMode: true,
      //centerPadding: '45px',
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/prev.png"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="icons/carousel/next.png"></button>',
      
    });
   
    
   
});