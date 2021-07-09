const refs = {
    input: document.getElementById('name-input'),
    name:document.getElementById('name-output'),
}
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    
    if (refs.input.value === '') {
        refs.name.textContent = 'незнакомец';
    } else {
        refs.name.textContent = event.currentTarget.value;
        }
 };
