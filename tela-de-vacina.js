/**
 * SISTEMA DE GESTÃO SUS DIGITAL - CORE JS
 * Focado em Performance e UX Minimalista
 */

// 1. Inicialização de Ícones e Estado Global
document.addEventListener('DOMContentLoaded', () => {
    // Inicia os ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    console.log("Sistema SUS Digital: Ativo");
});

/**
 * 2. Navegação entre Telas (SPA Style)
 * @param {string} pageId - ID da seção definida no HTML
 */
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.nav-item');

    // Feedback visual imediato: Esconde páginas e remove estados ativos
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    navItems.forEach(item => item.classList.remove('active'));

    // Ativa a página solicitada com um pequeno delay para efeito de transição
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        setTimeout(() => {
            targetPage.classList.add('active');
        }, 10);
    }

    // Atualiza o botão da navegação correspondente
    // Busca pelo texto ou pelo atributo onclick
    navItems.forEach(item => {
        if (item.getAttribute('onclick').includes(pageId)) {
            item.classList.add('active');
        }
    });

    // Rola para o topo automaticamente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * 3. Lógica da Área de Vacinas
 * Simula filtros e ações de download
 */

// Filtro de Chips (Visual)
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
    chip.addEventListener('click', function() {
        chips.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        // Simulação de filtro (apenas log para apresentação)
        console.log(`Filtrando por: ${this.innerText}`);
        simularCarregamento();
    });
});

// Simulação de Download de Certificado
function baixarCertificado(vacinaNome) {
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> Gerando...`;
    lucide.createIcons();

    setTimeout(() => {
        alert(`Certificado da vacina ${vacinaNome} gerado com sucesso! O download começará em instantes.`);
        btn.innerHTML = originalText;
        lucide.createIcons();
    }, 2000);
}

/**
 * 4. Funções de Auxílio para Apresentação
 */

function simularCarregamento() {
    const content = document.querySelector('.content');
    content.style.opacity = '0.5';
    content.style.pointerEvents = 'none';

    setTimeout(() => {
        content.style.opacity = '1';
        content.style.pointerEvents = 'all';
    }, 600);
}

// Interação de Agendamento (Persona Lucas/Maria)
function confirmarAgendamento() {
    const data = document.querySelector('input[type="date"]').value;
    const espec = document.querySelector('select').value;

    if (!data) {
        alert("Por favor, selecione uma data válida.");
        return;
    }

    alert(`Sucesso! Agendamento para ${espec} confirmado para o dia ${data}. 
Um lembrete foi enviado para o celular cadastrado.`);
    showPage('home');
}

/**
 * 5. Efeito de Scroll no Header
 */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        header.style.borderBottomColor = 'transparent';
    } else {
        header.style.boxShadow = 'none';
        header.style.borderBottomColor = 'var(--border)';
    }
});