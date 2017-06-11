$(document).ready(function(){
    $('.ui .item').on('mouseover', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
    // $('.ui .header').on('mouseover', function() {
	  //     $('.ui .header').removeClass('green');
	  //     $(this).addClass('active green');
	  // });              
});