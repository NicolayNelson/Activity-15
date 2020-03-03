let text = document.getElementById("textInput");
let color = document.getElementById("colorInput");
let submit = document.getElementById("submitButton");
let form = document.querySelector("form");

function noSend(event) {
  event.preventDefault();
  console.log()
}
form.addEventListener("submit", noSend);

