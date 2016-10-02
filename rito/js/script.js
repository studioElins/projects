$( document ).ready(function() {
	function resize_blocks() {
		$('.mob-navigation').css('max-height', $(window).height()-$('.hm-top').outerHeight(true)-$('.hm-dark').outerHeight(true));
		$('.pis-item').each(function(){
			$(this).css('height', $(this).parents('.pi-slider').height());
		});
	}
	resize_blocks();

	$( window ).resize(function() {
		resize_blocks();
	});

	jQuery.fn.imagecover = function() {
		if($(this).length > 0) {
			return $(this).imagefill();
		}
	}

	$('.tabs-head').on('click', 'li:not(.current)', function() {  
		$(this).addClass('active-tab').siblings().removeClass('active-tab')  
		.parents('.tabs-area').find('.tab-content').eq($(this).index()).fadeIn(150).siblings('.tab-content').hide();  
	})

	$('.imagefill').imagecover();

	$('.scrollbar-inner').scrollbar();

	if($('.big-slider').length > 0){
		$('.big-slider').owlCarousel({
			loop:true,
			items:1,
			nav: true,
			dots: false,
			//autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true
		});
	}



	/*     this script is rewrite     */
	/**********************************/
    /*     fix a bottom slide start   */
    /**********************************/


	$(".product-carousel").owlCarousel({
		items:4,
   		loop:true,
    	margin:10,
    	autoplay:true,
    	autoplayTimeout:1000,
    	autoplaySpeed: 2000,
    	autoplayHoverPause:true,
    	nav: true,
	     responsive:{
		   0:{
			items:2
		   },
		   750:{
			items:4
		   },
		   1050:{
			items:5
		   }
		}
	  });


//       ^
//       |
//
//
//		if($('.product-carousel').length > 0){
//			$('.product-carousel').owlCarousel({
//				loop:true,
//				items:5,
//				nav: true,
//				dots: false,
//				margin: 15,
//				//autoplay: true,
//				autoplayTimeout: 5000,
//				autoplayHoverPause: true,
//				onTranslated: function() {$('.product-carousel').find('.imagefill').imagecover()},
//				responsive:{
//					0:{
//						items:2
//					},
//					750:{
//						items:4
//					},
//					1050:{
//						items:5					}
//				},
//			});
//		}
//
//
//
//
//		$('.pi-slider').each(function(){
//			var slider = $(this);
//
//
// 			var interval = null;
// 			function animatedCode() {
// 	 			 slider.trigger('next.owl.carousel', [1000, 1000]);
// 			}			
// 			slider.hover(function() {
// 				animatedCode();
// 	 			 interval = window.setInterval(function(){animatedCode()}, 2000);
// 			}, function() {
// 	  			window.clearInterval(interval);
// 	  			$(this).trigger('to.owl.carousel', [0 ,1000]);
// 			});
// 	});




	/**********************************/
    /*     fix a bottom slide end     */
    /**********************************/



	//if($('.pi-slider').length > 0){
	//	$('.pi-slider').owlCarousel({
	//		loop:true,
	//		items:1,
	//		animateOut: 'fadeOut',
	//		animateIn: 'fadeIn',
	//		nav: false,
	//		dots: true,
	//		itemsScaleUp:true,
	//		onTranslated: function() {$('.pi-slider').find('.imagefill').imagecover()}
	//	});
	//}
	//
	if($('.pd-image-slider').length > 0){
		$('.pd-image-slider').each(function(){
			var owl = $(this)
			if(owl.hasClass('owl-reponsive-0')){
				var r_i = 1; 
			} else {
				var r_i = 2;
			}
			owl.owlCarousel({
				loop:true,
				items:r_i,
				nav: false,
				//dots: true,
				dotsEach: true,
				margin: 15,
				//autoplay: true,
				//autoplayTimeout: 5000,
				autoplayHoverPause: true,
				//responsiveBaseElement: owl.parent(),
				responsive:{
					0:{
						items:1
					},
					750:{
						items:r_i
					}
				},
				onTranslated: function() {
					owl.find('.imagefill').imagecover();
					owl.find('.owl-dot').each(function() {
						grab = jQuery(this).data('info');
						console.log(grab);
						if(jQuery('.slidenumber'+ grab).hasClass('active')) {
							jQuery(this).addClass('active');
						} else {
							jQuery(this).removeClass('active');
						}

					});
				},
			});
		

			dotcount = 1;

			owl.find('.owl-dot').each(function() {
				jQuery( this ).addClass( 'dotnumber' + dotcount);
				jQuery( this ).attr('data-info', dotcount);
				dotcount=dotcount+1;
			});


			slidecount = 1;
			var path_image = $('.owl-dot').prop("style")
			if(path_image[1] === "background-image"){
				console.log(path_image)
			}
			
						//$('.owl-item').css("background-image",)
			owl.find('.owl-item').not('.cloned').each(function() {
				jQuery( this ).addClass( 'slidenumber' + slidecount);
				slidecount=slidecount+1;
			});


			owl.find('.owl-dot').each(function() {
				
				grab = jQuery(this).data('info');
				slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
				console.log(slidegrab);

				jQuery(this).css("background-image", "url("+slidegrab+")");  

				if(jQuery('.slidenumber'+ grab).hasClass('active')) {
					jQuery(this).addClass('active');
				} else {
					jQuery(this).removeClass('active');
				}

			});


			amount = jQuery(this).find('.owl-dot').length;
			gotowidth = 100/amount;

			//jQuery('.pd-image-slider .owl-dot').css("width", gotowidth+"%");
			newheight = (jQuery('.pd-image-slider').height()-((amount-1)*7))/amount;
			jQuery('.pd-image-slider .owl-dot').css("height", newheight+"px");


		});
	}











	if($('.pdi-item').length > 0){
		$('.pdi-item').zoom();
	}

	$('.th-login').click(function(){
		$('.login-modal').fadeIn();
		return false;
	});

	$('.login-modal .close').click(function(){
		$('.login-modal').fadeOut();
	});

	$('.chat-button').click(function(){
		$('.chat-form form').addClass('active');
		return false;
	});

	$('.chat-form .close').click(function(){
		$('.chat-form form').removeClass('active');
	});



	$('.address-button').click(function(){
		$('.side-map').addClass('active');
		return false;
	});

	$('.cm-close').click(function(){
		$('.side-map').removeClass('active');
	});

	$('.bs-button').click(function(){
		$('.bs-form').slideDown();
		$('.bs-overlay').fadeIn();
		return false;
	});

	$('.bs-overlay, .bs-close').click(function(){
		$('.bs-form').slideUp();
		$('.bs-overlay').fadeOut();
	});

	$('.quick-button').click(function(){
		$('.product-popup').fadeIn();
		amount = jQuery('.pd-image-slider .owl-dot').length;
		newheight = (jQuery('.pd-image-slider').height()-((amount-1)*7))/amount;
		jQuery('.pd-image-slider .owl-dot').css("height", newheight+"px");
		return false;
	});

	$('.pp-overlay,.pp-wrap .close').click(function(){
		$('.product-popup').fadeOut();
	});

	$('.hm-button').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').parents('.hm-side').removeClass('active');

		} else {
			$(this).addClass('active').parents('.hm-side').addClass('active');
		};
	});

	$('.mn-open').click(function() {
		if ($(this).parents('.parent').hasClass('active')) {
			$(this).parents('.parent').removeClass('active').find('.sub-menu').slideUp();
		} else {
			$(this).parents('.parent').addClass('active').find('.sub-menu').slideDown();
		};
		return false;
	});

	$(".navigation > ul > li.parent").hover(function() {
		$(this).find('.sub-menu').stop(true).slideDown();
	}, function() {
		$(this).find('.sub-menu').stop(true).slideUp();
	});







 /* this script is rewrite */


	$(".sort-item").click(function() {
		$('.si-wrap').slideUp();
		$(this).find('.si-wrap').stop(true).slideToggle();
	})

//	     ^
//       |

//       $(".sort-item").hover(function() {
//	     $(this).find('.si-wrap').stop(true).slideDown();
//          }, function() {
//	     $(this).find('.si-wrap').stop(true).slideUp();
//	     });

	
   /* */



	$(".minicart").hover(function() {
		$(this).find('.minicart-wrap').stop(true).slideDown();
	}, function() {
		$(this).find('.minicart-wrap').stop(true).slideUp();
	});

	$(".select-currency").hover(function() {
		$(this).addClass("active").find('.ss-drop').stop(true).slideDown();
	}, function() {
		$(this).removeClass("active").find('.ss-drop').stop(true).slideUp();
	});

	$('.scroll-up').click(function(){
	    $('body, html').animate({ scrollTop: 0 }, 1100);
	    return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 500 ) {
			jQuery('.scroll-up').fadeIn('fast');
		} else {
			jQuery('.scroll-up').fadeOut('fast');
		}
	});
	if ( jQuery(document).scrollTop() > 500 ) {
		jQuery('.scroll-up').fadeIn('fast');
	} else {
		jQuery('.scroll-up').fadeOut('fast');
	}

	$('.account-form').click(function(){
		$('#account').slideDown().siblings(':not(.cw-right)').slideUp();
		return false;
	});

	$('.password-form').click(function(){
		$('#password').slideDown().siblings(':not(.cw-right)').slideUp();
		return false;
	});

	$(".mw-button .button-style1.disable").hover(function() {
		$(this).parent().find('.or-error').stop(true).slideDown();
	}, function() {
		$(this).parent().find('.or-error').stop(true).slideUp();
	});

	// var map;
	// function initialize() {
	// 	var myLatlng = new google.maps.LatLng(50.460846, 30.523727);
	// 	var mapOptions = {
	// 		zoom: 16,
	// 		center: myLatlng,
	// 		disableDefaultUI: true,
	// 		scrollwheel: false,
	// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 		styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":1}]}] //черно-белая карта
	// 	}
	// 	var map = new google.maps.Map(document.getElementById("sm-map"), mapOptions);

	// 	var image = 'images/marker.png';
	// 	var myLatLng = new google.maps.LatLng(50.460846, 30.523727);
	// 	var beachMarker = new google.maps.Marker({
	// 		position: myLatLng,
	// 		map: map,
	// 		icon: image
	// 	});
	// 	google.maps.event.addDomListener(window, "resize", function() {
	// 	 var center = map.getCenter();
	// 	 google.maps.event.trigger(map, "resize");
	// 	 map.setCenter(center); 
	// 	});
	// }
	// google.maps.event.addDomListener(window, 'load', initialize);
	
});