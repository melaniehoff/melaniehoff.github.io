

$( document ).ready(function() {
    console.log( "ready!" );

$(".cover-img").click(function() {
	console.log("click")
    // $('html,body').animate({
    //     scrollTop: $("#statement").offset().top},
    //     'slow');
    // $('#div1').scrollTop($('#div1')[0].scrollHeight);
    $("html,body").scrollTop($('.cover-img')[0].scrollHeight);

});

});


