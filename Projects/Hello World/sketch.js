let a = 1;

let size = 50;

let x_pos = 0;
let y_pos = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x_pos = windowWidth/2 - size/2;
	y_pos = windowHeight/2 - size;
	//document.getElementByID("hello").innerHTML = "Text";
	//hello.innerHTML = "My Text";
	//hello.style("color", "#FF0000");

	text = createP("This is an HTML string with style!");

  text.position(50, 50);
  text.style("font-family", "monospace");
  text.style("background-color", "#FF0000");
  text.style("color", "#FFFFFF");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
  //canvas.position(150, 150);
	helloP = select("#hello")

	helloP.style("color", "#FF0000")
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
