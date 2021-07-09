// варіант 1

const categoryList = document.querySelectorAll('li.item');
categoryList.forEach(el => {

  console.log(
    `Категория: ${el.firstElementChild.textContent}`
    );
    console.log(
    `Количество элементов: ${el.lastElementChild.children.length}`)
});

//варіант 2
 
// const categories = document.querySelector('ul#categories');
// const allChildren = categories.children.length;
// console.log(`В списке ${allChildren} категории.`)

// const liElem = categories.children;

// for (let i = 0; i < liElem.length; i++) {
//     const childrenOfLi = liElem[i].children;
//     console.log(childrenOfLi)
//     const titleChildrenOfLi = childrenOfLi[0].textContent;
//     const amountUlChildren = childrenOfLi[1].children.length;
   
//     console.log(`Категория: ${titleChildrenOfLi}`);
//     console.log(`Количество элементов: ${amountUlChildren}`)
// }


