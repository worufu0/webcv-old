(function ($) {
    // Preloader
    $(window).on('load', function () {
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
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
        });
    }
})($);
