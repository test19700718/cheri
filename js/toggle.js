$(function(){
			$('.navbar-toggle').click(function(){
						$('button').toggleClass('open');
				$("nav").fadeToggle(500);
					});
 
		});
		
$(function(){
			$('.spin dl').on('click',function(){
						$(this).removeClass('click');
						$(this).prev('.spin img').removeClass('test2');
									});
 
		});
		
$(function(){
			$('.spin img').on('click',function(){
						$(this).toggleClass('test2');
						$(this).next('dl').toggleClass('click');
									});
 
		});		