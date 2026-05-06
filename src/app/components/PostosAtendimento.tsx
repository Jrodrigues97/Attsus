import { useNavigate } from 'react-router';
import { Header } from './Header';
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

export function PostosAtendimento() {
  const navigate = useNavigate();

  const postos = [
    {
      unidade: 'Unidade de Saúde da Família - USF Centro',
      endereco: 'Rua Principal, 123 - Centro',
      telefone: '(11) 3456-7890',
      funcionamento: 'Segunda a Sexta: 7h às 17h\nSábado: 7h às 12h',
      distancia: '1.2 km'
    },
    {
      unidade: 'Unidade Básica de Saúde - UBS Norte',
      endereco: 'Av. Norte, 456 - Bairro Norte',
      telefone: '(11) 3456-7891',
      funcionamento: 'Segunda a Sexta: 8h às 18h',
      distancia: '2.5 km'
    },
    {
      unidade: 'Centro de Saúde Sul',
      endereco: 'Rua do Sul, 789 - Zona Sul',
      telefone: '(11) 3456-7892',
      funcionamento: 'Segunda a Sexta: 7h às 19h\nSábado: 8h às 12h',
      distancia: '3.8 km'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Postos de Atendimento Próximos" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Unidades de Saúde Mais Próximas
            </h2>
            <p className="text-gray-600 text-lg">
              Encontre a unidade de saúde mais conveniente para você
            </p>
          </div>

          <div className="space-y-6">
            {postos.map((posto, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-400"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <BuildingOffice2Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{posto.unidade}</h3>
                      <p className="text-blue-100 text-sm">{posto.distancia} de distância</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPinIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium mb-1">Endereço</p>
                          <p className="text-gray-800 font-semibold">{posto.endereco}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <PhoneIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium mb-1">Telefone</p>
                          <p className="text-gray-800 font-semibold">{posto.telefone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ClockIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Horário de Funcionamento</p>
                        <p className="text-gray-800 font-semibold whitespace-pre-line">{posto.funcionamento}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
                      Como Chegar
                    </button>
                    <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md">
                      Agendar Consulta
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-5xl mx-auto w-full">
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
          Menu Principal →
        </button>
      </div>
    </div>
  );
}
