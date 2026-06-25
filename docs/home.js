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
// ==========================================================================
// DROPDOWN DE NAVEGAÇÃO INTERATIVA (MUITO IMPORTANTE PARA MOBILE)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    // Captura o link principal <a> de dentro da li.dropdown (HISTÓRIA, ELENCO, etc.)
    const toggle = dropdown.querySelector("a");

    if (toggle) {
      toggle.addEventListener("click", e => {
        // Aplica o comportamento de clique apenas se estiver em telas mobile/tablet
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();

          // Fecha todos os outros dropdowns abertos antes de alternar o atual
          dropdowns.forEach(d => {
            if (d !== dropdown) {
              const menu = d.querySelector(".dropdown-menu");
              if (menu) menu.style.display = "none";
            }
          });

          // Alterna o estado de exibição do menu atual
          const dropdownMenu = dropdown.querySelector(".dropdown-menu");
          if (dropdownMenu) {
            const isVisible = dropdownMenu.style.display === "block";
            dropdownMenu.style.display = isVisible ? "none" : "block";
          }
        }
      });
    }
  });

  // Fecha qualquer menu dropdown aberto se o usuário tocar fora da navbar
  document.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      dropdowns.forEach(d => {
        const menu = d.querySelector(".dropdown-menu");
        if (menu) menu.style.display = "none";
      });
    }
  });
});