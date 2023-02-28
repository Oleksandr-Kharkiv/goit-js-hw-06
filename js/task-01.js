const numberOfCategoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${numberOfCategoriesEl.children.length}`);

const animalsEl = numberOfCategoriesEl.firstElementChild;
const animalsTitleEl = animalsEl.querySelector("h2");
console.log(`Category: ${animalsTitleEl.textContent}`);
const animalsSetEl = animalsEl.querySelectorAll("li");
console.log(`Elements: ${animalsSetEl.length}`);

const productsEl = animalsEl.nextElementSibling;
const productsTitleEl = productsEl.querySelector("h2");
console.log(`Category: ${productsTitleEl.textContent}`);
const productsSetEl = productsEl.querySelectorAll("li");
console.log(`Elements: ${productsSetEl.length}`);

const technologiesEl = numberOfCategoriesEl.lastElementChild;
const technologiesTitleEl = technologiesEl.querySelector("h2");
console.log(`Category: ${technologiesTitleEl.textContent}`);
const technologiesSetEl = technologiesEl.querySelectorAll("li");
console.log(`Elements: ${technologiesSetEl.length}`);

// --------------------------------------1 варіант----------

// const numberOfCategoriesEl = document.querySelector('#categories');
// console.log(`Number of categories: ${numberOfCategoriesEl.children.length}`);

// const animalsEl = numberOfCategoriesEl.children[0];
// const animalsTitleEl = animalsEl.querySelector('h2');
// console.log(`Category: ${animalsTitleEl.textContent}`);
// const animalsSetEl = animalsEl.querySelectorAll('li');
// console.log(`Elements: ${animalsSetEl.length}`);

// const productsEl = numberOfCategoriesEl.children[1];
// const productsTitleEl = productsEl.querySelector('h2');
// console.log(`Category: ${productsTitleEl.textContent}`);
// const productsSetEl = productsEl.querySelectorAll('li');
// console.log(`Elements: ${productsSetEl.length}`);

// const technologiesEl = numberOfCategoriesEl.children[2];
// const technologiesTitleEl = technologiesEl.querySelector('h2');
// console.log(`Category: ${technologiesTitleEl.textContent}`);
// const technologiesSetEl = technologiesEl.querySelectorAll('li');
// console.log(`Elements: ${technologiesSetEl.length}`);
