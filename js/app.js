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

            if ($('.c-hamburger').hasClass('is-active')) {
                $('.c-hamburger').removeClass('is-active');
                $('.navbar').removeClass('open');
            }

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);

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
    var initHeight = $(window).height() + 56;

    $('#home').css({
        'height': initHeight
    });

    $(window).resize(function() {
        var currentHeight = $(window).height();

        var heightDifferece = currentHeight - initHeight;
        console.log(heightDifferece);

        if (heightDifferece > 56) {
            console.log("Current Height was greater by init height more than navbar")
            $('#home').css({
                'height': currentHeight + 56
            });
            initHeight = currentHeight;
        } else if (heightDifferece < -56) {
            console.log("Current Height was less by init height more than navbar")
            $('#home').css({
                'height': currentHeight + 56
            });
            initHeight = currentHeight;
        }
    });

    $(window).scroll(function() {

        var windowHeight = $(this).height();
        var windowWidth = $(this).width();
        var windowScroll = $(this).scrollTop();

        window.requestAnimationFrame(function() {
            if (windowScroll < windowWidth) {
                $('.name-holder').css({
                    'transform': 'translate(-' + windowScroll*2 + 'px, 0)'
                });

                $('.mike').css({
                    'transform': 'translate(' + windowScroll*2 + 'px, 0)'
                });
            }
        });

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

var projects = [{
    'id': 'project1',
    'attributes': {
        'name': 'First project',
        'date': 'May 2016'
    }
}, {
    'id': 'project2',
    'attributes': {
        'name': 'Second project',
        'date': 'May 2016'
    }
}];

function openDialog(param) {

    for (var key in projects) {
        if (projects.hasOwnProperty(key)) {
            if (projects[key].id === param.id) {
                console.log("We have a match");
                console.log(projects[key].attributes);
                vex.dialog.confirm({
                    message: 'Are you absolutely sure you want to destroy the alien planet?',
                    callback: function(value) {
                        return console.log(value ? 'Successfully destroyed the planet.' : 'Chicken.');
                    }
                });

            }
        }
    }
}
