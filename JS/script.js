
$(document).ready(function(){


//return to top


    $('#top_button').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

//slick carousel api


//slick carousel api


    $(' TODO ').slick({
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


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