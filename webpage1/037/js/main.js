$(function(){
    var time = 7;    //进度条时间，以秒为单位，越小越快
 
    var $progressBar, $bar, $elem, isPause, tick, percentTime;
 
    $('#owl-demo,#owl-demo3').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging
    });
 
    function progressBar(elem){
        $elem = elem;
        buildProgressBar();
        start();
    }
 
    function buildProgressBar(){
        $progressBar = $('<div>',{
            id:'progressBar'
        });
        $bar = $('<div>',{
            id:'bar'
        });
        $progressBar.append($bar).insertAfter($elem.children().eq(0));
    }
 
    function start(){
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
 
    function interval(){
        if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
                width: percentTime+'%'
            });
            if(percentTime >= 100){
                $elem.trigger('owl.next')
            }
        }
    }
 
    function pauseOnDragging(){
        isPause = true;
    }
 
    function moved(){
        clearTimeout(tick);
        start();
    }
 
    $elem.on('mouseover',function(){
        isPause = true;
    })
 
    $elem.on('mouseout',function(){
        isPause = false;
    });
});


$(function(){
    $('#owl-demo2').owlCarousel();
});




$('#nav-menu .menu > li').hover(function(){
		$(this).find('.children').animate({ opacity:'show', height:'show' },200);
		$(this).find('.xialaguang').addClass('navhover');
	}, function() {
		$('.children').stop(true,true).hide();
		$('.xialaguang').removeClass('navhover');
	});
	

	$(function(){
	   $('#left-menu').sidr({
		name: 'sidr-left',
		side: 'right'
	    });
	});





