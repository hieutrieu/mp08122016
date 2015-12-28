(function ($) {
    $(document).ready(function () {
        $(window).bind('scroll', function () {
            var navHeight = 32;
            ($(window).scrollTop() > navHeight) ? $('#navbar-top-menu').addClass('navbar-fixed-top') : $('#navbar-top-menu').removeClass('navbar-fixed-top');
        });
        if(typeof $('#carousel') !== 'undefined') {
            $('#carousel').carouFredSel({
                prev: {
                    button: ".prev",
                    key: "left"
                },
                next: {
                    button: ".next",
                    key: "right"
                },
                mousewheel: false,
                swipe: {
                    onMouse: true,
                    onTouch: true
                },
                auto: true
            });
        }
    });
})(jQuery);

var marquee = $('p.marquee');
marquee.each(function() {
    var mar = $(this),indent = mar.width();
    mar.marquee = function() {
        indent--;
        mar.css('text-indent',indent);
        if (indent < -1 * mar.children('div.marquee-text').width()) {
            indent = mar.width();
        }
    };
    mar.data('interval',setInterval(mar.marquee,1000/60));
});