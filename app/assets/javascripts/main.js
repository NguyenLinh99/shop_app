document.addEventListener("DOMContentLoaded", function(event) {
  (function($) {
    "use strict"

    // NAVIGATION
    var responsiveNav = $('#responsive-nav'),
      catToggle = $('#responsive-nav .category-nav .category-header'),
      catList = $('#responsive-nav .category-nav .category-list'),
      menuToggle = $('#responsive-nav .menu-nav .menu-header'),
      menuList = $('#responsive-nav .menu-nav .menu-list');


    catToggle.on('click', function() {
      menuList.removeClass('open');
      catList.toggleClass('open');
    });

    menuToggle.on('click', function() {
      catList.removeClass('open');
      menuList.toggleClass('open');
    });

    $(document).click(function(event) {
      if (!$(event.target).closest(responsiveNav).length) {
        if (responsiveNav.hasClass('open')) {
          responsiveNav.removeClass('open');
          $('#navigation').removeClass('shadow');
        } else {
          if ($(event.target).closest('.nav-toggle > button').length) {
            if (!menuList.hasClass('open') && !catList.hasClass('open')) {
              menuList.addClass('open');
            }
            $('#navigation').addClass('shadow');
            responsiveNav.addClass('open');
          }
        }
      }

    });

    $("#show-limit").on("change", function(){
      $(this).closest("form").trigger("submit");
    });

    // HOME SLICK
    $('#home-slick').slick({
      autoplay: true,
      infinite: true,
      speed: 300,
      arrows: true,
    });

    // PRODUCTS SLICK
    $('.slideshow').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      infinite: true,
      speed: 300,
      dots: true,
      arrows: false,
      responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });

    // PRODUCT DETAILS SLICK
    $('#product-main-view').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-view',
    });

    $('#product-view').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '#product-main-view',
    });

    // PRODUCT ZOOM
    $('#product-main-view .product-view').zoom();

    // PRICE SLIDER
    var slider = document.getElementById('price-slider');
    if (slider) {
      noUiSlider.create(slider, {
        start: [1, 999],
        connect: true,
        tooltips: [true, true],
        format: {
          to: function(value) {
            return value.toFixed(2) + '$';
          },
          from: function(value) {
            return value
          }
        },
        range: {
          'min': 1,
          'max': 999
        }
      });
    }

    $('#cart-opacity').click(function() {
      $('.popup').attr("style", "display:flex");
    });
    $('.close').click(function() {
      $('.popup').attr("style", "display:none");
    });

  })(jQuery);

});
