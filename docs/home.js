

// Remove a transição se recarregar a página
window.addEventListener("load", () => {
    document.getElementById("page-transition").classList.remove("active");
  });
  // Função para ativar a transição
  function goToPage(event, url) {
    event.preventDefault(); // não troca ainda
  
    const transition = document.getElementById("word-transition");
    const word = document.getElementById("transition-word");
  
    // pega o texto do link clicado
    word.textContent = event.target.textContent;
  
    // ativa transição
    transition.classList.add("active");
  
    // troca de página após a animação
    setTimeout(() => {
      window.location.href = url;
    }, 1200); // igual ao tempo da animação
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro-animation");
  
    // Verifica se já entrou no site antes
    const visited = localStorage.getItem("visited");
  
    if (!visited) {
      // Primeira vez → mostra intro
      intro.style.display = "flex";
      localStorage.setItem("visited", "true");
    } else {
      // Se não for a primeira → pula intro
      if (intro) {
        intro.style.display = "none";
      }
    }
  });
  
  function goToPage(event, url) {
    event.preventDefault();
  
    const transition = document.getElementById("word-transition");
    const wordContainer = document.getElementById("transition-word");
  
    // Limpa antes de colocar novo conteúdo
    wordContainer.innerHTML = "";
  
    // Quebra em letras (spans iguais ao da intro)
    const text = event.target.textContent;
    text.split("").forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      span.style.transform = "translateY(60px) scale(0.8)";
      span.style.animation = `flyIn 0.6s ease forwards`;
      span.style.animationDelay = `${i * 0.1}s`;
      wordContainer.appendChild(span);
    });
  
    // Ativa transição
    transition.classList.add("active");
  
    // Troca de página após animação
    setTimeout(() => {
      window.location.href = url;
    }, 2700);
  }
  









  