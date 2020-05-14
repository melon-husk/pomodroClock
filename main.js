let timeMs = 10000000;
let state = 0;
let secondTimer;
let timerArray = [];
let seconds, minutes;
let numberSession = 25;
let numberBreak = 5;

document.getElementById('increaseSessionTime').addEventListener('click', incrementSession);
document.getElementById('decreaseSessionTime').addEventListener('click', decrementSession);
document.getElementById('increaseBreakTime').addEventListener('click', incrementBreak);
document.getElementById('decreaseBreakTime').addEventListener('click', decrementBreak);
document.getElementById('startStop').addEventListener('click', start);
function display(id, content) {
    let s;
    s = document.getElementById(id).textContent = '';
    s = document.getElementById(id).textContent = content;
}
let state1 = 0;
function time() {
    if (seconds === 0 && minutes != 0) {
        minutes--;
        seconds = 59;
    } else if (minutes === 0 && seconds === 0) {
        if (state1 == 0) {
            minutes = numberBreak - 1;
            seconds = 59;
            state1 = 1;
        }
        else {
            minutes = numberSession - 1;
            seconds = 59;
            state1 = 0;
        }
    }
    s = document.getElementById('showTimeP').textContent = minutes + ':' + seconds;
    seconds--;
}

function incrementSession() {
    numberSession++;
    display('showSession', numberSession);
}

function decrementSession() {
    if (numberSession === 1) {
        numberSession = numberSession;
    }
    else {
        numberSession--;
    }

    display('showSession', numberSession);
}

function incrementBreak() {
    numberBreak++;
    display('showBreak', numberBreak);
}

function decrementBreak() {
    if (numberBreak === 1) {
        numberBreak = numberBreak;
    }
    else {
        numberBreak--;
    }
    display('showBreak', numberBreak);
}

function start() {
    if (state == 0) {
        timeMs = 1000;
        secondTimer = setInterval(time, timeMs);
        timerArray.push(secondTimer);
        seconds = 0;
        minutes = numberSession;
        state = 1;
        console.log('inside 0' + ' ' + secondTimer);
    }
    else {
        if (timerArray.length != 0) {
            for (let i = 0; i < timerArray.length; i++) {
                clearInterval(timerArray[i]);
            }
        }
        state = 0;
    }

}
