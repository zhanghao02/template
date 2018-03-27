/*
 * name: slide.js
 * version: v1.5.3
 * update: 1张时也执行一次callback
 * date: 2014-12-25
 */
define(function(require, exports, module) {
    var $ = require('$');
    //require('./tslide.css');
    require('../touch');
    require('../base');
    
    //main	
    $.fn.slide = function(config) {
        var opt = {
                wrap: 'ul',
                cell: 'li',
                effect: 'fade',    // slide | fade | toggle
                speed: 480,
                start: 0,
                auto: true,
                pause: true,        // true | false | (string|element)
                time: 5e3,
                act: "mouseenter",
                prev: null,
                next: null,
                navs: null,
                imgattr: 'slide-src',
                callback: function() {},
                ext: function() {}
            },
            $this = $(this).addClass('slide'),
            $w = null,
            $b = null,
            t = null,
            $navs = null,
            $p = null,
            $n = null,
            origin = 0,
            count = 0,
            width = 0,
            efftct = $.noop(),
            getNext = $.noop(),
            getPrev = $.noop(),
            getNav = $.noop(),
            init = $.noop(),
            windowLock = false;
        $.extend(opt, config || {}, $this.data("config") || {});

        $w = $this.find(opt.wrap).addClass('slide_wrap');
        $b = $w.find(opt.cell).addClass('slide_c');
        count = $b.length;
        if ($this.data('slideruning')) return $this;        
        //初始化
        init = function() {
            var H = $this.outerHeight();
            width = parseInt($this.width());
            $w.css({
                'height': H
            });
            $b.css({
                'position': 'absolute',
                'height': H
            });
            switch (opt.effect) {
                case 'slide':
                    $w.css({
                        'left': -width + 'px',
                        'width': width * 3 + 'px'
                    });
                    $b.
                    _css('left', width + 'px').
                    css({
                        'width': width + 'px',
                        'z-index': '0',
                        'display': 'none'
                    }).
                    unbind().
                    bind({
                        'movestart': function(e) {
                            if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
                                e.preventDefault();
                                return false
                            };
                            opt.auto && clearInterval(t);

                            $this.addClass('ontouch');
                        },
                        'move': function(e) {
                            $w.css({
                                'left': -width + e.distX / 2 + 'px'
                            })
                            if (e.distX < 0 && $b[origin + 1]) {
                                $b.eq(getNext(origin))._loadimg(opt.imgattr).show()._css('left', width * 2 + 'px')
                            };
                            if (e.distX > 0 && $b[origin - 1]) {
                                $b.eq(getPrev(origin))._loadimg(opt.imgattr).show()._css('left', 0 + 'px')
                            };
                        },
                        'moveend': function(e) {
                            $this.removeClass('ontouch');
                            if (Math.abs(e.distX) > width / 5) {
                                if (e.distX < 0) {
                                    efftct(getNext(origin), 1)
                                } else {
                                    efftct(getPrev(origin), 0)
                                }
                            } else {
                                $w.css({
                                    'left': -width + 'px'
                                })
                            }
                        }
                    })
                    break;
            };
        };
        init();
        //运行条件检测
        if (count <= 1) {
            $this.addClass('unable');
            $b.unbind()._loadimg(opt.imgattr).show();
            opt.callback && opt.callback($this, $b, origin);
            opt.ext && opt.ext($this, $b, count);
            return $this;
        };
        //添加导航
        getNav = function() {
            if (opt.navs && $(opt.navs).length) {
                $navs = $(opt.navs);
            } else {
                $navs = $('<div class="slide_nav"></div>');
                if ($this.find(".slide_nav").length) {
                    $navs.html($this.find(".slide_nav").html());
                    $this.find(".slide_nav").remove();
                } else {
                    for (i = 0; i < count; i++) {
                        $navs.append("<a>" + (i + 1) + "</a>");
                    };
                };
                $this.append($navs);
                $navs = $navs.children('a');
            }
        };
        getNav();

        //添加左右按钮
        if ($(opt.prev).length && $(opt.next).length) {
            $p = $(opt.prev);
            $n = $(opt.next);
        } else {
            $this.append('<a class="arrs arr_prev" /> <a class="arrs arr_next" />');
            $p = $this.children(".arr_prev");
            $n = $this.children(".arr_next");
        };    
        //获取上一个下一个
        getPrev = function(number, _step) {
            _step = _step ? _step : 1;
            number = number <= 0 ? count - _step : number - _step;
            return number;
        };
        getNext = function(number, _step) {
            _step = _step ? _step : 1;
            number = number >= count - _step ? 0 : number + _step;

            return number;
        };
        //效果
        efftct = function(current, direct, step, isInit) {
            windowLock = true;
            if ($this.find(':animated').length || $this.hasClass('ontouch')) return true;
            var _step = step ? step : 1,
                _prev = getPrev(current, _step),
                _next = getNext(current, _step);

            $navs.removeClass('on nav_prev nav_next').eq(current).addClass('on').end().eq(_prev).addClass("nav_prev").end().eq(_next).addClass("nav_next");
            $b.removeClass('active slide_prev slide_next').eq(current).addClass('active').end().eq(_prev).addClass("slide_prev").end().eq(_next).addClass("slide_next");
            switch (opt.effect) {
                case 'fade':
                    $b.stop(1, 0).filter(':visible').fadeOut(opt.speed).end().eq(current)._loadimg(opt.imgattr).fadeIn(opt.speed * 1.5);
                    break;
                case 'toggle':
                    $b.hide().eq(current)._loadimg(opt.imgattr).show();
                    break;
                case 'slide':
                    direct == void(0) && (direct = true);
                    var _dir = !!direct,
                        wrap_move = _dir ? -width * 2 : 0,
                        cell_move = _dir ? width * 2 : 0,
                        _ori = origin; //存储起始元素，用于动作后处理起始元素

                    if ($b.eq(current).is(':hidden')) {
                        $b.eq(current)._css('left', cell_move + 'px')._loadimg(opt.imgattr).show();
                    };
                    if (isInit) {
                        //初始启动
                        $w.css({
                            'left': -width + 'px'
                        });
                        $b._css('left', width + 'px').eq(current).show().css({
                            'z-index': '2'
                        });
                    } else {
                        $b.eq(_ori).show(function() {
                            $w.stop(1).animate({
                                'left': wrap_move + 'px'
                            }, opt.speed, function() {
                                $w.css({
                                    'left': -width + 'px'
                                });

                                $b._css('left', width + 'px').eq(_ori).css('z-index', '1').hide().end().eq(current).css({
                                    'z-index': '2'
                                });
                            })
                        });
                    }
                    break;
            };
            origin = current;
            $this.data('play', origin);
            opt.callback && opt.callback($this, $b, origin);
            setTimeout(function() {
                windowLock = false;
            }, opt.speed)
        };
        //导航触发
        $navs.on(opt.act, function(e) {
            e.preventDefault();
            e.stopPropagation();
            var index = $(this).index(),
                _dir, _step;

            if (index >= count || $(this).hasClass("on")) return false;
            //初始加载
            if (index === origin) {
                origin = count - 1;
                _dir = 1;
                efftct(index, _dir);
                return true
            };
            _dir = index > origin ? true : false;
            efftct(index, _dir);
        });
        //按钮触发
        $p.click(function(e) {
            e.preventDefault();
            efftct(getPrev(origin), 0);
        });
        $n.click(function(e) {
            e.preventDefault();
            efftct(getNext(origin), 1);
        });
        //自动 & 暂停
        if (opt.auto) {
            t = window.setInterval(function() {
                efftct(getNext(origin), 1);
            }, opt.time);
            if (typeof(opt.pause) === 'boolean' && opt.pause) {
                $this.on({
                    'mouseenter': function() {
                        window.clearInterval(t);
                    },
                    'mouseleave': function() {
                        window.clearInterval(t);
                        t = window.setInterval(function() {
                            efftct(getNext(origin), 1);
                        }, opt.time);
                    }
                })
            } else if ($(opt.pause).length) {
                $(opt.pause).eq(0).on('click', function(e) {
                    e.preventDefault();
                    if ($this.data('slidepause')) {
                        $this.data('slidepause', false);
                        $(opt.pause).eq(0).removeClass('pause');
                        window.clearInterval(t);
                        t = window.setInterval(function() {
                            efftct(getNext(origin), 1);
                        }, opt.time);
                    } else {
                        $this.data('slidepause', true);
                        $(opt.pause).eq(0).addClass('pause');
                        window.clearInterval(t);
                    }
                })
            }
        };
        $this.data('slideruning', 1);
        opt.ext && opt.ext($this, $b, count);
        //开始
        if ($this.data('play')) {
            $navs.eq($this.data('play')).trigger(opt.act);
        } else {
            efftct(opt.start, true, 1, true);
        };
        //响应式
        $(window).bind("orientationchange, resize", function(event) {
            if (windowLock) return;
            windowLock = true;
            init();
            efftct($this.data('play'), true, 1, true);
            setTimeout(function() {
                windowLock = false;
            }, 1e3)
        });
        //返回自身
        return $this
    };

})