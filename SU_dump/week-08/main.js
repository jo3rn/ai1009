const url = "https://www.breakingbadapi.com/api/quote/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

/* XHR */
const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
  console.log("in onload");
  console.log(this.responseText);
  const jsonResponse = JSON.parse(this.responseText);
  quote.innerHTML = jsonResponse[0].quote;
  author.innerHTML = jsonResponse[0].author;
};

xhttp.open("GET", url);
xhttp.send();
console.log("after send()");

/* FETCH */
fetch(url, {
  method: "GET",
  mode: "cors",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
