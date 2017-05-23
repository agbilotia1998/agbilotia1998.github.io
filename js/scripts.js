


(function ($) {
    'use strict';

    jQuery(document).ready(function () {


        /* Preloader */

        $(window).on('load', function () {
            $('body').addClass('loaded');
        });


        /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /* Scroll Naviagation Background Change with Sticky Navigation */

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });


        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

        });


        /* Scroll To Top */

        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });


        $('.scroll-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });


        /* Typed.js */

        $(window).load(function () {
            $(".typing").typed({
                strings: ["I am a full stack developer.", "I Live in Allahabad."], /* You can change the home section typing text from
                 here and do not use "&" use "and" */
                typeSpeed: 50
            });
        });


        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });


        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',

            gallery: {enabled: true},
            zoom: {
                enabled: true,
                duration: 500

            },

            image: {
                markup: '<div class="mfp-figure portfolio-pop-up">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="mfp-bottom-bar portfolio_title">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>',

                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }


        });


        $('.statistics').appear(function () {
            var counter = $(this).find('.statistics-count');
            var toCount = counter.data('count');

            $(counter).countTo({
                from: 0,
                to: toCount,
                speed: 5000,
                refreshInterval: 50
            })
        });


    });

})(jQuery);