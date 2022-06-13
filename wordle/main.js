const keyboardButtons = document.querySelectorAll(".keyboard-button");

const boardState = ["", "", "", "", "", ""];
const solution = "fulda";
const evaluations = [null, null, null, null, null, null];
let rowIndex = 0;

const evaluateWord = (word) => {
  if (word === solution) {
    evaluations[rowIndex] = [
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ];
  } else {
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

evaluateWord("donor");
console.log(evaluations);
