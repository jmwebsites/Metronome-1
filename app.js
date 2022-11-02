import Timer from './timer.js';

const tempoDisplay = document.querySelector('.tempo');
const startStopBtn = document.querySelector('.start-stop');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

let bpm = 133;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;

tempoDisplay.textContent = bpm;

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

const tempoDisplay1 = document.querySelector('.tempo1');
const startStopBtn1 = document.querySelector('.start-stop1');

let bpm1 = 140;
let beatsPerMeasure1 = 6;
let count1 = 0;
let isRunning1 = false;

tempoDisplay1.textContent = bpm1;

startStopBtn1.addEventListener('click', () => {
    count1 = 0;
    if (!isRunning1) {
        metronome1.start();
        isRunning1 = true;
        startStopBtn1.textContent = 'STOP';
    } else {
        metronome1.stop();
        isRunning1 = false;
        startStopBtn1.textContent = 'START';
    }
});

function playClick1() {
    console.log(count1);
    if (count1 === beatsPerMeasure1) {
        count1 = 0;
    }
    if (count1 === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count1++;
}

const metronome1 = new Timer(playClick1, 60000 / bpm1, { immediate: true });

const tempoDisplay2 = document.querySelector('.tempo2');
const startStopBtn2 = document.querySelector('.start-stop2');

let bpm2 = 60;
let beatsPerMeasure2 = 4;
let count2 = 0;
let isRunning2 = false;

tempoDisplay2.textContent = bpm2;

startStopBtn2.addEventListener('click', () => {
    count2 = 0;
    if (!isRunning2) {
        metronome2.start();
        isRunning2 = true;
        startStopBtn2.textContent = 'STOP';
    } else {
        metronome2.stop();
        isRunning2 = false;
        startStopBtn2.textContent = 'START';
    }
});

function playClick2() {
    console.log(count2);
    if (count2 === beatsPerMeasure2) {
        count2 = 0;
    }
    if (count2 === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count2++;
}

const metronome2 = new Timer(playClick1, 60000 / bpm2, { immediate: true });