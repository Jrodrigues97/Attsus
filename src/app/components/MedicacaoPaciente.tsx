import { useNavigate } from 'react-router';
import { User } from 'lucide-react';

export function MedicacaoPaciente() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#5B9BD5] flex flex-col">
      <div className="bg-[#5B9BD5] text-white p-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start text-xs leading-tight">
            <span className="font-bold">SUS</span>
            <span className="font-bold">DIGITAL</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#E84C8E] to-[#5B9BD5] rounded"></div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="flex gap-2 px-4">
          {['INÍCIO', 'VACINAS', 'EXAMES', 'AGENDAMENTO', 'MEDICAMENTOS'].map((tab) => (
            <button
              key={tab}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-6">MEDICAÇÃO DO PACIENTE</h2>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={32} className="text-gray-600" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Maria Silva</p>
              <p className="text-gray-600">CPF: 123.456.789-00</p>
              <p className="text-gray-600">Data de nascimento: 15/03/1980</p>
              <p className="text-gray-600">Telefone: (11) 98765-4321</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-4">Medicamento</h3>

            <div className="bg-blue-50 p-4 rounded mb-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Medicamento:</span>
                  <p>Losartana</p>
                </div>
                <div>
                  <span className="font-semibold">Dosagem:</span>
                  <p>50mg</p>
                </div>
                <div>
                  <span className="font-semibold">Frequência:</span>
                  <p>1x ao dia</p>
                </div>
              </div>
              <div className="mt-2 text-sm">
                <span className="font-semibold">Instruções:</span>
                <p>Tomar em jejum pela manhã</p>
              </div>
            </div>

            <h3 className="font-semibold mb-4 mt-6">Uso de Medicamentos</h3>

            <div className="bg-blue-50 p-4 rounded">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Medicamento:</span>
                  <p>Metformina</p>
                </div>
                <div>
                  <span className="font-semibold">Dosagem:</span>
                  <p>850mg</p>
                </div>
                <div>
                  <span className="font-semibold">Frequência:</span>
                  <p>2x ao dia</p>
                </div>
              </div>
              <div className="mt-2 text-sm">
                <span className="font-semibold">Período:</span>
                <p>Uso contínuo - Iniciado em 01/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between">
        <button
          onClick={() => navigate('/caderneta')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          &lt; Voltar
        </button>
        <button
          onClick={() => navigate('/menu-principal')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
