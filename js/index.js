/*==============================*/
//     * author -> Print        //
//     * QQ -> 2662256509       //
/*=============================*/

//解决HTML5 requestAnimationFrame兼容
(function(win){
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !win.requestAnimationFrame; ++x) {
        win.requestAnimationFrame = win[vendors[x] + 'RequestAnimationFrame'];
        win.cancelAnimationFrame = win[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
            win[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if(!win.requestAnimationFrame){
        win.requestAnimationFrame = function(fn){
            return setTimeout(fn,1000/60);
        }
    }
    if(!win.cancelAnimationFrame){
        win.cancelAnimationFrame = function(timer){
            clearTimeout(timer);
        }
    }
})(window);

(function(win, doc){
	var oCanvas = doc.getElementById("canvas"),
		ctx = oCanvas.getContext("2d");

	if(!ctx){ alert("您的浏览器不支持Canvas，请更新或更换其他浏览器！"); }

	var winW,	//浏览器宽
		winH,	//浏览器高
	 	x = 0,	  //字体x轴位置
		y = [],   //字体y轴位置
		fontSize = 14;	  //字体大小

	oCanvas.width = winW = doc.documentElement.clientWidth || doc.body.clientWidth;
	oCanvas.height = winH = doc.documentElement.clientHeight || doc.body.clientHeight;

	resize(null);
	function resize(e){
		if(e){
			location.reload();
		}
		
	}
	win.onresize = resize;

	//列数
	var colsNum = winW/fontSize;

	for(var i = 0; i < colsNum; i++){ y[i] = 0; }
	
	

	draw();
	function draw(){
		ctx.fillStyle = "rgba(0,0,0,0.1)";
		ctx.fillRect(0,0,winW,winH);
		ctx.beginPath();
		for(var i = 0; i < colsNum; i++){
			ctx.fillStyle = "#3f0";
			ctx.font = "bold "+fontSize+"px Microsoft yahei";
			ctx.fillText( Math.floor(Math.random()*2) , x , y[i]);
			x += fontSize;
			if( x >= winW ){
				x = 0;
			};
			y[i] += fontSize;
			if( y[i] >= winH && Math.random() >= 0.9){
				y[i] = 0;
			}
		}
		ctx.closePath();
		requestAnimationFrame(draw);
	}


})(window,document);