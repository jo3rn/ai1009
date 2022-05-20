"use strict";

document.write("<h1>Aufgabe 2</h1>");

document.write("<h2>Aufgabe 2.1</h2>");
document.write("<p>Hallo Web Apps</p>");

document.write("<h2>Aufgabe 2.2</h2>");
document.write("<p>for Schleife</p>");
for (let i = 1; i <= 10; i++) {
  document.write(`<span>${i} </span>`); // same as: document.write("<p>" + i + "</p>")
  console.log(i);
}

document.write("<p>while Schleife</p>");
let i = 1;
while (i <= 10) {
  let status = i % 2 == 0 ? "even" : "odd";
  document.write(`<span>${i} (${status}) </span>`);
  console.log(i);
  i++;
}

document.write("<p>do while Schleife</p>");
i = 1;
do {
  document.write(`<span>${i} -&gt; </span>`);
  console.log(i);
  i++;
} while (i <= 10);

document.write("<h2>Aufgabe 2.3</h2>");
document.write("<p>Alert box erscheint.</p>");
const birthday = new Date("August 19, 1975 23:15:30");
const day = birthday.getDay();

switch (day) {
  case 0:
    alert("Sunday");
    break;
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
  default:
    alertor("Unknown week day");
    break;
}
