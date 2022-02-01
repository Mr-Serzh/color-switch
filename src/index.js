import colors from './colors';

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

const min = 0;
const max = colors.length - 1;
let timeout = null;
let sameNumber;

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  if (sameNumber === num) {
    return random(min, max);
  } else {
    sameNumber = num;
    return num;
  }
}

function onStart() {
  timeout = setInterval(() => {
    bodyEl.style.backgroundColor = colors[random(min, max)];
  }, 500);
  startBtn.disabled = true;
}

function onStop() {
  clearInterval(timeout);
  startBtn.disabled = false;
}
