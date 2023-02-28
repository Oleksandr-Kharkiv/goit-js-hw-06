const controllerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const handleChangeSizeText = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
  console.log(event.target.value);
};
controllerEl.addEventListener("input", handleChangeSizeText);
