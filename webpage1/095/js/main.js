$(function() {

	bigxgf("#meeting-photo", "li", ".meetimgBtn", "#meeting-bottomBtn", "7000",
			"3000", "current-this");// 首页banner轮播
	function bigxgf(wrapbox, slide, btnBox, imgBtn, speeds, time, current) { // 首页banner轮播
		var speed = 800, changetime = time, qq = $(wrapbox), ee = qq
				.children(slide), c = $(btnBox), d = $(imgBtn), timer0 = null, inow = 0;

		for (var i = 0; i < ee.length; i++) {

			d.append("<li></li>");
		}
		if (ee.length < 2) {
			d.hide();
		}

		ee.first().css("display", "block");
		d.find("li").eq(0).addClass(current);
		timer0 = setInterval(autoshow, changetime);

		function slide(i) {
			index = i;
			ee.eq(index).stop().fadeIn(speed).siblings().fadeOut(speed);
			d.find("li").eq(index).addClass(current).siblings().removeClass(
					current);
		}

		function autoshow() {
			if (inow == ee.length - 1) {
				inow = 0;
			} else {
				inow++;
			}
			slide(inow);
		}

		opre(); /* 左右按钮 */
		onext();

		function opre() {
			c.eq(0).click(function(event) {

				thop();

				/* Act on the event */
				ee.stop(true, true);
				clearInterval(timer0);
				if (inow == 0) {
					inow = ee.length - 1;
				} else {
					inow--;
				}
				slide(inow);
				timer0 = setInterval(autoshow, changetime);
			});
		}

		function onext() {
			c.eq(1).click(function(event) {

				/* Act on the event */
				clearInterval(timer0);
				ee.stop(true, true);
				if (inow == ee.length - 1) {
					inow = 0;
				} else {
					inow++;
				}
				slide(inow);
				timer0 = setInterval(autoshow, changetime);
			});
		}
		d.find("li").bind("click", function() {
			clearInterval(timer0);
			var index = $(this).index();
			inow = index;

			slide(inow);
			timer0 = setInterval(autoshow, changetime);
		})

	}
}) /* 首页轮播end */

$(function() {
	$('.header .guide .code').hover(function() {
		$('.header .guide .show-code').fadeIn();
	}, function() {
		$('.header .guide .show-code').fadeOut(1000);
	});

	$('.use').on("click", function() {
		$('#address_form').each(function(e) {
			layer.open({
				type : 1,
				skin : 'new-address-layer',
				title : false,
				closeBtn : false,
				shadeClose : true,
				area : [ '648px', '404px' ],
				content : $(this)
			});
		});
	});
	$('.lasyer-shut').click(function() {
		layer.closeAll();
	});

	$('.on-other').click(function() {
		$('.popup-pay-way').each(function() {
			layer.open({
				type : 1,
				title : false,
				skin : 'pay-way-layer',
				closeBtn : false,
				shadeClose : true,
				area : [ '958px', '309px' ],
				content : $(this)
			});
		});
	});
	$('.layer-shut').click(function() {
		layer.closeAll()
	});

	$('.gd_main .dccr .dccr-child').eq(0).show();
	$('.gd_main .gd_top ul li').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var dq = $(this).index();
		$('.gd_main .dccr .dccr-child').hide();
		$('.gd_main .dccr .dccr-child').eq(dq).show();
	});

	$('.pbp_main .pbp-child').eq(0).show();
	$('.pbp_main .pm_box .v-pay dd a').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var id = $(this).index();
		$('.pbp_main .pbp-child').hide();
		$('.pbp_main .pbp-child').eq(id).show();
	});

	$('.c_s_tab_main .c_s_tab').eq(0).show();
	$('.within-banner .tab ul li').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var id = $(this).index();
		$('.c_s_tab_main .c_s_tab').hide();
		$('.c_s_tab_main .c_s_tab').eq(id).show();
	});

	$('.goods-content .goods-box .r_skin .odl dd .g_choose a').click(
			function() {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
			});

	$('.other-show .points ul li').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.logo_main .pay-tab').eq(0).show();
	$('.logo_main .regpay li').click(function() {
		var id = $(this).index();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.logo_main .pay-tab').hide();
		$('.logo_main .pay-tab').eq(id).show();
	});

	$('.goods-content .goods-box .left .MagnifierMain').hover(
			function() {
				$('.goods-content .goods-box .left .MagnifierMain .glass')
						.hide();
				$('.city-picker-span .title').hide();
				$('.city-picker-dropdown').hide();
				$('.goods-content .goods-box .r_skin .odl dd .add_chose')
						.addClass('hide');
			},
			function() {
				$('.goods-content .goods-box .left .MagnifierMain .glass')
						.show();
				$('.city-picker-span .title').show();
				$('.goods-content .goods-box .r_skin .odl dd .add_chose')
						.removeClass('hide');
			});

	$('.car_main .coupons-box h3').click(function() {
		$('.car_main .coupons-box .use_c').toggle();
		$('.car_main .coupons-box .vouchers').toggle();
	});
	$('.footer .advan span:last').css('margin-right', '0');
	$('.p_c .p_c_screening ul li').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	$('.p_c .p_c_sorting ul li').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	$('.car_main .pay-way-box .label-box:last ').css('margin-right', '0');
	$('.popup-pay-way .pay-way-box .label-box:last ').css('margin-right', '0');
	$('.footer .friendship li:first').css('padding', '0 0 0 5px');
	$('.footer .friendship li:first').css('background', 'none');
	$('.footer .friendship li:last').css('padding', '0 0 0 5px');
	$('.footer .friendship li:last').css('background', 'none');

	$('.logo_main .lleft dl dd .ip').click(function() {
		$(this).offsetParent('dd').find('input').focus();
	});
	$('.pbp_main .child dl dd .ip').click(function() {
		$(this).offsetParent('dd').find('input').focus();
	});

});

$(window).load(function() {
	// 定位左右上下居中
	$('.sxjz').css('margin-top', -$('.sxjz').height() / 2);
	$('.zyjz').css('margin-left', -$('.zyjz').width() / 2);
	$('.lhon .lh').css('line-height', $('.lhon').height() + "px");
	$('.lh').show();
	$('.content .project .list:last').css('border-right', 'none');
	$('.footer .fnav-box .fnav:last').css('border-right', 'none');
	$('#address_form').hide();
});