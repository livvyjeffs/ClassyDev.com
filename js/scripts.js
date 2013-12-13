jQuery(document).ready(function($) {

    slideshow();

    $(window).stellar();
    var links = $(document).find('.navlink');
    slide = $('.slide');
    processbutton = $('.process_button');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

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

    function slideshow() {
        var slideContainer = $('#slide1 .container');
        var availheight = $(window).height();
        slideContainer.css("height", (availheight * 0.6));
    }
    ;

});
