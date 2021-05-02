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
    $('.header__hamburger-a').on('click', function () {
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
            scrollingSpeed: 280,
            menu: '#menu, #menu-main',
            anchors: [
                'About',
                'Skills',
                'Education',
                'Experience',
                'Projects',
                'Contact',
            ],
            loopTop: false,
            loopBottom: false,
            navigation: {
                position: 'right',
                tooltips: [
                    'About',
                    'Skills',
                    'Education',
                    'Experience',
                    'Projects',
                    'Contact',
                ],
            },
            afterLoad: function (index, nextIndex, direction) {
                const root = document.documentElement;
                if (nextIndex == 5) {
                    root.style.setProperty('--black', '#fff');
                    root.style.setProperty('--blackish', '#fff');
                    root.style.setProperty('--grey', '#fff');
                    root.style.setProperty('--accent', '#fff');
                    root.style.setProperty('--white', '#333');
                } else {
                    root.style.setProperty('--black', '#242424');
                    root.style.setProperty('--blackish', '#333');
                    root.style.setProperty('--grey', '#787878');
                    root.style.setProperty('--accent', '#ffa64d');
                    root.style.setProperty('--white', '#fff');
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
            margin: 3,
        });
    });
})($);
