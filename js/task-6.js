function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('.controls');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('.boxes');
destroyBtn.classList.add('btn-red');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100 || !Number.isInteger(amount)) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxes.forEach(box => {
    boxesDiv.appendChild(box);
  });

  input.value = '';
}

function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';
}
