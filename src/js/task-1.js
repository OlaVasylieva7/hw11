// task 1 a

// let totalMinutes = 60;

// function initTimer() {
// const intervalId = setInterval(() => {
// totalMinutes--;
// console.log(`time remaining: ${totalMinutes} minutes`);

// if (totalMinutes === 30) {
//     alert("less than half of the hour left")
// }

// if (totalMinutes === 0) {
//     clearInterval(intervalId);
//     console.log("time has ended");
// }

// },60000 ) 
// }

// initTimer();



// task 1 b

const timerStartBtn = document.querySelector('.timer-start__button');
const timerDisplay = document.querySelector('.timer__display');

let totalMinutes = 60;
let intervalId = null;

function timerFormat(minutes) {
    const hours = Math.floor(minutes / 60);
    const minutesRemain = minutes % 60;

    const formatHours = hours.toString().padStart(2, '0');
    const formatMinutes = minutesRemain.toString().padStart(2, '0');
    return `${formatHours} : ${formatMinutes}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = timerFormat(totalMinutes);
}

function initTimer() {
    if (intervalId) {
        return;
    }

    timerStartBtn.disabled = true;

    intervalId = setInterval(() => {
        totalMinutes--;
        updateTimerDisplay();

        if (totalMinutes === 30) {
            alert("Less than half of the hour left");
        }

        if (totalMinutes === 0) {
            clearInterval(intervalId);
            intervalId = null;
            timerStartBtn.disabled = false;

            alert("Time has ended");
        }
    }, 1000); 
}

timerStartBtn.addEventListener('click', initTimer);

    