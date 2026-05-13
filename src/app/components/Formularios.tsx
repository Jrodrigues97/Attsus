import { useNavigate } from 'react-router';
import { Header } from './Header';
import {
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export function Formularios() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Formulários do Paciente" />

      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Registros Médicos
            </h2>
            <p className="text-gray-600 text-lg">
              Histórico completo de consultas, exames e vacinas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Resultado da Consulta */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <ClipboardDocumentCheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Resultado da Consulta</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Diagnóstico (ex: DM2, HAS)"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
                <textarea
                  placeholder="Observações e recomendações..."
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                />
              </div>
            </div>

            {/* Formulário de Cadastro */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <ClipboardDocumentCheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Dados da Consulta</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Tipo de consulta"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Data e horário"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Local do atendimento"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Resultado de Exames */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <BeakerIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Resultado de Exames</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-2">Resultados</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700"><strong>Glicemia:</strong> 95 mg/dL</p>
                      <p className="text-gray-700"><strong>Colesterol:</strong> 180 mg/dL</p>
                      <p className="text-gray-700"><strong>HbA1c:</strong> 5.8%</p>
                      <p className="text-gray-700"><strong>Triglicerídeos:</strong> 120 mg/dL</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-600">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Observações:</p>
                  <p className="text-sm text-gray-600">Resultados dentro dos parâmetros normais</p>
                </div>
              </div>
            </div>

            {/* Resultado de Vacinas */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">Carteira de Vacinação</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="w-10 h-10 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium mb-2">Última Vacinação</p>
                    <p className="text-sm font-bold text-gray-800">COVID-19 (3ª dose)</p>
                    <p className="text-sm text-gray-600">Data: 22/03/2024</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Próximas Vacinas:</p>
                  <p className="text-sm text-gray-600">Influenza - Previsão: Abril/2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Dados Pessoais */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
              <h3 className="text-2xl font-bold text-white">Cadastro Completo do Paciente</h3>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="CPF"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="RG"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Data de nascimento"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Endereço completo"
                  className="w-full md:col-span-2 border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-colors font-medium shadow-md"
        >
          Salvar e Voltar ao Início
        </button>
      </div>
    </div>
  );
}
