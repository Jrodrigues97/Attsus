import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Header } from './Header';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';

export function AgendarConsultaHorario() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState({ mes: '', dia: '', ano: '' });
  const [selectedTime, setSelectedTime] = useState('');

  const horarios = [
    '08:00', '08:30', '09:00', '09:30', '10:00',
    '10:30', '11:00', '14:00', '14:30', '15:00'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Agendar Consulta" />

      <div className="flex-1 p-6 md:p-10 flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Escolha Data e Horário
            </h2>
            <p className="text-gray-600">
              Selecione o melhor momento para sua consulta
            </p>
          </div>

          {/* Seletor de Data */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CalendarDaysIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Escolher a Data</h3>
            </div>

            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-1">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Dia</label>
                <input
                  type="text"
                  placeholder="15"
                  value={selectedDate.dia}
                  onChange={(e) => setSelectedDate({...selectedDate, dia: e.target.value})}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  maxLength={2}
                />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Mês</label>
                <input
                  type="text"
                  placeholder="05"
                  value={selectedDate.mes}
                  onChange={(e) => setSelectedDate({...selectedDate, mes: e.target.value})}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  maxLength={2}
                />
              </div>
              <div className="col-span-3">
                <label className="block text-xs font-semibold text-gray-600 mb-2">Ano</label>
                <select
                  value={selectedDate.ano}
                  onChange={(e) => setSelectedDate({...selectedDate, ano: e.target.value})}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-center text-lg font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                >
                  <option value="">Selecione</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </div>
            </div>
          </div>

          {/* Horários Disponíveis */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Horários Disponíveis</h3>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {horarios.map((horario) => (
                <button
                  key={horario}
                  onClick={() => setSelectedTime(horario)}
                  className={`
                    px-4 py-4 rounded-xl text-sm font-bold transition-all
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

          {selectedTime && (
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-6 text-white text-center animate-in fade-in">
              <p className="text-sm font-medium mb-2">Horário Selecionado</p>
              <p className="text-3xl font-bold">{selectedTime}</p>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/formularios')}
          disabled={!selectedTime || !selectedDate.mes || !selectedDate.dia || !selectedDate.ano}
          className={`
            px-8 py-3 rounded-lg font-medium shadow-lg transition-all
            ${(selectedTime && selectedDate.mes && selectedDate.dia && selectedDate.ano)
              ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
