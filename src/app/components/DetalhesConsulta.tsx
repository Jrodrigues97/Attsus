import { useLocation, useNavigate } from 'react-router';
import { Header } from './Header';
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export function DetalhesConsulta() {
  const location = useLocation();
  const navigate = useNavigate();
  const tipo = location.state?.tipo || 'clinica-geral';

  const detalhes: Record<string, { titulo: string; descricao: string; items: { icon: any; titulo: string; texto: string }[] }> = {
    'clinica-geral': {
      titulo: 'Clínica Geral',
      descricao: 'Atendimento médico integral para prevenção, diagnóstico e tratamento de diversas condições de saúde.',
      items: [
        {
          icon: InformationCircleIcon,
          titulo: 'O que esperar da consulta',
          texto: 'O profissional irá realizar uma avaliação completa do seu histórico de saúde, verificar sinais vitais e fazer um exame físico geral.'
        },
        {
          icon: CheckCircleIcon,
          titulo: 'O que levar',
          texto: 'Cartão do SUS, documento de identidade, exames anteriores e lista de medicamentos em uso.'
        },
        {
          icon: ClockIcon,
          titulo: 'Duração média',
          texto: 'A consulta tem duração aproximada de 30 a 45 minutos.'
        }
      ]
    },
    'vacinas': {
      titulo: 'Vacinas',
      descricao: 'Proteção contra doenças através da imunização. Mantemos você e sua família seguros.',
      items: [
        {
          icon: InformationCircleIcon,
          titulo: 'Sobre a vacinação',
          texto: 'Aplicação de vacinas conforme o calendário nacional de vacinação, para crianças, adolescentes, adultos e idosos.'
        },
        {
          icon: CheckCircleIcon,
          titulo: 'O que levar',
          texto: 'Cartão do SUS, documento de identidade e carteira de vacinação (se tiver).'
        },
        {
          icon: ClockIcon,
          titulo: 'Duração média',
          texto: 'O atendimento é rápido, durando cerca de 15 minutos.'
        }
      ]
    },
    'exames': {
      titulo: 'Exames',
      descricao: 'Realização de exames laboratoriais e de imagem para diagnóstico e acompanhamento.',
      items: [
        {
          icon: InformationCircleIcon,
          titulo: 'Tipos de exames',
          texto: 'Exames de sangue, urina, imagem (raio-X, ultrassom) e outros conforme solicitação médica.'
        },
        {
          icon: CheckCircleIcon,
          titulo: 'O que levar',
          texto: 'Cartão do SUS, documento de identidade e pedido médico dos exames.'
        },
        {
          icon: ClockIcon,
          titulo: 'Preparo',
          texto: 'Alguns exames requerem jejum ou preparo específico. Verifique as instruções ao agendar.'
        }
      ]
    },
    'pediatria': {
      titulo: 'Pediatria',
      descricao: 'Cuidado especializado para a saúde de bebês, crianças e adolescentes.',
      items: [
        {
          icon: InformationCircleIcon,
          titulo: 'Consulta pediátrica',
          texto: 'Acompanhamento do crescimento e desenvolvimento, prevenção de doenças e orientações aos pais.'
        },
        {
          icon: CheckCircleIcon,
          titulo: 'O que levar',
          texto: 'Cartão do SUS da criança, certidão de nascimento, carteira de vacinação e exames anteriores.'
        },
        {
          icon: ClockIcon,
          titulo: 'Duração média',
          texto: 'A consulta dura aproximadamente 30 minutos.'
        }
      ]
    }
  };

  const info = detalhes[tipo] || detalhes['clinica-geral'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col">
      <Header title="Detalhes da Consulta" />

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{info.titulo}</h2>
              <p className="text-blue-100 text-base md:text-lg">{info.descricao}</p>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {info.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.titulo}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.texto}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center max-w-3xl mx-auto w-full">
        <button
          onClick={() => navigate('/')}
          className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium border-2 border-gray-300 shadow-sm"
        >
          ← Voltar
        </button>
        <button
          onClick={() => navigate('/confirmar-agendamento', { state: { tipo } })}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-colors font-medium shadow-md"
        >
          Agendar Agora →
        </button>
      </div>
    </div>
  );
}
