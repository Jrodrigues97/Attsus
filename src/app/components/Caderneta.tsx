import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from './Header';
import { MenuLateral } from './MenuLateral';
import { Menu } from 'lucide-react';

export function Caderneta() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('INICIO');
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = ['INICIO', 'VACINAS', 'EXAMES', 'AGENDAMENTOS', 'MEDICAMENTOS', 'CARTILHA'];

  const cards = [
    { titulo: 'Informações Pessoais', conteudo: 'Nome completo, data de nascimento, CPF...', link: '/dados-gerais' },
    { titulo: 'Histórico Médico', conteudo: 'Condições crônicas, alergias, cirurgias...', link: '/formularios' },
    { titulo: 'Medicamentos', conteudo: 'Lista de medicamentos em uso...', link: '/medicacao-paciente' },
    { titulo: 'Vacinas', conteudo: 'Registro de vacinação completo...', link: '/formularios' },
    { titulo: 'Exames', conteudo: 'Resultados de exames recentes...', link: '/formularios' },
    { titulo: 'Consultas', conteudo: 'Histórico de consultas médicas...', link: '/meus-agendamentos' },
    { titulo: 'Procedimentos', conteudo: 'Procedimentos realizados...', link: '/formularios' },
    { titulo: 'Observações', conteudo: 'Anotações importantes...', link: '/formularios' },
    { titulo: 'Contatos Emergência', conteudo: 'Contatos em caso de emergência...', link: '/dados-gerais' }
  ];

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <div className="bg-[#5B9BD5] text-white p-4 flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 hover:bg-[#4A8AC4] rounded"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end text-xs leading-tight">
            <span className="font-bold">SUS</span>
            <span className="font-bold">DIGITAL</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#E84C8E] to-[#5B9BD5] rounded"></div>
        </div>

        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium">
          CADERNETA DO ADULTO ADOLESCENTE
        </h1>
      </div>

      <MenuLateral
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(path) => {
          setMenuOpen(false);
          navigate(path);
        }}
      />

      <div className="bg-white border-b">
        <div className="flex gap-2 px-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 text-sm font-medium whitespace-nowrap
                ${activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="bg-[#8FB885] rounded-lg p-6 text-white shadow-md hover:bg-[#7FA775] transition-colors cursor-pointer min-h-[150px] flex flex-col"
            >
              <h3 className="font-semibold text-base mb-2">{card.titulo}</h3>
              <p className="text-sm opacity-90">{card.conteudo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 flex justify-end">
        <button
          onClick={() => navigate('/postos')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
