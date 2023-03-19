const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsId = document.querySelector('#ingredients');
const ingredientArray = ingredients.map(element => {
  const ingredientsItemLi = document.createElement('li');
  ingredientsItemLi.classList.add('item');
  ingredientsItemLi.textContent = element;

  return ingredientsItemLi;
});
ingredientsId.append(...ingredientArray) ;