let a = 1;

let size = 50;

let x_pos = 0;
let y_pos = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x_pos = windowWidth/2 - size/2;
	y_pos = windowHeight/2 - size;
}

function draw() {
	background(255,125,0);
	//console.log(mouseX);

	strokeWeight(5);
	rect(10,10,40+20*cos(a),40+20*sin(a));

	strokeWeight(0);
	fill(25,255,25);
	ellipse(x_pos+25*cos(a),y_pos+25*sin(a),size);

	strokeWeight(10);
	line(40+20*cos(a),40+20*sin(a),x_pos+25*cos(a),y_pos+25*sin(a))

	a += 0.05;
}
