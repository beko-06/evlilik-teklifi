const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const music = document.getElementById("music"); // Müzik elementini seçiyoruz

envelope.addEventListener("click", () => {
  // Zarfa tıklayınca kapağı yukarıya doğru açılıyor
  const flap = envelope.querySelector(".flap");
  flap.style.transform = "rotateX(180deg)";
  
  // Mesajı göster
  message.classList.remove("hidden");
  setTimeout(() => {
    message.style.opacity = 1;
  }, 500);

  // Müziği oynat
  music.play();
});
