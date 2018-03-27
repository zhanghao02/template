// JavaScript Document
$(function(){
	$(".carousel-inner > .item").height($(window).height()-123)
	$(".totop").click(function(){
		$('body,html').animate({scrollTop:0},200);
		})
	$(".cityco").hover(function(){
		$(this).find(".city-list").show()
		$(this).find(".city-list").animate({opacity:1},300)
		},function(){
			$(this).find(".city-list").animate({opacity:0},300)
			$(this).find(".city-list").hide(100)
			})
	$(".quanav > ul > li a").click(function(){
		if($(this).parent("li").find("ul").css("display")=="none"){
			$(".quanav > ul > li > ul").hide(100)
			$(this).parent("li").find("ul").show(100)
			}
		})		
	})