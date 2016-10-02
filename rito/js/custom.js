$(document).ready(function(){
	count()
	tovar()
	sizeActive();
	$(".si-color.product ").bind("click", function(){
		toggleClass($(this))
	})
	function toggleClass(elem){
		elem.siblings().removeClass('active');
		elem.addClass('active');
		dataAjax(elem)
		function dataAjax(product){
			$.getJSON('data.json', function (data){
				$.each(data, function(key, val){
					if(product.attr("data-attr") === key){
						$(".owl-dot").css("background-image", "url("+val.photo+")");
						$(".owl-item.cloned").css("background-image", "url("+val.photo+")");
						$("img.zoomImg").attr("src",val.photo)
						$(".item span").text(val.color);
						$(".si-color.product.active").attr("data-color" , val.color) 
						if( val.size === " " || val.size == "undefined" || val.size ===  false ){
							$('.pd-text .item.size').text("size empty :c ");
							$(".pd-size .pd-size-item").hide();
							$(".pd-size-item.size.active, .pd-size-item.size").text(" ");
						}else{	
							$('.pd-text .item.size').text("Размер:");
							$(".pd-size .pd-size-item").show();
							var parItem = "<div class='pd-size-contain'>"
									for(var i = 0; i < val.size.length; i++){
										parItem += "<div class='pd-size-item size'>" + val.size[i] +  "</div>"			
									}
								parItem += 	"</div>"
							$(".pd-size").html(parItem)
							sizeActive();
						}
						$(".pd-size-item.size").first().addClass('active')
						tovar()
					}
				})
			})
		}
	}
})
function sizeActive(){
	$(".pd-size-item").bind("click", function(){
		$(".pd-size-item.size, .pd-size-item").removeClass('active');
		$(this).addClass('active');
		tovar()
	})
}
function count(){
	var add = $("a.plus"), min = $("a.minus"), val = $("input.input.count"), prc = $("div.price"), cnt = 1;
	add.click(function(){
		cnt++
		val.val(cnt);
		tovar()
		return false;
	})
	min.click(function(){
		if(cnt == 1){ return false; }
		cnt--
		val.val(cnt);
		tovar()
		return false;
	})	
}
function tovar(){
	$("input.zakaz").val(
		$("input.input.count").val() + " / " +
		$(".pd-size-item.size.active").text() + " / " +
		$(".si-color.product.active").attr("data-color") 
	);
}

