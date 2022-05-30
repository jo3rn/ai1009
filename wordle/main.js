console.log("Bin da");

const keyboardButtons = document.querySelectorAll(".keyboard-button");

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
