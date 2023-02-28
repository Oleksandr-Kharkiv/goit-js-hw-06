// -----------------------------2 варіант------hex-color---

const bodyEl = document.querySelector("body");
const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", handleBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handleBtnChangeColorClick() {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl.textContent;
}

// -------------------------------1 варіант-----rgb-color---

// const bodyEl = document.querySelector('body');
// const changeColorEl = document.querySelector('.change-color');
// const colorEl = document.querySelector('.color');

// changeColorEl.addEventListener('click', handleBtnChangeColorClick);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
// function handleBtnChangeColorClick() {
//   bodyEl.style.backgroundColor = getRandomHexColor();
//   colorEl.textContent = bodyEl.style.backgroundColor;
// }
