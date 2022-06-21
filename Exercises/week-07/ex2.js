const regExName = /^[a-zöüäÖÜÄ]+(\s+[a-zöüäÖÜÄ]+)+$/gi;
const regExXss = /<[\s\S]+?>[\s\S]*?<\/[\s\S]+?>/gim;

const bmiForm = document.getElementById("bmi_form");
const bmiName = document.getElementById("name");
const bmiRemark = document.getElementById("anmerk");
const bmiBtn = document.getElementById("btn");
const bmiText = document.getElementById("bmi");
const weight = document.getElementById("gewicht");
const height = document.getElementById("groesse");

const calculateBmi = (weight, height) => {
  return weight / (height * height);
};

const showCalculatedBmi = (e) => {
  e.preventDefault();

  const bmi = calculateBmi(parseFloat(weight.value), parseFloat(height.value));
  bmiText.innerHTML = bmi.toFixed(2);
};

const validateForm = (e) => {
  e.preventDefault();

  if (!regExName.test(bmiName.value)) {
    alert("Bitte Vor- und Nachname mit Leerzeichen getrennt angeben!");
    return false;
  }

  if (regExXss.test(bmiRemark.value)) {
    alert("Bitte keine tags im Textfeld!");
    return false;
  }

  bmiForm.submit();
};

bmiBtn.addEventListener("click", showCalculatedBmi, false);
bmiForm.addEventListener("submit", validateForm, false);
