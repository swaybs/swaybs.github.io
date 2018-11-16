$(document).ready(function(){

	// hide .navbar first
$(".top-nav").hide();

	// fade in .navbar
$(function () {
	$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
		if ($(this).scrollTop() > 100) {
			$('.top-nav').fadeIn();
		  } else {
			$('.top-nav').fadeOut();
			       }
		  });


	 });

  });
