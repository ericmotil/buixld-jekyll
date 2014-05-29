$(document).ready(function(){

	// Scroll to div actionnn
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	// Fade in the Hero yah!
	$(".hero-quote-text").fadeIn(1500);
	
	// Paralaxxxy background thingy
	$(window).scroll(function(){
     
		var scrollPos = $("body").scrollTop();
		console.log(scrollPos);
		if (scrollPos > 1) {
			$(".hero-quote-one").css( "top", -(scrollPos / 2) )
		}
	});

});