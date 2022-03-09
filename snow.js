
    var snowflakes = {
      arr:[],
      snowflake : [
      '❉',
      '❈',
      '*',
      '✲',
      '❀',
      '❃'
      ],
      snowflakeColor : [
      "red",
      "green",
      "#ccc123",
      "#345232",
      "#231111",
      "#ab2322"
      ],
      random : function (num){
        return Math.floor(Math.random()*num);
      },
      init : function (num){
        // 最多个数
        this.maxlength = num;
        // 边界
        this.maxWidth = (document.documentElement.clientWidth || document.body.clientWidth) + 20;
        // 边界
        this.maxHeight = (document.documentElement.clientHeight || document.body.clientHeight) + 20;
        this.create();
        this.move();
      },
      create : function (){
        var that = this;
        setInterval(function (){
          if( that.arr.length < that.maxlength){
            var d = document.createElement("div");
            d.innerHTML = '✲';
            d.style.color = "white";
            d.style.position = "absolute";
            d.style.left = that.random(that.maxWidth*2/3) + "px";
            d.style.top = -that.random(100) + "px";
            d.vx = 2+that.random(10);
            d.vy = 3+that.random(10);
            d.classList.add("winter");
            document.body.appendChild(d);
            that.arr.push(d)
          }
        },20)
      },
      move : function (){
        var that = this;
        var arr = that.arr;
        setInterval(function (){ 
          for(var i = 0 ; i < arr.length ; i ++ ){
            arr[i].style.left = arr[i].offsetLeft + arr[i].vx + "px";
            arr[i].style.top = arr[i].offsetTop + arr[i].vy + 'px';
            if (arr[i].offsetTop >= that.maxHeight || arr[i].offsetLeft >= that.maxWidth) {
              document.body.removeChild(arr[i]);
              arr.splice(i,1);}
              if (arr[i].classList.contains("winter") & arr[i].offsetTop >= one.offsetTop) {
                arr[i].innerHTML = that.snowflake[that.random(that.snowflake.length)];
                arr[i].style.color = that.snowflakeColor[that.random(that.snowflakeColor.length)];
                arr[i].classList.remove("winter");
                arr[i].classList.add("spring");
               }
               else if(arr[i].classList.contains("spring") & arr[i].offsetTop <= one.offsetTop){
                arr[i].innerHTML = '✲';
                arr[i].style.color = "white";
                arr[i].classList.remove("spring");
                arr[i].classList.add("winter");
               }}

            
          },30)
      }
    }  
    
    snowflakes.init(100);


