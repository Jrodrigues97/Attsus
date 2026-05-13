import { useNavigate } from 'react-router';
import { Header } from './Header';
import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline';

export function ConsultasMenu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Minhas Consultas" />

      <div className="flex-1 p-6 md:p-10">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-5 gap-3 mb-10">
            <button className="bg-white text-gray-700 px-4 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold border-2 border-blue-500">
              INÍCIO
            </button>
            <button className="bg-white text-gray-700 px-4 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold">
              GRUPO
            </button>
            <button className="bg-white text-gray-700 px-4 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold">
              CARTILHA
            </button>
            <button className="bg-white text-gray-700 px-4 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold">
              VIA PREFERÊNCIA
            </button>
            <button
              onClick={() => navigate('/meus-agendamentos')}
              className="bg-white text-gray-700 px-4 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold"
            >
              AGENDAMENTO
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CalendarDaysIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Consultas Marcadas</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-800">Dra. Marta Salvatori</p>
                    <p className="text-sm text-gray-600 font-medium">Clínica Geral</p>
                    <div className="flex items-center gap-2 mt-2">
                      <CalendarDaysIcon className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-700 font-semibold">Segunda-feira, 24/05 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-600 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-800">Dr. Pedro Plauneto</p>
                    <p className="text-sm text-gray-600 font-medium">Cardiologia</p>
                    <div className="flex items-center gap-2 mt-2">
                      <CalendarDaysIcon className="w-4 h-4 text-gray-500" />
                      <p className="text-sm text-gray-700 font-semibold">Segunda-feira, 24/05 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          onClick={() => navigate('/agendar-consulta-horario')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
