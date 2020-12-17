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

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.intervalId = setInterval(setBodyBackgroundColor, 1000);
    this.isActive = true;

    console.log('this: ', this);
    console.log('this.intervalId: ', this.intervalId);
    console.log('this.isActive: ', this.isActive);
  },

  stop() {
    if (!this.isActive) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;

    console.log('this: ', this);
    console.log('this.intervalId: ', this.intervalId);
    console.log('this.isActive: ', this.isActive);
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function setBodyBackgroundColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
