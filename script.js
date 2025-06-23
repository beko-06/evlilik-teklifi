const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const ring = document.getElementById("ring");
const showBtn = document.getElementById("showBtn");

// Butona tıklanınca animasyon başlar
showBtn.addEventListener("click", () => {
  // Zarf açılır
  const flap = envelope.querySelector(".flap");
  flap.style.transform = "rotateX(180deg)";

  // Yüzük görünür
  ring.classList.remove("hidden");
  ring.classList.add("animate");

  // Mesaj görünür
  message.classList.remove("hidden");
  setTimeout(() => {
    message.style.opacity = 1;
  }, 500);

  // Konfeti ve havai fişekler
  startConfettiLoop();
});

// Konfeti patlatıcı
function startConfettiLoop() {
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: Math.random() * 0.6 },
    });
  }, 1500);
}
