
const FRAMERATE = 60;

let current_tick = 0;
let seconds_per_year = 5;
let current_year = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(FRAMERATE);
}

function draw() {
	background(255,255,255)

	textSize(50)
	text(current_year,100,100,200,200)

	if (current_tick >= seconds_per_year){

		current_year++;
		current_tick = 0;


	}


	current_tick++;
}
