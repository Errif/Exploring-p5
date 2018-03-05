const FRAMERATE = 60;

// Simulation Settings
let secondsPerYear = 0.01;

// Population Settings
let startPopulationSize = 10;

//
let currentYear = 1;
let nextYearTime = 0;
let elapsedSeconds = 0;

//
let creatureMaxAge = 6;
let creatures = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(FRAMERATE);
  nextYearTime = secondsPerYear;
  //creatures.push(new Creature(100,100,20))

  let creatureColors = [color('#aabf12'), color('#33ab12'), color('#165512'), color('#fe3fa2'), color('#a345cd'), color('#a345cd')];

  // Starting Creatures
  for (var i = 0; i < 6; i++) {
    let col = creatureColors[i]
    let newCreature = new Creature(random(50, windowWidth), random(50, windowHeight), random(20, 60), col);
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

    if (c.age == 1 && r < 0.50) {
      c.die();
      let i = creatures.indexOf(c);
      creatures.splice(i, 1);
    } else if (c.age == 2 && r < 0.25) {
      c.die();
      let i = creatures.indexOf(c);
      creatures.splice(i, 1);
    }
  }

  // Update creatures
  for (let c of creatures) {

    if (c.age > creatureMaxAge) {
      c.die();
      let i = creatures.indexOf(c);
      creatures.splice(i, 1);
    }



    if (c.canReproduce && creatures.length < 2000) {
      let bornCreatures = c.reproduce();
      creatures = creatures.concat(bornCreatures);
    }
  }
}
