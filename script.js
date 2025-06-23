<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
<script>
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");

  // Yüzük ve mesaj elemanlarını oluşturuyoruz
  const ring = document.createElement("div");
  ring.textContent = "💍";
  ring.style.fontSize = "100px";
  ring.style.margin = "20px auto";
  ring.style.opacity = "0";
  ring.style.transition = "opacity 1s ease";
  ring.style.userSelect = "none";

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

  // Butona basınca çalışacak fonksiyon
  openBtn.addEventListener("click", () => {
    // Zarf kapağını açalım
    envelope.style.setProperty("--open-rotation", "180deg");
    envelope.style.position = "relative";
    envelope.style.cursor = "default";

    // Kapağı döndürme (pseudo elemente erişim için)
    envelope.style.setProperty("--flap-rotation", "rotateX(180deg)");

    // Kapağı açmak için zarf ::before elementini döndür
    envelope.style.setProperty("--flap-rotation", "rotateX(180deg)");
    envelope.style.setProperty("--flap-transition", "transform 1s ease-in-out");
    envelope.style.setProperty("--flap-transform-origin", "top center");

    // Kapağı açan CSS sınıfını eklemek yerine doğrudan ::before animasyonunu yapacağız:
    envelope.style.setProperty("--flap-rotation", "rotateX(180deg)");

    // JavaScript ile zarf ::before pseudo elementine doğrudan müdahale mümkün değil,
    // Bunun için CSS'de zarf açık hali için sınıf ekleyelim, sonra JS'de onu ekleyelim.

    envelope.classList.add("open");

    // Yüzüğü ve mesajı görünür yap
    setTimeout(() => {
      ring.style.opacity = "1";
      message.style.opacity = "1";
    }, 1000);

    // Butonu devre dışı bırak
    openBtn.disabled = true;
    openBtn.style.cursor = "default";
    openBtn.style.opacity = "0.5";

    // Konfeti ve havai fişek başlat
    startConfettiAndFireworks();
  });

  function startConfettiAndFireworks() {
    // Konfeti patlatma
    setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: Math.random() * 0.6 }
      });
    }, 1500);

    // Havai fişek efekti basit şekilde aşağıdaki gibi yapılabilir
    // Dilersen detaylandırabiliriz
  }
</script>
