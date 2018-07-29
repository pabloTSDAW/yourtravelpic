(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 40)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if (screen.width > 1024) {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
        $("#logo").attr("src", './img/logos/TravelpicLogoB.png');
        $("#logo2").attr("src", '../img/logos/TravelpicLogoB.png');
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $("#logo").attr("src", './img/logos/TravelpicLogoW_S.png');
        $("#logo2").attr("src", '../img/logos/TravelpicLogoW_S.png');
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  //Carousel Testimonials con swipe
  $("#testimonials").on("touchstart", function(event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
        $(this).carousel('next');
      } else if (Math.floor(xClick - xMove) < -5) {
        $(this).carousel('prev');
      }
    });
    $("#testimonials").on("touchend", function() {
      $(this).off("touchmove");
    });
  });


})(jQuery); // End of use strict

function bajar(lugar) {
  $('html,body').animate({
      scrollTop: $(lugar).offset().top
    },
    'slow');
}

$(document).ready(function() {
  if (screen.width < 1200) $("#logo").attr("src", '../img/logos/TravelpicLogoB.png');
})
