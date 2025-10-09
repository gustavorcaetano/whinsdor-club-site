function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}
function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}
function abrirAba(evt, idConteudo) {
  const container = evt.currentTarget.closest(".modal-conteudo");
  container
    .querySelectorAll(".conteudo-aba")
    .forEach((el) => el.classList.remove("mostrar"));
  container
    .querySelectorAll(".aba")
    .forEach((btn) => btn.classList.remove("ativa"));
  document.getElementById(idConteudo).classList.add("mostrar");
  evt.currentTarget.classList.add("ativa");
}
window.onclick = function (event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};


// transformar o modal eu "Aberto" e "Fechado".
function abrirModal(id) {
  document.getElementById(id).style.display = 'flex';
  document.body.classList.add('modal-aberto'); // trava o body
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
  document.body.classList.remove('modal-aberto'); // destrava o body
}


// JavaScript para deixar os icones diferentes, assim que pressionados.
const icones = document.querySelectorAll(".icone-trofeu");

icones.forEach((icone) => {
  const originalSrc = icone.getAttribute("src");
  const hoverSrc = icone.getAttribute("data-hover");

  icone.addEventListener("mouseover", () => {
    icone.src = hoverSrc;
  });

  icone.addEventListener("mouseout", () => {
    icone.src = originalSrc;
  });
});


// função para preencher as informações das conquistas

function preencherConquistasCampeonatos() {
  for (const ano in conquistasCampeonatos) {
    const dados = conquistasCampeonatos[ano];
    const container = document.getElementById(`camp${ano}`);

    if (!container || !dados) continue;

    let html = `
      <h3><strong>Competição:</strong> ${dados.competicao}</h3>
      <h3><strong>Melhor Jogador:</strong> ${dados.melhorJogador}</h3>
      <p><strong>Artilheiro:</strong> ${dados.artilheiro}</p>
      <p><strong>Assistente:</strong> ${dados.assistente}</p>
      <div class="fases">
    `;

    (dados.fases || []).forEach((fase) => {
      html += `
        <h4>${fase.titulo}</h4>
        <p>${fase.texto}</p>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }
}


function preencherConquistasCopas() {
  for (const ano in conquistasCopas) {
    const dados = conquistasCopas[ano];
    const container = document.getElementById(`copa${ano}`);

    if (!container || !dados) continue;

    let html = `
      <h3><strong>Competição:</strong> ${dados.competicao}</h3>
      <h3><strong>Melhor Jogador:</strong> ${dados.melhorJogador}</h3>
      <p><strong>Artilheiro:</strong> ${dados.artilheiro}</p>
      <p><strong>Assistente:</strong> ${dados.assistente}</p>
      <div class="fases">
    `;

    (dados.fases || []).forEach((fase) => {
      html += `
        <h4>${fase.titulo}</h4>
        <p>${fase.texto}</p>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }
}

function preencherConquistasSupercopas() {
  for (const ano in conquistasSupercopas) {
    const dados = conquistasSupercopas[ano];
    const container = document.getElementById(`super${ano}`);

    if (!container || !dados) continue;

    let html = `
      <h3><strong>Competição:</strong> ${dados.competicao}</h3>
      <h3><strong>Melhor Jogador:</strong> ${dados.melhorJogador}</h3>
      <p><strong>Artilheiro:</strong> ${dados.artilheiro}</p>
      <p><strong>Assistente:</strong> ${dados.assistente}</p>
      <div class="fases">
    `;

    (dados.fases || []).forEach((fase) => {
      html += `
        <h4>${fase.titulo}</h4>
        <p>${fase.texto}</p>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }
}


function preencherConquistasInternacionais() {
  for (const ano in conquistasInternacionais) {
    const dados = conquistasInternacionais[ano];
    const container = document.getElementById(`ucl${ano}`);

    if (!container || !dados) continue;

    let html = `
      <h3><strong>Competição:</strong> ${dados.competicao}</h3>
      <h3><strong>Melhor Jogador:</strong> ${dados.melhorJogador}</h3>
      <p><strong>Artilheiro:</strong> ${dados.artilheiro}</p>
      <p><strong>Assistente:</strong> ${dados.assistente}</p>
      <div class="fases">
    `;

    (dados.fases || []).forEach((fase) => {
      html += `
        <h4>${fase.titulo}</h4>
        <p>${fase.texto}</p>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }
}


preencherConquistasCampeonatos();
preencherConquistasCopas();
preencherConquistasSupercopas();
preencherConquistasInternacionais();







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
