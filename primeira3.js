function showPage(pageId) {
    // Esconde todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Remove classe active de todos os botões da nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Mostra a página solicitada
    document.getElementById(pageId).classList.add('active');

    // Adiciona classe active no botão clicado (baseado no ícone ou texto)
    const activeBtn = Array.from(navItems).find(btn => 
        btn.innerText.toLowerCase().includes(pageId === 'home' ? 'início' : pageId)
    );
    if (activeBtn) activeBtn.classList.add('active');

    // Feedback tátil (opcional para simular mobile)
    if (window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

// Simulação de carregamento de dados
window.onload = () => {
    console.log("SUS Digital iniciado com sucesso.");
    // Você pode adicionar lógicas de busca aqui para a aba de vacinas
};