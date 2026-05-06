import { X } from 'lucide-react';

interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function MenuLateral({ isOpen, onClose, onNavigate }: MenuLateralProps) {
  const menuItems = [
    { label: 'Busca rápida', subLabel: 'Palavras chave que tornem suas buscas por tópicos específicos ainda mais rápida sua navegação' },
    { label: 'INÍCIO', onClick: () => onNavigate('/caderneta') },
    { label: 'VACINAS', onClick: () => onNavigate('/caderneta') },
    { label: 'EXAMES', onClick: () => onNavigate('/caderneta') },
    { label: 'AGENDAMENTOS', onClick: () => onNavigate('/meus-agendamentos') },
    { label: 'MEDICAMENTOS', onClick: () => onNavigate('/caderneta') },
    { label: 'CARTILHA', onClick: () => onNavigate('/caderneta') }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 h-full w-64 bg-[#5B9BD5] z-50 shadow-xl">
        <div className="p-4">
          <button
            onClick={onClose}
            className="text-white hover:bg-[#4A8AC4] p-2 rounded mb-6"
          >
            <X size={24} />
          </button>

          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {index === 0 ? (
                  <div className="mb-6">
                    <h3 className="text-white font-semibold text-sm mb-2">{item.label}</h3>
                    <p className="text-white text-xs opacity-90">{item.subLabel}</p>
                  </div>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="w-full text-left px-4 py-3 text-white hover:bg-[#4A8AC4] rounded transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
