$(document).ready(function(){


	$(".chat__button--arrow a").on('click' ,function(e){
		e.preventDefault();
		if ($(window).width() < 1200) {
			$(".chat__opener").removeClass("active__chat");
			$(".content__wrapper .chat__wrapper").slideUp(400);
		}
	});

	$(".chat__opener").on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("active__chat")) {
			$(this).removeClass("active__chat");
			$(".content__wrapper .chat__wrapper").slideUp(400);
		} else {
			$(".float__menu").slideUp(300);
			$(".menu__button").removeClass("active__button");
			$(this).addClass("active__chat");
			$(".content__wrapper .chat__wrapper").slideDown(400);
		}
	});
	if ($(".circle__progress").length) {
		$('.circle__progress').circleProgress();
	}

	$('.menu__button').on("click" , function(e){
		e.preventDefault();
		if ($(this).hasClass("active__button")) {
			$(".float__menu").slideUp(300);
			$(this).removeClass("active__button");
		} else {
			$(".chat__opener").removeClass("active__chat");
			$(".content__wrapper .chat__wrapper").slideUp(400);
			$(".float__menu").slideDown(300);
			$(this).addClass("active__button");
		}
	});

	const slider = document.querySelector(".inner__live");
	slider.addEventListener('mousedown', (e) => {
	  isDown = true;
	  slider.classList.add('active');
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
	  if(!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = (x - startX) * 1; //scroll-fast
	  slider.scrollLeft = scrollLeft - walk;
	});
	$(window).scroll(function() {
	    var top_of_element = $("footer").offset().top;
	    var bottom_of_element = $("footer").offset().top + $("footer").outerHeight();
	    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
	    var top_of_screen = $(window).scrollTop();

	    if ($(window).width() > 1200) {
	    	if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		    	$('.shadow__fixed').fadeOut(200);
		    } else {
		    	$(".shadow__fixed").fadeIn(200);
		    }
	    }
	});
});