"use strict";

document.write("<h1>Aufgabe 3</h1>");

document.write("<h2>Aufgabe 3.1</h2>");
/* add / concatenate */
const add = (a, b) => {
  return a + b;
};

document.write(`<p>add(3, 2): ${add(3, 2)}</p>`);
document.write(`<p>concatenate("foo", "bar"): ${add("foo", "bar")}</p>`);

document.write("<h2>Aufgabe 3.2</h2>");
const summe = (n) => {
  if (n <= 0) {
    return 0;
  }

  return n + summe(n - 1);
};

document.write(`<p>summe(10): ${summe(10)}</p>`);

document.write("<h2>Aufgabe 3.3</h2>");
const fakultaetRekursiv = (n) => {
  if (n <= 1) {
    return n < 0 ? "nicht definiert" : 1;
  }
  return n * fakultaetRekursiv(n - 1);
};

const fakultaetIterativ = (n) => {
  let fakultaet = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      fakultaet *= i;
    }
  } else if (n < 0) {
    return "nicht definiert";
  }
  return fakultaet;
};

for (let i = -1; i <= 10; i++) {
  document.write(`<p>fakultaetRekursiv(${i}) = ${fakultaetRekursiv(i)}</p>`);
  document.write(`<p>fakultaetIterativ(${i}) = ${fakultaetIterativ(i)}</p>`);
}

document.write("<h2>Aufgabe 3.4</h2>");
const pattern = (numLines) => {
  let output = "<pre>";
  for (let i = 1; i <= numLines; i++) {
    output += " ".repeat(numLines - i) + "+".repeat(2 * i - 1) + "<br/>";
  }
  output += "</pre>";
  return output;
};

document.write(`<p>pattern(10):</p><p>${pattern(10)}</p>`);
