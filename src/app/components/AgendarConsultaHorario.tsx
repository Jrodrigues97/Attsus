import { useState } from 'react';
import { useNavigate } from 'react-router';

export function AgendarConsultaHorario() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const horarios = [
    '08:00', '08:30', '09:00', '09:30', '10:00',
    '10:30', '11:00', '14:00', '14:30', '15:00'
  ];

  return (
    <div className="min-h-screen bg-[#0D5A8F] flex flex-col">
      <div className="bg-[#0D5A8F] text-white p-6 flex items-center gap-3">
        <div className="grid grid-cols-2 gap-1 w-12 h-12">
          <div className="bg-red-500 rounded-sm"></div>
          <div className="bg-yellow-500 rounded-sm"></div>
          <div className="bg-green-500 rounded-sm"></div>
          <div className="bg-blue-400 rounded-sm"></div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Meu</h1>
          <h1 className="text-2xl font-bold">SUS</h1>
          <h1 className="text-2xl font-bold">Digital</h1>
        </div>
      </div>

      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-white text-center text-lg mb-6">Agendar consulta</h2>

          <div className="bg-white rounded-lg p-6 mb-6">
            <label className="block text-sm font-semibold mb-2">Escolher a data</label>
            <div className="flex gap-2 mb-4">
              {['Mês', 'Dia', 'Dia', 'Ano', 'Ano'].map((label, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={label}
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-center"
                  maxLength={label.includes('Ano') ? 2 : 2}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold mb-4 text-center">Horários disponíveis</h3>
            <div className="grid grid-cols-5 gap-2">
              {horarios.map((horario) => (
                <button
                  key={horario}
                  onClick={() => setSelectedTime(horario)}
                  className={`
                    px-3 py-2 rounded text-sm font-medium transition-colors
                    ${selectedTime === horario
                      ? 'bg-[#0D5A8F] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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

      <div className="p-4 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          &lt; Voltar
        </button>
        <button
          onClick={() => navigate('/formularios')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
