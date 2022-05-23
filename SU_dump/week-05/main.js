const two = document.getElementById("2");
two.addEventListener("click", (e) => {
  console.log(e);
  console.log("2 wurde geklickt");
  two.innerHTML = "geklickt";
});
