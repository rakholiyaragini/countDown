let countdownElement = document.getElementById('countdown');
let messageElement = document.getElementById('message');
let timeLeft = 10;

let countdownTimer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        countdownElement.textContent = "0";
        messageElement.textContent = "Time's Up!";
        messageElement.style.color = 'red';
    }
}, 1000);