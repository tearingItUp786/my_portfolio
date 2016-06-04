$(document).ready(function() {
    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();

        $('.name-holder').css({
            'transform': 'translate(-' + windowScroll * 2 + 'px, 0)'
        });

        $('.mike').css({
            'transform': 'translate(-' + windowScroll * 2 + 'px, 0)'
        });

    });
});
