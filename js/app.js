$(document).ready(function() {
    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();

        $('.name-holder').css({
            'transform': 'translate(0px, ' + windowScroll/2 + '%)'
        });
    })
});
