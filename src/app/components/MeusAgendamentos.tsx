import { useNavigate } from 'react-router';
import { Header } from './Header';
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export function MeusAgendamentos() {
  const navigate = useNavigate();

  const agendamentos = [
    {
      tipo: 'Vacinas',
      data: '20/04/2025',
      horario: '18:00',
      local: 'UBS Tristano, Av. Castro Garcia, 4374',
      codigo: '4374',
      status: 'Agendado',
      cor: 'green'
    },
    {
      tipo: 'Clínica Geral',
      data: '15/05/2025',
      horario: '09:00',
      local: 'UBS Tristano, Av. Castro',
      codigo: '',
      status: 'Concluído',
      cor: 'gray'
    },
    {
      tipo: 'Clínica Geral',
      data: '08/04/2025',
      horario: '18:00',
      local: 'UBS Camilo, Av. ConsultaNet',
      codigo: '',
      status: 'Concluído',
      cor: 'gray'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Meus Agendamentos" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Suas Consultas</h2>
            <p className="text-gray-600">Acompanhe e gerencie seus agendamentos</p>
          </div>

          <div className="space-y-4">
            {agendamentos.map((agendamento, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-8"
                style={{
                  borderLeftColor: agendamento.cor === 'green' ? '#2D6A4F' : '#ADB5BD'
                }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {agendamento.tipo}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          agendamento.status === 'Agendado'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <CheckCircleIcon className="w-4 h-4" />
                        {agendamento.status}
                      </span>
                    </div>
                    {agendamento.codigo && (
                      <div className="bg-blue-50 px-4 py-2 rounded-lg">
                        <p className="text-xs text-blue-600 font-medium">Código</p>
                        <p className="text-lg font-bold text-blue-800">{agendamento.codigo}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CalendarDaysIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Data</p>
                        <p className="font-semibold text-gray-800">{agendamento.data}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <ClockIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Horário</p>
                        <p className="font-semibold text-gray-800">{agendamento.horario}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Local</p>
                        <p className="font-semibold text-gray-800 text-sm">{agendamento.local}</p>
                      </div>
                    </div>
                  </div>

                  {agendamento.status === 'Agendado' && (
                    <div className="mt-4 pt-4 border-t flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Ver Comprovante
                      </button>
                      <button className="px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium">
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-4xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/caderneta')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Caderneta de Saúde →
        </button>
      </div>
    </div>
  );
}
