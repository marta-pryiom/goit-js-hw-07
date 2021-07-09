const inputEl = document.getElementById('validation-input');
const inputLength = inputEl.dataset.length;
console.log(inputLength);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log('Втратив фокус - BLUR');
    const targValue = event.target.value;

    if (targValue.length == inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
       
    } else if (targValue.length === 0) {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');   
    }
}
