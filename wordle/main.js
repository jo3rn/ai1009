const keyboardButtons = document.querySelectorAll(".keyboard-button");

const boardState = ["", "", "", "", "", ""];
const solution = "fulda";
let currentAttempt = "";
const evaluations = [[], [], [], [], [], []];
let rowIndex = 0;

const isEqual = (attempt, index) => {
  return attempt[index] === solution[index];
};

const isPartOf = (attempt) => {
  return solution.indexOf(attempt) != -1;
};

const evaluateWord = (word) => {
  console.log(boardState);
  console.log(currentAttempt);
  console.log(evaluations);

  const currentRow = document.querySelectorAll(".game-row")[rowIndex];

  for (const index in word) {
    const currentLetter = currentRow.children[index];

    if (isEqual(word, index)) {
      evaluations[rowIndex][index] = "correct";
      currentLetter.classList.add("green");
    } else if (isPartOf(word[index])) {
      evaluations[rowIndex][index] = "present";
      currentLetter.classList.add("yellow");
    } else {
      evaluations[rowIndex][index] = "absent";
      currentLetter.classList.add("grey");
    }
  }
};

const enterPressed = () => {
  console.log("enter gedrückt");
  evaluateWord(currentAttempt);
  boardState[rowIndex] = currentAttempt;
  rowIndex++;
  currentAttempt = "";
};

const trashPressed = () => {
  console.log("trash gedrückt");
  console.log(currentAttempt);
  currentAttempt = currentAttempt.slice(0, -1);
  console.log(currentAttempt);
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

      currentAttempt += letter;
      console.log(currentAttempt);
    });
  }
}
