/* ═══════════════════════════════════════════
   Motor de Análise — URE Caieiras 2026
   ═══════════════════════════════════════════ */

const PERFIS = {
    academico: {
        nome: "Dificuldades Acadêmicas",
        descricao: "Aluno com baixo desempenho escolar que afeta a motivação e frequência",
        icone: "fas fa-graduation-cap",
        cor: "text-blue-600",
        corBg: "bg-blue-100",
        corBorda: "border-blue-500",
        hex: "#2563EB",
        acoes: [
            { tipo: "Imediato", titulo: "Apoio Pedagógico Individualizado", descricao: "Implementar tutoria com professor específico para as disciplinas de maior dificuldade, 2x por semana.", responsavel: "Coordenador Pedagógico", prazo: "1 semana", recursos: "Sala de apoio, material específico" },
            { tipo: "Curto Prazo", titulo: "Plano de Estudos Personalizado", descricao: "Desenvolver plano de estudos com metas semanais e acompanhamento do rendimento.", responsavel: "Professor Orientador", prazo: "2 semanas", recursos: "Agenda escolar, aplicativo de estudos" },
            { tipo: "Médio Prazo", titulo: "Grupo de Estudos Monitorado", descricao: "Criar grupo de estudos com colegas para fortalecer aprendizado e socialização.", responsavel: "Professor da Disciplina", prazo: "3 semanas", recursos: "Espaço físico, material colaborativo" }
        ]
    },
    transporte: {
        nome: "Problemas de Transporte/Deslocamento",
        descricao: "Dificuldades no trajeto casa-escola que impactam a frequência regular",
        icone: "fas fa-bus",
        cor: "text-yellow-600",
        corBg: "bg-yellow-100",
        corBorda: "border-yellow-500",
        hex: "#D97706",
        acoes: [
            { tipo: "Imediato", titulo: "Verificação de Rota Alternativa", descricao: "Mapear rotas alternativas e horários de transporte disponíveis na região.", responsavel: "Serviço Social Escolar", prazo: "3 dias", recursos: "Mapas, horários de transporte" },
            { tipo: "Curto Prazo", titulo: "Acompanhamento de Colegas", descricao: "Organizar sistema de acompanhamento com colegas que fazem trajeto similar.", responsavel: "Coordenador de Turma", prazo: "1 semana", recursos: "Lista de endereços, autorização dos pais" },
            { tipo: "Médio Prazo", titulo: "Encaminhamento para Transporte Escolar", descricao: "Solicitar vaga no transporte escolar municipal quando disponível.", responsavel: "Direção Escolar", prazo: "2 semanas", recursos: "Formulários, documentação necessária" }
        ]
    },
    familiar: {
        nome: "Conflitos Familiares",
        descricao: "Situações familiares que interferem na frequência e desempenho escolar",
        icone: "fas fa-home",
        cor: "text-purple-600",
        corBg: "bg-purple-100",
        corBorda: "border-purple-500",
        hex: "#7C3AED",
        acoes: [
            { tipo: "Imediato", titulo: "Entrevista com Responsáveis", descricao: "Agendar reunião com família para entender situação e buscar soluções conjuntas.", responsavel: "Serviço Social/Pedagogo", prazo: "5 dias", recursos: "Sala de reuniões, formulário de entrevista" },
            { tipo: "Curto Prazo", titulo: "Apoio Psicossocial", descricao: "Encaminhar para atendimento psicológico na escola ou rede de apoio.", responsavel: "Coordenador Pedagógico", prazo: "1 semana", recursos: "Rede de apoio psicossocial" },
            { tipo: "Médio Prazo", titulo: "Plano de Acompanhamento Familiar", descricao: "Desenvolver plano com visitas domiciliares e apoio à família.", responsavel: "Serviço Social Escolar", prazo: "3 semanas", recursos: "Equipe multidisciplinar" }
        ]
    },
    saude: {
        nome: "Problemas de Saúde",
        descricao: "Questões de saúde física ou mental que impactam a frequência escolar",
        icone: "fas fa-heartbeat",
        cor: "text-green-600",
        corBg: "bg-green-100",
        corBorda: "border-green-500",
        hex: "#059669",
        acoes: [
            { tipo: "Imediato", titulo: "Avaliação da Situação de Saúde", descricao: "Verificar necessidade de adaptações ou atendimentos específicos.", responsavel: "Enfermeiro Escolar/Coordenador", prazo: "3 dias", recursos: "Ficha de saúde, contato com posto de saúde" },
            { tipo: "Curto Prazo", titulo: "Plano de Acomodações", descricao: "Implementar adaptações necessárias (horários, atividades, etc.).", responsavel: "Coordenador Pedagógico", prazo: "1 semana", recursos: "Plano de atendimento especializado" },
            { tipo: "Médio Prazo", titulo: "Monitoramento Contínuo", descricao: "Acompanhamento regular da evolução e ajustes no plano.", responsavel: "Equipe Multiprofissional", prazo: "Contínuo", recursos: "Registro de evolução, contato com profissionais de saúde" }
        ]
    },
    motivacional: {
        nome: "Desmotivação Escolar",
        descricao: "Falta de engajamento com a escola e atividades escolares",
        icone: "fas fa-brain",
        cor: "text-red-600",
        corBg: "bg-red-100",
        corBorda: "border-red-500",
        hex: "#DC2626",
        acoes: [
            { tipo: "Imediato", titulo: "Mentoria com Professor de Referência", descricao: "Estabelecer vínculo com professor que possa atuar como mentor.", responsavel: "Coordenador Pedagógico", prazo: "1 semana", recursos: "Horário específico para encontros" },
            { tipo: "Curto Prazo", titulo: "Projeto de Interesse do Aluno", descricao: "Identificar áreas de interesse e criar projeto especial relacionado.", responsavel: "Professor Orientador", prazo: "2 semanas", recursos: "Material para projeto, espaço adequado" },
            { tipo: "Médio Prazo", titulo: "Participação em Atividades Extracurriculares", descricao: "Inserir em atividades que despertem interesse e senso de pertencimento.", responsavel: "Coordenador de Projetos", prazo: "3 semanas", recursos: "Oficinas, clubes, grupos esportivos" }
        ]
    },
    multiplos: {
        nome: "Fatores Múltiplos",
        descricao: "Combinação de vários fatores que impactam a frequência",
        icone: "fas fa-layer-group",
        cor: "text-gray-600",
        corBg: "bg-gray-100",
        corBorda: "border-gray-500",
        hex: "#4B5563",
        acoes: [
            { tipo: "Imediato", titulo: "Plano Integrado de Intervenção", descricao: "Desenvolver plano que aborde os principais fatores identificados.", responsavel: "Equipe Multidisciplinar", prazo: "1 semana", recursos: "Reunião de equipe, formulário integrado" },
            { tipo: "Curto Prazo", titulo: "Acompanhamento Intensivo", descricao: "Monitoramento diário e contato frequente com família.", responsavel: "Coordenador de Turma", prazo: "2 semanas", recursos: "Registro diário, contatos telefônicos" },
            { tipo: "Médio Prazo", titulo: "Rede de Apoio Integrada", descricao: "Articular diferentes serviços (saúde, assistência social, etc.).", responsavel: "Direção Escolar", prazo: "3 semanas", recursos: "Contatos intersetoriais, reuniões integradas" }
        ]
    }
};

function determinarPerfil(dados) {
    let p = { academico: 0, transporte: 0, familiar: 0, saude: 0, motivacional: 0 };

    if (dados.frequenciaPercentual < 60) p.academico += 3;
    if (dados.frequenciaPercentual < 70) p.motivacional += 2;
    if (dados.padraoFaltas === 'especificos') p.transporte += 2;
    if (dados.padraoFaltas === 'seguidos') p.saude += 2;
    if (dados.padraoFaltas === 'aumentando') p.motivacional += 2;
    if (dados.mediaGeral < 6) p.academico += 3;
    if (dados.tendenciaNotas === 'piorando') p.academico += 2;
    if (dados.dificuldades && dados.dificuldades.length > 2) p.academico += 2;
    if (dados.transporte === 'a_pe' && dados.tempoDeslocamento > 30) p.transporte += 3;
    if (dados.transporte === 'transporte_publico' && dados.tempoDeslocamento > 45) p.transporte += 2;
    if (dados.acompanhamento === 'inexistente' || dados.acompanhamento === 'esporadico') p.familiar += 2;
    if (dados.situacaoFamiliar && dados.situacaoFamiliar !== 'estavel') p.familiar += 2;
    if (dados.fatoresRisco) {
        dados.fatoresRisco.forEach(f => {
            if (['trabalho', 'cuidado'].includes(f)) p.familiar += 1;
            if (['saude', 'mental'].includes(f)) p.saude += 2;
            if (['bullying', 'drogas'].includes(f)) p.motivacional += 2;
            if (['material', 'alimentacao'].includes(f)) p.familiar += 1;
        });
    }
    if (dados.participacao === 'isolada') p.motivacional += 2;
    if (dados.participacao === 'passiva') p.motivacional += 1;

    let maxK = 'academico', maxV = 0;
    for (const [k, v] of Object.entries(p)) {
        if (v > maxV) { maxV = v; maxK = k; }
    }
    const altos = Object.entries(p).filter(([, v]) => v >= maxV * 0.75 && v > 0);
    return { key: altos.length > 2 ? 'multiplos' : maxK, pontos: p };
}

function calcularNivelRisco(dados) {
    let pts = 0;
    if (dados.frequenciaPercentual < 50) pts += 3;
    else if (dados.frequenciaPercentual < 70) pts += 2;
    else if (dados.frequenciaPercentual < 80) pts += 1;

    if (dados.mediaGeral < 5) pts += 3;
    else if (dados.mediaGeral < 6) pts += 2;
    else if (dados.mediaGeral < 7) pts += 1;

    if (dados.fatoresRisco) pts += Math.min(dados.fatoresRisco.length, 3);
    if (dados.acompanhamento === 'inexistente') pts += 2;
    if (dados.situacaoFamiliar && dados.situacaoFamiliar !== 'estavel') pts += 1;

    if (pts >= 8) return { nivel: 'CRÍTICO', cor: 'bg-red-900', hex: '#7F1D1D', pct: 100 };
    if (pts >= 6) return { nivel: 'ALTO', cor: 'bg-red-500', hex: '#EF4444', pct: 75 };
    if (pts >= 4) return { nivel: 'MÉDIO', cor: 'bg-yellow-500', hex: '#F59E0B', pct: 50 };
    return { nivel: 'BAIXO', cor: 'bg-green-500', hex: '#10B981', pct: 25 };
}

function calcularFatores(dados) {
    return [
        { nome: 'Frequência', valor: dados.frequenciaPercentual || 0, cor: '#3B82F6' },
        { nome: 'Desempenho', valor: (dados.mediaGeral || 0) * 10, cor: '#10B981' },
        { nome: 'Transporte', valor: dados.tempoDeslocamento > 30 ? 80 : 30, cor: '#F59E0B' },
        { nome: 'Acomp. Familiar', valor: ({ intenso: 20, regular: 40, esporadico: 70, inexistente: 90 })[dados.acompanhamento] || 50, cor: '#8B5CF6' },
        { nome: 'Fatores Risco', valor: Math.min((dados.fatoresRisco?.length || 0) * 20, 100), cor: '#EF4444' }
    ];
}

// ─── Formatters ───
function formatAno(v) {
    const m = { '1anoEF':'1º EF','2anoEF':'2º EF','3anoEF':'3º EF','4anoEF':'4º EF','5anoEF':'5º EF','6anoEF':'6º EF','7anoEF':'7º EF','8anoEF':'8º EF','9anoEF':'9º EF','1anoEM':'1º EM','2anoEM':'2º EM','3anoEM':'3º EM' };
    return m[v] || v || '—';
}
function formatTurno(v) {
    return ({ manha:'Manhã', tarde:'Tarde', noite:'Noite', integral:'Integral' })[v] || v || '—';
}
function formatPadrao(v) {
    return ({ esporadico:'Esporádicas', seguidos:'Dias consecutivos', especificos:'Dias específicos', aumentando:'Progressivas' })[v] || v || '—';
}
function formatTendencia(v) {
    return ({ melhorando:'Melhorando', estavel:'Estável', piorando:'Piorando', instavel:'Oscilante' })[v] || v || '—';
}
function formatParticipacao(v) {
    return ({ ativa:'Ativa', moderada:'Moderada', passiva:'Passiva', isolada:'Isolada' })[v] || v || '—';
}
function formatTransporte(v) {
    return ({ transporte_publico:'Transporte Público', a_pe:'A pé', bicicleta:'Bicicleta', carro_familiar:'Carro Familiar', escolar:'Ônibus Escolar', outros:'Outros' })[v] || v || '—';
}
function formatAcompanhamento(v) {
    return ({ intenso:'Intenso (diário)', regular:'Regular (semanal)', esporadico:'Esporádico (mensal)', inexistente:'Inexistente' })[v] || v || '—';
}
function formatSituacao(v) {
    return ({ estavel:'Estável', separacao:'Separação/Divórcio', mudanca:'Mudança Recente', problemas_saude:'Problemas de Saúde', outros:'Outras Situações' })[v] || v || '—';
}