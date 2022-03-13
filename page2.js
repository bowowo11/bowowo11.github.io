
document.addEventListener("DOMContentLoaded", function(event) {


	var right =document.getElementById("rightpart")
	var left  =document.getElementById("leftpart")
    var constellation=['白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','摩羯','水瓶','双鱼'
    ]
    var birthday =['3月21日-4月20日','4月21日-5月20日','5月21日-6月21日','6月22日-7月22日','7月23-8月22日','8月23日-9月22日','9月23日-10月23日','10月24日-11月22日','11月22日-12月21日','12月22日-1月19日','1月20日-2月18日','2月20日-3月20日' 
    ]
    var palace=['第一宫','第二宫','第三宫','第四宫','第五宫','第六宫','第七宫','第八宫','第九宫','第十宫','第十一宫','第十二宫'
    ]
    var threepalace=['基本宫','固定宫','变动宫','基本宫','固定宫','变动宫','基本宫','固定宫','变动宫','基本宫','固定宫','变动宫'
    ]
    var guardian=['火星','金星','水星','月亮','太阳','水星','金星','冥王星','木星','土星','天王星','海王星'
    ]
    var luckynumber=['6、7','1、9','3、5、7','8、3','5、9','4、8','6、9','3、5','9','3、7','4、8','5、8'
    ]
    var oppositepalace=['天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座','白羊座','金牛座','双子座','巨蟹座','狮子座','处女座'
    ]
	right.addEventListener('mousedown',revolve=function(e){
		var xN = 10, yN = 15;
		var innerbox=this.getElementsByTagName("ul")[0]
		var outbox =this.getElementsByClassName("box")[0]
		innerbox.style.animationPlayState = 'paused'
		var x = e.clientX;
		var y = e.clientY;
		document.addEventListener('mousemove',move);
		document.addEventListener('mouseup', up);
		function move(e){
			var x1 = e.clientX;
			var y1 = e.clientY;
			xN += (x1 - x)*0.01;
			yN += (y - y1)*0.01;
			outbox.style.transform = 'translateZ(150px) rotateY(' + xN + 'deg) rotateX(' + yN + 'deg)';
		}
		function up(){
			innerbox.style.animationPlayState = 'running'
			document.removeEventListener('mousemove', move);
		}
		var imges=this.getElementsByTagName("img")
		var details =document.getElementById("detail").getElementsByTagName("h2")
		var backgroundimge =document.getElementsByTagName("article")[0]
		for(var i=0;i<this.getElementsByTagName("img").length;i++){
			imges[i].addEventListener('click',function(){
				details[0].innerHTML=birthday[constellation.indexOf(this.id)]
				details[1].innerHTML=palace[constellation.indexOf(this.id)]
				details[2].innerHTML=threepalace[constellation.indexOf(this.id)]
				details[3].innerHTML=guardian[constellation.indexOf(this.id)]
				details[4].innerHTML=luckynumber[constellation.indexOf(this.id)]
				details[5].innerHTML=oppositepalace[constellation.indexOf(this.id)]
				right.getElementsByTagName("h1")[0].innerHTML=this.id +"座"
				backgroundimge.style.opacity=0
				backgroundimge.style.background = "url(picture/"+this.id+".png)"
				function show(){
					backgroundimge.style.opacity=Number(backgroundimge.style.opacity)+0.01
					if (Number(backgroundimge.style.opacity)>0.7) {
						clearInterval(showing);
					}
				}
				var showing=setInterval(show,20)
			})
		}
	})


	left.addEventListener('mousedown',revolve)

});

