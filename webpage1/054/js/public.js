$(function() {
	
	$('.fang').click(function(){
		$(".text").toggle();
	})
	$('.nav_tu').click(function(){
		$(".nav_show").fadeIn();
	})
	$(".cha").click(function(){
	 $(".nav_show").fadeOut()	
	})
	
	/*nav_2*/
	  $('.nav_ul').tendina({
        animate: true,
        speed: 500,
        openCallback: function($clickedEl) {
          console.log($clickedEl);
        },
        closeCallback: function($clickedEl) {
          console.log($clickedEl);
        }
      })
	  $(".jop ul li").click(function(){
	  	$(this).find("p").show().end().siblings("li").find("p").hide();
	  })
});

var width_b = $(window).width();
var li_h = $(".pro_ul li");
	if(width_b>768){
		li_h.hover(function(){
			$(this).find(".a_right").addClass("hh").find("img").css("left","0");
			$(this).find(".right_hide").fadeIn()
		},function(){
		$(this).find(".right_hide").fadeOut()
		$(this).find(".a_right").removeClass("hh").find("img").css("left","-50%");
		});
		
	}
	
