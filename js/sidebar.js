$(function() {
			var offset = $("#sidebar").offset();
			var topPadding = $('.side_ref').offset().top+50; 
			$(window).scroll(function() {
				
				if ($(window).scrollTop() > offset.top ) {
					$("#sidebar").stop().animate({
						marginTop: $(window).scrollTop() - offset.top + topPadding
					},1000);
				}     
				else{
					$("#sidebar").stop().animate({
						marginTop: 150,   
					},1000);
				};    
			});
		});