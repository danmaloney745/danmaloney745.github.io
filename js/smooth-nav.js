$(document).ready(function(){ 
    //jQuery to collapse the navbar on scroll
    // $(window).scroll(function() {
    //     if ($(".navbar").offset().top > 50) {
    //         $(".navbar-fixed-top").addClass("top-nav-collapse");
    //     } else {
    //         $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //     }
    // });
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            return false;
        }
        }
    });
    
    /*Navbar Navigation Functions */
    /*
    $("#educationLink").click(function (){
        var offset = 20; 
            $('html, body').animate({
                scrollTop: $("#CV").offset().top + offset
            }, 500);
    });

    $("#projectsLink").click(function (){
        var offset = 20; 
            $('html, body').animate({
                scrollTop: $("#projects").offset().top + offset
            }, 500);
    });

    $("#expeienceLink").click(function (){
        var offset = 20; 
            $('html, body').animate({
                scrollTop: $("#experience").offset().top + offset
            }, 500);
    });

    $("#contactDetailsLink").click(function (){
        var offset = 20; 
            $('html, body').animate({
                scrollTop: $("#contact-details").offset().top + offset
            }, 500);
    });

    $('.progress .progress-bar').css("width", function() {
        return $(this).attr("aria-valuenow") + "%";
    })*/
});