$(document).ready(function () {
  $('#carousel1').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },

      1024: {
        items: 4
      },

      1366: {
        items: 4
      }
    }
  });

  $('#carousel2').owlCarousel({
    dots: false,
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    responsive: {
      0: {
        items: 2
      },

      600: {
        items: 4
      },

      1024: {
        items: 4
      },

      1366: {
        items: 5
      }
    }
  });
  $(".faq-box-list > a").on("click", function () {
    console.log("hi")
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
    } else {
      $(".faq-box-list > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
$('.grid').isotope({
  itemSelector: '.grid-item',
  transitionDuration: '0.6s'
});
$('.filter-button-group').on('click', 'li', function () {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({
    filter: filterValue
  });
  $('.filter-button-group li').removeClass('active');
  $(this).addClass('active');
  setTimeout(function () {
    $('.grid').isotope('layout');
  }, 600);
});

var navItems = document.querySelectorAll(".header-nav-area .header-nav-menu-area ul>li a");
var windowPath = window.location.pathname;

navItems.forEach(function (navI) {
  if (navI.href.includes(windowPath)) {
    navI.style.color = "#ffc600";
  }
});


$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('.header-nav-area').addClass('fixed-header');
  } else {
    $('.header-nav-area').removeClass('fixed-header');
  }
});
