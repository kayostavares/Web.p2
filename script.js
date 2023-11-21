function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Adicionando funcionalidade para rolar para o topo da página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exibindo o botão de rolar para o topo quando a página é rolada para baixo
window.onscroll = function () {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};