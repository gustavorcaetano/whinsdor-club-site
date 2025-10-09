function showModal(imgSrc, text, nationality) {
  var modal = document.getElementById("zoomModal");
  var modalImg = document.getElementById("zoomImg");
  var captionText = document.getElementById("zoomText");
  var backContent = document.getElementById("zoomBackContent");

  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = text;

  // Mostrar bandeira na parte de trás
  const flagUrl = getFlagUrl(nationality);
  backContent.innerHTML = `
  <div class="flip-back-content" onclick="flipBackModalCard()" style="cursor: pointer;">
    <img src="${flagUrl}" alt="${nationality}" style="width: 100px; height: auto; margin-bottom: 10px;" />
    <p>${nationality}</p>
  </div>
  `;
  
  
  
  // Imagem vai voltar pra frente.
  document.getElementById("modalFlipCard").classList.remove("flipped");
  
}

function flipModalCard() {
  document.getElementById("modalFlipCard").classList.add("flipped");
}
// Função da bandeira do país atras

function getFlagUrl(nationality) {
  const countries = {
    Brasil: "brasil",
    Alemanha: "alemanha",
    Inglaterra: "inglaterra",
    França: "franca",
    Espanha: "espanha",
    Irlanda: "irlanda",
    Uruguai: "uruguai",
    Argentina: "argentina",
    Itália: "italia",
    Turquia: "turquia",
    "Estados Unidos": "usa",
    Escócia: "escocia",
    China: "china",
    Senegal: "senegal",

    // Adicione mais conforme necessário
  };

  const code = countries[nationality];
  return code ? `./flags/${code}.png` : `./flags/placeholder.png`; // ou qualquer imagem genérica
}

function closeModal() {
  var modal = document.getElementById("zoomModal");
  modal.style.display = "none";
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}
function flipModalCard() {
  const card = document.getElementById("modalFlipCard");
  card.classList.toggle("flipped");
}

// Abrir e fechar os modais de Bio e Estatísticas.

function abrirZoom(imagem) {
  document.getElementById("zoomImg").src = imagem;
  document.getElementById("zoomModal").style.display = "block";
}

function fecharZoom() {
  document.getElementById("zoomModal").style.display = "none";
}

function abrirBio(texto) {
  const bioModal = document.getElementById("bioModal");
  const bioText = document.getElementById("bioText");

  const palavras = texto.split(" ");
  bioText.innerHTML = palavras
    .map((p) => `<span class="palavra">${p}</span>`)
    .join(" ");

  bioModal.style.display = "block";
}

function fecharBio() {
  document.getElementById("bioModal").style.display = "none";
}

function abrirStats(texto) {
  document.getElementById("statsText").innerText = texto;
  document.getElementById("statsModal").style.display = "block";
}

function fecharStats() {
  document.getElementById("statsModal").style.display = "none";
}

// Fecha o modal ao clicar fora da área de conteúdo
window.addEventListener("click", function(event) {
  var modal = document.getElementById("zoomModal");
  var content = document.getElementById("modalFlipCard");

  if (event.target === modal) {
    closeModal();
  }
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", function(event) {
  const modal = document.getElementById("bioModal");
  const modalContent = document.getElementById("bio-modal-content");

  if (event.target === modal) {
      modal.style.display = "none";
  }
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", function(event) {
  const modal = document.getElementById("statsModal");
  const modalContent = document.getElementById("stats-modal-content");

  if (event.target === modal) {
      modal.style.display = "none";
  }
});




// Validação o ngc

function validarJogador(jogador) {
  if (!jogador.nome || jogador.nome.trim() === "") {
    alert("Nome não pode estar vazio!");
    return false;
  }

  if (!jogador.posicao || jogador.posicao.trim() === "") {
    alert("Posição não pode estar vazia!");
    return false;
  }

  const estatisticas = [
    "gols",
    "assistencias",
    "jogos",
    "amarelos",
    "vermelhos",
  ];
  for (let stat of estatisticas) {
    if (typeof jogador[stat] !== "number" || jogador[stat] < 0) {
      alert(`"${stat}" deve ser um número válido maior ou igual a 0`);
      return false;
    }
  }

  return true;
}

// script da lista de jogadores.

const jogador = {
  nome: "Pedro Lima",
  posicao: "Goleiro",
  gols: 0,
  assistencias: 0,
  jogos: 32,
  amarelos: 3,
  vermelhos: 0,
  temporadas: 6,
};

fetch(
  "https://script.google.com/macros/s/AKfycbx-4nVCVpGl5ajV7BvfTpTPiMPwE3GivoIhOZOW9KEF35WqxWLi8UCMUtlwBVnRmk7V/exec",
  {
    method: "POST",
    body: JSON.stringify(jogador),
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => res.text())
  .then((msg) => console.log("RESPOSTA:", msg))
  .catch((err) => console.error("ERRO:", err));







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
