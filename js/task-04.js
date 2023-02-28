const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function increment() {
  counterValue += 1;
}
function decrement() {
  counterValue -= 1;
}

incrementBtn.addEventListener("click", function () {
  increment();
  valueEl.textContent = counterValue;
});
decrementBtn.addEventListener("click", function () {
  decrement();
  valueEl.textContent = counterValue;
});

// ----------------------------------1 варіант---------

// const valueEl = document.querySelector("#value");
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// const counter = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },
//     decrement() {
//         this.value -= 1;
//     },
// };
// incrementBtn.addEventListener('click', function() {
//     counter.increment();
//     valueEl.textContent = counter.value;
// } );
// decrementBtn.addEventListener('click', function() {
//     counter.decrement();
//     valueEl.textContent = counter.value;
// } );
