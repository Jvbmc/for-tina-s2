document.addEventListener("DOMContentLoaded", () => {
  const telas = document.querySelectorAll(".tela");
  const fotos = document.querySelectorAll(".foto");
  const audio = document.getElementById("musica-fundo");
  const botao = document.getElementById("botao-musica");
  let tocando = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
        }
      });
    },
    { threshold: 0.3 }
  );

  telas.forEach((t) => observer.observe(t));
  fotos.forEach((f, i) => {
    observer.observe(f);
    setTimeout(() => {
      if (f.getBoundingClientRect().top < window.innerHeight) {
        f.classList.add("visivel");
      }
    }, i * 200);
  });

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
