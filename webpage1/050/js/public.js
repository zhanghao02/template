//$(function() {
//	$('nav#mmenu').mmenu({
//		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
//		counters	: false,
//		navbar 		: {
//			title		: '菜单',
//		},
//		navbars		: [
//			 {
//				position	: 'top',
//				content		: [
//					'prev',
//					'title',
//					'close'
//				]
//			}, {
//				position	: 'bottom',
//				content		: [
//					''
//				]
//			} 
//		]
//	});
//});


/*
		----------------------------------------------------------------------------------------
		濞村繗顫嶉崳銊у閺堫剚甯撮崣锟�
		娴ｈ法鏁ら敍锟� 
		if (getIEVersion() == "IE8") alert("yes!");
		----------------------------------------------------------------------------------------
	*/

	function getIEVersion(){

		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") { 
			return "IE6";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") { 
			return "IE7";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") { 
			return "IE8";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") { 
			return "IE9";
		} 

	}



$(document).ready(function(){
	$(".search a").click(function(){
		$(".searmain").toggle(300);
	})
});

$(document).ready(function(){
	$(".phonesear a").click(function(){
		$(".phonesearmain").toggle(300);
	})
});

$(function(){
	$(".link .linkwrap").click(function(){
		$(".linkcon").toggle();
	})
})



$(function(){
	$(".phonenav ul li").hover(function(){
		$(this).find("ul").slideDown();
	},function(){
		$(this).find("ul").stop(true).slideUp();
	})
})


$(function(){
	$(".phone-nav").click(function(){
		$(".phonenav").slideDown()
	})
})

$(function(){
	$(".phonecolse").click(function(){
		$(".phonenav").slideUp();
	})
})


$(function(){
	$(".inquiry ul li input,.inquiry ul li textarea").focus(function(){
		$(this).parent().find("em").hide();
	})
	$(".inquiry ul li input,.inquiry ul li textarea").blur(function(){
		$(this).parent().find("em").fadeIn();
	})
})


$(function(){
	$(".crfl span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".crconwrap .crcon").eq($(this).index()).fadeIn().siblings().hide();
	})
})


$(function(){
	$(".map .contactus .contactleft").click(function(){
		$(".map .contactus").toggleClass("active");
	})
})



$(document).ready(function() {
		
			
		if($("#menu > div").length > 5){
			$('#menu').slick({
		    	slidesToShow:3,
		    	infinite:false
		    });
	
			if($("#menu .cur").length>0){
				$("#menu").slick("slickGoTo",$("#menu .cur").parent().data("slick-index")-2);
			}
		}
		
		else {
			$('#menu').slick({
				slidesToShow:3,
				infinite:false
			});	
			
		}
		
		
	});
	
	
	
	
	$(function(){
		$(".join ul li").click(function(){
			$(this).toggleClass("active");
			$(this).find(".joincon").toggle();
			
		})
		
		$(".joincon").click(function(event){
			$(this).show();
			event.stopPropagation();
		})
	})
	
	
	$(function(){
		$(".nav ul li").hover(function(){
			$(this).find("ul").fadeIn();
		},function(){
			$(this).find("ul").stop(true).fadeOut('fast');
		})
	})
	
	
	$(function(){
		$(".nav ul li ul li").hover(function(){
			$(this).find(".threedown").show(200);
		},function(){
			$(this).find(".threedown").stop(true).hide();
		})
	})
