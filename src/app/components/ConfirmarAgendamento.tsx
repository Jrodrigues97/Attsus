import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Header } from './Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ConfirmarAgendamento() {
  const navigate = useNavigate();
  const location = useLocation();
  const tipo = location.state?.tipo || 'clinica-geral';

  const [selectedDate, setSelectedDate] = useState(7);
  const [selectedPeriod, setSelectedPeriod] = useState<'manha' | 'tarde' | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const horariosDisponiveis = {
    manha: ['08:00', '09:00', '10:00', '11:00'],
    tarde: ['14:00', '15:00', '16:00', '17:00']
  };

  const handleConfirmar = () => {
    navigate('/agendamento-concluido', {
      state: {
        tipo,
        data: `20/04/2025`,
        horario: selectedTime,
        periodo: selectedPeriod
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <Header title="Confirmar agendamentos" />

      <div className="flex-1 p-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {/* Calendário */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={20} />
              </button>
              <span className="font-semibold">Maio 2025</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {['D', 'S', 'T', 'Q', 'T', 'S', 'S'].map((dia, i) => (
                <div key={i} className="font-semibold text-gray-600 pb-2">
                  {dia}
                </div>
              ))}

              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isEmpty = i < 3; // Primeiros dias vazios

                return (
                  <button
                    key={i}
                    disabled={isEmpty}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      aspect-square rounded-full text-sm
                      ${isEmpty ? 'invisible' : ''}
                      ${selectedDate === day
                        ? 'bg-[#5B9BD5] text-white font-semibold'
                        : 'hover:bg-gray-100'
                      }
                    `}
                  >
                    {!isEmpty && day}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <p className="text-white text-sm mb-2">Selecione o horário</p>
            <div className="bg-white rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-4 border-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Horários */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold mb-2">Selecione o horário</h3>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Sue Tristano</p>
              <p className="text-xs text-gray-600">Dr. Carla vera, 4374</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold mb-2">Sue Camilo</p>
              <p className="text-xs text-gray-600">Dr. Demetris</p>
              <p className="text-xs text-gray-600">4455</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          &lt; Voltar
        </button>
        <button
          onClick={handleConfirmar}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Confirmar
        </button>
        <button className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors">
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
