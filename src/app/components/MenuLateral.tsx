import {
  XMarkIcon,
  HomeIcon,
  ShieldCheckIcon,
  BeakerIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  HeartIcon as HeartOutline,
  MapPinIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';

interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function MenuLateral({ isOpen, onClose, onNavigate }: MenuLateralProps) {
  const menuSections = [
    {
      title: 'Principal',
      items: [
        { label: 'Atendimento', icon: HomeIcon, path: '/' },
        { label: 'Menu Principal', icon: Squares2X2Icon, path: '/menu-principal' }
      ]
    },
    {
      title: 'Agendamentos',
      items: [
        { label: 'Meus Agendamentos', icon: CalendarDaysIcon, path: '/meus-agendamentos' },
        { label: 'Agendar Consulta', icon: CalendarDaysIcon, path: '/agendar-consulta-horario' }
      ]
    },
    {
      title: 'Caderneta de Saúde',
      items: [
        { label: 'Caderneta', icon: ClipboardDocumentListIcon, path: '/caderneta' },
        { label: 'Medicamentos', icon: HeartOutline, path: '/medicacao-paciente' },
        { label: 'Vacinas', icon: ShieldCheckIcon, path: '/formularios' },
        { label: 'Exames', icon: BeakerIcon, path: '/formularios' },
        { label: 'Dados Pessoais', icon: UserIcon, path: '/dados-gerais' }
      ]
    },
    {
      title: 'Unidades',
      items: [
        { label: 'Postos de Atendimento', icon: MapPinIcon, path: '/postos' }
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-[#0077B6] to-[#023E8A] z-50 shadow-2xl transform transition-transform overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <HeartIcon className="w-12 h-12 text-red-400 animate-pulse" />
              <div className="text-white">
                <div className="text-sm font-bold">SUS</div>
                <div className="text-sm font-bold">Digital</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6 p-4 bg-white/10 rounded-xl backdrop-blur">
            <h3 className="text-white font-semibold text-sm mb-2">Menu de Navegação</h3>
            <p className="text-white/80 text-xs">
              Acesse rapidamente todas as funcionalidades do sistema
            </p>
          </div>

          <nav className="space-y-6">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4 className="text-white/60 text-xs font-bold uppercase mb-3 px-2">
                  {section.title}
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={itemIndex}
                        onClick={() => onNavigate(item.path)}
                        className="w-full flex items-center gap-4 px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
