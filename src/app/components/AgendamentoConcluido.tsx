import { useNavigate, useLocation } from 'react-router';
import { Header } from './Header';
import {
  ArrowDownTrayIcon,
  PrinterIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export function AgendamentoConcluido() {
  const navigate = useNavigate();
  const location = useLocation();
  const { tipo, data, horario } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 flex flex-col">
      <Header title="Agendamento Confirmado!" />

      <div className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full">
          {/* Ícone de Sucesso */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircleIcon className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Consulta Agendada com Sucesso!
            </h2>
            <p className="text-gray-600 text-lg">
              Seu agendamento foi confirmado. Confira os detalhes abaixo:
            </p>
          </div>

          {/* Card de Detalhes */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 border-2 border-green-200">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Detalhes da Consulta</h3>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CalendarDaysIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Tipo de Consulta</p>
                  <p className="text-xl font-bold text-gray-800">Vacinas</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CalendarDaysIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Data</p>
                    <p className="text-lg font-bold text-gray-800">20/04/2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Horário</p>
                    <p className="text-lg font-bold text-gray-800">18:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Local de Atendimento</p>
                  <p className="text-lg font-bold text-gray-800">UBS Tristano</p>
                  <p className="text-sm text-gray-600">Av. Castro Garcia, 4374</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> Chegue com 15 minutos de antecedência e traga seu Cartão SUS e documento de identidade.
                </p>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <p className="text-gray-700 font-semibold text-center mb-4 text-lg">
              Comprovante de Agendamento
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 font-medium shadow-md">
                <ArrowDownTrayIcon className="w-5 h-5" />
                Baixar Comprovante
              </button>
              <button className="bg-gray-600 text-white px-6 py-4 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-3 font-medium shadow-md">
                <PrinterIcon className="w-5 h-5" />
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate('/')}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar ao Início
        </button>
        <button
          onClick={() => navigate('/meus-agendamentos')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Meus Agendamentos →
        </button>
      </div>
    </div>
  );
}
