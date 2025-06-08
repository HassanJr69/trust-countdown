📄 script.js

// Countdown Timer const countdownEl = document.getElementById("countdown"); const launchDate = new Date("August 15, 2025 00:00:00").getTime();

function updateCountdown() { const now = new Date().getTime(); const timeLeft = launchDate - now;

if (timeLeft <= 0) { countdownEl.innerHTML = "🚀 $TRUST Has Launched"; return; }

const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

countdownEl.innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s; }

setInterval(updateCountdown, 1000); updateCountdown();

// Pledge Form const pledgeForm = document.getElementById("pledge-form"); const pledgeInput = document.getElementById("pledge-input"); const confirmationText = document.getElementById("pledge-confirmation");

pledgeForm.addEventListener("submit", function (e) { e.preventDefault(); if (pledgeInput.value.trim() !== "") { confirmationText.style.display = "block"; pledgeInput.value = ""; } });

// Background Audio (autoplays with glitch mode) window.addEventListener("DOMContentLoaded", () => { const audio = new Audio("cult-audio.mp3"); audio.loop = true; audio.volume = 0.3; audio.play().catch(() => { // User hasn't interacted yet console.log("Audio autoplay blocked. Waiting for user interaction."); document.body.addEventListener("click", () => { audio.play(); }, { once: true }); }); });
