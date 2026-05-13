// Nome: Base de Dados de Exames
const infoExames = {
  'exames': {
    titulo: 'Exames Laboratoriais',
    desc: 'Agende exames de sangue, urina e outros procedimentos diagnósticos.',
    cor: 'linear-gradient(135deg,#a855f7,#9333ea)',
    items: [
      { label: 'Preparação', valor: 'Jejum de 8 a 12 horas conforme orientação.' },
      { label: 'Documentos', valor: 'RG, Cartão do SUS e Guia Médica.' },
      { label: 'Local', valor: 'Unidade Básica de Saúde ou Laboratórios Conveniados.' }
    ]
  }
};

// Nome: Função de Carregamento de Detalhes
// Descrição: Preenche o HTML com as informações do exame selecionado
function goDetalhes(tipo) {
  const data = infoExames[tipo];
  if (!data) return;

  // Atualiza cabeçalho e cores
  const header = document.getElementById('detalhe-header');
  header.style.background = data.cor;
  document.getElementById('detalhe-titulo').textContent = data.titulo;
  document.getElementById('detalhe-descricao').textContent = data.desc;

  // Renderiza a lista de requisitos
  const container = document.getElementById('detalhe-items');
  container.innerHTML = data.items.map(it => `
    <div class="detalhe-item">
      <div>
        <span class="label-titulo">${it.label}</span>
        <span class="label-valor">${it.valor}</span>
      </div>
    </div>
  `).join('');

  // Troca de tela
  showScreen('/detalhes');
}

// Função simples de navegação (Exemplo)
function showScreen(path) {
  const telaDetalhes = document.getElementById('screen-detalhes');
  if(path === '/detalhes') {
    telaDetalhes.style.display = 'block';
  } else {
    telaDetalhes.style.display = 'none';
  }
}
