



$(document).ready(function(){
	$("#layout-t span:first").addClass("current");
	$("#layout-t .tab-bd-con:gt(0)").hide();
	$("#layout-t span").mouseover(function(){//mouseover 改为 click 将变成点击后才显示，mouseover是滑过就显示
	$(this).addClass("current").siblings("span").removeClass("current");
	$("#layout-t .tab-bd-con:eq("+$(this).index()+")").show().siblings(".tab-bd-con").hide().addClass("current");
	});
	
	$(".list-tweet >li").mouseover(function(){
		$(this).removeClass("drink-me");
		$(this).addClass("eat-me");
		$(".list-tweet >li:first").removeClass("eat-me");
		$(".list-tweet >li:first").addClass("drink-me");
	});
	$(".list-tweet >li").mouseout(function(){
		$(this).removeClass("eat-me");
		$(this).addClass("drink-me");
		$(".list-tweet >li:first").addClass("eat-me");
		$(".list-tweet >li:first").removeClass("drink-me");
	});
	$(".list-tweet >li").mouseover(function(){
		$(this).removeClass("drink-me");
		$(this).addClass("eat-me");
});
});



$(function(){
	var spLength = $('.slide_point span').length,
		scimgWidth = $(window).width(),
		sulWidth = scimgWidth * spLength,
		sNum = 0;
		$(".slide_cont ul").width(sulWidth);
		$(".slide_cont ul li").width(scimgWidth);
	var sTimer = setInterval(moveSlide,2000);
	function moveSlide(){
			sNum++;
			if (sNum >= spLength) {
				sNum = 0;
			};
			showPics(sNum);
		}
	//鼠标移入下方的块进行滚动
	$('.slide_point span').mouseover(function(){
			clearInterval(sTimer);
			sNum = $(this).index();
			showPics(sNum);
		}).mouseleave(function(){
			sTimer = setInterval(moveSlide,2000);
		});
	//图片自动滚动
	function showPics(sNum){
		$(".slide_point span").eq(sNum).addClass("cur_point").siblings().removeClass("cur_point");
		$(".slide_cont ul").animate({
			"margin-left" : -scimgWidth * sNum 
		});

	}
});
	
	
	
	
	
/**/
// 导航
jQuery(document).ready(function(){
	var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
		});
		$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').removeClass('nav-up-selected');
		$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
});




// 导航

$(function(){
        /*search 点击事件*/
        search();
        ahover();
        mask();
        gnhd();
        close();
        bhover() ;
        document.domain = "globevisa.com.cn";
        bhover1();
        //a("http://ui.globevisa.com.cn/xtl/2.html",'.hq_oversea_china');
    });

    /*
     * search 点击事件
     */
    function search(){
        $('.sh-navbar').click(function(e){
            if($('.sh-list').css('display')!= 'block'){
                $(this).css({
                    'background':'url(http://www.globevisa.com.cn/statics/images/icon-shang.png) no-repeat 38px center',
                    'background-size':'12px'
                });
                $('.sh-list').slideDown(300);
            }else{
                slideUp();
            }
        });

        $('.sh-list-li').click(function(e){
            $('.sh-navbar').html($(this).html());
            slideUp();
            if($(this).index() == 0) {
                $('.sh-text').attr('placeholder','欧洲置业说明会');
            }else if($(this).index() == 1){
                $('.sh-text').attr('placeholder','环球获塞浦路斯总统颁发杰出服务奖');
            }
        });

        $(".sh_btn").click(function(e){

            var txt = $(".sh-text").val();
            if($(".sh-navbar").html()=="新闻"){
                window.location="http://www.globevisa.com.cn/index.php?m=globevisanews&c=index&a=newslist&catid=142&keyword="+txt;
            }else{
                window.location="http://www.globevisa.com.cn/index.php?m=globevisanews&c=index&a=newslist&catid=17&keyword="+txt;
            }

        })
    };



    /*
     * 隐藏search选项
     */
   
    function ahover(){
        $('.gm-project').hover(function(){
            if($(this).hasClass('ymbd')) {
                $(this).children('.gmp-ul').css({
                    'width':140+'px'
                })
                $(this).children('a').addClass('about-cur');
            }else{
                $(this).children('a').addClass('about-cur');
            }

            $(this).children('.gmp-ul').show();
        },function(){
            $(this).children('a').removeClass('about-cur');
            $(this).children('.gmp-ul').hide();

        });
    }
	
    /*
     * 金牌项目子项目hover事件
     */

    function bhover(){
        $('.gmp-list').hover(function(){
            if($(this).hasClass('sb')){
                $(this).parent('ul').css({
                    'width':'140px'
                });
                $(this).children('a').css({
                    'color':'rgba(212,9,21,1)'
                })
            }else{
                $(this).children('a').addClass('gmp-cur');
                $(this).siblings().children('a').removeClass('gmp-cur');
                $(this).children('ul').show();
                $(this).siblings().children('ul').hide();
            }
        },function(){
            if($(this).hasClass('sb')){
                if($(this).closest('.gm-project').hasClass('ymbd')){
                    $(this).parent('ul').css({
                        'width':'140px'
                    });
                } else {
                    $(this).parent('ul').css({
                        'width':'750px'
                    });
                }
                $(this).children('a').css({
                    'color':'rgba(0,0,0,1)'
                })

            }



        });
    }

    function bhover1(){
        $('.jpxm .gmp-list').hover(function(){
            $(this).children('a').addClass('gmp-cur');
            $(this).siblings().children('a').removeClass('gmp-cur');
            $(this).children('ul').show();
            $(this).siblings().children('ul').hide();
        });

    }

    function mask(){
        $('.mask').height($(window).height())+'px';
    }

    function gnhd(){

        $('.gnhd').click(function(){
            $('.mask').css('display','block');
        })
    }

    function callBack_s(){
        $('.mask').css('display','block');
    }
    function close(){
        $('.close').click(function(){
            $('.mask').css('display','none');
        })
    }


