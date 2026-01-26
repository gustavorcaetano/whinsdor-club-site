const observerOptions = {
    threshold: 0.25 // Só dispara quando 25% da seção estiver na tela
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Aplica a observação em todas as linhas de títulos
document.querySelectorAll('.titulo-row').forEach(row => {
    observer.observe(row);
});