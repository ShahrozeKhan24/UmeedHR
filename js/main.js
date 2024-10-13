(function ($) {
    "use strict";

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true, // Loop through slides
        margin: 10, // Space between slides
        nav: true,  // Enable navigation arrows
        responsive: {
            0: {
                items: 1 // One slide for small screens
            },
            600: {
                items: 1 // One slide for mid-sized screens
            },
            1000: {
                items: 1 // One slide for large screens
            }
        }
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});
  
})(jQuery);