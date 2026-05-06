import { useNavigate } from 'react-router';

export function Formularios() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#2E5C8A] flex flex-col">
      <div className="bg-[#5B9BD5] text-white p-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-start text-xs leading-tight">
            <span className="font-bold">SUS</span>
            <span className="font-bold">DIGITAL</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-[#E84C8E] to-[#5B9BD5] rounded"></div>
        </div>
        <h1 className="text-sm font-medium ml-4">CRIANDO UM NOVO PERFIL DO PACIENTE</h1>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Formulário 1 - Resultado Consulta */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold mb-4 pb-2 border-b">Resultado da Consulta</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Resultado da consulta (ex: DM2, HAS)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <textarea
                placeholder="Observações"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-20"
              />
            </div>
          </div>

          {/* Formulário 2 - Formulário de Cadastro */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold mb-4 pb-2 border-b">Formulário de Cadastro</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Consultas - Clínica Geral (77)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Data da consulta (ex: 29/04/2024 - 14h15)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Local"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Formulário 3 - Resultado Exames */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-semibold">Resultado de Exames</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Glicemia: 95 mg/dL | Colesterol: 180 mg/dL
                  HbA1c: 5.8% | Triglicerídeos: 120 mg/dL
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded text-xs">
              <p className="font-semibold mb-1">Observações:</p>
              <p className="text-gray-700">Resultados dentro dos parâmetros normais</p>
            </div>
          </div>

          {/* Formulário 4 - Resultado de Vacinas */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                ✗
              </div>
              <div>
                <h3 className="font-semibold">Resultado de Vacinas</h3>
                <p className="text-xs text-gray-600 mt-1">Carteira de vacinação</p>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded text-xs space-y-1">
              <p>Data: 22/03/2024</p>
              <p>Vacina: COVID-19 (3ª dose)</p>
            </div>
          </div>

          {/* Formulário 5 - Dados Pessoais */}
          <div className="bg-white rounded-lg p-6 md:col-span-2">
            <h3 className="font-semibold mb-4">Dados Pessoais</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="CPF"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="RG"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Data de nascimento"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Telefone"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Endereço completo"
                className="w-full md:col-span-2 border border-gray-300 rounded px-3 py-2 text-sm"
              />
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
          onClick={() => navigate('/')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
