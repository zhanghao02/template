/**
 *  工具栏
 */
define(function(require) {
    var $ = require('$');
    require.async('widgets/sellFootBar/sellFootBar.css');
    
    $(function(){
        var totleWrap = $('.plugin-fly'),
            link = $('.plugin-fly_bottom_show_left'),
            closeBtn = totleWrap.find('.fly_close'),
            bwObj = checkBrowser(),
            ie6Flag = false,
            mitZXBJFlag = true,
            //flag = true,
            flag = getCookie('qf_bottomBarHidden'),
            flag1200 = 1200,//显示小的
            resultHref = '',
            scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        
        initEvent();
        initPeopleNum();

        function initEvent() {
            if(bwObj.name == 'safari') {
                totleWrap.addClass('sarifi-sepesil'); 
            }else if(bwObj.name == 'msie' && bwObj.version == 6) {
                ie6Flag = true;
            }
            if($('body:eq(0)').hasClass('narrow_980')) {
                flag1200 = 980;
            }
            setCookie('qf_bottomBarHidden', false, 24*60*60*1000, false);
            setVisible();
            $(window).bind('scroll resize', function() {
                scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();; 
                if(scrollBottom > 200) {
                    if(flag==true||flag=='true') {
                        setSmallLeft()
                        totleWrap.css('left', '-150%');
                        //console.log('滚动时大的隐藏');
                    } else { //console.log(totleWrap);
                        totleWrap.css('left', 0);
                        link.css('left', '-156px').fadeOut();
                        //console.log('滚动时小的隐藏');
                    }
                } else {
                    link.css('left', '-156px').fadeOut();
                    totleWrap.css('left', '-150%');
                    //console.log('滚动时全部隐藏');
                }
            });
        

            link.bind('click', function() {
                setCookie('qf_bottomBarHidden', false, 24*60*60*1000, false);
                link.animate({'left': '-35px'}, 200, function() {
                    link.fadeOut();
                    totleWrap.animate({'left': '0'}, 400);
                    flag = false;
                });
            });

            closeBtn.bind('click', function() {
                setCookie('qf_bottomBarHidden', true, 24*60*60*1000, false);
                totleWrap.animate({'left': '-150%'}, 400, function(){
                    var wW = ($(window).width() - flag1200)/2;

                    if(wW < 125) {
                        link.animate({'left': 0}, 200).fadeIn();
                    } else {
                        link.animate({'left': 0}, 200).fadeIn();
                    }
                    flag = true;
                });

            });

            totleWrap.find(':radio[name="status"]').click(function() {//兼容safari
                $(this).parents('.bottom_sjybj_content').removeClass('height_auto').find('.erro').remove();
            });
            var ptag = totleWrap.find(':hidden[name="ptag"]').val();
            // $('[searchtage]').bind('click', function() {
            //     var tag = $(this).attr('searchtage');
            //     zxbjClickCream(ptag,tag);
            // });
        }

        function initPeopleNum() {
            //该数据的伪造规则 (月*12 + 日*24 + 时*180 + 分*3 + 秒/20)
            var date = new Date(),
                num = (date.getMonth() + 1)*12 + date.getDate()*24 + date.getHours()*180 + date.getMinutes()*3 + date.getSeconds()/20;
            //totleWrap.find('.apply_mn').html(Math.ceil(num));    
        }
        function setVisible() {
            //console.log('页面加载时：');
            if(scrollBottom > 200) {
                if(getCookie('qf_bottomBarHidden')=='false') {
                    totleWrap.css('left', 0);
                    link.css('left', '-35px').fadeOut();;
                    flag = false;
                    //console.log('小标隐藏，大的展开');
                } else {
                    setSmallLeft()
                    totleWrap.css('left', '-150%');
                    flag = true;
                    //console.log('大的隐藏');
                }
            } else {
                link.css('left', '-32px').fadeOut();
                totleWrap.css('left', '-150%');
                //console.log('全部隐藏');
            }
        }

        function setSmallLeft() {
            var wW = ($(window).width() - flag1200)/2;

            //if(wW < 125) {
            //    link.css('left', '-80px')
            //} else {
                link.css('left', 0).fadeIn();
            //}
        }
    });

    function setCookie(name, value, expire, pre)
     {
        if (!expire){
            expire = 5000;
        };
        
        if (pre){
            name = 'to8to_' + name;
        };
        
        var expiry = new Date();
        expiry.setTime(expiry.getTime() + expire);
        document.cookie = name + '=' + value + ';expires=' + expiry.toGMTString() + ';path=/';
    };
    function getCookie(name, pre)
     {
        if (pre)
        name = 'qf_' + name;
        var r = new RegExp("(\\b)" + name + "=([^;]*)(;|$)");
        var m = document.cookie.match(r);
        var res = !m ? "": decodeURIComponent(m[2]);
        var result = stripscript(res);
        return result;

    };
    /****************XSS过滤********************/
    function stripscript(s)
     {
        var pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        //格式 RegExp("[在中间定义特殊过滤字符]")
        var rs = "";
        for (var i = 0; i < s.length; i++) {
            rs = rs + s.substr(i, 1).replace(pattern, '');

        }
        return rs;
    };
    // 浏览器判断 
    function checkBrowser(){
       var u = window.navigator.userAgent.toLocaleLowerCase(),
        msie = /(msie) ([\d.]+)/,
        chrome = /(chrome)\/([\d.]+)/,
        firefox = /(firefox)\/([\d.]+)/,
        safari = /(safari)\/([\d.]+)/,
        opera = /(opera)\/([\d.]+)/,
        ie11 = /(trident)\/([\d.]+)/,
        b = u.match(msie)||u.match(chrome)||u.match(firefox)||u.match(safari)||u.match(opera)||u.match(ie11);
        return {name: b[1], version: parseInt(b[2])};

    };
})
