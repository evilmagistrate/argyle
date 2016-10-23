
$(document).ready(function(){

    $('nav a span').hide();
    $('#portfolio_link > span').show();

//toggle current nav item

    $('nav a').on('click', function () {

        event.preventDefault();

        $(this).children('span').show();
        $(this).siblings().children('span').hide();

        function navLoader(page) {
            location.href = page;
        }

        if ($(this).attr('id') == 'portfolio_link') {

            navLoader ('index.html');
        }

        if ($(this).attr('id') == 'contact_link') {

            var wrapper = $('#wrapper');

            $('#contact_link > span').show();
            $('#spotlight').remove();
            $('#portfolio_gallery').remove();
            wrapper.load('contact.html #contactWrapper').hide().fadeIn('slow');
        }

    });

//return to top


    $('#top_button').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
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


    $(document).ajaxComplete(function () {

//inserting active thumnbail into feature

        $('#spotlight').on('click', '.emBiggen', inukChuk);

        function inukChuk(e) {

            e.preventDefault();

            $(this).addClass('thumbFeature');
            $(this).siblings().removeClass('thumbFeature');

            var imgSrc = $(this).children().attr('src').replace('-th', '');

            $('.feature').children().attr('src', imgSrc);
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

            $('.feature').children().attr('src', nextNewURL);


            $(nextNew).addClass('thumbFeature');
            $(nextNew).siblings().removeClass('thumbFeature');

        }

        function getPrev() {

            var nextPrev = $('.thumbFeature').prev();

            if(nextPrev.length == 0) {
                nextPrev = $('.emBiggen').last();
            }

            var nextPrevURL = nextPrev.children().attr('src').replace('-th','');

            $('.feature').children().attr('src', nextPrevURL);


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


    });

});