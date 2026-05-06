import { useNavigate } from 'react-router';
import { Header } from './Header';

export function PostosAtendimento() {
  const navigate = useNavigate();

  const postos = [
    {
      unidade: 'Unidade de Saúde da Família - USF Centro',
      endereco: 'Rua Principal, 123 - Centro',
      funcionamento: 'Segunda a Sexta: 7h às 17h\nSábado: 7h às 12h'
    },
    {
      unidade: 'Unidade Básica de Saúde - UBS Norte',
      endereco: 'Av. Norte, 456 - Bairro Norte',
      funcionamento: 'Segunda a Sexta: 8h às 18h'
    },
    {
      unidade: 'Centro de Saúde Sul',
      endereco: 'Rua do Sul, 789 - Zona Sul',
      funcionamento: 'Segunda a Sexta: 7h às 19h\nSábado: 8h às 12h'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D4A73] flex flex-col">
      <div className="bg-[#5B9BD5] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start text-xs leading-tight">
            <span className="font-bold">SUS</span>
            <span className="font-bold">DIGITAL</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#E84C8E] to-[#5B9BD5] rounded"></div>
        </div>

        <h1 className="text-sm font-medium">POSTOS DE ATENDIMENTO MAIS PRÓXIMOS DE VOCÊ</h1>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-[#87CEEB] rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-[#0D4A73] font-bold text-lg mb-4 pb-2 border-b-2 border-[#0D4A73]">
                UNIDADE
              </h2>
              <div className="space-y-6">
                {postos.map((posto, index) => (
                  <div key={index} className="text-[#0D4A73]">
                    <h3 className="font-semibold text-sm mb-1">{posto.unidade}</h3>
                    <p className="text-xs">{posto.endereco}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[#0D4A73] font-bold text-lg mb-4 pb-2 border-b-2 border-[#0D4A73]">
                FUNCIONAMENTO
              </h2>
              <div className="space-y-6">
                {postos.map((posto, index) => (
                  <div key={index} className="text-[#0D4A73]">
                    <p className="text-xs whitespace-pre-line">{posto.funcionamento}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          &lt; Voltar
        </button>
        <button
          onClick={() => navigate('/menu-principal')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
