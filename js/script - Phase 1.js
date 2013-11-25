// JavaScript Document
/*
demo courtesy of http://www.onlywebpro.com/2011/06/25/html5-canvas-for-absolute-beginners-part-1/
Works in IE9 and up 
*/
var pcanvas;
var ctx;
//store width and height of canvas
var W = 500;
var H = 500;
//store starting pos of particle; change these values to make it animate
var x=100;
var y = 100;


onload = init;

function init(){
	pcanvas = document.getElementById("pcanvas");
	ctx = pcanvas.getContext("2d");
	//redraw bg/particles every so often
	setInterval(draw,33);
}//close function init

function draw(){
	//redraw the bakground
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,W,H);
	//draw one partice
	ctx.beginPath();
	ctx.fillStyle = "white";
	//make circle
	ctx.arc(x, y,40,Math.PI*2, false);
	ctx.fill();
	//move particle a little bit
	x++;
	y++;
	
}//end function draw
