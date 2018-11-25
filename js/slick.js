$(function() {
	$('.slider').slick({
	slidesToShow:3,
    centerMode:true,
	centerPadding: 0,
	autoplay: true, //オートプレイ*/
	autoplaySpeed: 2000,
	dots: true,
	pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
	responsive: [{
		breakpoint: 768,
			settings: {
				arrows: false, // 前後の矢印非表示
				swipe: false,
				slidesToShow: 2,
				pauseOnFocus: false,
    			pauseOnHover: false,
   			 	pauseOnDotsHover: false,
			}
			}]
		});
	/*prevArrow: '<img src="./img/next_02.gif" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./img/next_01.gif" class="slide-arrow next-arrow">'*/
	
});


