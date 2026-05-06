import { useNavigate, useLocation } from 'react-router';
import { Header } from './Header';
import { Download, Printer } from 'lucide-react';

export function AgendamentoConcluido() {
  const navigate = useNavigate();
  const location = useLocation();
  const { tipo, data, horario } = location.state || {};

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <Header title="Agendamento concluído!" />

      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg mb-6">
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Consulta:</span> Vacinas</p>
            <p><span className="font-semibold">Data:</span> 20/04/2025</p>
            <p><span className="font-semibold">Horário:</span> 18:00</p>
            <p><span className="font-semibold">Local:</span> Sus Tristano, Av. Castro Garcia, 4374</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-white text-center mb-4">Comprovante de agendamento</p>
          <div className="flex gap-4">
            <button className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Download size={18} />
              Download
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Printer size={18} />
              Imprimir
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          &lt; Voltar
        </button>
        <button
          onClick={() => navigate('/meus-agendamentos')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
