const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const music = document.getElementById("music");
const ring = document.getElementById("ring");
const surpriseBtn = document.getElementById("surpriseBtn");
const confettiCanvas = document.getElementById("confetti");

envelope.addEventListener("click", () => {
  const flap = envelope.querySelector(".flap");
  flap.style.transform = "rotateX(180deg)";
  message.classList.remove("hidden");
  setTimeout(() => {
    message.style.opacity = 1;
  }, 500);
  music.play();
});

surpriseBtn.addEventListener("click", () => {
  ring.classList.remove("hidden");
  ring.classList.add("animate");
  confettiCanvas.classList.remove("hidden");
  startConfetti();
});

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.r *= 0.98;
    }
    requestAnimationFrame(draw);
  }

  draw();
}
