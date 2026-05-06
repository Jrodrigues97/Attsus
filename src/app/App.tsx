import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { AgendarConsultas } from './components/AgendarConsultas';
import { DetalhesConsulta } from './components/DetalhesConsulta';
import { ConfirmarAgendamento } from './components/ConfirmarAgendamento';
import { AgendamentoConcluido } from './components/AgendamentoConcluido';
import { MeusAgendamentos } from './components/MeusAgendamentos';
import { Caderneta } from './components/Caderneta';
import { PostosAtendimento } from './components/PostosAtendimento';
import { MedicacaoPaciente } from './components/MedicacaoPaciente';
import { MenuPrincipal } from './components/MenuPrincipal';
import { ConsultasMenu } from './components/ConsultasMenu';
import { AgendarConsultaHorario } from './components/AgendarConsultaHorario';
import { DadosGerais } from './components/DadosGerais';
import { Formularios } from './components/Formularios';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AgendarConsultas />} />
          <Route path="/detalhes" element={<DetalhesConsulta />} />
          <Route path="/confirmar-agendamento" element={<ConfirmarAgendamento />} />
          <Route path="/agendamento-concluido" element={<AgendamentoConcluido />} />
          <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
          <Route path="/caderneta" element={<Caderneta />} />
          <Route path="/postos" element={<PostosAtendimento />} />
          <Route path="/medicacao-paciente" element={<MedicacaoPaciente />} />
          <Route path="/menu-principal" element={<MenuPrincipal />} />
          <Route path="/consultas-menu" element={<ConsultasMenu />} />
          <Route path="/agendar-consulta-horario" element={<AgendarConsultaHorario />} />
          <Route path="/dados-gerais" element={<DadosGerais />} />
          <Route path="/formularios" element={<Formularios />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}