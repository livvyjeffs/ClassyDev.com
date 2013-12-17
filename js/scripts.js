jQuery(document).ready(function($) {

    $(window).stellar();
    var links = $(document).find('.navlink');
    slide = $('.slide');
    processbutton = $('.process_button');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    services = $('.service');
    
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
            $('.navlink[data-slide="1"]').addClass('active');
            $('.navlink[data-slide="2"]').removeClass('active');

        }
    });

    mywindow.scroll(function() {
        if (mywindow.scrollTop() + mywindow.height() === $(document).height()) {

            $('.navlink[data-slide="5"]').removeClass('active');
            $('.navlink[data-slide="6"]').addClass('active');
        }
    });
    
    function goToByScroll(dataslide) {
        
        var window_scroll = $(window).scrollTop();
        var goto_scroll = $('.slide[data-slide="' + dataslide + '"]').offset().top;

        if (window_scroll > goto_scroll) {
            htmlbody.animate({
                scrollTop: goto_scroll - 10
            }, 2000, 'easeInOutQuint');
        } else if (window_scroll < goto_scroll) {
            htmlbody.animate({
                scrollTop: goto_scroll + 10
            }, 2000, 'easeInOutQuint');
        }
        
        
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
    
    services.click(function(e) {
        e.preventDefault();
        $('.service.selected').removeClass("selected");
        $(this).addClass("selected");
        
        var copy = $('#services_copy h2');
        
        switch($(this).attr("number")) {
            case '1':
                copy.css("font-size", '');
                copy.css("line-height", '');
                copy.html('<span>Design</span><br></br>A well-designed website is like a friendly person. They\'re a pleasure to interact with! <br></br><br></br> We design responsive, mobile-friendly sites that draw customers in and make them smile.');
                break;
            case '2':
                copy.css("font-size", '1.2em');
                copy.css("line-height", '1.5em');
                copy.html('<span>Development</span><br></br>Clean, efficient, and readable. Making a beautiful site that works is only half the battle. <br></br> If your underlying code isn\'t up to industry standards then extension, modification, and maintenance become a headache! <br></br> This is why we take so much pride in the elegant quality of our code.');
                break;
            case '3':
                copy.css("font-size", '');
                copy.css("line-height", '');
                copy.html('<span>Graphics</span><br></br>Graphics are the key to a stellar first impression. <br></br>In addition to our in-house Photoshop fiend, ClassyDev maintains a network of talented graphic artists to supplement your impeccably styled website!');
                break;
            case '4':
                copy.css("font-size", '');
                copy.css("line-height", '');
                copy.html('<span>Hosting</span><br></br>No one likes the boring job of configuring and optimizing production servers - except for us! <br></br> We are happy to take care of all the dirty work and be the one-stop solution that your business needs.');
                break;
            case '5':
                copy.css("font-size", '');
                copy.css("line-height", '');
                copy.html('<span>Marketing</span><br></br>The future medium for organic brand-building is here. And it\'s name is social media. <br></br> Through our proprietary search engine optimization (SEO) and social media integration techniques we broadcast your brand for all the world to see.');
                break;
            case '6':
                copy.css("font-size", '1.2em');
                copy.css("line-height", '1.5em');
                copy.html('<span>Maintenance</span><br></br>Well before the dazzling days of high technology, reliability and trust were the cornerstones of good business. <br></br> Here at ClassyDev.com we believe that should never change. Therefore our websites include a full year of maintenance and support. <br></br> At the end of the day, we keep it classy.');
                break;
        }
        
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
                    copy = 'We present you with creative designs <br> for a technical solution.';
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
                image_pos = '-20%';
            } else {
                image_pos = '-40%';
            }

            image.animate({right: image_pos, opacity: 1.0}, slide_enter_time).delay(slide_wait_time).animate({left: '-100%', opacity: 0}, slide_exit_time).wait().remove();
                        
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
    
    window.onresize = function() {
        setSizes();
    };
    
});
