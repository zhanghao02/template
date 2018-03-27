/**
 * 青峰响应式 index
 */
define(function(require) {
	var $ = require('$');
	var base = require('base');
    var responsive = require('responsive'),
        type = responsive.getType();

    require.async('widgets/jquery.nicescroll.min');
    //require.async('widgets/device.min');
    // 底部行销转换工具
require.async('widgets/sellFootBar/sellFootBar');
// 手机端转换工具
require.async('widgets/sellMobTool/marketing');
    //懒加载
    require.async('widgets/echo.js',function(){
        echo.init({
            offset: 100,
            throttle: 250,
            unload: false,
            callback: function(element, op) {
                //console.log(element, 'has been', op + 'ed')
            }
        })
    })

    //青峰响应式-banner
    if($('.indexbanner').length){
        require.async('widgets/tslide/tslide',function(){
          $('.indexbanner').slide({
             wrap: 'ul',                //指定包裹元素
             cell: 'li',                //指定切换元素
             effect:'slide',            //切换效果，默认slide，可选/slide\fade\toggle
             speed:500,                 //切换速度
             start:0,                   //起始帧，默认0，即从第一张开始
             auto:true,                //自动播放
             pause:true,                //布尔值或jquery选择器，指定的jquery选择器将作为暂停按钮，暂停时添加'pause'类
             time:5e3,                  //自动播放间隔
             act:"click",          //导航按钮触发事件 mouseenter
             prev:null,                 //指定左箭头，默认无，自动添加'.arrs .arr_prev'
             next:null,                 //指定右箭头，默认无，自动添加'.arrs .arr_next'
             navs:'.slide_nav a',       //指定导航按钮，默认无，自动添加'.slide_nav'或使用$('.demo .slide_nav')
             imgattr: 'slide-src',      //按需加载图片的地址标签，注意不能与全局图片响应标签冲突(data-src)
             callback:function(a,b,c){},//回调，@param ($this,$b_,n) : 效果元素，切换元素，当前帧序号
             ext:function(a,b,c){},     //扩展，@param ($this,$b_,count) : 效果元素，切换元素，总帧数
             reload:false               //是否重载slide，修改配置并重载slide时该值必须为true
          });
        });
    }

    //青峰响应式-马灯 
    if($('.jcarousel').length){
        require.async('widgets/jcarousel/jcarousel', function(jcarousel) {
            jcarousel('#jcarousel1', 4, 3, 1,2,3000,400,0); //虎山一览
        })
    }
        
    //青峰响应式-滚动
    if($('.js_superslide').length){
        require.async('widgets/superslide',function(){
            $(".limiSlide").slider({ titCell:".hd a",mainCell:".bd ul",effect:"leftLoop",autoPlay:false,vis:1,scroll:1,easing:"easeInQuint"});
        });
    }

    //移动端图片相册效果
    if($('.js-baguetteBox').length){
        // $('.js-baguetteBox img').each(function(i){
        //     var imgsrc = $(this).attr('src');
        //     var imga   = "<a href='"+imgsrc+"' id='magnifier'></a>";
        //     $(this).wrap(function(){
        //       return imga
        //     });
        // })
        require('widgets/baguetteBox/baguetteBox.css');
        require.async('widgets/baguetteBox/baguetteBox',function(){
            baguetteBox.run('.js-baguetteBox',{animation: 'fadeIn',});
            $(".baguetteBox-overlay").wrap(function(){
                return "<div class='jj'></div>";
            })
        });

        //自定义
        $(".baguetteBoxDiy a").click(function(){
            $('#diylay').animate({'opacity':1},100).fadeIn()
        })
    }

    //顶部微信分享
    if($('.js_qr').length){
        $('.js_qr').click(function(){
            wxDialog = new xqDialog({ scroll: 'auto' });
            wxDialog.open({
                opacity: 0.95,
                href: $(this).attr('data-url'),
                open: function() {
                    
                },
                close: function() {
                    
                }
            });
        });
    }

    //折叠式菜单
    if($('.js-accordion').length){
        require.async('widgets/jquery/jquery-ui.js',function(){
            var icons = {
              header: "ui-icon-circle-arrow-e",
              activeHeader: "ui-icon-circle-arrow-s"
            };
            $( "#accordion" ).accordion({
                active: 0,
                collapsible: true,
                icons: icons,
                heightStyle: "content" 
            });
        });
    }

    //swiper
    require.async('widgets/swiper/swiper.min.js',function(){
        var swiper1 = new Swiper('#swiper_cate', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 6,
            spaceBetween: 50,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
        var swiper2 = new Swiper('#swiper_news', {
            nextButton: '.news-button-next',
            prevButton: '.news-button-prev',
            slidesPerView: 1,
            spaceBetween: 50,
            effect: 'slide',
            autoplay : 3000,
            speed:1000
        });
        //swiper2.disableTouchControl();
    });
    
	

	//tab_link
	var $index_tab_list = $('.index_tab_list');
	$('.tab_link').find('li').click(function() {
		var _ajaxPage,
			i = $(this).index(),
			_ajaxAddr = './';
		$(this).addClass('cur').siblings().removeClass('cur');
		switch (i) {
			case 0:
				_ajaxPage = _ajaxAddr + 'ajax-i-intro.html';
				break;
			case 1:
				//_ajaxPage=_ajaxAddr+'ajax-i-brand.html';
				_ajaxPage = _ajaxAddr + 'ajax-i-culture.html';
				break;
			case 2:
				_ajaxPage = _ajaxAddr + 'ajax-i-corp.html';
				break;
			default:
				_ajaxPage = _ajaxAddr + 'ajax-i-intro.html';
		};
		$.ajax(_ajaxPage, {
			contentType: "html",
			success: function(html) {
				$index_tab_list.html(html)
			}
		})
	});
	$('.tab_link').find('li').eq(0).click();



	/* ---------------------------------------------------------- */
    /*                                                            */
    /* 加载动画                                                   */
    /* 使用wo.js                                                  */
    /*                                                            */
    /*                                                            */
    /*                                                            */
    /* - Time  : 2016.07.21                                       */
    /* - Author: BoBo                                             */
    /*                                                            */
    /* ---------------------------------------------------------- */

    if(type !='Mobile'){
        require.async('widgets/wow/wow.min.js',function(){
            new WOW().init();
        });
    }


    function getWindowHeight() {
        var myWidth = 0, myHeight = 0;
        if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            myHeight = document.body.clientHeight;
        }

        return myHeight
    }

    var scrollbool = false;
    function appearNum(){
        var element_offset = $('.section_about').offset(),
            element_top = element_offset.top;
            bottom_of_window = $(window).scrollTop() + getWindowHeight();
        var buffer = $('.section_about').outerHeight()/1;
        if( bottom_of_window > element_top + buffer) {
            if(!scrollbool){
                scrollbool = true;
                
                $(".num_conts .num_cont:eq(0) span").html(0);
                $(".num_conts .num_cont:eq(1) span").html(0);
                $(".num_conts .num_cont:eq(2) span").html(1000);
                $(".num_conts .num_cont:eq(3) span").html(0);
                var i1=0;
                var i2=800;
                var i3=1000;
                var i4=0;
                setTimeout(function(){
                    var child1=setInterval(function(){
                        ++i1;
                        if(i1>=106)clearInterval(child1);
                        $(".num_conts .num_cont:eq(0) span").html(i1);
                    },14);
                    var child2=setInterval(function(){
                        i2=i2+100;
                        if(i2>=9200)clearInterval(child2);
                        $(".num_conts .num_cont:eq(1) span").html(i2);
                    },16);
                    var child3=setInterval(function(){
                        i3=i3+100;
                        if(i3>=12000)clearInterval(child3);
                        $(".num_conts .num_cont:eq(2) span").html(i3);
                    },12);
                    var child4=setInterval(function(){
                        ++i4;
                        if(i4>=36)clearInterval(child4);
                        $(".num_conts .num_cont:eq(3) span").html(i4);
                    },20);
                },500);
                
            }
        }
    }

	$(function(){
		$('.opc0').animate({'opacity':'1'},'fast').fadeIn();
		
        $(".news-box").hover(function(){
			$(this).toggleClass('on');
		});
		
        // if(!device.mobile() && !device.tablet()){
        //     /* Every time the window is scrolled ... */
        //     $(window).scroll( function() {
        //         if($('.section_about').offset()){
        //             appearNum();
        //         }
        //     });
        // }
	})

    var globalDebug         = false,
        windowWidth         = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        windowHeight        = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    /* --- NICESCROLL --- */

    var $body               = $('body'),
        $html               = $('html'),
        $window             = $(window),
        $document           = $(document),
        documentHeight      = $document.height(),
        aspectRatio         = windowWidth / windowHeight,
        orientation         = windowWidth > windowHeight ? 'landscape' : 'portrait',
        orientationchange   = false;

    function niceScrollInit() {
        if (globalDebug) {console.log("NiceScroll Init");}

        var smoothScroll    = $('body').data('smoothscrolling') !== undefined,
            root            = document.documentElement;

        if (smoothScroll && !is_EDGE && !Modernizr.touchevents && !is_mobile_ie && !is_OSX) {

            var $window = $(window);        // Window object

            $window.on("mousewheel DOMMouseScroll", function(event) {

                var scrollTo,
                    scrollDistance  = 400,
                    delta;

                if (event.type == 'mousewheel') {
                    delta    = event.originalEvent.wheelDelta / 120;
                }
                else if (event.type == 'DOMMouseScroll') {
                    delta    = - event.originalEvent.detail / 3;
                }

                scrollTo = latestKnownScrollY - delta * scrollDistance;

                if (scrollTo) {

                    event.preventDefault();

                    TweenMax.to($window, .6, {
                        scrollTo: {
                            y:          scrollTo,
                            autoKill:   true
                        },
                        ease:           Power1.easeOut, // For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
                        autoKill:       true,
                        overwrite:      5
                    });

                }

            });

        }

    }


    function smoothScrollTo(y, speed) {

        speed = typeof speed == "undefined" ? 1 : speed;

        var distance = Math.abs(latestKnownScrollY - y),
            time     = speed * distance / 2000;

        TweenMax.to($(window), time, {scrollTo: {y: y, autoKill: true, ease: Quint.easeInOut}});
    }

    $(window).load(function() {

        

        // if (!$('html').is('.ie9, .lt-ie9')) {
        //     setTimeout(function() {
        //         Parallax.initialize();
        //         CoverAnimation.initialize();
        //     }, 600);
        // } else {
        //     setTimeout(function() {
        //         Parallax.initialize();
        //         CoverAnimation.initialize();
        //     }, 400);
        // }
        // niceScrollInit();

        // $html.addClass('is--loaded');
    });
})