import { useNavigate } from 'react-router';
import { Header } from './Header';

export function MenuPrincipal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D5A8F] to-[#0077B6] flex flex-col">
      <Header title="Menu Principal" />

      <div className="flex-1 p-6 md:p-10 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-white text-center text-2xl font-bold mb-8">
            Acesso Rápido aos Dados Gerais
          </h2>

          <div className="grid grid-cols-5 gap-4 mb-10">
            <button
              onClick={() => navigate('/dados-gerais')}
              className="bg-white text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold transform hover:scale-105"
            >
              GERAL
            </button>
            <button
              onClick={() => navigate('/dados-gerais')}
              className="bg-white text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold transform hover:scale-105"
            >
              DADOS
            </button>
            <button
              onClick={() => navigate('/meus-agendamentos')}
              className="bg-white text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold transform hover:scale-105"
            >
              AGENDAMENTO
            </button>
            <button className="bg-white text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold transform hover:scale-105">
              CARTILHA
            </button>
            <button className="bg-white text-gray-700 px-6 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm font-bold transform hover:scale-105">
              CARTEIRA
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-lg text-gray-800 mb-2">UBS Escola de Saúde</h3>
              <p className="text-sm text-gray-600">Responsável: Dr. Castro</p>
              <p className="text-xs text-gray-500 mt-1">Atendimento: Segunda a Sexta, 7h às 17h</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
              <h3 className="font-bold text-lg text-gray-800 mb-2">UBS Escola da Saúde da Anhanguera</h3>
              <p className="text-sm text-gray-600">Responsável: Dr. Castro</p>
              <p className="text-xs text-gray-500 mt-1">Atendimento: Segunda a Sexta, 8h às 18h</p>
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
          onClick={() => navigate('/consultas-menu')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
