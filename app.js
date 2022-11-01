import Timer from './timer.js';

const tempoDisplay = document.querySelector('.tempo');
const startStopBtn = document.querySelector('.start-stop');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;

startStopBtn.addEventListener('click', () => {
    count = 0;
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        startStopBtn.textContent = 'STOP';
    } else {
        metronome.stop();
        isRunning = false;
        startStopBtn.textContent = 'START';
    }
});

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    metronome.timeInterval = 60000 / bpm;
}

function playClick() {
    console.log(count);
    if (count === beatsPerMeasure) {
        count = 0;
    }
    if (count === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });

