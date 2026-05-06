import { useNavigate } from 'react-router';
import { Header } from './Header';

export function MeusAgendamentos() {
  const navigate = useNavigate();

  const agendamentos = [
    {
      tipo: 'Consulta: Vacinas',
      data: '20/04/2025',
      horario: '18:00',
      local: 'Sus Tristano, Av. Castro Garcia',
      codigo: '4374',
      status: 'Agendado'
    },
    {
      tipo: 'Consulta: Clínica geral',
      data: '15/05/2025',
      horario: '09:00',
      local: 'Sus Tristano, Av. Castro',
      codigo: '',
      status: 'Concluído'
    },
    {
      tipo: 'Consulta: Clínica geral',
      data: '08/04/2025',
      horario: '18:00',
      local: 'Sus Camilo, Av. ConsultaNet?',
      codigo: '',
      status: 'Concluído'
    }
  ];

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <Header title="Meus agendamentos" />

      <div className="flex-1 p-6 max-w-2xl mx-auto w-full">
        <div className="space-y-4">
          {agendamentos.map((agendamento, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <p className="font-semibold text-gray-800 mb-1">{agendamento.tipo}</p>
              <p className="text-sm text-gray-600">Data: {agendamento.data}</p>
              <p className="text-sm text-gray-600">Horário: {agendamento.horario}</p>
              <p className="text-sm text-gray-600">Local: {agendamento.local}</p>
              {agendamento.codigo && (
                <p className="text-sm text-gray-600">{agendamento.codigo}</p>
              )}
              <p className="text-sm font-semibold text-blue-600 mt-2">
                Status: {agendamento.status}
              </p>
            </div>
          ))}
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
          onClick={() => navigate('/caderneta')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
