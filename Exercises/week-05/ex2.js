const callback = function (evt) {
  evt.preventDefault();
  // get user input from text inputs, '+' converts string value to numeric
  const weight = +document.getElementById("gewicht").value;
  const height = +document.getElementById("groesse").value;
  const bmi = weight / (height * height);
  document.getElementById("bmi").innerHTML = bmi.toFixed(2);
};

document.getElementById("btn").addEventListener("click", callback, false);
