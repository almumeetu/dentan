/***************************************************
==================== JS INDEX ======================
****************************************************
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// mobile menu 
	var stMenuWrap = $('.mobile-menu-active > ul').clone();
	var stSideMenu = $('.offcanvas-menu nav');
	stSideMenu.append(stMenuWrap);
	if ($(stSideMenu).find('.submenu, .mega-menu').length != 0) {
		$(stSideMenu).find('.submenu, .mega-menu').parent().append
			('<button class="menu-close"><i class="fa-solid fa-circle-arrow-right"></i></button>');
	}
	var sideMenuList =
		$('.offcanvas-menu nav > ul > li button.menu-close, .offcanvas-menu nav > ul li.has-dropdown > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		if (!($(this).parent().hasClass('active'))) {
			$(this).parent().addClass('active');
			$(this).siblings('.submenu, .mega-menu').slideDown();
		} else {
			$(this).siblings('.submenu, .mega-menu').slideUp();
			$(this).parent().removeClass('active');
		}
	});

	// offcanvas
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	// // 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 04. search form
	$(".search-click").on("click", function () {
		$(".header-input-toggle,.input-body-overlay").addClass("active");
	});

	$(".input-body-overlay").on("click", function () {
		$(".header-input-toggle,.input-body-overlay").removeClass("active");
	});
	$(".input-body-overlay").on("click", function () {
		$(".header-input-toggle,.input-body-overlay").removeClass("active");
	});
	////////////////////////////////////////////////////
	// header-sticky
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	//  Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	//  Wow Js
	new WOW().init();

	////////////////////////////////////////////////////

	////////////////////////////////////////////////////

	// Accordion Plus or Minus btn toggle

	$('#faqAccordion').on('show.bs.collapse hide.bs.collapse', function (e) {
		const icon = $(e.target).prev('.blog-accordion-button').find('.icon-toggle');
		
		if (e.type === 'show') {
			icon.removeClass('fa-plus').addClass('fa-minus');
		} else if (e.type === 'hide') {
			icon.removeClass('fa-minus').addClass('fa-plus');
		}
	});


	////////////////////////////////////////////////////
	// Brand Carousel JS
	$(document).ready(function () {
		const swiper = new Swiper('.brand-carousel', {
		  loop: true, 
		  slidesPerView: 5, 
		  spaceBetween: 30, 
		  autoplay: {
			delay: 1000, 
			disableOnInteraction: true, 
		  },
		  breakpoints: {
			320: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
			768: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			1024: {
			  slidesPerView: 5,
			  spaceBetween: 30,
			},
		  },
		});
	  });
	////////////////////////////////////////////////////

	//Service Details page faq area

	// When a question is clicked, toggle the answer
	$('.service-faq-item .question').on('click', function () {
		var $this = $(this);
		var $answer = $this.next('.answer');
		var $icon = $this.closest('.service-faq-item').find('.faq-toggle-icon');
		var $faqItem = $this.closest('.service-faq-item');

		// Close all other answers except the current one
		$('.service-faq-item .answer').not($answer).slideUp();
		$('.service-faq-item .faq-toggle-icon').not($icon).removeClass('open').css('transform', 'rotate(0deg)');

		var isActive = $faqItem.hasClass('active');
		if (!isActive) {
			$faqItem.toggleClass('active');
		} else {
			$faqItem.removeClass('active');
		}

		// Toggle the clicked answer
		$answer.stop().slideToggle();
		$icon.toggleClass('open').css('transform', function (_, val) {
			return val === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
		});
	});

	// Ensure the first item is open when the page loads
	$('.service-faq-item:first-child .answer').show();


	//FAQ VeRSION - 2
	$('.faq-toggle').each(function () {
		$(this).on('click', function () {
			$(this).parent().toggleClass('active');
		});
	});


	////////////////////////////////////////////////////
	//Progress Bar JS
	var progress = 60;
	$('.progress-bar').css('width', progress + '%');
	$('.progress-text p').text(progress + '%');

	
	////////////////////////////////////////////////////
	//Service Details Page FAQ
	let $questions = $(".faq-question");
	let $containers = $(".faq-container");

	// Set the first question as open by default
	if ($questions.length > 0) {
		$questions.first().addClass("active");
		$containers.first().addClass("active");
		$questions.first().next().css("max-height", $questions.first().next()[0].scrollHeight + "px");
	}

	$questions.on("click", function() {
		var $question = $(this);
		var $activeQuestion = $(".faq-question.active");

		if ($activeQuestion.length && $activeQuestion[0] !== $question[0]) {
		$activeQuestion.removeClass("active");
		$activeQuestion.next().css("max-height", 0);
		}

		$question.toggleClass("active");
		var $answer = $question.next();
		
		if ($question.hasClass("active")) {
		$answer.css("max-height", $answer[0].scrollHeight + "px");
		} else {
		$answer.css("max-height", 0);
		}
	});

	$containers.on("click", function() {
		var $container = $(this);
		var $activeContainer = $(".faq-container.active");

		if ($activeContainer.length && $activeContainer[0] !== $container[0]) {
			$activeContainer.removeClass("active");
		}
		$container.toggleClass("active");
	});

})(jQuery);



	//Magic Mouse Js
	options = {
		"cursorOuter": "circle",
		"hoverEffect": "circle-move",
		"hoverItemMove": false,
		"defaultCursor": false,
		"outerWidth": 30,
		"outerHeight": 30
		  };
	 magicMouse(options);


	 //Testimonial Swiper
	 var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true, // Ensures continuous looping
		autoplay: {
		  delay: 2000, // Removes delay for continuous movement
		  disableOnInteraction: false, // Keeps autoplay active on interaction
		},
		speed: 1000, // Controls autoplay smoothness
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
		breakpoints: {
		 1320: {
			slidesPerView: 3,
		 },
		  // For tablets (width < 992)
		  992: {
			slidesPerView: 2,
		  },
		  // For mobile devices (width < 768px)
		  768: {
			slidesPerView: 1,
		  },
		  0: {
			slidesPerView: 1,
		  },
		},
	  });
	  

	  // Hero-2 Swiper

	  var swiper = new Swiper(".mySwiperhero2", {
		pagination: {
		  el: ".swiper-pagination",
		  type: "fraction",
		},
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		autoplay: {
		  delay: 3000, 
		  disableOnInteraction: false,
		},
		speed: 1000,
		effect: "fade", 
		fadeEffect: {
		  crossFade: true, 
		},
		loop: true, 
	  });
	  