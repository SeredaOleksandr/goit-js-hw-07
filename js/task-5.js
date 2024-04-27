function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanColorBtn = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColorBtn.textContent = randomColor;
}
