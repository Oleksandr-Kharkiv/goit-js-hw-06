let textInput = document.querySelector('#name-input');
let textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    textOutput.textContent = event.currentTarget.value.trim();
    if(textInput.value.length === 0) {
        textOutput.textContent = 'Anonymous';
    }
}