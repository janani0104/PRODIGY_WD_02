let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopResume() {
    if (!isRunning) {
        // Start or Resume
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStopResume").innerText = "Stop";
        document.getElementById("lapReset").innerText = "Lap";
        isRunning = true;
    } else {
        // Stop
        clearInterval(timer);
        document.getElementById("startStopResume").innerText = "Resume";
        document.getElementById("lapReset").innerText = "Reset";
        isRunning = false;
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    const display = document.getElementById("display");
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function lapReset() {
    if (isRunning) {
        
        lap();
    } else {
        
        reset();
    }
}

function lap() {
    const lapTime = document.getElementById("display").textContent;
    const lapsContainer = document.getElementById("laps");
    lapsContainer.innerHTML += `<div style="border:1px dashed yellow;border-radius:2px;">Lap ${lapsContainer.childElementCount + 1}: ${lapTime}</div>`;
    
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
    document.getElementById("startStopResume").innerText = "Start";
    document.getElementById("lapReset").innerText = "Lap";
}

function pad(value) {
    return value < 10 ? "0" + value : value.toString(); // to add leading zeros
}