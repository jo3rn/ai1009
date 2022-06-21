const form = document.getElementById("registration");
const btnLanguage = document.getElementById("language");
const flag = document.getElementById("flag");
const passwordHint = document.getElementById("passwordHint");
const emailHint = document.getElementById("emailHint");
const btnSubmit = document.getElementById("submit");
const inputPassword = document.getElementById("password");
const inputPasswordRepeat = document.getElementById("passwordRepeat");
const inputEmail = document.getElementById("email");
const spanSubmitHint = document.getElementById("submitHint");

const languages = [
  {
    id: "DE",
    alt: "Flagge Deutschlands",
    htmlCode: "&#127465&#127466",
  },
  {
    id: "EN",
    alt: "Flag of UK",
    htmlCode: "&#127468&#127463",
  },
];

const language = {
  tags: {
    h1: [
      {
        DE: "Registrierung",
        EN: "Registration",
      },
    ],
    p: [
      {
        DE: "Bitte füllen Sie das Formular aus",
        EN: "Please fill out the form",
      },
    ],
    legend: [
      {
        DE: "Login Details",
        EN: "Login Details",
      },
      {
        DE: "Nutzerdaten",
        EN: "User Data",
      },
    ],
    label: [
      {
        DE: "Nutzername*",
        EN: "User name*",
      },
      {
        DE: "Passwort*",
        EN: "Password*",
      },
      {
        DE: "Passwort wiederholen*",
        EN: "Retype Password*",
      },
      {
        DE: "Vorname*",
        EN: "First Name*",
      },
      {
        DE: "Zweiter Vorname",
        EN: "Middle Name",
      },
      {
        DE: "Nachname*",
        EN: "Last Name*",
      },
      {
        DE: "E-Mail*",
        EN: "Email*",
      },
    ],
  },
  submit: {
    DE: "Abschicken",
    EN: "Submit",
  },
  hints: {
    passwordMismatch: {
      DE: "Passwörter stimmen nicht überein!",
      EN: "Passwords are not matching!",
    },
    emailIncorrectFormat: {
      DE: "E-Mail ist nicht in korrektem Format.",
      EN: "Email has invalid formatting.",
    },
  },
  success: {
    DE: "Erfolgreich!",
    EN: "Successful!",
  },
};

const languageElements = ["h1", "p", "legend", "label"];

let langIndex = 0;

const regexEmail = /^[a-z][a-z0-9]+@[a-z]{2,}\.[a-z]{2,3}$/;

const toggleLanguage = () => {
  langIndex = (langIndex + 1) % languages.length;
  setLanguageById(languages[langIndex].id);
};

const setLanguageById = (lang) => {
  for (let i = 0; i < languages.length; i++) {
    if (languages[i].id == lang) {
      langIndex = i;
      break;
    }
  }
  flag.innerHTML = languages[langIndex].htmlCode;
  flag.setAttribute("alt", languages[langIndex].alt);
  setTexts(languages[langIndex].id);
};

const setTexts = (lang) => {
  for (tag of languageElements) {
    document.querySelectorAll(tag).forEach((element, key) => {
      element.innerHTML =
        language.tags[element.tagName.toLowerCase()][key][lang];
    });
  }

  btnSubmit.value = language.submit[lang];
  spanSubmitHint.innerText = "";
};

const isValidMatching = () => {
  const isValid = inputPassword.value == inputPasswordRepeat.value;
  if (isValid) {
    passwordHint.innerHTML = "&#x2705;";
    passwordHint.setAttribute("alt", "hint that passwords matching");
  } else {
    passwordHint.innerHTML = "&#x26A0;";
    passwordHint.setAttribute("alt", "warning that passwords are not matching");
  }
  return isValid;
};

const isValidEmailFormat = (email) => {
  const isValid = regexEmail.test(email);
  if (isValid) {
    emailHint.innerHTML = "&#x2705;";
    emailHint.setAttribute("alt", "hint that email is in correct format");
  } else {
    emailHint.innerHTML = "&#x26A0;";
    emailHint.setAttribute("alt", "warning that email is in incorrect format");
  }
  return isValid;
};

// initialize fields with variable text
setLanguageById("DE");

btnLanguage.onclick = () => {
  toggleLanguage();
};

inputPasswordRepeat.onblur = () => {
  isValidMatching();
};

inputEmail.onblur = (e) => {
  isValidEmailFormat(e.target.value);
};

registration.onsubmit = (e) => {
  spanSubmitHint.innerText = "";
  let currentLang = languages[langIndex].id;
  e.preventDefault();
  invalid = false;
  if (!isValidMatching()) {
    spanSubmitHint.innerText = language.hints.passwordMismatch[currentLang];
    invalid = true;
  }

  if (!isValidEmailFormat(inputEmail.value)) {
    spanSubmitHint.innerText += `${invalid ? "\n" : ""}${
      language.hints.emailIncorrectFormat[currentLang]
    }`;
    invalid = true;
  }

  if (!invalid) {
    spanSubmitHint.innerText = language.success[currentLang];
  }
};
