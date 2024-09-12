const timerStartBtn = document.querySelector('.timer-start__button');
const timerDisplay = document.querySelector('.timer__display');

timerStartBtn.addEventListener('click', initTimer);


let totalMinutes = 30000;
let intervalId = null;
let isAnimated = false;

function timerFormat(miliseconds) {
    const seconds = Math.floor(miliseconds / 1000);
    const milisecondsLeft = miliseconds % 1000;

    const formatSeconds = seconds.toString().padStart(2, '0');
    const formatMiliseconds = milisecondsLeft.toString().padStart(3, '0');
    return `${formatSeconds}.${formatMiliseconds}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = `00:${timerFormat(totalMinutes)}`;
}

function initTimer() {
    if (intervalId) {
        return;
    }

    timerStartBtn.disabled = true;

    intervalId = setInterval(() => {
        totalMinutes--;
        updateTimerDisplay();

        if (totalMinutes <= 10000) {
            timerDisplay.classList.add('animate');
            isAnimated = true;
        }

        if (totalMinutes === 0) {
            clearInterval(intervalId);
            intervalId = null;
            timerStartBtn.disabled = false;
            display.classList.remove('animate')
            alert("Time has ended");
        }
    }, 1); 
}


    