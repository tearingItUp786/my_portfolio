$(function() {
    var toggle = document.querySelector('.c-hamburger');
    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('.navbar').removeClass('open');
        } else {
            $(this).addClass('is-active');
            $('.navbar').addClass('open');
        }
    });

    $('.nav-item a').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                return false;
            }
        }

    });
});

function removeActiveClass() {
    $('.nav-item').each(function() {
        $(this).removeClass('active');
        $(this).children().removeClass('active');
    });
}

$(document).ready(function() {

    $('#home').css({
        'height': $(window).height() + 50
    });

    var oldHeight = $(window).height();
    $(window).resize(function() {
        var currentHeight = $(window).height();

        if (oldHeight != currentHeight) {
            $('#home').css({
                'height': $(window).height() + 50
            });
            oldHeight = currentHeight;
        }
    });

    $(window).scroll(function() {

        var windowHeight = $(this).height();
        var windowWidth = $(this).width();
        var windowScroll = $(this).scrollTop();

        if (windowScroll < windowWidth) {
            $('.name-holder').css({
                'transform': 'translate(-' + windowScroll + 'px, 0)'
            });

            $('.mike').css({
                'transform': 'translate(' + windowScroll + 'px, 0)'
            });
        }

        if (windowScroll > windowHeight - 50) {
            $('.navbar').addClass('active');
            $('.inner-logo').addClass('svg-light');
        } else {
            $('.navbar').removeClass('active');
            $('.inner-logo').removeClass('svg-light');
        }

        if (windowScroll < $('.about').offset().top) {
            removeActiveClass();
        }

        if ((windowScroll >= $('.about').offset().top - 20) && (windowScroll < $('.portfolio').offset().top - 20)) {
            removeActiveClass();
            $('.nav-item:nth-child(2) a').addClass('active');
        }

        if (windowScroll >= $('.portfolio').offset().top - 20) {
            console.log("in portfolio");
            removeActiveClass();
            $('.nav-item:nth-child(4) a').addClass('active');
        }

    });
});
