const keyboardButtons = document.querySelectorAll(".keyboard-button");

const boardState = ["", "", "", "", "", ""];
const solution = "fulda";
const evaluations = [null, null, null, null, null, null];
let rowIndex = 0;

const isEqual = (attempt, index) => {
  return attempt[index] === solution[index];
};

const isPartOf = (attempt) => {
  return solution.indexOf(attempt) != -1;
};

const evaluateWord = (word) => {
  for (const index in word) {
    console.log(isEqual(word, index));
    console.log(isPartOf(word[index]));
    console.log(word[index]);
  }
};

const enterPressed = () => {
  console.log("enter gedrückt");
};

const trashPressed = () => {
  console.log("trash gedrückt");
};

for (const keyboardButton of keyboardButtons) {
  if (keyboardButton.innerHTML === "enter") {
    keyboardButton.addEventListener("click", enterPressed, false);
    continue;
  } else if (keyboardButton.id === "backspace") {
    keyboardButton.addEventListener("click", trashPressed, false);
    continue;
  } else {
    keyboardButton.addEventListener("click", (e) => {
      const nextCell = document.querySelector(".row-cell:empty");
      const letter = keyboardButton.innerHTML;
      nextCell.innerHTML = letter;
      console.log(letter);
    });
  }
}

evaluateWord("fanor");
console.log(evaluations);
