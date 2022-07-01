"use strict";

/* ES5-Syntax */

var Hund = function (name, besitzer) {
  this._name = name;
  this._besitzer = besitzer;
};
Hund.prototype.bellen = function () {
  console.log(this._name + " sagt: Wau wau wau!");
};

var Dackel = function (name, besitzer, club) {
  Hund.call(this, name, besitzer);
  this._club = club;
};
Dackel.prototype = Object.create(Hund.prototype);
Dackel.prototype.constructor = Dackel;
Dackel.prototype.sageSpruch = function () {
  console.log(this._besitzer + " sagt: Ordnung muss sein!");
};

var Boxer = function (name, besitzer, bissig) {
  Hund.call(this, name, besitzer);
  this._bissig = bissig;
};
Boxer.prototype = Object.create(Hund.prototype);
Boxer.prototype.constructor = Boxer;
Boxer.prototype.nenneBeissverhalten = function () {
  var prop = this._bissig ? "bissiger" : "lieber";
  console.log("Ich bin ein " + prop + " Hund.");
};

var waldi = new Dackel("Waldi", "Krause", "Teckel e.V.");
var prinz = new Boxer("Prinz", "Klitschko", false);
waldi.bellen();
waldi.sageSpruch();
prinz.bellen();
prinz.nenneBeissverhalten();

/* ES6-Syntax */

class HundEs6 {
  constructor(name, besitzer) {
    this.name = name;
    this.besitzer = besitzer;
  }

  bellen() {
    console.log(`${this.name} sagt: Wau wau wau!`);
  }
}

class DackelEs6 extends HundEs6 {
  constructor(name, besitzer, club) {
    super(name, besitzer);
    this.club = club;
  }

  sageSpruch() {
    console.log(`${this.besitzer} sagt: Ordnung muss sein!`);
  }
}

class BoxerEs6 extends HundEs6 {
  constructor(name, besitzer, bissig) {
    super(name, besitzer);
    this.bissig = bissig;
  }

  nenneBeissverhalten() {
    console.log(`Ich bin ein ${this.bissig ? "bissiger" : "lieber"} Hund.`);
  }
}

const waldiEs6 = new DackelEs6("Waldi", "Krause", "Teckel e.V.");
const prinzEs6 = new BoxerEs6("Prinz", "Klitschko", false);
waldiEs6.bellen();
waldiEs6.sageSpruch();
prinzEs6.bellen();
prinzEs6.nenneBeissverhalten();
