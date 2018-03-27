/**
 * Created by zhang-ting on 2016/3/22.
 */
$(function(){
    //轮播
    $('#top_img').carousel({
        interval: 2000
    })
});

// 向上显示
var animateShowTop=function(){
    $(window).scroll(function() {
        var change=$("body").height()-$(window).scrollTop();
        if (change<1300) {
            $('.person_con').addClass("fadeInUp");
        }
    })
}
var showNav=function(){
    $(".menu_catalog").click(function(){
        $(".menu_list").slideToggle("1000");
        window.onresize = function() {
            if (window.innerWidth >= 768) {
                $(".menu_list").css('display','none');
            }
        }
    })
}

var textIgnore=function(){
    $(".teaching_text").each(function(){
        var maxwidth=100;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'...');
        }
    });
}

// waterfile
var waterfile=function(lr,tb){//lr水平距离,tb垂直距离
    // var pagew = document.documentElement.offsetWidth;//页面宽度

    var wrap = document.getElementById("viewall_show");
    var pagew=wrap.parentNode.offsetWidth;
    // console.log(pagew);
    var con = wrap.getElementsByTagName("section");
    var conw = con[0].offsetWidth + lr;//内容块宽度
    var list = Math.floor(pagew / conw);//列数
    wrap.style.width = conw * list - lr + "px";//整体居中   
    
    var conlen=con.length; //内容块总数
    var heightArr=[];
    for (var i = 0; i <conlen; i++) {
        heightArr.push(con[i].offsetHeight);
    }
    var setArr=[];
    for (var i = 0; i <list ; i++) {
        con[i].style.top="0";     //定位距离
        con[i].style.left=conw*i+"px";
        con[i].style.opacity="1";   //修改透明度
        con[i].style["filter"]="alpha(opacity=100)";
        con[i].style["-moz-opacity"]="1";
        setArr.push(heightArr[i]);
    }
    for (var i = list; i < conlen; i++) {
        var x=getMin(setArr);
        con[i].style.top=setArr[x]+tb+"px";
        con[i].style.left=conw*x+"px";
        con[i].style.opacity="1";     
        con[i].style["filter"]="alpha(opacity=100)";
        con[i].style["-moz-opacity"]="1";
        setArr[x]=heightArr[i]+setArr[x]+tb;

    }  
}
var rewaterfile=function(lr,tb){
    var re;
    window.onresize = function() {
        waterfile(lr,tb);
    }
}
var getMin =function(arr){
        var a=arr[0];
        var b=0;
        for (var k in arr){
            if(arr[k]<a){
                a=arr[k];
                b=k;
            };
        }
        return b;
}

$(function(){
    animateShowTop();
    showNav();
    textIgnore();
    waterfile(15,15);
    rewaterfile(15,15);
    
    
});