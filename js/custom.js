$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $('.header').addClass("sticky");
    } else {
        $('.header').removeClass("sticky");
    }
});

$(document).ready(function(){

   $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
         event.preventDefault();
         $('html, body').stop().animate({
            scrollTop: target.offset().top
         }, 500);
      }
   });

   $('.gallery-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true
  });

});