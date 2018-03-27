function ChangeColor(color)
 {
   $("sublanmu_content").style.backgroundColor=color;
 }


function huadong(Id,Class,fx,jl,Speedes){
    var $wh=$(window).height();
    var $cq=$(window).scrollTop();
    var $c3=$("#"+Id).find("."+Class).offset().top;
    var Speed=parseInt(Speedes+'blue'); 
    if($c3-$cq<$wh){
     switch(fx){
       case "left":
       $("#"+Id).find("."+Class).animate({left:jl+'px'},Speed);
       break;
       case "right":
       $("#"+Id).find("."+Class).animate({right:jl+'px'},Speed);
       break;
       case "top":
       $("#"+Id).find("."+Class).animate({top:jl+'px'},Speed);
       break;
       case "bottom":
       $("#"+Id).find("."+Class).animate({bottom:jl+'px'},Speed);
       break;
      } 

    }

  $(window).scroll(function() { 
    var $wh=$(window).height();
    var $cq=$(window).scrollTop();
    var $c3=$("#"+Id).find("."+Class).offset().top;
    var Speed=parseInt(Speedes+'blue'); 
    if($c3-$cq<$wh-10){

     switch(fx){
       case "left":
       $("#"+Id).find("."+Class).animate({left:jl+'px'},Speed);
       break;
       case "right":
       $("#"+Id).find("."+Class).animate({right:jl+'px'},Speed);
       break;
       case "top":
       $("#"+Id).find("."+Class).animate({top:jl+'px'},Speed);
       break;
       case "bottom":
       $("#"+Id).find("."+Class).animate({bottom:jl+'px'},Speed);
       break;
      } 

    }
 });

}

function xuanzhuan(minc,xuanz){

    var $wh=$(window).height();
    var $xzq=$(window).scrollTop();
    var $zxc=$(minc).offset().top


    if($zxc-$xzq<$wh){

     $(minc).find("."+xuanz).css({"transform":"rotateY(360deg)","transition":"all 1.5s"});

    } 


  $(window).scroll(function() { 

    var $wh=$(window).height();
    var $xzq=$(window).scrollTop();
    var $zxc=$(minc).offset().top;


    if($zxc-$xzq<$wh){

     $(minc).find("."+xuanz).css({"transform":"rotateY(360deg)","transition":"all 1.5s"});

    }


 });

};





$(document).ready(function(){
$(".main_box_inner_left").children(".nav_box").children(".nav_menu").children("ul").children("li").mouseenter(function(){
     $(this).children("ul").css("display","block");
  })
$(".main_box_inner_left").children(".nav_box").children(".nav_menu").children("ul").children("li").mouseleave(function(){
     $(this).children("ul").css("display","none");
  })



window.onload = function (){

$(".main_box_inner_left").children(".nav_box").children(".nav_menu").children("ul").children("li").children("ul").css("display","none");

} 
})


