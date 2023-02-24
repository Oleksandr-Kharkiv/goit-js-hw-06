const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector(`#ingredients`);

const makeIngredientItem = array => {
  return array.map(ingredient =>{
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add('item');
    console.log(ingredientEl)
    return ingredientEl;
  });
}
const elements = makeIngredientItem(ingredients);
ingredientsList.append(...elements);

// --------------------------------------3 варіант---------------

// const ingredientsList = document.querySelector(`#ingredients`);
// const acc = [];
// ingredients.forEach(function (ingredient) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');
//   acc.push(ingredientEl);
// } ); 
//   ingredientsList.append(...acc);

// ----------------------------------------2 варіант--------------

// const ingredientsList = document.querySelector(`#ingredients`);
// const acc = [];

// for (const ingredient of ingredients) {
//   const ingredientEl = document.createElement('li');
//   ingredientEl.textContent = ingredient;
//   ingredientEl.classList.add('item');
//   acc.push(ingredientEl);
//   console.log(acc)
//   }
//   ingredientsList.append(...acc);

// ----------------------------------------1 варіант---------------

// const ingredientsList = document.querySelector(`#ingredients`);

// const ingredient0 = document.createElement('li');
// ingredient0.textContent = ingredients[0];
// ingredient0.classList.add('item');

// const ingredient1 = document.createElement('li');
// ingredient1.textContent = ingredients[1];
// ingredient1.classList.add('item');

// const ingredient2 = document.createElement('li');
// ingredient2.textContent = ingredients[2];
// ingredient2.classList.add('item');

// const ingredient3 = document.createElement('li');
// ingredient3.textContent = ingredients[3];
// ingredient3.classList.add('item');

// const ingredient4 = document.createElement('li');
// ingredient4.textContent = ingredients[4];
// ingredient4.classList.add('item');

// const ingredient5 = document.createElement('li');
// ingredient5.textContent = ingredients[5];
// ingredient5.classList.add('item');

// ingredientsList.append(ingredient0, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5);
// console.log(ingredientsList);