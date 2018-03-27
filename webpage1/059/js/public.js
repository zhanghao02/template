$(function() {
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: '菜单',
		},
		navbars		: [
			 {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			} 
		]
	});
});

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


$(function(){
	$(".weixin").hover(function(){
		$("img[src='images/weixinh.png']").attr('src','images/weixin.png');
	},function(){
		$("img[src='images/weixin.png']").attr('src','images/weixinh.png');
	})
	$(".weibo").hover(function(){
		$("img[src='images/weiboh.png']").attr('src','images/weibo.png');
	},function(){
		$("img[src='images/weibo.png']").attr('src','images/weiboh.png');
	})
})



$(document).ready(function() {
		
			
		if($("#menu > div").length > 5){
			$('#menu').slick({
		    	slidesToShow:5,
		    	infinite:false
		    });
	
			if($("#menu .cur").length>0){
				$("#menu").slick("slickGoTo",$("#menu .cur").parent().data("slick-index")-4);
			}
		}
		
		else {
			$('#menu').slick({
				slidesToShow:5,
				infinite:false
			});	
			
		}
		
		
	});
	
	
	
//	$(function(){
//		$(".honorcon ul li").hover(function(){
//			$(this).find(".zzc").show();
//		})
//	})



$(function(){
	$(".job ul li").click(function(){
		$(this).toggleClass("active");
		$(this).find(".jobcon").toggleClass("slideDown");
	})
	
	$(".job ul li .jobcon").click(function(event){
		$(this).show();
		event.stopPropagation();
	})
})


$(function(){
	$(".nav ul li").hover(function(){
		$(this).find("ul").addClass("slideRight");
		$(this).find("ul").show();
	},function(){
		$(this).find("ul").removeClass("slideRight");
		$(this).find("ul").hide();
	})
})

$(function(){
	$(".nav ul li ul li").hover(function(){
		$(this).find(".three").show();
	},function(){
		$(this).find(".three").hide();
	})
})


