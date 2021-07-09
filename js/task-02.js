   const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(
  ingredient => {
    let liElems = document.createElement('li');
    liElems.append(ingredient);
    return liElems;
    
  }
)
const ulList = document.querySelector('#ingredients');
ulList.append(...ingredientsList);
console.log(ulList);


