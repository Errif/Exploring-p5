const FRAMERATE = 60;

// Simulation Settings
let secondsPerYear = 2;

// Population Settings
let startPopulationSize = 10;

//
let currentYear = 1;
let nextYearTime = 0;
let elapsedSeconds = 0;

//
let creatureMaxAge = 3;
let creatures = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(FRAMERATE);
  nextYearTime = secondsPerYear;
  //creatures.push(new Creature(100,100,20))

  // Starting Creatures
  for (var i = 0; i < 6; i++) {
    let newCreature = new Creature(random(200, 600), random(200, 600), random(20, 60));
    creatures.push(newCreature)

  }

}

function draw() {
  background(255, 255, 255);


  elapsedSeconds = millis() / 1000;

  if (elapsedSeconds >= nextYearTime) {
    newYear();
  }

  //console.log(creatures);

  for (var i = 0; i < creatures.length; i++) {
    creatures[i].show();
  }



  fill(0);
  stroke(255);
  text(floor(elapsedSeconds), 100, 100);
  text("Current Year: " + currentYear, 200, 100);
  text("Creatures: " + creatures.length, 300, 100);
}


function newYear() {
  // New year
  currentYear++;
  nextYearTime = elapsedSeconds + secondsPerYear;

  creatures.forEach(function(c) {
    c.ageCreature()
  });

  for (let c of creatures) {
    let r = random();

    if (r < 0.50) {
      c.die();
      let i = creatures.indexOf(c);
      creatures.splice(i, 1);
    }
  }

  // Update creatures
  for (let c of creatures) {
    let r = random();

    if (c.age > creatureMaxAge) {
      c.die();
      let i = creatures.indexOf(c);
      creatures.splice(i, 1);
    }

    if (c.canReproduce && creatures.length < 1000) {
      let bornCreatures = c.reproduce();
      creatures = creatures.concat(bornCreatures);
    }
  }
}