$(function(){           

$(".dbanner").find("iframe").height($(window).height()-233)
var navBox = $('.tabTagBox'), navList = $('.tabTagList'), navs = navList.children('li'), upBtn = $('.uPrev'), downBtn = $('.dNext'), contentBoxs = $('.tabcon');

var opts = {
moveH: 223,
moveSpeed: 200,
curMoveH: 0,
curSumH: 0,
curNavIndex: 0
}
var curtotle=$(".tabTagBox ul li").length
opts.curSumH = (opts.moveH * navs.size()) - 1115;

var navToContentBox = function () {
navs.removeClass('cur');
contentBoxs.hide().eq(opts.curNavIndex).show();
}

var navMove = function () {

var _arg = arguments.length > 0 ? arguments[0] : '';

if (_arg === 'left') {
if (-opts.curSumH === opts.curMoveH) {
//alert('温馨提示：！');
return;
}
opts.curMoveH -= opts.moveH;
opts.curNavIndex += 1;
}

if (_arg === 'right') {
if (opts.curMoveH === 0) {
//alert('温馨提示：已经是第一个了！');
return;
}
opts.curMoveH += opts.moveH;
opts.curNavIndex -= 1;
}

navToContentBox();
navs.eq(opts.curNavIndex).addClass('cur');
navList.animate({ left: opts.curMoveH + 'px' }, opts.moveSpeed);

}

upBtn.click(function () {
navMove('right');
});

downBtn.click(function () {
navMove('left');


});

navs.click(function () {
opts.curNavIndex = $(this).index();
navToContentBox();
$(this).addClass('cur');
});

});
