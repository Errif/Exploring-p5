class Creature {

  constructor(x, y, size, cColor) {
    this.xPos = x;
    this.yPos = y;
    this.size = size;
    this.age = 0;

    this.canReproduce = false;
    this.creatureColor = cColor;
  }

  show() {
    noStroke();


    fill(lerpColor(this.creatureColor, color(200, 200, 200, 50), this.age / 4));
    ellipse(this.xPos, this.yPos, this.size);
  }

  ageCreature() {
    this.age++;
    this.size = this.size * 1.5;


    if (this.age > 1) {
      this.canReproduce = true;
      //console.log("Reached maturity");
    }

  }

  reproduce() {
    //console.log("Reproducing...");

    // Create new creatures
    let numNewCreatures = round(random(1, 4));
    let newCreatures = [];
    for (let i = 0; i < numNewCreatures; i++) {

      let x = constrain(this.xPos + 20 * random([-1, 0, 1]), 20, windowWidth - 20);
      let y = constrain(this.yPos + 20 * random([-1, 0, 1]), 20, windowHeight - 20);


      let ry = round(random(1, 10));


      let r = constrain(this.creatureColor.levels[0] + random([-ry, 0, ry]), 0, 255);
      let g = constrain(this.creatureColor.levels[1] + random([-ry, 0, ry]), 0, 255);
      let b = constrain(this.creatureColor.levels[2] + random([-ry, 0, ry]), 0, 255);

      let newColor = color(r, g, b);




      let newCreature = new Creature(x, y, 10, newColor);
      //newCreature.setCreatureColor(color(0, 100, 150))
      newCreatures.push(newCreature);

    }
    return newCreatures;
  }

  setCreatureColor(newColor) {
    this.creatureColor = newColor;
  }

  die() {

  }
}