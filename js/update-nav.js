$(document).ready(function(){
    $('.thumbnail').click(function(){
        $('.modal-body').empty();
  	    var title = $(this).parent('a').attr("title");
  	    $('.modal-title').html(title);
  	    $($(this).parents('div').html()).appendTo('.modal-body');
  	    $('#myModal').modal({show:true});
    });

    $("#educationLink").click(function (){
        var offset = 20; 
            $('html, body').animate({
                scrollTop: $("#education").offset().top + offset
            }, 500);
    });

    $('.progress .progress-bar').css("width", function() {
        return $(this).attr("aria-valuenow") + "%";
    })

    var currentModal = $(this);
    //click next
    currentModal.find('.btn-next').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
    });
  
    //click prev
    currentModal.find('.btn-prev').click(function(){
        currentModal.modal('hide');
        currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
     });

});