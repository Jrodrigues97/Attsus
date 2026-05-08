import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from './Header';
import { MenuLateral } from './MenuLateral';
import {
  Bars3Icon,
  UserIcon,
  DocumentTextIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  PhoneIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';

export function Caderneta() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('INICIO');
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = ['INÍCIO', 'VACINAS', 'EXAMES', 'AGENDAMENTOS', 'MEDICAMENTOS', 'CARTILHA'];

  const cards = [
    {
      titulo: 'Informações Pessoais',
      conteudo: 'Dados cadastrais e documentos',
      link: '/dados-gerais',
      icon: UserIcon,
      color: 'from-blue-500 to-blue-600'
    },
    {
      titulo: 'Histórico Médico',
      conteudo: 'Condições crônicas e alergias',
      link: '/formularios',
      icon: DocumentTextIcon,
      color: 'from-purple-500 to-purple-600'
    },
    {
      titulo: 'Medicamentos',
      conteudo: 'Lista de medicamentos em uso',
      link: '/medicacao-paciente',
      icon: HeartIcon,
      color: 'from-red-500 to-red-600'
    },
    {
      titulo: 'Vacinas',
      conteudo: 'Carteira de vacinação',
      link: '/formularios',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-green-600'
    },
    {
      titulo: 'Exames',
      conteudo: 'Resultados de exames',
      link: '/formularios',
      icon: BeakerIcon,
      color: 'from-pink-500 to-pink-600'
    },
    {
      titulo: 'Consultas',
      conteudo: 'Histórico de atendimentos',
      link: '/meus-agendamentos',
      icon: ClipboardDocumentListIcon,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      titulo: 'Procedimentos',
      conteudo: 'Cirurgias e procedimentos',
      link: '/formularios',
      icon: ClipboardDocumentCheckIcon,
      color: 'from-orange-500 to-orange-600'
    },
    {
      titulo: 'Observações',
      conteudo: 'Anotações importantes',
      link: '/formularios',
      icon: DocumentTextIcon,
      color: 'from-teal-500 to-teal-600'
    },
    {
      titulo: 'Contatos de Emergência',
      conteudo: 'Pessoas para contato',
      link: '/dados-gerais',
      icon: PhoneIcon,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            className="p-3 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          <h1 className="text-base md:text-xl font-bold text-center flex-1 px-4">
            Caderneta de Saúde
          </h1>

          <div className="flex items-center gap-4">
            <HeartIcon className="w-12 h-12 text-red-400 animate-pulse" />
            <div className="text-right">
              <div className="text-sm font-bold">SUS</div>
              <div className="text-sm font-bold">Digital</div>
            </div>
          </div>
        </div>
      </div>

      <MenuLateral
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(path) => {
          setMenuOpen(false);
          navigate(path);
        }}
      />

      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-1 px-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all
                  ${activeTab === tab
                    ? 'border-b-4 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Suas Informações de Saúde</h2>
            <p className="text-gray-600">Acesse e gerencie seu histórico médico</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  onClick={() => navigate(card.link)}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-400 transform hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{card.titulo}</h3>
                  <p className="text-gray-600 text-sm">{card.conteudo}</p>
                  <div className="mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
                    Acessar →
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/postos')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Ver Postos de Saúde →
        </button>
      </div>
    </div>
  );
}
