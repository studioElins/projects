$(document).ready(function(){
	count()
	tovar()
	$(".si-color.product ").bind("click", function(){
		sizeActive();
		toggleClass($(this))
	})
	sizeActive();
	function toggleClass(elem){
		elem.siblings().removeClass('active');
		elem.addClass('active');
		dataAjax(elem)
		function dataAjax(product){
			$.getJSON('data.json', function (data){
				$.each(data, function(key, val){
					if(product.attr("data-attr") === key){
						$(".item span").text(val.color);
						$(".si-color.product.active").attr("data-color" , val.color) 
						
						if( val.size === " " || val.size == "undefined" || val.size ===  false ){
							$('.pd-text .item.size').text("size empty :c ");
							$(".pd-size .pd-size-item").hide();
							$(".si-color.product.active").attr("data-color" , false) 
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
						tovar()
					}
				})
			})
		}
	}
})
function sizeActive(){
	$(".pd-size-item").bind("click", function(){
		$(".pd-size-item.size").eq(0).addClass('active');
		$(".pd-size-item.size").removeClass('active');
		$(this).addClass('active');
		tovar()
	})
}
function count(){
	var add = $("a.plus");
	var min = $("a.minus");
	var val = $("input.input.count");
	var prc = $("div.price");
	var cnt = 1;
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
		)
}
