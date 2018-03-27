$(document).ready(function() {
	//$(".c2_list ul li:nth-child(4n)").css("margin-right","0px")


	$(".mobile-inner-header-icon").click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$(".mobile-inner-nav").slideToggle(250);
	  });
	  $(".mobile-inner-nav a").each(function( index ) {
	  	$( this ).css({'animation-delay': (index/10)+'s'});
	  });



	$(".c1_hover1").hover(function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img5_hover.jpg");
	},function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img5.jpg");
	})
	$(".c1_hover2").hover(function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img6_hover.jpg");
	},function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img6.jpg");
	})
	$(".c1_hover3").hover(function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img7_hover.jpg");
	},function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img7.jpg");
	})
	$(".c1_hover4").hover(function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img8_hover.jpg");
	},function(){
		$(this).children("a").children(".c1_img").children("img").attr("src","Public/home/images/img8.jpg");
	})
	$(".c2Img1").hover(function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon1_hover.png");
	},function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon1.png");
	})
	$(".c2Img2").hover(function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon2_hover.png");
	},function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon2.png");
	})
	$(".c2Img3").hover(function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon3_hover.png");
	},function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon3.png");
	})
	$(".c2Img4").hover(function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon4_hover.png");
	},function(){
		$(this).children(".c2_img").children().children("img").attr("src","Public/home/images/icon4.png");
	})
	$(".c4Img1").hover(function(){
		$(this).children(".c4_img").children("img").attr("src","Public/home/images/icon5_hover.png");
	},function(){
		$(this).children(".c4_img").children("img").attr("src","Public/home/images/icon5.png");
	})
	$(".c4Img2").hover(function(){
		$(this).children(".c4_img").children("img").attr("src","Public/home/images/icon6_hover.png");
	},function(){
		$(this).children(".c4_img").children("img").attr("src","Public/home/images/icon6.png");
	})
	$(".c4Img3").hover(function(){
		$(this).children(".c4_img").children("img").attr("src","Public/home/images/icon7_hover.png");
	},function(){
		$(this).children(".c4_img").children("img").attr("src","Public/home/images/icon7.png");
	})
	$(".product_list ul li a").hover(function(){
		$(this).children(".product_listPclink").animate({top:"0px"});
	},function(){
		$(this).children(".product_listPclink").animate({top:"500px"});
	})
	$(".advantage_c1_slide ul li .advantage_c1_slide_top").click(function(){
		$(this).parents("li").addClass("on");
		$(this).parents("li").siblings().removeClass("on");
		$(this).siblings(".advantage_c1_slide_bottom").slideDown();
		$(this).parents("li").siblings().children(".advantage_c1_slide_bottom").slideUp();
	})

	//文本框焦点
	$(document).ready(function() {
		$(".zcc1_se").val("输入您的商标名称，如：奔驰");
		textFill( $('.zcc1_se') );
	});
	function textFill(input){ //input focus text function
		var originalvalue = input.val();
		input.focus( function(){
			if( $.trim(input.val()) == originalvalue ){
				input.val('');
			}
		}).blur( function(){
			if( $.trim(input.val()) == '' ){
				input.val(originalvalue);
			}
		});
	}});

$(window).resize(function(){
})