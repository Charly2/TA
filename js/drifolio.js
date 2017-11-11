// NOTE: Don't use this token, replace it with your own client access token.

//Ceate a application tocke from https://dribbble.com/account/applications



//Replace srizon with your dribbble username



//========================
//Follow button
//========================




//========================
//PRELOADER
//========================
$(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


//========================
//NAVBAR
//========================
(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        $(".navbar").hide();
         //$('#arribaId').hide();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > 40) {
                    $('.navbar')
                        .removeClass('animated fadeOutUp')
                        .addClass('animated fadeInDown')
                        .fadeIn();
                    $('#arribaId').css({
                            'right': '1em'
                        });
                } else {
                    $('.navbar')
                        .removeClass('animated fadeInDown')
                        .addClass('animated fadeOutUp')
                        .fadeOut();

                        $('#arribaId').css({
                            'right': '-10em'
                        });
                }
            });
        });

    });
}(jQuery));


//========================
//icon hover effect
//========================
$('#services img').hover(
    function () {
        $(this).addClass('animated pulse')
    },
    function () {
        $(this).removeClass('animated pulse')
    }
)


jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
});