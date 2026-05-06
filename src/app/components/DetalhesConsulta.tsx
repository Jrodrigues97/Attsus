import { useLocation, useNavigate } from 'react-router';
import { Header } from './Header';

export function DetalhesConsulta() {
  const location = useLocation();
  const navigate = useNavigate();
  const tipo = location.state?.tipo || 'clinica-geral';

  const detalhes: Record<string, { titulo: string; conteudo: string[] }> = {
    'clinica-geral': {
      titulo: 'Clínica Geral',
      conteudo: [
        'Uma consulta de clínica geral é uma consulta de rotina, onde serão analisados o histórico de saúde e a cirurgia.',
        'Consulta:',
        'O profissional vai verificar seu histórico na primeira hora, confirmar a olhos, artrite, dor, teste a verificar também se possui, por exemplo, alguma dor de cirurgia.',
        'Exames:',
        'Durante uma geral, você será muito examinado, há dois atributos básicos de sangue, radiografia, eletricidade probióticas e vitamina exames, etc...',
        'Pediatria:',
        'Avaliação entre a saúde infantil da criança, e infantícies.'
      ]
    },
    'vacinas': {
      titulo: 'Vacinas',
      conteudo: [
        'Consulta para aplicação de vacinas do calendário nacional de vacinação.',
        'O profissional irá verificar sua carteira de vacinação e aplicar as doses necessárias.',
        'Importante trazer a carteira de vacinação para consulta.'
      ]
    },
    'exames': {
      titulo: 'Exames',
      conteudo: [
        'Agendamento para realização de exames laboratoriais e de imagem.',
        'É necessário apresentar a solicitação médica.',
        'Alguns exames requerem preparo prévio, como jejum.'
      ]
    },
    'pediatria': {
      titulo: 'Pediatria',
      conteudo: [
        'Consulta especializada para acompanhamento da saúde infantil.',
        'O pediatra irá avaliar o crescimento e desenvolvimento da criança.',
        'Importante trazer a carteira de vacinação e exames anteriores.'
      ]
    }
  };

  const info = detalhes[tipo] || detalhes['clinica-geral'];

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <Header title="Detalhes da consulta" />

      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{info.titulo}</h2>
          <div className="text-gray-700 text-sm space-y-3">
            {info.conteudo.map((paragrafo, index) => (
              <p key={index} className="leading-relaxed">{paragrafo}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          &lt; Voltar
        </button>
        <button
          onClick={() => navigate('/confirmar-agendamento', { state: { tipo } })}
          className="bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
