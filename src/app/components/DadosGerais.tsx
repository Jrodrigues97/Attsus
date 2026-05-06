import { useNavigate } from 'react-router';

export function DadosGerais() {
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
        <h1 className="text-sm font-medium ml-4">FORMULARIO CADASTRADO</h1>
      </div>

      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-md space-y-4">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-sm mb-3">Informações</h3>
            <div className="space-y-2 text-sm">
              <p>Nome completo:</p>
              <p>RG: 15.458.741-5</p>
              <p>CPF: 852.475.789-85</p>
              <p>Data de nascimento: 15 de março de 1985</p>
              <p>Telefone:</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-sm mb-3">Endereço</h3>
            <div className="space-y-2 text-sm">
              <p>Logradouro:</p>
              <p>CEP:</p>
              <p>N°:</p>
              <p>Bairro:</p>
              <p>Cidade:</p>
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
          onClick={() => navigate('/formularios')}
          className="bg-white text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Próximo &gt;
        </button>
      </div>
    </div>
  );
}
