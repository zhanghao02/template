$(function(){
	var w_width=$(window).width();
	var w_banner=(1920-w_width)/2;
//	$('.banner_s img').css('margin-left','-'+w_banner+'px');
	$('.header .head_bg').css('left','-'+w_banner+'px');
	$('.banner_s .jt').css('left','-'+w_banner+'px');
	$('.pro_lei .lei_bg').css('left','-'+w_banner+'px');
	$('.foot_m a:last-child').css('background','none');
	$('.ctt .ctt_bg').css('left','-'+w_banner+'px');
	$('.i_pro .bg').css('left','-'+w_banner+'px');
	$('.dp .bg').css('left','-'+w_banner+'px');
	$('.md .bg').css('left','-'+w_banner+'px');
	$('.about .box').css('margin-left','-'+w_banner+'px');
	
	$('.pro_l .p_list li:nth-child(3n)').css('float','right');
	$('.pro_l .p_list li:nth-child(3n)').css('margin-right',0+'px');
	$('.pro_l .p_list li .p_m').mousemove(function(){
		$(this).children('.wen').css('top',0+'px')
	});
	$('.pro_l .p_list li .p_m').mouseleave(function(){
		$(this).children('.wen').css('top','-120%')
	});
	
	$('.more').click(function(){
		$('.tck_bg').css('top',0+'px');
	});
	$('.close').click(function(){
		$(this).parent('.tck').parent('.tck_bg').css('top','100%');
	});
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
})