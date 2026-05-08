import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Header } from './Header';
import { ChevronLeftIcon, ChevronRightIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';

export function ConfirmarAgendamento() {
  const navigate = useNavigate();
  const location = useLocation();
  const tipo = location.state?.tipo || 'clinica-geral';

  const [selectedDate, setSelectedDate] = useState(7);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const horarios = {
    manha: ['08:00', '09:00', '10:00', '11:00'],
    tarde: ['14:00', '15:00', '16:00', '17:00']
  };

  const handleConfirmar = () => {
    if (!selectedTime) {
      alert('Por favor, selecione um horário');
      return;
    }
    navigate('/agendamento-concluido', {
      state: {
        tipo,
        data: `07/05/2025`,
        horario: selectedTime
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Confirmar Agendamento" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-700 text-lg mb-8">
            Escolha a data e horário de sua preferência
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendário */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-bold text-gray-800">Maio 2025</span>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {['D', 'S', 'T', 'Q', 'T', 'S', 'S'].map((dia, i) => (
                    <div key={i} className="font-bold text-gray-500 pb-2 text-sm">
                      {dia}
                    </div>
                  ))}

                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const isEmpty = i < 3;

                    return (
                      <button
                        key={i}
                        disabled={isEmpty}
                        onClick={() => setSelectedDate(day)}
                        className={`
                          aspect-square rounded-xl text-sm font-medium transition-all
                          ${isEmpty ? 'invisible' : ''}
                          ${selectedDate === day
                            ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg scale-110'
                            : 'hover:bg-blue-50 text-gray-700'
                          }
                        `}
                      >
                        {!isEmpty && day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-6 text-white text-center">
                <CalendarDaysIcon className="w-12 h-12 mx-auto mb-3" />
                <p className="text-sm font-medium mb-1">Data Selecionada</p>
                <p className="text-2xl font-bold">{selectedDate}/05/2025</p>
              </div>
            </div>

            {/* Horários e Unidades */}
            <div className="space-y-6">
              {/* Unidades Disponíveis */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <ClockIcon className="w-6 h-6 text-blue-600" />
                  Unidades Disponíveis
                </h3>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-600">
                    <p className="font-bold text-gray-800 text-sm mb-1">UBS Tristano</p>
                    <p className="text-xs text-gray-600">Dr. Carla Vera</p>
                    <p className="text-xs text-gray-500">Código: 4374</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-600">
                    <p className="font-bold text-gray-800 text-sm mb-1">UBS Camilo</p>
                    <p className="text-xs text-gray-600">Dr. Demetris</p>
                    <p className="text-xs text-gray-500">Código: 4455</p>
                  </div>
                </div>
              </div>

              {/* Horários */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Horários Disponíveis</h3>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Manhã</p>
                  <div className="grid grid-cols-4 gap-2">
                    {horarios.manha.map((horario) => (
                      <button
                        key={horario}
                        onClick={() => setSelectedTime(horario)}
                        className={`
                          px-3 py-3 rounded-xl text-sm font-semibold transition-all
                          ${selectedTime === horario
                            ? 'bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:border-green-300 border-2 border-transparent'
                          }
                        `}
                      >
                        {horario}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-3">Tarde</p>
                  <div className="grid grid-cols-4 gap-2">
                    {horarios.tarde.map((horario) => (
                      <button
                        key={horario}
                        onClick={() => setSelectedTime(horario)}
                        className={`
                          px-3 py-3 rounded-xl text-sm font-semibold transition-all
                          ${selectedTime === horario
                            ? 'bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg scale-105'
                            : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:border-green-300 border-2 border-transparent'
                          }
                        `}
                      >
                        {horario}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-6xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={handleConfirmar}
          disabled={!selectedTime}
          className={`
            px-8 py-3 rounded-lg font-medium shadow-lg transition-all
            ${selectedTime
              ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Confirmar Agendamento
        </button>
      </div>
    </div>
  );
}
