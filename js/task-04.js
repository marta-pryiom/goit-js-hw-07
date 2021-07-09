let pageValue = document.querySelector('#value');
// console.log(pageValue);
let removeListenerBtn = document.querySelector('#counter').firstElementChild;
// console.log(removeListenerBtn);
let addListenerBtn = document.querySelector('#counter').lastElementChild;
// console.log(addListenerBtn);

let counterValue = 0;
removeListenerBtn.addEventListener('click', onRemoveBtnClick);
function onRemoveBtnClick() {
    counterValue -= 1;
    pageValue.textContent = counterValue;
    console.log('Віднімаю елемент!')
}

addListenerBtn.addEventListener('click', onAddBtnClick);
function onAddBtnClick() {
    counterValue += 1;
    pageValue.textContent = counterValue;
    console.log('Додаю елемент!')
}
console.log(pageValue)