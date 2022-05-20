"use strict";

document.write("<h1>Aufgabe 4</h1>");

document.write("<h2>Aufgabe 4.1</h2>");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayByArray(dayIndex) {
  if (dayIndex < 0 || dayIndex > 6) {
    return "Es sind nur Werte zwischen 0 und 6 zulässig!";
  }

  return weekDays[dayIndex];
}
const currentWeekDay = getDayByArray(new Date().getDay());
const dateWithSunday = new Date("August 17, 1975 23:15:30");
document.write(`<p>Heutiger Wochentag: ${currentWeekDay}</p>`);
document.write(
  `<p>17.08.1975 war ein: ${getDayByArray(dateWithSunday.getDay())}</p>`
);

document.write("<h2>Aufgabe 4.2</h2>");
const generateRandomArray = (a, b, n) => {
  let arr = [];
  let lowerBound = a <= b ? a : b;
  let upperBound = b >= a ? b : a;

  for (let i = 1; i <= n; i++) {
    const randomNumber =
      ~~(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    arr.push(randomNumber);
  }
  return arr;
};

document.write("<p>generateRandomArray(3, 8, 25):</p>");

generateRandomArray(3, 8, 25).forEach((element) => {
  document.write(`<span>${element}, </span>`);
});

document.write("<h2>Aufgabe 4.3</h2>");
const sumArray = (arr) => {
  return arr.reduce((a, b) => a + b);
};

document.write(`<p>sumArray([-1, 2, -3, 4]): ${sumArray([-1, 2, -3, 4])}</p>`);

document.write("<h2>Aufgabe 4.4</h2>");
const groessteZahl = (arr) => {
  if (arr.length > 0) {
    return arr.reduce((a, b) => (a > b ? a : b));
  } else {
    return "leeres Array";
  }
};

document.write(`<p>groessteZahl([4, 9, 1]): ${groessteZahl([4, 9, 1])}</p>`);
document.write(`<p>groessteZahl([4, -9, 1]): ${groessteZahl([4, -9, 1])}</p>`);
document.write(`<p>groessteZahl([]): ${groessteZahl([])}</p>`);

document.write("<h2>Aufgabe 4.5</h2>");
const generate3dArray = () => {
  const x = [];
  for (let i = 0; i < 10; i++) {
    const y = [];
    for (let j = 0; j < 10; j++) {
      const z = [];
      for (let k = 0; k < 10; k++) {
        z.push(`x=${i}|y=${j}|z=${k}`);
      }
      y.push(`${z}<br>`);
    }
    x.push(`${y}<br>`);
  }
  return x;
};

document.write(`<p>${generate3dArray()}</p>`);
