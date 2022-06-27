const bmiForm = document.getElementById("bmi");
const bmiUser = document.getElementById("user");
const bmiRemark = document.getElementById("remark");
const bmiBtn = document.getElementById("calculateBmi");
const bmiBtnAjax = document.getElementById("ajaxBmi");
const bmiText = document.getElementById("bmiValue");
const weight = document.getElementById("gewicht");
const height = document.getElementById("groesse");

const regExName = /^[a-zöüäÖÜÄ]+(\s+[a-zöüäÖÜÄ]+)+$/gi;
const regExXss = /<[\s\S]+?>[\s\S]*?<\/[\s\S]+?>/gi;

const calculateBmi = (weight, height) => {
  return weight / (height * height);
};

bmiBtn.onclick = () => {
  const bmi = calculateBmi(parseFloat(weight.value), parseFloat(height.value));

  bmiText.innerHTML = bmi.toFixed(2);
};

const validateForm = (e) => {
  e.preventDefault();
  if (!regExName.test(user.value)) {
    alert("Bitte Vor- und Nachname mit Leerzeichen getrennt angeben!");
    return false;
  }
  if (regExXss.test(bmiRemark.value)) {
    alert("Bitte keine tags im Textfeld!");
    return false;
  }
  bmiForm.submit();
};

bmiForm.addEventListener("submit", validateForm, false);

bmiBtnAjax.onclick = () => {
  const params = new URLSearchParams({
    gewicht: weight.value,
    groesse: height.value,
  });

  const url = `https://vulcan.informatik.hs-fulda.de/bmiRechnerAjax.php?${params.toString()}`;

  // using XHR
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    bmiText.innerHTML = this.response;
  };
  xhttp.open("GET", url, true);
  xhttp.send();

  // using fetch()
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => (bmiText.innerHTML = data));
};
