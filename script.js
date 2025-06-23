<script>
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");

  // Yüzük div'ini oluştur
  const ring = document.createElement("div");
  ring.textContent = "💍";
  ring.style.fontSize = "100px";
  ring.style.margin = "20px auto";
  ring.style.opacity = "0";
  ring.style.transition = "opacity 1s ease";
  ring.style.userSelect = "none";

  // Mesaj h1'ini oluştur
  const message = document.createElement("h1");
  message.textContent = "Benimle evlenir misin?";
  message.style.color = "#ff4d7c";
  message.style.fontSize = "36px";
  message.style.marginTop = "20px";
  message.style.opacity = "0";
  message.style.transition = "opacity 1s ease";

  const container = document.getElementById("container");
  container.appendChild(ring);
  container.appendChild(message);

  // Butona tıklandığında
  openBtn.addEventListener("click", () => {
    // Zarfı aç (CSS sınıfı ile)
    envelope.classList.add("open");

    // Yüzük ve mesaj yavaşça belirsin
    setTimeout(() => {
      ring.style.opacity = "1";
      message.style.opacity = "1";
    }, 1000);

    // Buton devre dışı kalır
    openBtn.disabled = true;
    openBtn.style.cursor = "default";
    openBtn.style.opacity = "0.5";

    // Konfeti ve havai fişek başlat
    startConfettiAndFireworks();
  });

  // Konfeti + Havai fişek efektleri
  function startConfettiAndFireworks() {
    // Konfeti efekti
    setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: Math.random() * 0.6 }
      });
    }, 1500);

    // Havai fişek efekti (basit canvas animasyonu)
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function launchFirework(x, y) {
      for (let i = 0; i < 100; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 100;
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
      }

      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 1000);
    }

    // Her 3 saniyede bir rastgele noktada havai fişek
    setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height / 2;
      launchFirework(x, y);
    }, 3000);
  }
</script>
