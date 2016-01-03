(function ($) {
    $(document).ready(function () {
        $(window).bind('scroll', function () {
            var navHeight = 32;
            ($(window).scrollTop() > navHeight) ? $('#navbar-top-menu').addClass('navbar-fixed-top') : $('#navbar-top-menu').removeClass('navbar-fixed-top');
            $('#navbar-top-menu').css('display: block; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)');
        });
        if($('#carousel').length > 0) {
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
        handleSearch();
        autoPlayYouTubeModal();
        handleGoogleMap();
    });
})(jQuery);
var handleSearch = function() {
    $('.search-btn').click(function () {
        if($('.search-btn').hasClass('show-search-icon')){
            if ($(window).width()>767) {
                $('.search-box').fadeOut(300);
            } else {
                $('.search-box').fadeOut(0);
            }
            $('.search-btn').removeClass('show-search-icon');
        } else {
            if ($(window).width()>767) {
                $('.search-box').fadeIn(300);
            } else {
                $('.search-box').fadeIn(0);
            }
            $('.search-btn').addClass('show-search-icon');
        }
    });

    // close search box on body click
    if($('.search-btn').size() != 0) {
        $('.search-box, .search-btn').on('click', function(e){
            e.stopPropagation();
        });

        $('body').on('click', function() {
            if ($('.search-btn').hasClass('show-search-icon')) {
                $('.search-btn').removeClass("show-search-icon");
                $('.search-box').fadeOut(300);
            }
        });
    }
}
var handleGoogleMap = function() {
    if($('#google_map').length > 0) {
        var myMarkers = {
            "markers": [{
                "latitude": "21.02148",		// latitude
                "longitude": "105.860529",		// longitude
                "icon"     : "../img/marker_1.png"	// Pin icon
            }]
        };

        $("#google_map").mapmarker({
            zoom: 16,							// Zoom
            center: "21.02148,105.860529",		// Center of map
            type: "ROADMAP",					// Map Type
            controls: "HORIZONTAL_BAR",			// Controls style
            dragging: true,							// Allow dragging?
            mousewheel: true,	// Allow zooming with mousewheel
            markers: myMarkers, styling: 0,							// Bool - do you want to style the map?
            featureType: "all",
            visibility: "on",
            elementType: "geometry",
            hue: "#00AAFF",
            saturation: -100,
            lightness: 0,
            gamma: 1,
            navigation_control: 0
            /*
             To play with the map colors and styles you can try this tool right here http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
             */
        });
    }
}
function autoPlayYouTubeModal(){
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function() {
        var theModal = $(this).data( "target" ),
            videoSRC = $(this).attr( "data-theVideo" ),
            videoTitle = $(this).data( "title" ),
            videoSRCauto = videoSRC+"?autoplay=1" ;
        $(theModal).find('.modal-header>.modal-title').html(videoTitle);
        $(theModal+' iframe').attr('src', videoSRCauto);
        $(theModal+' button.close').click(function () {
            $(theModal+' iframe').attr('src', videoSRC);
        });
        $(theModal).on('hidden.bs.modal', function () {
            $(theModal+' iframe').removeAttr('src');
        })
    });
}

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