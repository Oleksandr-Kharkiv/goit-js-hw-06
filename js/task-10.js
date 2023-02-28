function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const inputAmountEl = controlsEl.firstElementChild;
const buttonCreateEl = document.querySelector('#controls button[data-create]');
const buttonDestroyEl = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

inputAmountEl.addEventListener('input', amount);
buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);


