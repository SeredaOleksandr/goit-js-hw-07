const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const wrapperInput = document.createElement('div');
wrapperInput.classList.add('login-form');
wrapperInput.appendChild(textInput);
wrapperInput.appendChild(document.querySelector('h1'));
document.body.append(wrapperInput);

textInput.addEventListener('input', changeName);

function changeName() {
  const trimInput = textInput.value.trim();

  if (trimInput === '') {
    textOutput.textContent = 'Anonymous';
  } else {
    textOutput.textContent = trimInput;
  }
}
