class Form {
  constructor(farbe) {
    this.farbe = farbe;
  }

  info() {
    console.log(this.constructor.name);
  }
}

class Rechteck extends Form {
  constructor(farbe, hoehe, breite, positionX, positionY) {
    super(farbe);
    this.hoehe = hoehe;
    this.breite = breite;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  flaeche() {
    return this.hoehe * this.breite;
  }

  info() {
    console.log(
      `${
        this.constructor.name
      } mit Flächeninhalt ${this.flaeche()} und der Farbe ${this.farbe}`
    );
  }
}

const rect = new Rechteck("grün", 30, 40, 50, 100);
rect.info();
