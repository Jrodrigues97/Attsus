import { useNavigate } from 'react-router';

export function MenuPrincipal() {
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
          <h2 className="text-white text-center text-lg mb-6">USE MAIS PRÓXIMO PARA DADOS GERAIS</h2>

          <div className="grid grid-cols-5 gap-3 mb-8">
            <button
              onClick={() => navigate('/dados-gerais')}
              className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              GERAL
            </button>
            <button
              onClick={() => navigate('/dados-gerais')}
              className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              DADOS
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              AGENDAMENTO
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              CARTILHA
            </button>
            <button className="bg-white text-gray-700 px-4 py-3 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
              CARTEIRA
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-sm mb-2">UBS Escola de Saúde</h3>
              <p className="text-xs text-gray-600">Responsável: Dr. Castro</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-sm mb-2">UBS ESCOLA DA SAÚDE DA ANHANGUERA</h3>
              <p className="text-xs text-gray-600">Responsável: Dr. Castro</p>
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
          onClick={() => navigate('/consultas-menu')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
