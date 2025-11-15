document.addEventListener("DOMContentLoaded", () => {
  const telas = document.querySelectorAll(".tela");
  const fotos = document.querySelectorAll(".foto");
  const audio = document.getElementById("musica-fundo");
  const botao = document.getElementById("botao-musica");
  let tocando = false;

  // === Animação das telas ===
  const telaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
        }
      });
    },
    { threshold: 0.3 }
  );

  telas.forEach((tela) => telaObserver.observe(tela));

  // === Animação das fotos (com delay crescente) ===
  const fotoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visivel");
          }, index * 200); // 200ms entre cada foto
        }
      });
    },
    { threshold: 0.5 }
  );

  fotos.forEach((foto) => fotoObserver.observe(foto));

  // === Carregar imagens via data-img ===
  document.querySelectorAll(".img").forEach((img) => {
    const url = img.getAttribute("data-img");
    if (url) {
      img.style.backgroundImage = `url('${url}')`;
    }
  });

  // === Controle de música ===
  botao.addEventListener("click", () => {
    if (tocando) {
      audio.pause();
      botao.classList.remove("playing");
    } else {
      audio.play().catch(() => {
        alert("Toque no botão para ativar a música!");
      });
      botao.classList.add("playing");
    }
    tocando = !tocando;
  });
});
// ... (mesmo código anterior) ...
document.querySelectorAll(".img").forEach((img) => {
  const url = img.getAttribute("data-img");
  if (url) {
    img.style.backgroundImage = `url('${url}')`;
  }
});
