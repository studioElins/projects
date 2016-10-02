$(document).ready(function(){
	var rito = {
		dataInput : function(){
			$("input.tovar").val(
					 $(".pd-text input.input").val() + " / " +
					 $(".pd-size .pd-size-item.active").text() + " / " +
					 $(".pd-text .item  span").text() 
				)
			$("a.plus, a.minus, .pd-size-item, .colors .si-color, .pd-size-item.size").bind("click", function(){
				$("input.tovar").val(
					 $(".pd-text input.input").val() + " / " +
					 $(".pd-size .pd-size-item.active").text() + " / " +
					 $(".pd-text .item  span").text() 
				)
			})
		},
		toggleActive : function(element){
			element.siblings().removeClass('active')
			element.addClass('active');
		},
		dataAjax : function(element){
			$.getJSON("data.json", function(data){
				$.each(data, function(key, val){
					if(element.attr("data-prod") === key){
						$(".item span").text(val.color.title);
						if($(".pd-text .si-color.active .si-hex").children().length < 1){
							$(" .si-color.active .si-hex").css("background-color", val.color.left);
						}
						$(" .si-color.active .si-hex div:first").css("background-color", val.color.left);
						$(" .si-color.active .si-hex div:last").css("background-color", val.color.right)
						$(".owl-dot").css("background-image", "url("+val.photo+")");
						$("a.imagefill img, img.zoomImg").attr("src",val.photo);
							if( val.size === " " || val.size == "undefined" || val.size ===  false ){
								$('.pd-text .item.size').text("size empty :c ");
								$(".pd-size .pd-size-item").hide();
								$(".pd-size-item.active, .pd-size-item").text(" ");
							}else{	
								$('.pd-text .item.size').text("Размер:");
								$(".pd-size .pd-size-item").show();
								var parItem = "<div class='pd-size-contain'>"
										for(var i = 0; i < val.size.length; i++){
											parItem += "<div class='pd-size-item size'>" + val.size[i] +  "</div>"			
										}
									parItem += 	"</div>"
								$(".pd-size").html(parItem)
								
							}
						rito.sizeClick()
						rito.dataInput()
					}
				})
			})
		},
		sizeClick : function(){
			$(".pd-size-contain .pd-size-item.size").click(function(){
				$(this).siblings().removeClass('active')
				$(this).addClass('active');
			})
		},
		count : function(add, min){
			var cnt = 1,  inp = $(".pd-text input.input");
			add.click(function(){
				cnt++
				inp.val(cnt);
				return false;
			})
			min.click(function(){
				if(cnt == 1){ return false;}
				cnt--
				inp.val(cnt);
				return false;
			})	
		}
	}

	$(".colors .si-color").bind("click", function(){
		rito.toggleActive($(this));
		rito.dataAjax($(this));
	})

	$(".pd-size .pd-size-item").bind("click", function(){
		rito.toggleActive($(this))
	})
	rito.count($("a.plus"), $("a.minus"));
	rito.dataInput()
	
//####################    DONE     ##########################//
//	count()
//	tovar()
//	sizeActive();
//	$(".si-color.product ").bind("click", function(){
//		toggleClass($(this))
//	})
//	function toggleClass(elem){
//		elem.siblings().removeClass('active');
//		elem.addClass('active');
//		dataAjax(elem)
//		function dataAjax(product){
//			$.getJSON('data.json', function (data){
//				$.each(data, function(key, val){
//					if(product.attr("data-attr") === key){
//						$(".owl-dot").css("background-image", "url("+val.photo+")");
//						$("a.imagefill img").attr("src",val.photo)
//						$("img.zoomImg").attr("src",val.photo)
//						$(".item span").text(val.color);
//						$(".si-color.product.active").attr("data-color" , val.color) 
//						if( val.size === " " || val.size == "undefined" || val.size ===  false ){
//							$('.pd-text .item.size').text("size empty :c ");
//							$(".pd-size .pd-size-item").hide();
//							$(".pd-size-item.size.active, .pd-size-item.size").text(" ");
//						}else{	
//							$('.pd-text .item.size').text("Размер:");
//							$(".pd-size .pd-size-item").show();
//							var parItem = "<div class='pd-size-contain'>"
//									for(var i = 0; i < val.size.length; i++){
//										parItem += "<div class='pd-size-item size'>" + val.size[i] +  "</div>"			
//									}
//								parItem += 	"</div>"
//							$(".pd-size").html(parItem)
//							sizeActive();
//						}
//						$(".pd-size-item.size").first().addClass('active')
//						tovar()
//					}
//				})
//			})
//		}
//	}
//####################    DONE     ##########################//
})

//####################    DONE     ##########################//
//function sizeActive(){
//	$(".pd-size-item").bind("click", function(){
//		$(".pd-size-item.size, .pd-size-item").removeClass('active');
//		$(this).addClass('active');
//		tovar()
//	})
//}
//function count(){
//	var add = $("a.plus"), min = $("a.minus"), val = $("input.input.count"), prc = $("div.price"), cnt = 1;
//	add.click(function(){
//		cnt++
//		val.val(cnt);
//		tovar()
//		return false;
//	})
//	min.click(function(){
//		if(cnt == 1){ return false; }
//		cnt--
//		val.val(cnt);
//		tovar()
//		return false;
//	})	
//}
//function tovar(){
//	$("input.zakaz").val(
//		$("input.input.count").val() + " / " +
//		$(".pd-size-item.size.active").text() + " / " +
//		$(".si-color.product.active").attr("data-color") 
//	);
//}
//####################    DONE     ##########################//

