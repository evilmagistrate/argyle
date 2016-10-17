
$(document).ready(function(){

    $('nav a span').hide();
    $('#portfolio_link span').show();
    initSlick();



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

    });


//slick carousel api

    function initSlick() {

        $('.slickCarousel').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
        });
        console.log('got here');

        //$('.featured').slick({
        //    slidesToShow: 1,
        //    slidesToScroll: 1,
        //    arrows: false,
        //    fade: true,
        //    asNavFor: '.slickCarousel'
        //});
        //
        //$('.slickCarousel').slick({
        //    slidesToShow: 3,
        //    slidesToScroll: 1,
        //    asNavFor: '.featured',
        //    dots: true,
        //    centerMode: true,
        //    focusOnSelect: true
        //});
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