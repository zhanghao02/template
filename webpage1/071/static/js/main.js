$(function() {
	var time = 7; //进度条时间，以秒为单位，越小越快

	var $progressBar, $bar, $elem, isPause, tick, percentTime;

	$('#owl-demo').owlCarousel({
		slideSpeed: 500,
		paginationSpeed: 500,
		singleItem: true,
		afterInit: progressBar,
		afterMove: moved,
		startDragging: pauseOnDragging
	});

	function progressBar(elem) {
		$elem = elem;
		buildProgressBar();
		start();
	}

	function buildProgressBar() {
		$progressBar = $('<div>', {
			id: 'progressBar'
		});
		$bar = $('<div>', {
			id: 'bar'
		});
		$progressBar.append($bar).insertAfter($elem.children().eq(0));
	}

	function start() {
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}

	function interval() {
		if(isPause === false) {
			percentTime += 1 / time;
			$bar.css({
				width: percentTime + '%'
			});
			if(percentTime >= 100) {
				$elem.trigger('')
			}
		}
	}

	function pauseOnDragging() {
		isPause = true;
	}

	function moved() {
		clearTimeout(tick);
		start();
	}

	//$elem.on('mouseover', function() {
	isPause = true;
})

//$elem.on('mouseout', function() {
isPause = false;
//});
//});

$(function() {
	$('#owl-demo5,#owl-demo6,#owl-demo2').owlCarousel({
		items: 4
	});
});

$(function() {
	$('#owl-demo4').owlCarousel({
		items: 3
	});
});

$(function() {
	$('#owl-demo3').owlCarousel({
		items: 1,
		autoPlay: 3000,
		autoHeight: true,
		transitionStyle: 'fade'
	});
});

/*回到顶部特效*/
$(function() {
	/*根据滚动距离判断按钮是否显示或隐藏*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$(".top").fadeIn(200);
		} else {
			$(".top").fadeOut(200);
		}
	});
	/*实现点击滚动回顶部*/
	$(".top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	});
})