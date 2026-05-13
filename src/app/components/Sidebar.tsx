import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Menu, X, ChevronRight } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: '/', label: 'Atendimento', category: 'Agendamentos' },
    { path: '/detalhes', label: 'Detalhes da Consulta', category: 'Agendamentos' },
    { path: '/confirmar-agendamento', label: 'Confirmar Agendamento', category: 'Agendamentos' },
    { path: '/agendamento-concluido', label: 'Agendamento Concluído', category: 'Agendamentos' },
    { path: '/meus-agendamentos', label: 'Meus Agendamentos', category: 'Agendamentos' },
    { path: '/agendar-consulta-horario', label: 'Agendar Consulta - Horário', category: 'Agendamentos' },

    { path: '/caderneta', label: 'Caderneta do Adulto', category: 'Caderneta' },
    { path: '/medicacao-paciente', label: 'Medicação do Paciente', category: 'Caderneta' },
    { path: '/dados-gerais', label: 'Dados Gerais', category: 'Caderneta' },
    { path: '/formularios', label: 'Formulários', category: 'Caderneta' },

    { path: '/postos', label: 'Postos de Atendimento', category: 'Unidades' },

    { path: '/menu-principal', label: 'Menu Principal', category: 'Navegação' },
    { path: '/consultas-menu', label: 'Consultas Menu', category: 'Navegação' }
  ];

  const categories = Array.from(new Set(pages.map(p => p.category)));

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 bg-[#5B9BD5] text-white p-3 rounded-full shadow-lg hover:bg-[#4A8AC4] transition-colors"
        aria-label="Abrir menu"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed left-0 top-0 h-full w-80 bg-white z-50 shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-[#5B9BD5] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-start text-xs leading-tight">
                  <span className="font-bold">SUS</span>
                  <span className="font-bold">DIGITAL</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-[#E84C8E] to-[#5B9BD5] rounded"></div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[#4A8AC4] rounded"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Navegação</h2>

              {categories.map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase">
                    {category}
                  </h3>
                  <div className="space-y-1">
                    {pages
                      .filter(page => page.category === category)
                      .map((page) => (
                        <button
                          key={page.path}
                          onClick={() => handleNavigate(page.path)}
                          className={`
                            w-full text-left px-4 py-3 rounded-lg flex items-center justify-between
                            transition-colors group
                            ${location.pathname === page.path
                              ? 'bg-[#5B9BD5] text-white font-semibold'
                              : 'hover:bg-gray-100 text-gray-700'
                            }
                          `}
                        >
                          <span className="text-sm">{page.label}</span>
                          <ChevronRight
                            size={18}
                            className={`
                              transition-transform group-hover:translate-x-1
                              ${location.pathname === page.path ? 'text-white' : 'text-gray-400'}
                            `}
                          />
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-gray-50 p-4 border-t">
              <p className="text-xs text-gray-500 text-center">
                Sistema SUS Digital - Versão 1.0
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
