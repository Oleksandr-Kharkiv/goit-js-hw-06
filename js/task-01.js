const numberOfCategories = document.querySelector('#categories');
console.log(`Number of categories: ${numberOfCategories.children.length}`);

const animals = numberOfCategories.firstElementChild;
const animalsTitle = animals.querySelector('h2');
console.log(`Category: ${animalsTitle.textContent}`);
const animalsSet = animals.querySelectorAll('li');
console.log(`Elements: ${animalsSet.length}`);

const products = animals.nextElementSibling;
const productsTitle = products.querySelector('h2');
console.log(`Category: ${productsTitle.textContent}`);
const productsSet = products.querySelectorAll('li');
console.log(`Elements: ${productsSet.length}`);

const technologies = numberOfCategories.lastElementChild;
const technologiesTitle = technologies.querySelector('h2');
console.log(`Category: ${technologiesTitle.textContent}`);
const technologiesSet = technologies.querySelectorAll('li');
console.log(`Elements: ${technologiesSet.length}`);

// --------------------------------------1 варіант----------

// const numberOfCategories = document.querySelector('#categories');
// console.log(`Number of categories: ${numberOfCategories.children.length}`);

// const animals = numberOfCategories.children[0];
// const animalsTitle = animals.querySelector('h2');
// console.log(`Category: ${animalsTitle.textContent}`);
// const animalsSet = animals.querySelectorAll('li');
// console.log(`Elements: ${animalsSet.length}`);

// const products = numberOfCategories.children[1];
// const productsTitle = products.querySelector('h2');
// console.log(`Category: ${productsTitle.textContent}`);
// const productsSet = products.querySelectorAll('li');
// console.log(`Elements: ${productsSet.length}`);

// const technologies = numberOfCategories.children[2];
// const technologiesTitle = technologies.querySelector('h2');
// console.log(`Category: ${technologiesTitle.textContent}`);
// const technologiesSet = technologies.querySelectorAll('li');
// console.log(`Elements: ${technologiesSet.length}`);