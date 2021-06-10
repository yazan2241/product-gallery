/*global $, window*/
$(function () {
    "use strict";
    
    /*Start Navbar*/
    $(".nav-link, .log").hover(function () {
        $(this).css({color: "gold"});
    }, function () {
          
        $(this).css({color: "inherit"});
    });
    /*End Navbar*/
    
   /* start login-popup*/
    $('.log').click(function () {
        $('.popup').fadeIn();
    });
    $('.popup').click(function () {
        $(this).fadeOut();
    });
    $('.popup .inner-popup').click(function (e) {
        e.stopPropagation();
    });
    $(window.document).keydown(function (e) {
        if (e.keyCode === 27) { // escape button key-code
            $('.popup').fadeOut();
        }
    });
    $('.popup .inner-popup .close-popup i').click(function (e) {
        e.preventDefault();
        $(this).parents('.popup').fadeOut();
    });
   /* end login-popup*/
    
    /*Start Skill*/
    $(".skill .parag button").click(function () {
        $(".skill .parag p span").css({ color: "red"});
        
        $(".skill .parag p span").html("we will transfer your idea to a digital dream and make your wish come true");
        
    });
    /*End Skill*/
    
    /* Start Our Projects*/
    const countdown = document.querySelector('.countdown');

    // Set Launch Date (ms)
    const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

    // Update every second  
    const intvl = setInterval(() => {
        // Get todays date and time (ms)
        const now = new Date().getTime();

        // Distance from now and the launch date (ms)
        const distance = launchDate - now;

        // Time calculation
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display result
        countdown.innerHTML = `<div>${days}<span>Days</span></div><div>${hours}<span>Hours</span></div>
                                <div>${mins}<span>Minutes</span></div><div>${seconds}<span>Seconds</span></div>`;

        // If launch date is reached
        if (distance < 0) {
            // Stop countdown
            clearInterval(intvl);
            // Style and output text
            countdown.style.color = '#17a2b8';
            countdown.innerHTML = 'Launched!';
        }
    }, 1000);
    /* End Our Projects */

    /*Start Up*/
    $(".up").click(function () {
        
      
        $("html, body").animate({scrollTop: "0"}, 3000);
    
    });
    /*End Up*/
        
    $(window).scroll(function () {
   
    //top button
        var sct = $(window).scrollTop();
        if (sct >= 1672) {
        
            $(".up").fadeIn(2000);
        } else {
        
            $(".up").fadeOut(1000);
        }
        
        // smozy scroll
        $('.scroll').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top) {
                $('nav li a').removeClass('selected');
                $('nav li a[data-scroll="' + '#' + $(this).attr('id') + '"]').addClass('selected');
            }
        });
    });

    // smozy scroll
    $('nav li a').click(function () {
        $(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top + 1
        }, 2000);
    });
    
    //nicescroll
    $("html").niceScroll({
        cursorcolor: "black",
        cursorwidth: "8px",
        cursorborder: "1px solid black",
        scrollspeed: "20"
    });
    
    //our loader
    $(window).on("load", function () {
        $('.loading-overlay .loader').fadeOut(2000, function () {
            $('body').css('overflow', 'auto');
            $(this).parent().fadeOut(3000, function () {
                $(this).remove();
            });
        });
    });
});

