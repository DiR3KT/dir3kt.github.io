var cx,cy,currentMinute,currentHour,currentSecond,piSecond,piMinute,piHour;
var circleSize;
var sx,sy,mx,my,hx,hy;
var randomcolor;
var time;
var aHour,aMinute,aSecond;
var backcolor;

function preload() {
	font = loadFont('assets/Lato.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(5);
	circleSize = min(windowWidth, windowHeight)/1.2;
	cx = windowWidth/2;
	cy = windowHeight/2;
}

function taille(x) {
	var result = circleSize*x;
	return result;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	circleSize = min(windowWidth, windowHeight)/1.2;
	cx = windowWidth/2;
	cy = windowHeight/2;
}

function draw() {
	currentMinute = minute() + norm(second(),0,60);
	currentHour = hour() + norm(minute(),0,60);
	currentSecond = second();
	if (currentHour < 12) {
		backcolor = map(currentHour, 0, 12, 0, 100);
	} else {
		backcolor = map(currentHour, 12, 24, 100, 0);
	}
	background(backcolor);
  	stroke(100,150);
  	strokeWeight(5);
  	noFill();
  	ellipse(cx,cy, circleSize, circleSize);
	stroke(255);
  	strokeWeight(10);
  	point(cx,cy);
	piMinute = map(currentMinute, 0, 60, 0, TWO_PI)-HALF_PI;
	piHour = map(currentHour, 0, 24, 0, TWO_PI*2)-HALF_PI;
	piSecond = map(currentSecond, 0, 60, 0, TWO_PI)-HALF_PI;
	sx = cx+cos(piSecond)*taille(0.40);
	sy = cy+sin(piSecond)*taille(0.40);
	mx = cx+cos(piMinute)*taille(0.30);
	my = cy+sin(piMinute)*taille(0.30);
	hx = cx+cos(piHour)*taille(0.20);
	hy = cy+sin(piHour)*taille(0.20);
	strokeWeight(1);
	stroke(255);
  	line(cx,cy,sx,sy);
  	strokeWeight(3);
	stroke(255);
	line(cx,cy,mx,my);
	strokeWeight(5);
	stroke(255);
	line(cx,cy,hx,hy);
	time = (hour()+":"+minute()+":"+second());

// texte
	noStroke();
	textSize(circleSize/10);
	strokeWeight(2);
	textFont(font);
	textAlign(CENTER);
	fill(backcolor+60);
	//text('Horloge', cx, cy-circleSize/4);
	textSize(circleSize/16);
	fill(backcolor+60);
	text(time, cx, cy+circleSize/5);
	textSize(20);
	textAlign(LEFT);
	fill(backcolor+60);
	text('Made by @DiiR3KT',10,windowHeight-15);
	//debug
	//text(backcolor,0,20);
	//text(cx,0,40);
	//text(cy,0,60);

// contour de l'horloge
	strokeWeight(2);
	stroke(255);
  	beginShape(POINTS);
  	for (var a = 0; a < 360; a+=6) {
    	var angle = radians(a);
    	var x = cx + cos(angle) * taille(0.45);
    	var y = cy + sin(angle) * taille(0.45);
    	vertex(x, y);
  	}
  	endShape();
}
