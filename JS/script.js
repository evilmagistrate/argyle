

$(document).ready(function(){

    $('nav a span').hide();
    $('#portfolio_link > span').hide().fadeIn('slow');
    $('img').css('opacity',0);


    $(window).load(function() {
        $('img').animate({'opacity':1},800);
    });

//toggle current nav item


    $('nav a').on('click', function () {

        event.preventDefault();

        $(this).children('span').hide().fadeIn('slow');
        $(this).siblings().children('span').hide();

        function navLoader(page) {
            location.href = page;
        }

        if ($(this).attr('id') == 'portfolio_link') {

            navLoader ('index.html');
        }

        if ($(this).attr('id') == 'contact_link') {

            var spotlight = $('#spotlight');

            $('#contact_link > span').show();
            $('#portfolio_gallery').remove();
            spotlight.load('contact.html #contactWrapper').hide().fadeIn('slow');
        }

    });

//return to top


    $('#top_button').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });



//inserting active item into spotlight

    $('.showcard').click(function() {
        event.preventDefault();

        var showcardID = $(this).attr('id').replace('card-', '');
        var spotlight =  $('#spotlight');
        console.log(showcardID);

        spotlight.children().remove();
        spotlight.load('gallery.html #' + showcardID).hide().fadeIn('slow');

        $(this).addClass('featuredShowcard');
        $(this).siblings().removeClass('featuredShowcard');

        $('html, body').animate({ scrollTop: 0 }, 'fast');

    });


//after ajax is complete


    $(document).ajaxComplete(function () {


//inserting active thumnbail into feature


        $('#spotlight').on('click', '.emBiggen', inukChuk);

        function inukChuk(e) {

            e.preventDefault();

            $(this).addClass('thumbFeature');
            $(this).siblings().removeClass('thumbFeature');

            var imgSrc = $(this).children().attr('src').replace('-th', '');
            var imgAlt = $(this).children().attr('alt');

            $('.feature > img').attr({
                src: imgSrc,
                alt: imgAlt
            });
        }


//previous and next buttons for image sldeshow


        $('.imageNext').on('click', getNext);
        $('.imagePrevious').on('click', getPrev);


//keydown left and right


        $(document).keydown(function(e){
            if (e.keyCode == 37) {
                getPrev();
            }
        });

        $(document).keydown(function(e){
            if (e.keyCode == 39) {
                getNext();
            }
        });


//mobile swipe left and right


        $('.feature').on('swipeleft',function(){
            getNext()
        });

        $('.feature').on('swiperight',function(){
            getPrev()
        });

        function getNext() {

            var nextNew = $('.thumbFeature').next();

            if(nextNew.length == 0) {
                nextNew = $('.emBiggen').first();
            }

            var nextNewURL = nextNew.children().attr('src').replace('-th','');
            var imgAlt = nextNew.children().attr('alt');


            $('.feature > img').attr({
                src: nextNewURL,
                alt: imgAlt
            });

            $(nextNew).addClass('thumbFeature');
            $(nextNew).siblings().removeClass('thumbFeature');

        }

        function getPrev() {

            var nextPrev = $('.thumbFeature').prev();

            if(nextPrev.length == 0) {
                nextPrev = $('.emBiggen').last();
            }

            var nextPrevURL = nextPrev.children().attr('src').replace('-th','');
            var imgAlt = nextPrev.children().attr('alt');


            $('.feature > img').attr({
                src: nextPrevURL,
                alt: imgAlt
            });

            $(nextPrev).addClass('thumbFeature');
            $(nextPrev).siblings().removeClass('thumbFeature');

        }


//previous and next buttons for projects


        $('.projectNext').on('click', getNextProject);
        $('.projectPrevious').on('click', getPrevProject);

        function getNextProject(e) {

            e.preventDefault();

            var nextNew = $('.featuredShowcard').next();

            if(nextNew.length == 0) {
                nextNew = $('.showcard').first();
            }

            var showcardID = $(nextNew).attr('id').replace('card-', '');
            var spotlight =  $('#spotlight');

            spotlight.children().remove();
            spotlight.load('gallery.html #' + showcardID).hide().fadeIn('slow');

            $(nextNew).addClass('featuredShowcard');
            $(nextNew).siblings().removeClass('featuredShowcard');

            $('html, body').animate({ scrollTop: 0 }, 'fast');

        }

        function getPrevProject(e) {

            e.preventDefault();

            var nextPrev = $('.featuredShowcard').prev();

            if(nextPrev.length == 0) {
                nextPrev = $('.showcard').last();
            }

            var showcardID = $(nextPrev).attr('id').replace('card-', '');
            var spotlight =  $('#spotlight');

            spotlight.children().remove();
            spotlight.load('gallery.html #' + showcardID).hide().fadeIn('slow');

            $(nextPrev).addClass('featuredShowcard');
            $(nextPrev).siblings().removeClass('featuredShowcard');

            $('html, body').animate({ scrollTop: 0 }, 'fast');

        }


//shroud


        var first = "qwerty";
        var last = "ralph";
        var hostname = "gmail.com";
        var linktext = first + "&#46;" + last + "&#64;" + hostname;

        $('#contactMe').append(linktext);
        //$('#contactMe').append("<a href='" + "mail" + "to&#58;" + first + "&#46;" + last + "[at]" + hostname + "'>" + linktext + "</a>");

    });

    $(document).ajaxError(function() {
        $( "#spotlight" ).append( "<h2>An unexpected error occured and the content was not loaded, sorry about that. Please try again!</h2>" );
    });

});