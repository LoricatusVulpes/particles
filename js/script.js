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
//array to store all particles
var particles=[];
//put 50 particles into the array
for (var i=0;i<50;i++){
	particles.push(new Particle());
}

onload = init;

function init(){
	pcanvas = document.getElementById("pcanvas");
	ctx = pcanvas.getContext("2d");
	//redraw bg/particles every so often
	setInterval(draw,33);
}//close function init
//make a class so each particle can store unique properties like position, color, etc.
function Particle(){
	//each gets a random start position
	this.x = Math.random()*W;
	this.y = Math.random()*H;
	//setup a random velocity
	this.vx =Math.random()*20-10;
	this.vy =Math.random()*20-10;
	//give each a random color
	var r = Math.random()*255>>0;
	var g = Math.random()*255>>0;
	var b = Math.random()*255>>0;
	this.color = "rgba(" + r + "," + g + "," + b + ",0.5)";
	//give random size
	this.radius = Math.random()*20+20;
}//end particle class
function draw(){
	
	//redraw the bakground
	//blends particles with background
	ctx.globalCompositeOperation = "source-over";
	ctx.fillStyle = "rgba(0,0,0,0.5)";
	ctx.fillRect(0,0,W,H);
	
	ctx.globalCompositeOperation = "lighter";
	//loop through the particles and change each one
	for(var t=0;t<particles.length;t++){
		//make a p var to refer to the current particle from the array
		var p = particles[t];
		//draw one partice
		ctx.beginPath();
		var gradient = ctx.createRadialGradient(p.x,p.y, 0, p.x,p.y, p.radius);
		gradient.addColorStop(0, "white");
		gradient.addColorStop(0.4, "white");
		gradient.addColorStop(0.4, p.color);
		gradient.addColorStop(1, "black");
		ctx.fillStyle = gradient;
		//make circle
		ctx.arc(p.x,p.y,p.radius,Math.PI*2, false);
		ctx.fill();
		//move particle a little bit
		p.x+=p.vx;
		p.y+=p.vy;
		//if that particle is off one side of the canvas, move it to the opposite side
		if (p.x<-50)p.x = W+50;
		if (p.y<-50)p.y = H+50;
		if (p.x>W+50)p.x = -50;
		if (p.x>H+50)p.x = -50;
		}
		
}//end function draw
