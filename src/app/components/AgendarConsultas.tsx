import { useNavigate } from 'react-router';
import { Header } from './Header';
import {
  UserGroupIcon,
  BeakerIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export function AgendarConsultas() {
  const navigate = useNavigate();

  const opcoes = [
    {
      id: 'clinica-geral',
      label: 'Clínica Geral',
      icon: UserGroupIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'vacinas',
      label: 'Vacinas',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'exames',
      label: 'Exames',
      icon: BeakerIcon,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'pediatria',
      label: 'Pediatria',
      icon: ClipboardDocumentCheckIcon,
      color: 'from-pink-500 to-pink-600'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Agendar Consultas" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 text-lg mb-8">
            Selecione o tipo de atendimento que você precisa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opcoes.map((opcao) => {
              const Icon = opcao.icon;
              return (
                <button
                  key={opcao.id}
                  onClick={() => navigate('/detalhes', { state: { tipo: opcao.id } })}
                  className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 min-h-[180px] flex flex-col items-center justify-center text-center border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-1"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${opcao.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-gray-800 text-xl font-semibold">{opcao.label}</span>
                  <span className="text-gray-500 text-sm mt-2">Clique para agendar</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
