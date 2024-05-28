// Initialize minute and second
let minute = 0;
let second = 0;

function updateTimer() {
    let timeElement = document.getElementById("time");

    second++;

    if (second === 60) {
        second = 0;
        minute++;
    }

    // Update the time element without formatting
    const displayTime = `${minute}:${second}`;
    timeElement.innerHTML = displayTime;

    // user_time.innerHTML = displayTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);
