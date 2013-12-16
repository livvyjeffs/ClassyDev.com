jQuery(document).ready(function($) {

    $(window).stellar();
    var links = $(document).find('.navlink');
    slide = $('.slide');
    processbutton = $('.process_button');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    var slide_enter_time = 500;
    var slide_exit_time = 500;
    var slide_wait_time = 2000;
    var slide_cycle = slide_enter_time + slide_wait_time + slide_exit_time;

    slide.waypoint(function(event, direction) {

        dataslide = $(this).attr('data-slide');
        if (direction === 'down') {
            $('.navlink[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navlink[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    $('#slide3').waypoint(function(event, direction) {

        $.wait(2000, function() {
            $('.process_button[number=2]').selectbutton();
        });
        $.wait(4000, function() {
            $('.process_button[number=3]').selectbutton();
        });
        $.wait(6000, function() {
            $('.process_button[number=4]').selectbutton();
        });

    });

    mywindow.scroll(function() {
        if (mywindow.scrollTop() === 0) {
            $('.navlink [data-slide="1"]').addClass('active');
            $('.navlink [data-slide="2"]').removeClass('active');

        }
    });
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }


    links.click(function(e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });


    button.click(function(e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });


    processbutton.click(function(e) {
        e.preventDefault();
        $(this).selectbutton();
    });


    (function($) {
        $.fn.selectbutton = function() {
            processbutton.removeClass('selected');
            var copy;
            switch ($(this).attr('number')) {
                case '1':
                    $('.process_button[number="1"]').addClass('selected');
                    copy = 'We meet with you to understand your needs.';
                    break;
                case '2':
                    $('.process_button[number="2"]').addClass('selected');
                    copy = 'We present you with designs for a technical solution.';
                    break;
                case '3':
                    $('.process_button[number="3"]').addClass('selected');
                    copy = 'We code your website.';
                    break;
                case '4':
                    $('.process_button[number="4"]').addClass('selected');
                    copy = 'Then we maintain it.';
                    break;
            }
            $('.process_copy').html(copy);
        };
    })(jQuery);

    (function($) {
        $.fn.openslide = function(number) {
     
            var subtext = $('#slide1 h2');
            var image;
            var image_pos;

            console.log('slide ' + number);
            
            image = $('.slideshow[number="' + number + '"]');

            switch (number) {
                case 1:
                    subtext.text('Polish your web presence.');
                    break;
                case 2:
                    subtext.text('Access on-the-go.');
                    break;
                case 3:
                    subtext.text('Broadcast your brand.');
                    break;
            }

            

            if ($(window).width() < 1000) {
                image_pos = '20%';
            } else {
                image_pos = '-40%';
            }

            image.animate({right: image_pos, opacity: 1.0}, slide_enter_time).delay(slide_wait_time).animate({left: '-100%', opacity: 0}, slide_exit_time).wait().remove();
            subtext.animate({opacity: 1.0}, slide_enter_time).delay(slide_wait_time).animate({opacity: 0}, slide_exit_time).wait().text('');
            
            if(number < 3){
                $('#slide1 .container').append('<div class="slideshow" number="' + (number + 1) + '"></div>');
            } else{
                $('#slide1 .container').append('<div class="slideshow" number="1"></div>');
            }
            
        };
    })(jQuery);

    (function($) {
        $.fn.runslideshow = function() {
            $('#slide1').openslide(1);
            $.wait((slide_cycle), function() {
                $('#slide1').openslide(2);
            });
            $.wait((2 * slide_cycle), function() {
                $('#slide1').openslide(3);
            });
        };
    })(jQuery);

    function setSizes() {

        if (($(window).height() / $(window).width()) > 0.59) {
            $('#slide1').css({'background-size': 'auto 100%'});
        }

        var slideContainer = $('#slide1 .container');
        var availheight = $(window).height();
        slideContainer.css("height", (availheight - 250));
        slideContainer.css("max-height", 500);
        
        $('.service').height($('.service').width());

    }
    ;

    setSizes();
    mywindow.runslideshow();
    mywindow.repeat((3 * slide_cycle)).runslideshow();
    
    

});
