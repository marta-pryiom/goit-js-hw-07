const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text')
inputEl.addEventListener('input', oninputElChange);

function oninputElChange(event) {
    const targValue = event.target.value;
    textEl.style.fontSize = targValue + 'px';
}