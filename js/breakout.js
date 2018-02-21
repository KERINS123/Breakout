//setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//set the starting point
var x= canvas.width/2;
var y= canvas.height-30;
var dx=2;
 var dy=-2;
 
//draw ball
function drawBall(){
	x += dx;
	y += dy;
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}
function draw() {
	ctx.clearRect(0, 0, canvas.width ,canvas.height);
	drawBall();
	
}

setInterval(drawBall, 10);
 
