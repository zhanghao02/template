$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	$('.nav_m ul li').click(function(){
		$(this).parents('ul').slideUp();	
	});
	
	$('.i_service li:last-child').css('margin-right',0);
	$('.i_news_m li:nth-child(3n)').css('margin-right',0);
	$('.news li:nth-child(3n)').css('margin-right',0);
	$('.customer ul li:nth-child(3n)').css('margin-right',0);
	$('.i_customer li:nth-child(5n)').css('margin-right',0);
	$('.s_works ul li:nth-child(2n)').addClass('w_top');
	$('.service li:last-child').css('margin-right',0);
	//$('.service ul li:last-child').css('margin-right',0);
	$('.works dl:nth-child(2n) dt').css('float','right');
	$('.works dl:nth-child(2n) dd').css('float','left');
	
	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").click(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});
	
})


