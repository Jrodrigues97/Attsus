import { useNavigate } from 'react-router';
import { Header } from './Header';
import { UserIcon, HomeIcon } from '@heroicons/react/24/outline';

export function DadosGerais() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Dados Cadastrais" />

      <div className="flex-1 p-6 md:p-10 flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Informações do Paciente
            </h2>
            <p className="text-gray-600">
              Dados cadastrais e informações de contato
            </p>
          </div>

          {/* Informações Pessoais */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <UserIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Informações Pessoais</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs text-blue-600 font-semibold mb-1">Nome Completo</p>
                  <p className="text-base font-bold text-gray-800">Maria Silva Santos</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-xs text-purple-600 font-semibold mb-1">Data de Nascimento</p>
                  <p className="text-base font-bold text-gray-800">15 de março de 1985</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs text-green-600 font-semibold mb-1">RG</p>
                  <p className="text-base font-bold text-gray-800">15.458.741-5</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-xs text-orange-600 font-semibold mb-1">CPF</p>
                  <p className="text-base font-bold text-gray-800">852.475.789-85</p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-xl p-4">
                <p className="text-xs text-pink-600 font-semibold mb-1">Telefone</p>
                <p className="text-base font-bold text-gray-800">(11) 98765-4321</p>
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <HomeIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Endereço</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-blue-50 rounded-xl p-4">
                  <p className="text-xs text-blue-600 font-semibold mb-1">Logradouro</p>
                  <p className="text-base font-bold text-gray-800">Rua das Flores, 123</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-xs text-purple-600 font-semibold mb-1">Número</p>
                  <p className="text-base font-bold text-gray-800">123</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs text-green-600 font-semibold mb-1">Bairro</p>
                  <p className="text-base font-bold text-gray-800">Centro</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-xs text-orange-600 font-semibold mb-1">CEP</p>
                  <p className="text-base font-bold text-gray-800">01234-567</p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-xl p-4">
                <p className="text-xs text-pink-600 font-semibold mb-1">Cidade/Estado</p>
                <p className="text-base font-bold text-gray-800">São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/formularios')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors font-medium shadow-md"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
