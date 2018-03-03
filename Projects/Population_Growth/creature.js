class Creature {

  constructor(x, y, size) {
    this.xPos = x;
    this.yPos = y;
    this.size = size;
    this.age = 0;

    this.canReproduce = false;
    this.creatureColor = color(0, 100, 100)
  }

  show() {
    noStroke();


    fill(lerpColor(this.creatureColor, color(200, 200, 200, 50), this.age / 4));
    ellipse(this.xPos, this.yPos, this.size);
  }

  ageCreature() {
    this.age++;

    if (this.age > 1) {
      this.canReproduce = true;
      console.log("Reached maturity");
    }

  }

  reproduce() {
    console.log("Reproducing...");

    // Create new creatures
    let numNewCreatures = round(random(1, 4));
    let newCreatures = [];
    for (let i = 0; i < numNewCreatures; i++) {
      //let v = p5.Vector.random2D();
      let x = random(-this.size * 2, this.size * 2);
      let y = random(-this.size * 2, this.size * 2);

      let newCreature = new Creature(this.xPos + 20 * random([-1, 1]), this.yPos + 20 * random([-1, 1]), this.size);
      newCreature.setCreatureColor(color(0, 100, 150))
      newCreatures.push(newCreature);

    }
    return newCreatures;
    // TODO: Add reproductiong feature for creatures
  }

  setCreatureColor(newColor) {
    this.creatureColor = newColor;
  }

  die() {

  }
}