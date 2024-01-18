let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(updateStopwatch, 10);
    isRunning = true;
    document.getElementById('startBtn').innerText = 'Pause';
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startBtn').innerText = 'Resume';
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('startBtn').innerText = 'Resume';
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  document.getElementById('startBtn').innerText = 'Start';
  document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
  const lapList = document.getElementById('lapList');
  const lapTime = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  const lapItem = document.createElement('li');
  lapItem.innerText = lapTime;
  lapList.insertBefore(lapItem, lapList.firstChild);
}

function updateStopwatch() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('minutes').innerText = padZero(minutes);
  document.getElementById('seconds').innerText = padZero(seconds);
  document.getElementById('milliseconds').innerText = padZero(milliseconds);
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}
