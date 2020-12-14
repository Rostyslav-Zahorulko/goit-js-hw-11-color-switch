const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', handleOnStartBtnClick);
refs.stopBtn.addEventListener('click', handleOnStopBtnClick);

let id = null;
console.log('id вначале: ', id);

function handleOnStartBtnClick() {
  id = setInterval(setBodyBackgroundColor, 1000);
  console.log('id после нажатия на кнопку запуска: ', id);

  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
}

function handleOnStopBtnClick() {
  clearInterval(id);
  id = null;
  console.log('id после нажатия на кнопку остановки: ', id);

  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
}

function setBodyBackgroundColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
