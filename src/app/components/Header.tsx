import { useState } from 'react';
import { Bars3Icon, HeartIcon } from '@heroicons/react/24/outline';
import { MenuLateral } from './MenuLateral';
import { useNavigate } from 'react-router';

export function Header({ title }: { title: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(true)}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          <h1 className="text-lg md:text-xl font-bold text-center flex-1 px-4">
            {title}
          </h1>

          <div className="flex items-center gap-4">
            <HeartIcon className="w-12 h-12 text-red-400 animate-pulse" />
            <div className="text-right">
              <div className="text-sm font-bold">SUS</div>
              <div className="text-sm font-bold">Digital</div>
            </div>
          </div>
        </div>
      </header>

      <MenuLateral
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(path) => {
          setMenuOpen(false);
          navigate(path);
        }}
      />
    </>
  );
}
