(function ($) {
    // Preloader
    $(window).on('load', function () {
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }
    });

    // Header on scroll
    $('.section').on('scroll', function () {
        if ($(this).scrollTop() != 0) {
            $('header').addClass('on-scroll');
        } else {
            $('header').removeClass('on-scroll');
        }
    });

    // Show/hide menu
    $('.menu-clickable').on('click', function () {
        if ($('html').hasClass('html__menu-show')) {
            $('html').removeClass('html__menu-show');
        } else {
            $('html').addClass('html__menu-show');
        }
    });

    // Hide menu after click nav
    $('.menu-main__item').on('click', function () {
        if ($('html').hasClass('html__menu-show')) {
            $('html').removeClass('html__menu-show');
        } else {
            $('html').addClass('html__menu-show');
        }
    });

    // Pagepiling
    if ($('#pagepiling').length) {
        $('#pagepiling').pagepiling({
            scrollingSpeed: 250,
            menu: '#menu, #menu-main',
            anchors: [
                'about',
                'skills',
                'education',
                'experience',
                'projects',
                'contact',
            ],
            loopTop: false,
            loopBottom: false,
            navigation: {
                position: 'right',
                tooltips: [
                    'about',
                    'skills',
                    'education',
                    'experience',
                    'projects',
                    'contact',
                ],
            },
            afterLoad: function (index, nextIndex, direction) {
                const root = document.documentElement;
                if (nextIndex == 5) {
                    root.style.setProperty('--super-dark', '#fff');
                    root.style.setProperty('--dark', '#fff');
                    root.style.setProperty('--medium', '#fff');
                    root.style.setProperty('--accent', '#fff');
                    root.style.setProperty('--light', '#333');
                } else {
                    root.style.setProperty('--super-dark', '#242424');
                    root.style.setProperty('--dark', '#333');
                    root.style.setProperty('--medium', '#787878');
                    root.style.setProperty('--accent', '#ffa64d');
                    root.style.setProperty('--light', '#fff');
                }
                $('header').removeClass('on-scroll');
            },
        });
    }

    // Owl carousel
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
        });
    });
})($);
