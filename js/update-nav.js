$(document).ready(function(){
    // $(window).scroll(function(){
    //     if($(window).scrollTop() > $(window).height()){
    //         $(".navbar-nav ul li a").css({"background-color":"transparent"});   
    //     }
    //     else{
    //         $(".navbar-nav ul li a").css({"background-color":"white"});
    //     }

    // })

    $("#educationLink").click(function (){
        var offset = 20; 
            $('html, body').animate({
                scrollTop: $("#education").offset().top + offset
            }, 500);
    });

});