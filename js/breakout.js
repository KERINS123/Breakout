//setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//set the starting point
var x= canvas.width/2;
var y= canvas.height-30;
var dx=2;
var dy=-2;
var ballRadius=10;
var ballColour = "#0095DD"
 
//draw ball
function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColour;
	ctx.fill();
	ctx.closePath();
}
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx;
	y += dy;

	if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
		ballColour ="#00FF00";
		ballRadius = 5;
	}
	if(y + dy> canvas.height-ballRadius || y + dy < ballRadius ) {
		dy = -dy;
		ballColour = "#FF0000";
		ballRadius = 10;
	}
}

setInterval(draw, 10);
 
