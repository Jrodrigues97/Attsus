import { useNavigate } from 'react-router';
import { Header } from './Header';
import {
  UserCircleIcon,
  BeakerIcon,
  ClockIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

export function MedicacaoPaciente() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Medicamentos do Paciente" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          {/* Informações do Paciente */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <UserCircleIcon className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Maria Silva</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">CPF:</span>
                    <span className="ml-2 font-semibold text-gray-800">123.456.789-00</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Nascimento:</span>
                    <span className="ml-2 font-semibold text-gray-800">15/03/1980</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Telefone:</span>
                    <span className="ml-2 font-semibold text-gray-800">(11) 98765-4321</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Idade:</span>
                    <span className="ml-2 font-semibold text-gray-800">44 anos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Medicamentos em Uso</h3>
            <p className="text-gray-600">Controle e acompanhamento de medicamentos</p>
          </div>

          {/* Medicamento 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all mb-6 overflow-hidden border-l-8 border-blue-600">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BeakerIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Losartana</h4>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mt-1">
                      Uso contínuo
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-xs text-purple-600 font-medium mb-1">Dosagem</p>
                  <p className="text-lg font-bold text-gray-800">50mg</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="text-xs text-orange-600 font-medium mb-1">Frequência</p>
                  <p className="text-lg font-bold text-gray-800">1x ao dia</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-xs text-blue-600 font-medium mb-1">Horário</p>
                  <p className="text-lg font-bold text-gray-800">Manhã</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                <InformationCircleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">Instruções</p>
                  <p className="text-sm text-gray-700">Tomar em jejum pela manhã, com um copo de água</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medicamento 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all mb-6 overflow-hidden border-l-8 border-green-600">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <BeakerIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">Metformina</h4>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mt-1">
                      Uso contínuo
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-xs text-purple-600 font-medium mb-1">Dosagem</p>
                  <p className="text-lg font-bold text-gray-800">850mg</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <p className="text-xs text-orange-600 font-medium mb-1">Frequência</p>
                  <p className="text-lg font-bold text-gray-800">2x ao dia</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-xs text-blue-600 font-medium mb-1">Iniciado em</p>
                  <p className="text-lg font-bold text-gray-800">01/2024</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                <InformationCircleIcon className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">Instruções</p>
                  <p className="text-sm text-gray-700">Tomar após café da manhã e jantar, com alimentação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-5xl mx-auto w-full">
        <button
          onClick={() => navigate('/caderneta')}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/menu-principal')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Menu Principal →
        </button>
      </div>
    </div>
  );
}
