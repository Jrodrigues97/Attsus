import { Menu } from 'lucide-react';

export function Header({ title }: { title: string }) {
  return (
    <header className="bg-[#5B9BD5] text-white p-4 flex items-center justify-between">
      <button className="p-2 hover:bg-[#4A8AC4] rounded">
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
        {title}
      </h1>
    </header>
  );
}
