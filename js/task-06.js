const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputChange);
console.log(inputEl);
function onInputChange(event) {
  if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  } else if (event.currentTarget.value.length < inputEl.dataset.length) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
