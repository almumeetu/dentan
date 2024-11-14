/***************************************************
==================== JS INDEX ======================
****************************************************
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 01. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 02. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 03. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
    // 04. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////


})(jQuery);