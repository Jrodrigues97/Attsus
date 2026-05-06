import { useNavigate } from 'react-router';
import { Header } from './Header';

export function AgendarConsultas() {
  const navigate = useNavigate();

  const opcoes = [
    { id: 'clinica-geral', label: 'Clínica geral' },
    { id: 'vacinas', label: 'Vacinas' },
    { id: 'exames', label: 'Exames' },
    { id: 'pediatria', label: 'Pediatria' },
  ];

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <Header title="Agendar consultas" />

      <div className="flex-1 p-6">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {opcoes.map((opcao) => (
            <button
              key={opcao.id}
              onClick={() => navigate('/detalhes', { state: { tipo: opcao.id } })}
              className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors min-h-[140px] flex items-center justify-center text-center shadow-md"
            >
              <span className="text-gray-800 text-base">{opcao.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <button className="bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
          &lt; Voltar
        </button>
        <button className="bg-white text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
