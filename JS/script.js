
$(document).ready(function(){

    $('nav a span').hide();
    $('#portfolio_link span').show();

    initlightSlider();
    console.log('got here');




//toggle current nav item

    $('nav a').on('click', function () {

        event.preventDefault();

        $(this).children('span').show();
        $(this).siblings().children('span').hide();

    });

//return to top


    $('#top_button').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });



//inserting active item into spotlight

    $('.showcard').click(function() {
        event.preventDefault();

        var showcardID = $(this).attr('id') ;
        console.log(showcardID);

        $('#imageWrapper').remove();
        $('#spotlight').load('gallery.html #' + showcardID).hide().fadeIn('slow');

//returns to top to view new content

        $('html, body').animate({ scrollTop: 0 }, 'fast');
        initlightSlider();
        console.log('got here');
    });

//lightslider

    function initlightSlider() {

        $(".lightSlider").lightSlider({
            item: 6,
            autowidth: false,
            slideMove: 1,
            slideMargin: 10,
            mode: "fade",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////

            speed: 400, //ms'
            auto: false,
            loop: true,
            slideEndAnimation: true,
            pause: 2000,

            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',
            verticalHeight: 500,
            vThumbWidth: 100,

            thumbItem: 10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',

            enableTouch: true,
            enableDrag: true,
            freeMove: true,
            swipeThreshold: 40,

            responsive: [],

            onBeforeStart: function (el) {
            },
            onSliderLoad: function (el) {
            },
            onBeforeSlide: function (el) {
            },
            onAfterSlide: function (el) {
            },
            onBeforeNextSlide: function (el) {
            },
            onBeforePrevSlide: function (el) {
            }

        });
    }

//darkens images on hover


    //$('.thumbnail')
    //    .mouseover(function() {
    //        $('.thumbnail').stop().fadeTo(400,.5);
    //        $(this).stop().fadeTo(0,1);
    //    })
    //    .mouseout(function() {
    //        $('.thumbnail').fadeTo(200, 1);
    //        });


});