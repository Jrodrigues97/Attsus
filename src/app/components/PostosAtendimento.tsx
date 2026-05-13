import { useNavigate } from 'react-router';
import { Header } from './Header';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

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
    <div className="min-h-screen bg-gradient-to-b from-[#0D4A73] to-[#0077B6] flex flex-col">
      <Header title="Postos de Atendimento" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center text-2xl font-bold mb-8">
            Unidades Mais Próximas de Você
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postos.map((posto, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm">Unidade {index + 1}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-base">{posto.unidade}</h4>

                  <div className="flex items-start gap-2 mb-4">
                    <MapPinIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">{posto.endereco}</p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                    <div className="flex items-start gap-2">
                      <ClockIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">Funcionamento</p>
                        <p className="text-xs text-gray-600 whitespace-pre-line">{posto.funcionamento}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-6xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/menu-principal')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
