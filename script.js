const envelope = document.getElementById("envelope");
const flap = envelope.querySelector(".flap");
const ring = document.getElementById("ring");
const message = document.getElementById("message");
const showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", () => {
  flap.style.transform = "rotateX(180deg)";
  ring.classList.remove("hidden");
  ring.classList.add("animate");
  message.classList.remove("hidden");
  setTimeout(() => {
    message.style.opacity = 1;
  }, 500);
  startConfettiLoop();
});

function startConfettiLoop() {
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 150,
      origin: { y: Math.random() * 0.8 },
    });
  }, 2000);
}
