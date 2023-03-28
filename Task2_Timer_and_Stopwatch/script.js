const startButton = document.getElementById('timer-start');
const pauseButton = document.getElementById('timer-pause');
const restartButton = document.getElementById('timer-restart');
const hoursInput = document.getElementById('timer-hours');
const minutesInput = document.getElementById('timer-minutes');
const secondsInput = document.getElementById('timer-seconds');
const timeLeftDisplay = document.querySelector('.time-left');
const select_timer = document.getElementById('timer');
const select_stopwatch = document.getElementById('stopwatch');
const showtimer = document.querySelector('.timer');
const showstopwatch = document.querySelector('.stopwatch');

let countdown;
let startTime;
let timeLeft;
let isPaused = false;

function timer(seconds) {
  clearInterval(countdown);

  startTime = Date.now();
  const endTime = startTime + seconds * 1000;
  timeLeft = endTime - startTime;
  displayTimeLeft(timeLeft);

  countdown = setInterval(() => {
    timeLeft = endTime - Date.now();

    if (timeLeft < 0) {
      clearInterval(countdown);
      timeLeftDisplay.textContent = '00:00:00';
      return;
    }

    displayTimeLeft(timeLeft);
  }, 1000);
}

function displayTimeLeft(milliseconds) {
  const seconds = Math.round(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemainder = seconds % 60;

  const display = `${padZero(hours)}:${padZero(minutes)}:${padZero(secondsRemainder)}`;
  timeLeftDisplay.textContent = display;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

function pauseTimer() {
  clearInterval(countdown);
  isPaused = true;
  timeLeft = endTime - Date.now();
}

function resumeTimer() {
  const seconds = timeLeft / 1000;
  timer(seconds);
  isPaused = false;
}


startButton.addEventListener('click', () => {
  pauseButton.style.display = 'block';
  startButton.style.display = 'none';
  restartButton.style.display = 'block';

  const hours = parseInt(hoursInput.value, 10);
  const minutes = parseInt(minutesInput.value, 10);
  const seconds = parseInt(secondsInput.value, 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  timer(totalSeconds);
});

pauseButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  startButton.style.display = 'block';

  if (!isPaused) {
    pauseTimer();
  } else {
    resumeTimer();
  }
});

restartButton.addEventListener('click', () => {
  pauseButton.style.display = 'none';
  restartButton.style.display = 'none';
  startButton.style.display = 'block';

  clearInterval(countdown);
  timeLeftDisplay.textContent = '00:00:00';
  hoursInput.value = '0';
  minutesInput.value = '0';
  secondsInput.value = '0';
});

select_timer.addEventListener('click', () => {
  showtimer.style.display = "flex";
  showstopwatch.style.display = "none";

  select_timer.classList.add('active');
  select_stopwatch.classList.remove('active');
});

select_stopwatch.addEventListener('click', () => {
  showtimer.style.display = "none";
  showstopwatch.style.display = "flex"

  select_timer.classList.remove('active');
  select_stopwatch.classList.add('active');
});



// Select the necessary elements
const display = document.querySelector('.stopwatch-display .time');
const startBtn = document.querySelector('#stopwatch-start');
const pauseBtn = document.querySelector('#stopwatch-pause');
const restartBtn = document.querySelector('#stopwatch-restart');
const lapsBtn = document.getElementById('stopwatch-laps');
const lapsList = document.querySelector('.laps');

// Initialize the stopwatch variables
let startStopwatchTime, pauseTime=0, elapsedTime = 0, intervalId;

// Format time in HH:MM:SS format
function formatTime(time) {
  const pad = (val) => val < 10 ? '0' + val : val;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - (hours * 3600)) / 60);
  const seconds = time % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Update the stopwatch display
function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function startStopwatch() {
  const now = Date.now();
  startStopwatchTime = now - (elapsedTime || 0);
  intervalId = setInterval(() => {
    const now = Date.now();
    elapsedTime = Math.floor((now - startStopwatchTime) / 1000) + pauseTime;
    updateDisplay();
  }, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  restartBtn.disabled = false;
  lapsBtn.disabled = false;

  startBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
}

// Pause the stopwatch
function pauseStopwatch() {
  clearInterval(intervalId);
  pauseTime = elapsedTime;
  startBtn.disabled = false;
  pauseBtn.disabled = true;

  startBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
}

// Restart the stopwatch
function restartStopwatch() {
  clearInterval(intervalId);
  elapsedTime = 0;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  restartBtn.disabled = true;
  lapsBtn.disabled = true;
  lapsList.innerHTML = '';
}

// Add a lap to the stopwatch
function addLap() {
  const lapTime = elapsedTime;
  const lapItem = document.createElement('div');
  lapItem.classList.add('lap-item');
  lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${formatTime(lapTime)}`;
  lapsList.appendChild(lapItem);
}


// Attach event listeners to the buttons
startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
restartBtn.addEventListener('click', restartStopwatch);
lapsBtn.addEventListener('click', function() {
  if(lapsList.style.display = 'none'){
    lapsList.style.display = 'block';
  }else{
    lapsList.style.display = 'none';
  }

  if (intervalId) {
    addLap();
  }
});



