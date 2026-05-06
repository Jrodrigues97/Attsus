import { Bars3Icon, HeartIcon } from '@heroicons/react/24/outline';

export function Header({ title }: { title: string }) {
  return (
    <header className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button className="p-3 hover:bg-white/10 rounded-lg transition-colors" aria-label="Menu">
          <Bars3Icon className="w-6 h-6" />
        </button>

        <h1 className="text-lg md:text-xl font-bold text-center flex-1 px-4">
          {title}
        </h1>

        <div className="flex items-center gap-3">
          <HeartIcon className="w-8 h-8 text-red-400 animate-pulse" />
          <div className="text-right">
            <div className="text-xs font-medium">SUS</div>
            <div className="text-xs font-bold">Digital</div>
          </div>
        </div>
      </div>
    </header>
  );
}
