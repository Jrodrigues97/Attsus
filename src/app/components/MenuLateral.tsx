import {
  XMarkIcon,
  HomeIcon,
  ShieldCheckIcon,
  BeakerIcon,
  CalendarDaysIcon,
  HeartIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function MenuLateral({ isOpen, onClose, onNavigate }: MenuLateralProps) {
  const menuItems = [
    { label: 'Início', icon: HomeIcon, onClick: () => onNavigate('/caderneta') },
    { label: 'Vacinas', icon: ShieldCheckIcon, onClick: () => onNavigate('/caderneta') },
    { label: 'Exames', icon: BeakerIcon, onClick: () => onNavigate('/caderneta') },
    { label: 'Agendamentos', icon: CalendarDaysIcon, onClick: () => onNavigate('/meus-agendamentos') },
    { label: 'Medicamentos', icon: HeartIcon, onClick: () => onNavigate('/medicacao-paciente') },
    { label: 'Cartilha', icon: BookOpenIcon, onClick: () => onNavigate('/caderneta') }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-[#0077B6] to-[#023E8A] z-50 shadow-2xl transform transition-transform">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <HeartIcon className="w-7 h-7 text-red-400" />
              </div>
              <div className="text-white">
                <div className="text-sm font-medium">SUS</div>
                <div className="text-lg font-bold">Digital</div>
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

          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-4 px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
