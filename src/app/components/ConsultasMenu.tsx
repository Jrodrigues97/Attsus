import { useNavigate } from 'react-router';

export function ConsultasMenu() {
  const navigate = useNavigate();

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
        <div className="w-full max-w-2xl">
          <div className="grid grid-cols-5 gap-3 mb-8">
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              INÍCIO
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              GRUPO
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              CARTILHA
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              VIA PREFERÊNCIA
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              AGENDAMENTO
            </button>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Consultas marcadas</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm font-semibold">Dra. Marta Salvatori</p>
                <p className="text-xs text-gray-600">Clínica Geral</p>
                <p className="text-xs text-gray-600">Segunda-feira 24/05 - 14:00</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm font-semibold">Dr. Pedro Plauneto</p>
                <p className="text-xs text-gray-600">Cardiologia</p>
                <p className="text-xs text-gray-600">Segunda-feira Jun 24/05 - 14:00</p>
              </div>
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
          onClick={() => navigate('/agendar-consulta-horario')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
