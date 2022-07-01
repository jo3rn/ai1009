const keyboardButtons = document.querySelectorAll(".keyboard-button");

const boardState = ["", "", "", "", "", ""];
const solution = "fulda";
let evalSolution = "fulda";
let currentAttempt = "";
const evaluations = [[], [], [], [], [], []];
let rowIndex = 0;

function clearCharAt(index) {
  return `${evalSolution.slice(0, index)}_${evalSolution.slice(index + 1)}`;
}

const isEqual = (attempt, index) => {
  return attempt === solution[index];
};

const isPartOf = (attempt) => {
  return evalSolution.indexOf(attempt) != -1;
};

const evaluateAttempt = () => {
  const currentRow = document.querySelectorAll(".game-row")[rowIndex];

  for (let index = 0; index < currentAttempt.length; index++) {
    const currentLetter = currentAttempt[index];
    const currentLetterContainer = currentRow.children[index];
    if (isEqual(currentLetter, index)) {
      evalSolution = clearCharAt(index);
      evaluations[rowIndex][index] = "correct";
      currentLetterContainer.classList.add("green");
    }
  }

  for (let index = 0; index < currentAttempt.length; index++) {
    const currentLetter = currentAttempt[index];
    const currentLetterContainer = currentRow.children[index];
    if (isPartOf(currentLetter)) {
      evalSolution = clearCharAt(solution.indexOf(currentLetter));
      evaluations[rowIndex][index] = "present";
      currentLetterContainer.classList.add("yellow");
    } else if (!isEqual(currentLetter, index)) {
      evaluations[rowIndex][index] = "absent";
      currentLetterContainer.classList.add("grey");
    }
  }

  evalSolution = solution;
};

const enterPressed = () => {
  if (currentAttempt.length == 5) {
    evaluateAttempt();
    boardState[rowIndex] = currentAttempt;
    rowIndex++;
    currentAttempt = "";
  }
};

const deleteLastLetter = () => {
  const nonEmptyCells = document.querySelectorAll(".row-cell:not(:empty)");
  if (nonEmptyCells.length > 0 && nonEmptyCells.length % (rowIndex * 5) != 0) {
    nonEmptyCells[nonEmptyCells.length - 1].innerHTML = "";
  }
};

const trashPressed = () => {
  currentAttempt = currentAttempt.slice(0, -1);
  deleteLastLetter();
};

const letterPressed = (letter) => {
  if (currentAttempt.length < 5) {
    const nextCell = document.querySelector(".row-cell:empty");
    nextCell.innerHTML = letter;
    currentAttempt += letter;
  }
};

for (const keyboardButton of keyboardButtons) {
  if (keyboardButton.innerHTML === "enter") {
    keyboardButton.addEventListener("click", enterPressed, false);
    continue;
  } else if (keyboardButton.id === "backspace") {
    keyboardButton.addEventListener("click", trashPressed, false);
    continue;
  } else {
    keyboardButton.addEventListener("click", () => {
      letterPressed(keyboardButton.innerHTML);
    });
  }
}
