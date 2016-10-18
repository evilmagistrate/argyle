
$(document).ready(function(){

    $('nav a span').hide();
    $('#portfolio_link span').show();


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

        var showcardID = $(this).attr('id').replace('card-', '');
        console.log(showcardID);

        $('#imageWrapper').remove();
        $('#spotlight').load('gallery.html #' + showcardID).hide().fadeIn('slow');

        $('html, body').animate({ scrollTop: 0 }, 'fast');

    });

//inserting active item into spotlight

    $('.emBiggen').click(function() {
        event.preventDefault();

        $(this).addClass('thumbFeature');
        $(this).siblings().removeClass('thumbFeature');

        var imgSrc= $(this).children().attr('src').replace('-th','');

        $('#feature').children().attr('src', imgSrc);

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