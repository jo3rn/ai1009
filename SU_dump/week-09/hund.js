function Hund(name) {
  //   this.#color = "red";
  this.name = name;
  let age = 0;
  this.getAge = function () {
    return age;
  };

  this.birthday = function () {
    age++;
  };
}

const dog = new Hund("Waldi");
console.log(dog.name);
dog.birthday();
console.log(dog.getAge());
// console.log(dog.#color);
