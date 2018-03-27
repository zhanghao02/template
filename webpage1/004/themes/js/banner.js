(function(){

    function G(s){
        return document.getElementById(s);
    }

    function getStyle(obj, attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj, false)[attr];
        }
    }

    function Animate(obj, json){
        if(obj.timer){
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function(){
            for(var attr in json){
                var iCur = parseInt(getStyle(obj, attr));
                iCur = iCur ? iCur : 0;
                var iSpeed = (json[attr] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if(iCur == json[attr]){
                    clearInterval(obj.timer);
                }
            }
        }, 30);
    }

    var oPic = G("picBox");
    var oList = G("listBox");

    var oPrev = G("prev");
    var oNext = G("next");
    var oPrevTop = G("prevTop");
    var oNextTop = G("nextTop");

    var oPicLi = oPic.getElementsByTagName("li");
    var oListLi = oList.getElementsByTagName("li");
    var len1 = oPicLi.length;
    var len2 = oListLi.length;

    var oPicUl = oPic.getElementsByTagName("ul")[0];
    var oListUl = oList.getElementsByTagName("ul")[0];
    var w1 = oPicLi[0].offsetWidth;
    var w2 = oListLi[0].offsetWidth;

    oPicUl.style.width = w1 * len1 + "px";
    oListUl.style.width = w2 * len2 + "px";

    var index = 0;

    var num = 4;
    var num2 = Math.ceil(num / 2);

    function Change(){

        Animate(oPicUl, {left: - index * w1});

        if(index < num2){
            Animate(oListUl, {left: 0});
        }else if(index + num2 <= len2){
            Animate(oListUl, {left: - (index - num2 + 1) * w2});
        }else{
            Animate(oListUl, {left: - (len2 - num) * w2});
        }

        for (var i = 0; i < len2; i++) {
            oListLi[i].className = "";
            if(i == index){
                oListLi[i].className = "on";
            }
        }
    }

    oNextTop.onclick = oNext.onclick = function(){
        index ++;
        index = index == len2 ? 0 : index;
        Change();
    }

    oPrevTop.onclick = oPrev.onclick = function(){
        index --;
        index = index == -1 ? len2 -1 : index;
        Change();
    }
    oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
        clearInterval(timer);
    }
    oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
        timer=setInterval(autoPlay,3000);
    }
    var timer=null;
    timer=setInterval(autoPlay,3000);
    function autoPlay(){
        index ++;
        index = index == len2 ? 0 : index;
        Change();
    }
    for (var i = 0; i < len2; i++) {
        oListLi[i].index = i;
        oListLi[i].onclick = function(){
            index = this.index;
            Change();
        }
    }

})();


//专家分类切换
$(function(){
    $(".yScrollListTitle h1").click(function  () {
        var index=$(this).index(".yScrollListTitle h1");
        $(this).addClass("yth1click").siblings().removeClass("yth1click");
        $($(".yScrollListInList")[index]).show().siblings().hide();
    })
    $(".yScrollListInList1 ul").css({width:$(".yScrollListInList1 ul li").length*(160+84)+"px"});
    $(".yScrollListInList2 ul").css({width:$(".yScrollListInList2 ul li").length*(160+84)+"px"});
    $(".yScrollListInList3 ul").css({width:$(".yScrollListInList3 ul li").length*(160+84)+"px"});
    var numwidth=(160+84)*5;
    $(".yScrollListInList .yScrollListbtnl").click(function(){
        var obj=$(this).parent(".yScrollListInList").find("ul");
        if (!(obj.is(":animated"))) {
            var lefts=parseInt(obj.css("left").slice(0,-2));
            if(lefts<30){
                obj.animate({left:lefts+numwidth},1000);
            }
        }
    })
    $(".yScrollListInList .yScrollListbtnr").click(function(){
        var obj=$(this).parent(".yScrollListInList").find("ul");
        var objcds=-(30+(Math.ceil(obj.find("li").length/5)-2)*numwidth);
        if (!(obj.is(":animated"))) {
            var lefts=parseInt(obj.css("left").slice(0,-2));
            if(lefts>objcds){
                obj.animate({left:lefts-numwidth},1000);
            }
        }
    })
});



//友情链接js切换
$(function(){
    $('.tabPanel ul li').click(function(){
        $(this).addClass('hit').siblings().removeClass('hit');
        $('.panes>div:eq('+$(this).index()+')').show().siblings().hide();
    })
});