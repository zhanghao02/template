var bolExec=false;
	$(window).scroll(function(){
	var winheight = $(window).height()/2.5;
	var Current = $(".Line").offset().top;
		if($(document).scrollTop()>Current/1.3&&bolExec==false){
			
			var line=$(".Line"),len=line.length;
			line.each(function(index, element) {
                var t=$.trim($(this).text()).replace(" ","").length;
				var text="";
						for(var j = 0; j < t; j++)
							text+=0;
						$(this).text(text);
            });
			Animate(0);
			function Animate(i){
				if(i<len){
					var _this=line.eq(i), a=0, v=_this.attr("rel")-0,_time=500,vLen=(v+"").length;
					var t=setInterval(function(){
						a+=1;
						var pi = parseInt(v/500*a);
						var text="";
						for(var j = 0; j < vLen - (pi + "").length; j++)
							text+=0;
						_this.text(text+pi);
						if(a == _time / 2)
							Animate(i+1);
						if(a>=_time)
							clearInterval(t);
					},1);
				}
			}
			
			bolExec=true;
		}
	
	});