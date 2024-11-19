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

	// Accordion Plus or Minus btn toggle

	$('.blog-accordion-button').on("click", function () {
		const icon = $(this).find('.icon-toggle');
		// Toggle icon based on collapse state
		if ($(this).hasClass('collapsed')) {
			icon.removeClass('fa-minus').addClass('fa-plus');
		} else {
			icon.removeClass('fa-plus').addClass('fa-minus');
		}
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
	  