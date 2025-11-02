// --- 1. Set the Target Date ---
// The PDF specifies: November 13, 2025, 09:00 ΑΜ
const countDownDate = new Date("Nov 13, 2025 09:00:00").getTime();

// --- 2. Get HTML Elements ---
// These IDs must match the IDs in your index.html file
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const timerContainer = document.getElementById("countdown-timer");

// --- 3. Create the Countdown Function ---
const updateCountdown = () => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownInterval); // Stop the timer
        timerContainer.innerHTML = "<h2>The Event is Live!</h2>"; // Show event message
        return; // Exit the function
    }

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // --- 4. Display the Result ---
    // We add a '0' if the number is less than 10 for a nice format
    daysEl.innerHTML = days < 10 ? '0' + days : days;
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
};

// --- 5. Start the Timer ---
// Run the function once immediately to avoid a 1-second delay
updateCountdown();
// Update the count down every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);