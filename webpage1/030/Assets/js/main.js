$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	$('.fw .fw_bg img').css('margin-left','-'+m_l+'px');
	
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	$('.nav_m ul li').click(function(){
		$(this).parents('ul').slideUp();	
	});
	
	
	$('.i_brd_m li:last-child').css('margin-right',0+'px');
	$('.scd_l .s_nav li').click(function(){
		$(this).siblings('li').removeClass('now');
		$(this).addClass('now');
	});
	
	$('.pro_l li:nth-child(3n)').css('margin-right',0+'px');
	
})