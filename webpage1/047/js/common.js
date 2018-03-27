// JavaScript Document power By QQ 364564465 xubaojian
var SetMoreCasePage=false,SetMoreNewsPage=false,lpt_index=false,jylm_page=false,index_page_is=false;DTPath="http://"+window.location.host+"/";$(function(){$('.indexCaseList p').live("mouseover",function(){$(this).stop().find('a').animate({top:0},300,'easeOutExpo');})
$('.indexCaseList p').live("mouseleave",function(){var tops=$(this).height();$(this).stop().find('a').animate({top:tops},300);})
$('.moreA').mouseover(function(){$(this).stop().animate({right:0},300);}).mouseleave(function(){$(this).stop().animate({right:-30},300);})
$('.indexHonorItem').mouseover(function(){$(this).stop().animate({height:169,paddingTop:24}).find('figcaption').show();}).mouseleave(function(){$(this).stop().animate({height:159,paddingTop:34}).find('figcaption').hide();})
$('#rightScrollBar_a5').mouseover(function(){$(this).find('#erweima').fadeIn(100)}).mouseleave(function(){$(this).find('#erweima').fadeOut(100)})
$('#rightScrollBar_a44').mouseover(function(){$(this).addClass('a5_hover');$(this).find('.nav_huodong').fadeIn(100)}).mouseleave(function(){$(this).removeClass('a5_hover');$(this).find('.nav_huodong').fadeOut(100)})
setNav();var body_width=$('.wrap').eq(1).width();var resizeTimer=null;$(window).resize(function(){if(resizeTimer){clearTimeout(resizeTimer)}
resizeTimer=setTimeout(function(){LoadPageSize();body_width=$('.wrap').eq(1).width();},30);});var resizeTimer2=null;function ws(){var ht=$('#headerTop');$(window).scroll(function(){if(resizeTimer2){clearTimeout(resizeTimer)}
resizeTimer=setTimeout(function(){var sctop=ht.offset().top;var bodytop=$(document).scrollTop();if($.browser.version!="6.0"&&body_width>720){if(bodytop>sctop+300){$('.nav').addClass('fixed_nav').fadeIn(500);ht.css('margin-bottom','124px')}else{$('.nav').removeClass('fixed_nav');ht.css('margin-bottom','0px')}}},200);});}
ws();$('#foothelp a').each(function(i){$(this).click(function(){help_type=i;var b=i+1;temp_HelpText_index=i;$('.foothelp'+b).eq(0).show(0).siblings('.foothelp').hide();})})
$('#city_select').mouseover(function(){$(this).find('.city_box').fadeIn(50).mouseover(function(){})}).mouseleave(function(){$(this).find('.city_box').fadeOut(50)})
$('#city_select3').mouseover(function(){$(this).find('.city_box').fadeIn(50).mouseover(function(){})}).mouseleave(function(){$(this).find('.city_box').fadeOut(50)})
$('#city_box a').click(function(){$(this).parent().hide(0).prev().html($(this).html());$.getJSON(DTPath+"ajax/selectArea.php",{areaid:$(this).attr('value')},function(data){if(data.length>0){$('#city_select2').show(0)
$('#city_box2').show(0);}else{$('#city_box2').hide(0);$('#city_select2').hide(0);}
var temp_html='';$.each(data,function(idx,e){temp_html+="<a href='javascript:'>"+e['areaname']+"</a>";})
$('#city_box2').html(temp_html);})})
$('#city_box3 a').click(function(){$(this).parent().hide(0).prev().html($(this).html());$.getJSON(DTPath+"ajax/selectArea.php",{areaid:$(this).attr('value')},function(data){if(data.length>0){$('#city_select4').show(0)
$('#city_box4').show(0);}else{$('#city_box4').hide(0);$('#city_select4').hide(0);}
var temp_html='';$.each(data,function(idx,e){temp_html+="<a href='javascript:'>"+e['areaname']+"</a>";})
$('#city_box4').html(temp_html);})})
$('#city_box2 a').live("click",function(){$(this).parent().hide(0).prev().html($(this).html());})
$('#city_box4 a').live("click",function(){$(this).parent().hide(0).prev().html($(this).html());})});var temp_HelpText_index=0;var help_type=null;var help_stact=true;function SendHelp(){if(help_stact==false){alert('您已经反馈过了！');return false;}
var help_content=$('#help_text'+temp_HelpText_index).val();$.post(DTPath+"ajax/setHelp.php",{help_type:help_type,help_cat:help_cat,help_mid:help_mid,help_content:help_content,help_url:help_url},function(date){if(date==1){help_stact=false;$('.foothelp4').show(0).siblings('.foothelp').hide(0);}else{}})}
function setNav(){$('.navlist li').each(function(){var s=false;var body_width=$('.wrap').eq(1).width();var m=$(this).find('menu');var a=$(this).children('a');if(body_width<=640&&$(this).find('menu').length>0){var old_href=a.attr('href');a.attr('bsrc',old_href);a.attr('href','javascript:void(0)');a.attr('target','_self');$(this).unbind('mouseover').unbind('mouseleave').click(function(){s==false?m.show(0,function(){s=true;return false;}):m.hide(0,function(){s=false;return false;});})}else if(body_width>640){a.attr('bsrc')==null?'':a.attr('bsrc',a.attr('href')).attr('href','javascript:void(0)');$(this).mouseover(function(){$(this).addClass('hover');m.show(0);}).mouseleave(function(){$(this).removeClass('hover');m.hide();})}})}
function showFlink(){$('#friendLink').css('display')=='block'?$('#friendLink').hide(500):$('#friendLink').show(500);$("html,body").animate({scrollTop:$('#friendLink').offset().top},1200)}
function showRightBar(){$('#rightScrollBar').removeClass('rightScrollBarHide');return true;}
function hideRightBar(){$('#rightScrollBar').addClass('rightScrollBarHide');return true;}
var MapShow_state=true;;function showMap(){if(MapShow_state){$('#webSiteMap').stop().animate({height:240},400,'easeOutExpo',function(){MapShow_state=false;})}else{$('#webSiteMap').stop().animate({height:33},400,'easeOutExpo',function(){MapShow_state=true;})}}
function showOtherCp(){$('.webSite').show(1000);}
function closeOtherCp(){$('.webSite').hide(1000);}
var sub_shejishi_id=null;function showOA(t,t2,t3){var bheight=$('body').height();$('#lyBoxBg').css('height',bheight).show();$("html,body").animate({scrollTop:550},400)
$('#lyBox').show();$('#OATitle').html(t);$('#OATitle2').html(t2);if(t3>0){sub_shejishi_id=t3;}}
function hidelyBox(){$('#lyBoxBg').hide();$('#lyBox').hide();}
function show_search(){$('.search').fadeIn(500);$('.searchPut').focus();var seachTime=null;$('.search').mouseleave(function(){seachTime=setTimeout(function(){$('.search').fadeOut(500)},700);}).mouseover(function(){clearTimeout(seachTime);})}
function SetCaseListWidht(index){$('.js_check_width_list').each(function(){$(this).find('.indexCaseItem').each(function(i){if((i+1)%index==0&&i>0){$(this).addClass('no_nr')}else{$(this).removeClass('no_nr');}})})}
function SetCaseListWidht2(index){$('.indexGoldDesigner').each(function(){$(this).find('.indexCaseItem').each(function(i){if((i+1)%index==0&&i>0){$(this).addClass('no_nr')}else{$(this).removeClass('no_nr');}})})}
function SetNewsListWidth(index){$('.NewsList li').each(function(i){if((i+1)%index==0&&i>0){$(this).addClass('no_mr')}else{$(this).removeClass('no_mr');}})}
var js_check_width_list=0;var newsIndexPage=false;var menu_ul=false;var CaseDetail=false;var CaseDetailSet=0;function LoadPageSize(){setNav();var body_width=$('.wrap').eq(1).width();if(js_check_width_list==4&&body_width==980){SetCaseListWidht(3);return false;}
if(body_width<980){$('#headerTop').css('margin-bottom',0);}
if(body_width>=1200&&js_check_width_list==4){SetCaseListWidht(4);return false;}
if(body_width==640&&js_check_width_list==4){SetCaseListWidht(2);return false;}
if(body_width==980){SetCaseListWidht(4);SetCaseListWidht2(3);$('#navlist').show(0);menu_ul=false;}
if(body_width>=1200){SetCaseListWidht(5);SetCaseListWidht2(3);menu_ul=false;$('#navlist').show(0);}
if(body_width==640){SetCaseListWidht(3);SetCaseListWidht2(2);if(!menu_ul){$('#navlist').hide(0);}}
if(newsIndexPage){if(body_width==640){SetNewsListWidth(2);}
if(body_width==980){SetNewsListWidth(3);}
if(body_width>=1200){SetNewsListWidth(4);}}
if(CaseDetail){if(body_width<640){SetSrcollLList(2);CaseDetailSet=2;}
if(body_width==640){SetSrcollLList(3);CaseDetailSet=3;}
if(body_width==980){SetSrcollLList(2);CaseDetailSet=2;}
if(body_width==1200){SetSrcollLList(2);CaseDetailSet=2;}
if(body_width>1200){SetSrcollLList(3);CaseDetailSet=2;}}
if(SetMoreCasePage){if(body_width<=640){SetMoreCase(0,0);}
if(body_width==640){SetMoreCase(219,3);}
if(body_width==980){SetMoreCase(254,4);}
if(body_width==1200){SetMoreCase(247,5);}
if(body_width>1200){SetMoreCase(271,5);}}
if(SetMoreNewsPage){if(body_width<=640){SetMoreNews(body_width,1);}
if(body_width==640){SetMoreNews(336,2);}
if(body_width==980){SetMoreNews(336,4);}
if(body_width==1200){SetMoreNews(271,4);}
if(body_width>1200){SetMoreNews(346,4);}}
if(lpt_index){if(body_width>=640){showIndexBanner();}
if(body_width>979){$('#indexbannerWrap').height($('#indexbanner li.hover').find('img').eq(0).height()+116);}else{$('#indexbannerWrap').height($('#indexbanner li.hover').find('img').eq(0).height()+0);}
if(body_width>=640){$('#mrtj_2').hide(0)}else{$('#mrtj_2').show(0)}}
if(jylm_page){if(body_width<640){var td_w=body_width-$('.jylm_submit_box_left .td_left').eq(0).width()-30;$('.jylm_moblie_input_width').width(td_w);$('#city_select3').unbind('mouseover').click(function(){$(this).find('.city_box').fadeIn(50);})}else{$('.jylm_moblie_input_width').removeAttr('style');}}}
function show_moblie_menu(){menu_ul=true;if($('.navlist').css('display')=="block"){$('.navlist').hide(500)}else{$('.navlist').show(500,function(){menu_ul=true;});}}
function showMoreArea(){var obj=$('#select_area_box');if(obj.height()==35){obj.css("height",'auto')}else{obj.css("height",'35px')}}
var pj_stact=true;;function setPjFun(m,t,i,_this){if(!pj_stact){alert("您已经评价过了!");return false;}
var mid=m,tid=t,iid=i;$.post(DTPath+"ajax/setPJ.php",{mid:mid,tid:tid,iid:iid},function(date){if(date){pj_stact=false;alert("谢谢支持");var th=parseInt($(_this).find('font').html());$(_this).find('font').html(th+1);}})}
function GetAboutMenu(cityid,title){var temp_html='';$.getJSON(DTPath+"ajax/getAboutmenu.php",{cid:cityid,title:title},function(data){if(data==null||data==''){return false;}
$.each(data,function(idx,e){temp_html=e['content'];})
if(title=='公司简介'){$('.about_index_1').html(temp_html);}else{$('.about_contact').html(temp_html);}})}
function showAllCopn(){$("html,body").animate({scrollTop:0},200,function(){showOtherCp()});}
var SendSub_State=true;function SendSub(){if(!SendSub_State){alert('您已经提交过了！');}
if($('#SubName').val()==''||$('#SubName').val()=='您的姓名'){alert('请填写您的姓名');$('#SubName').focus();return false;}
if($('#SubTel').val()==''||$('#SubTel').val()=='联系电话'){alert('请填写您的电话号码');return false;$('#SubTel').focus();}
if($('#SubText').val()==''){alert('请填写内容');$('#SubText').focus();return false;}
var name=$('#SubName').val();var tel=$('#SubTel').val();var diqu=$('#SubArea_1').html()+','+$('#SubArea_2').html();var text=$('#SubText').val();var ip=$('#SubIP').html();var sid=0;if(sub_shejishi_id!=null){sid=sub_shejishi_id;}
$.post(DTPath+"ajax/setGuestbook.php",{title:"["+$('#OATitle').html()+"]",name:name,tel:tel,diqu:diqu,text:text,ip:ip,sid:sid},function(data){if(data){alert('提交成功，我们将会与您联系!');hidelyBox();if(sid!=0){var b=parseInt($('#renshu').html())
$('#renshu').html(b+1)}}})}
var SendSub2State=true;function SendSub2(){if(!SendSub2State){alert('您已经提交过了，请不要重复提交!');return false;}
if($('#SubName2').val()==''){alert('请填写您的姓名');$('#SubName2').focus();return false;}
if($('#tel').val()==''){alert('请填写您的联系电话或手机');return false;$('#tel').focus();}
if($('#mail').val()==''){alert('请填写您的邮箱');return false;$('#mail').focus();}
if($('#SubText2').val()==''){alert('请填写内容');$('#SubText2').focus();return false;}
var name=$('#SubName2').val();var tel=$('#tel').val();var diqu=$('#SubArea_3').html()+','+$('#SubArea_4').html();var text=$('#SubText2').val();var mail=$('#mail').val();var ip=$('#SubIP').html();$.post(DTPath+"ajax/setGuestbook.php",{title:"[精英联盟]"+titleSend,name:name,tel:tel,diqu:diqu,text:text,ip:ip,mail:mail},function(data){if(data){SendSub2State=false;alert('提交成功，我们将会与您联系!');$('#SubName2').val('');$('#mail').val('');$('#SubText2').val('');$('#tel').val('');$('#SubName2').val('');$('#SubArea_3').html('');$('#SubArea_4').html('');}})}
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});function date2(format,timestamp){var a,jsdate=((timestamp)?new Date(timestamp*1000):new Date());var pad=function(n,c){if((n=n+"").length<c){return new Array(++c-n.length).join("0")+n;}else{return n;}};var txt_weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var txt_ordin={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"};var txt_months=["","January","February","March","April","May","June","July","August","September","October","November","December"];var f={d:function(){return pad(f.j(),2)},D:function(){return f.l().substr(0,3)},j:function(){return jsdate.getDate()},l:function(){return txt_weekdays[f.w()]},N:function(){return f.w()+1},S:function(){return txt_ordin[f.j()]?txt_ordin[f.j()]:'th'},w:function(){return jsdate.getDay()},z:function(){return(jsdate-new Date(jsdate.getFullYear()+"/1/1"))/864e5>>0},W:function(){var a=f.z(),b=364+f.L()-a;var nd2,nd=(new Date(jsdate.getFullYear()+"/1/1").getDay()||7)-1;if(b<=2&&((jsdate.getDay()||7)-1)<=2-b){return 1;}else{if(a<=2&&nd>=4&&a>=(6-nd)){nd2=new Date(jsdate.getFullYear()-1+"/12/31");return date("W",Math.round(nd2.getTime()/1000));}else{return(1+(nd<=3?((a+nd)/7):(a-(7-nd))/7)>>0);}}},F:function(){return txt_months[f.n()]},m:function(){return pad(f.n(),2)},M:function(){return f.F().substr(0,3)},n:function(){return jsdate.getMonth()+1},t:function(){var n;if((n=jsdate.getMonth()+1)==2){return 28+f.L();}else{if(n&1&&n<8||!(n&1)&&n>7){return 31;}else{return 30;}}},L:function(){var y=f.Y();return(!(y&3)&&(y%1e2||!(y%4e2)))?1:0},Y:function(){return jsdate.getFullYear()},y:function(){return(jsdate.getFullYear()+"").slice(2)},a:function(){return jsdate.getHours()>11?"pm":"am"},A:function(){return f.a().toUpperCase()},B:function(){var off=(jsdate.getTimezoneOffset()+60)*60;var theSeconds=(jsdate.getHours()*3600)+(jsdate.getMinutes()*60)+jsdate.getSeconds()+off;var beat=Math.floor(theSeconds/86.4);if(beat>1000)beat-=1000;if(beat<0)beat+=1000;if((String(beat)).length==1)beat="00"+beat;if((String(beat)).length==2)beat="0"+beat;return beat;},g:function(){return jsdate.getHours()%12||12},G:function(){return jsdate.getHours()},h:function(){return pad(f.g(),2)},H:function(){return pad(jsdate.getHours(),2)},i:function(){return pad(jsdate.getMinutes(),2)},s:function(){return pad(jsdate.getSeconds(),2)},O:function(){var t=pad(Math.abs(jsdate.getTimezoneOffset()/60*100),4);if(jsdate.getTimezoneOffset()>0)t="-"+t;else t="+"+t;return t;},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2))},c:function(){return f.Y()+"-"+f.m()+"-"+f.d()+"T"+f.h()+":"+f.i()+":"+f.s()+f.P()},U:function(){return Math.round(jsdate.getTime()/1000)}};return format.replace(/[\\]?([a-zA-Z])/g,function(t,s){if(t!=s){ret=s;}else if(f[s]){ret=f[s]();}else{ret=s;}
return ret;});}
var UA=navigator.userAgent.toLowerCase();var isIE=(document.all&&window.ActiveXObject&&!window.opera)?true:false;var isGecko=UA.indexOf('webkit')!=-1;var DMURL=document.location.protocol+'//'+location.hostname+(location.port?':'+location.port:'')+'/';if(isIE)try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}
var xmlHttp;var Try={these:function(){var returnValue;for(var i=0;i<arguments.length;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;}}
function makeRequest(queryString,php,func,method){xmlHttp=Try.these(function(){return new XMLHttpRequest()},function(){return new ActiveXObject('Msxml2.XMLHTTP')},function(){return new ActiveXObject('Microsoft.XMLHTTP')});method=(typeof method=='undefined')?'post':'get';if(func)xmlHttp.onreadystatechange=eval(func);xmlHttp.open(method,method=='post'?php:php+'?'+queryString,true);xmlHttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');xmlHttp.send(method=='post'?queryString:null);}
function Dd(i){return document.getElementById(i);}
function Ds(i){Dd(i).style.display='';}
function Dh(i){Dd(i).style.display='none';}
function Dsh(i){Dd(i).style.display=Dd(i).style.display=='none'?'':'none';}
function Df(i){Dd(i).focus();}
var tID=0;function Tab(ID){var tTab=Dd('Tab'+tID);var tTabs=Dd('Tabs'+tID);var Tab=Dd('Tab'+ID);var Tabs=Dd('Tabs'+ID);if(ID!=tID){tTab.className='tab';Tab.className='tab_on';tTabs.style.display='none';Tabs.style.display='';tID=ID;try{Dd('tab').value=ID;}catch(e){}}}
function checkall(f,t){var t=t?t:1;for(var i=0;i<f.elements.length;i++){var e=f.elements[i];if(e.type!='checkbox')continue;if(t==1)e.checked=e.checked?false:true;if(t==2)e.checked=true;if(t==3)e.checked=false;}}
function stoinp(s,i,p){if(Dd(i).value){var p=p?p:',';var a=Dd(i).value.split(p);for(var j=0;j<a.length;j++){if(s==a[j])return;}
Dd(i).value+=p+s;}else{Dd(i).value=s;}}
function select_op(i,v){var o=Dd(i);for(var i=0;i<o.options.length;i++){if(o.options[i].value==v){o.options[i].selected=true;break;}}}
function Dmsg(str,i,s,t){var t=t?t:5000;var s=s?true:false;try{if(s){window.scrollTo(0,0);}Dd('d'+i).innerHTML='<img src="'+SKPath+'image/check_error.gif" width="12" height="12" align="absmiddle"/> '+str+sound('tip');Dd(i).focus();}catch(e){}
window.setTimeout(function(){Dd('d'+i).innerHTML='';},t);}
function Inner(i,s){try{Dd(i).innerHTML=s;}catch(e){}}
function InnerTBD(i,s){try{Dd(i).innerHTML=s;}catch(e){Dd(i).parentNode.outerHTML=Dd(i).parentNode.outerHTML.replace(Dd(i).innerHTML,s);}}
function Go(u){window.location=u;}
function confirmURI(m,f){if(confirm(m))Go(f);}
function showmsg(m,t){var t=t?t:5000;var s=m.indexOf(L['str_delete'])!=-1?'delete':'ok';try{Dd('msgbox').style.display='';Dd('msgbox').innerHTML=m+sound(s);window.setTimeout('closemsg();',t);}catch(e){}}
function closemsg(){try{Dd('msgbox').innerHTML='';Dd('msgbox').style.display='none';}catch(e){}}
function sound(f){return'<div style="float:left;"><embed src="'+DTPath+'file/flash/'+f+'.swf" quality="high" type="application/x-shockwave-flash" height="0" width="0" hidden="true"/></div>';}
function Eh(t){var t=t?t:'select';if(isIE){var arVersion=navigator.appVersion.split("MSIE");var IEversion=parseFloat(arVersion[1]);if(IEversion>=7||IEversion<5)return;var ss=document.body.getElementsByTagName(t);for(var i=0;i<ss.length;i++){ss[i].style.visibility='hidden';}}}
function Es(t){var t=t?t:'select';if(isIE){var arVersion=navigator.appVersion.split("MSIE");var IEversion=parseFloat(arVersion[1]);if(IEversion>=7||IEversion<5)return;var ss=document.body.getElementsByTagName(t);for(var i=0;i<ss.length;i++){ss[i].style.visibility='visible';}}}
function FCKLen(i){var i=i?i:'content';var o=FCKeditorAPI.GetInstance(i);var d=o.EditorDocument;var l;if(document.all){l=d.body.innerText.length;}else{var r=d.createRange();r.selectNodeContents(d.body);l=r.toString().length;}
return l;}
function FCKXHTML(i){var i=i?i:'content';return FCKeditorAPI.GetInstance(i).GetXHTML(true);}
function Tb(d,t,p,c){for(var i=1;i<=t;i++){if(d==i){Dd(p+'_t_'+i).className=c+'_2';Ds(p+'_c_'+i);}else{Dd(p+'_t_'+i).className=c+'_1';Dh(p+'_c_'+i);}}}
function is_captcha(v){if(v==L['str_captcha'])return false;if(v.match(/^[a-z0-9A-Z]{1,}$/)){return v.match(/^[a-z0-9A-Z]{4,}$/);}else{return v.length>1;}}
function ext(v){return v.substring(v.lastIndexOf('.')+1,v.length).toLowerCase();}
function PushNew(){$('#destoon_push').remove();s=document.createElement("script");s.type="text/javascript";s.id="destoon_push";s.src=DTPath+"api/push.js.php?refresh="+Math.random()+".js";document.body.appendChild(s);}
function set_cookie(n,v,d){var e='';var f=d?d:365;e=new Date((new Date()).getTime()+f*86400000);e="; expires="+e.toGMTString();document.cookie=CKPrex+n+"="+v+((CKPath=="")?"":("; path="+CKPath))+((CKDomain=="")?"":("; domain="+CKDomain))+e;}
function get_cookie(n){var v='';var s=CKPrex+n+"=";if(document.cookie.length>0){o=document.cookie.indexOf(s);if(o!=-1){o+=s.length;end=document.cookie.indexOf(";",o);if(end==-1)end=document.cookie.length;v=unescape(document.cookie.substring(o,end));}}
return v;}
function del_cookie(n){var e=new Date((new Date()).getTime()-1);e="; expires="+e.toGMTString();document.cookie=CKPrex+n+"="+escape("")+";path=/"+e;}
function substr_count(str,exp){if(str=='')return 0;var s=str.split(exp);return s.length-1;}
function lang(s,a){for(var i=0;i<a.length;i++){s=s.replace('{V'+i+'}',a[i]);}return s;}
document.onkeydown=function(e){var k=typeof e=='undefined'?event.keyCode:e.keyCode;if(k==37){try{if(Dd('destoon_previous').value&&typeof document.activeElement.name=='undefined')Go(Dd('destoon_previous').value);}catch(e){}}else if(k==39){try{if(Dd('destoon_next').value&&typeof document.activeElement.name=='undefined')Go(Dd('destoon_next').value);}catch(e){}}else if(k==38||k==40||k==13){try{if(Dd('search_tips').style.display!='none'||Dd('search_tips').innerHTML!=''){SCTip(k);return false;}}catch(e){}}}
