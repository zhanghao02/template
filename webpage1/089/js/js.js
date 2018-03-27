
// 项目
window.onload=function()
{
	var oTab=document.getElementById("cen_right_top1");
	var aH3=oTab.getElementsByTagName("h3");
	var aDiv=oTab.getElementsByTagName("div");
	for(var i=0;i<aH3.length;i++)
	{
		aH3[i].index=i;
		aH3[i].onmouseover=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH3[i].className="";
				aDiv[i].style.display="none";
			}
			this.className="active";
			aDiv[this.index].style.display="block";
		}
	}
	
	var oTab2=document.getElementById("cen_right_top2");
	var aH32=oTab2.getElementsByTagName("h3");
	var aDiv2=oTab2.getElementsByTagName("div");
	for(var i=0;i<aH32.length;i++)
	{
		aH32[i].index=i;
		aH32[i].onmouseover=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH32[i].className="";
				aDiv2[i].style.display="none";
			}
			this.className="active";
			aDiv2[this.index].style.display="block";
		}
	}
	
	var oTab3=document.getElementById("cen_right_top3");
	var aH33=oTab3.getElementsByTagName("h3");
	var aDiv3=oTab3.getElementsByTagName("div");
	for(var i=0;i<aH33.length;i++)
	{
		aH33[i].index=i;
		aH33[i].onmouseover=function()
		{
			for(var i=0;i<aH3.length;i++)
			{
				aH33[i].className="";
				aDiv3[i].style.display="none";
			}
			this.className="active";
			aDiv3[this.index].style.display="block";
		}
	}
	
}



// 切换标签效果
$(function($){
	$(".slideBox").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox1").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox2").switchTab({trigger: "mouseover", delayTime: 0});
	$(".slideBox3").switchTab({trigger: "mouseover", delayTime: 0});
});


// 滚动图片
$.fn.imgscroll = function(o){
	var defaults = {
		speed: 40,
		amount: 0,
		width: 1,
		dir: "left"
	};
	o = $.extend(defaults, o);
	
	return this.each(function(){
		var _li = $("li", this);
		_li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
		_li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
		_li.css({position: "relative", overflow: "hidden"}); //li
		if(o.dir == "left") _li.css({float: "left"});
		
		//初始大小
		var _li_size = 0;
		for(var i=0; i<_li.size(); i++)
			_li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);
		
		//循环所需要的元素
		if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
		_li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
		_li = $("li", this);

		//滚动
		var _li_scroll = 0;
		function goto(){
			_li_scroll += o.width;
			if(_li_scroll > _li_size)
			{
				_li_scroll = 0;
				_li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
				_li_scroll += o.width;
			}
				_li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
		}
		
		//开始
		var move = setInterval(function(){ goto(); }, o.speed);
		_li.parent().hover(function(){
			clearInterval(move);
		},function(){
			clearInterval(move);
			move = setInterval(function(){ goto(); }, o.speed);
		});
	});
};

$(document).ready(function(){

	$(".scrollleft").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
	});
	
	$(".HZMHXZ").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
	});
	
	$(".team_nr_2").imgscroll({
		speed: 40,    //图片滚动速度
		amount: 0,    //图片滚动过渡时间
		width: 1,     //图片滚动步数
		dir: "left"   // "left" 或 "up" 向左或向上滚动
	});
});


