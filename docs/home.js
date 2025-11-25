// ===============================
// Remover transição ao recarregar
// ===============================
window.addEventListener("load", () => {
  const pageTransition = document.getElementById("page-transition");
  if (pageTransition) {
    pageTransition.classList.remove("active");
  }
});

// ===============================
// Função de transição de páginas
// ===============================
function goToPage(event, url) {
  event.preventDefault();

  const transition = document.getElementById("word-transition");
  const wordContainer = document.getElementById("transition-word");

  if (!transition || !wordContainer) {
    window.location.href = url;
    return;
  }

  wordContainer.innerHTML = "";
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

  transition.classList.add("active");

  setTimeout(() => {
    window.location.href = url;
  }, 2700);
}

// ===============================
// Intro inicial (primeira visita)
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-animation");
  const visited = localStorage.getItem("visited");

  if (!visited && intro) {
    intro.style.display = "flex";
    localStorage.setItem("visited", "true");
  } else if (intro) {
    intro.style.display = "none";
  }
});

// ===============================
// Dropdown (menus suspensos)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", e => {
      e.preventDefault();

      // Fecha outros menus
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      // Alterna visibilidade
      dropdown.classList.toggle("active");
    });
  });

  // Fecha se clicar fora
  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(d => d.classList.remove("active"));
    }
  });
});
