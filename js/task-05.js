let textInputEl = document.querySelector("#name-input");
let textOutputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  textOutputEl.textContent = event.currentTarget.value.trim();
  if (textInputEl.value === "") {
    textOutputEl.textContent = "Anonymous";
  }
}
