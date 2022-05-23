console.log("Bin da");

const keyboardButtons = document.querySelectorAll(".keyboard-button");

for (const keyboardButton of keyboardButtons) {
  //   console.log(keyboardButton);
  keyboardButton.addEventListener("click", (e) => {
    const letter = keyboardButton.innerHTML;
    console.log(letter);
  });
}
