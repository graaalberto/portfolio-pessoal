import { Project, ExperienceItem, CertificationItem, BlogArticle, ContactData } from '../types/portfolio';
import heroImage from '../assets/images/hero_industrial_automation_1793895995170.jpg';
import productionMapImage from '../assets/images/project_digital_production_map_1793895995376.jpg';
import dashboardImage from '../assets/images/project_powerbi_dashboard_1793895997090.jpg';
import traceabilityImage from '../assets/images/project_traceability_system_1793895996313.jpg';

export const HERO_IMAGE = heroImage;
export const PROFILE_IMAGE = `${import.meta.env.BASE_URL}assets/aistudio/IMG-20261011-WA9073_4fcad408.jpg`;

export const CONTACT_INFO: ContactData = {
  name: 'Graça Alberto',
  title: 'Técnico de Manutenção e Automação Industrial',
  location: 'Luanda, Angola',
  phone: '+244956360304',
  phoneDisplay: '+244 956 360 304',
  whatsappUrl: 'https://wa.me/244956360304',
  email: 'graca.alberto.ind@gmail.com',
  linkedin: 'https://www.linkedin.com/in/graca-alberto-ind',
  github: 'https://github.com/graaalberto',
  availability: 'Disponível para novos desafios e projetos industriais'
};

export const CORE_STATS = [
  { value: '4+', label: 'Marcas Globais de Linha', detail: 'Krones, Sidel, KHS, AND&OR' },
  { value: '85%', label: 'Redução Tempo de Reporte', detail: 'Digitalização de Mapas de Produção' },
  { value: '+14%', label: 'Disponibilidade de Equipamentos', detail: 'Implementação de TPM & Análise de Paragens' },
  { value: '100%', label: 'Rastreabilidade Operacional', detail: 'Integração de Sensores e Dados' }
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Manutenção & Eletromecânica',
    items: [
      'Manutenção Preventiva & Preditiva',
      'Manutenção Corretiva Sistemática',
      'TPM (Total Productive Maintenance)',
      'Motores Elétricos & Acionamentos',
      'Bombas Centrífugas & Positivas',
      'Válvulas Pneumáticas & Solenóides',
      'Contactores & Relés Térmicos',
      'Sistemas de Lubrificação Industrial'
    ]
  },
  {
    category: 'Automação & Instrumentação',
    items: [
      'Variadores de Frequência (VFD)',
      'Sensores Fotoelétricos, Indutivos & Capacitivos',
      'Leitores Ópticos de Código & Barreiras',
      'Atuadores Pneumáticos & Cilindros',
      'Diagnóstico de Falhas em Loop de Controlo',
      'Sistemas CIP (Clean-in-Place)',
      'Painéis de Comando & Esquemas Elétricos',
      'Instrumentação de Pressão e Temperatura'
    ]
  },
  {
    category: 'Gestão da Produção & Lean',
    items: [
      'Acompanhamento de Linhas Contínuas',
      'Cálculo e Análise de OEE',
      'Kaizen & 5S Industrial',
      'Diagrama de Ishikawa (Espinha de Peixe)',
      'Metodologia dos 5 Porquês',
      'Análise de Pareto de Falhas',
      'Norma ISO 22000 (Segurança Alimentar)',
      'Higiene e Segurança no Trabalho (HST)'
    ]
  },
  {
    category: 'Digitalização & Dados Industriais',
    items: [
      'Microsoft Power BI & DAX',
      'Excel Avançado (VBA & Modelagem)',
      'Python para Automação & Scripting',
      'SQL (Consultas, Agrupamentos e Vistas)',
      'Dashboards de Turno em Tempo Real',
      'Rastreabilidade Digital de Lotes',
      'Integração de Relatórios Operacionais'
    ]
  }
];

export const INDUSTRIAL_EQUIPMENT = [
  {
    name: 'Linhas Krones,Sidel, KHS, And&Or',
    type: 'Enchimento & Embalamento',
    description: 'Enchedoras isobáricas, rotuladoras de alta velocidade, transportadores de garrafas e empacotadoras robóticas.'
  },
  {
    name: 'Sistemas Sidel, Krones',
    type: 'Sopradora & Enchimento PET',
    description: 'Sopradoras rotativas Combi, transporte pneumático e sistemas de alimentação de pré-formas.'
  },
  {
    name: 'Equipamentos KHS',
    type: 'Processamento & Enchimento',
    description: 'Sistemas de mistura, pasteurizadores e enchedoras de latas/garrafas de grande capacidade.'
  },
  {
    name: 'Máquinas AND&OR',
    type: 'Fim de Linha & Paletização',
    description: 'Paletizadores automáticos, desencaixotadoras, encartonadoras, aplicadora de pegas e transportadores de caixas, garrafas e paletes.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'mapa-producao',
    title: 'Digitalização do Mapa de Produção',
    shortDescription: 'Substituição de registos manuais por sistema digital com interface rápida para supervisores e operadores de chão de fábrica.',
    fullDescription: 'Projeto concebido e desenvolvido para eliminar as fragilidades dos boletins físicos de turno. A solução centraliza o registo de saídas de produto acabado, perdas por equipamento, paragens não planeadas e trocas de formato, gerando ficheiros estruturados e prontos para alimentar a tomada de decisão da chefia de produção.',
    category: 'digitalizacao',
    categoryLabel: 'Digitalização Industrial',
    year: '2024 - 2025',
    image: productionMapImage,
    clientOrContext: 'Refriango • Luanda, Angola',
    role: 'Líder do Projeto & Desenvolvedor de Solução',
    challenge: 'O fecho de turno manual demorava cerca de 15 minutos por linha, com frequentes inconsistências na contagem de caixas, dificuldade de auditoria histórica e perdas de dados operacionais essenciais para a manutenção preditiva.',
    solution: 'Desenvolvimento de uma ferramenta ágil com formulários padronizados, validação de intervalos numéricos em tempo real, cálculo automático de perdas e exportação direta de dados limpos para a base relacional de produção.',
    engineeringDetails: [
      'Validação de dados na fonte para evitar registo de números de lote ou horas inválidas',
      'Arquitetura de dados orientada a turnos com cálculo instantâneo de eficiência horária',
      'Estrutura modular para integração com o dashboard central de engenharia',
      'Suporte para operação offline temporária em terminais do chão de fábrica'
    ],
    results: [
      { metric: '85%', label: 'Redução no tempo de fecho e reporte de turno' },
      { metric: '0%', label: 'Erros de transcrição e perda de histórico' },
      { metric: '100%', label: 'Visibilidade para coordenação em tempo real' }
    ],
    technologies: ['Excel Avançado', 'Python', 'SQL', 'Lógica de Produção Contínua'],
    deliverables: [
      'Aplicação de registo digital com interface para operadores de linha',
      'Manual de procedimentos operacionais e formação da equipa',
      'Pipeline de exportação e consolidação automática de turnos'
    ]
  },
  {
    id: 'dashboard-producao',
    title: 'Dashboard de Produção & KPI Industrial',
    shortDescription: 'Painel analítico integrado em Power BI para monitorização de OEE, disponibilidade de linhas e estratificação de paragens.',
    fullDescription: 'Painel interativo de gestão visual e de engenharia de manutenção concebido para apoiar reuniões diárias de melhoria contínua (DOR). O dashboard apresenta o OEE (Overall Equipment Effectiveness) decomposto em Disponibilidade, Performance e Qualidade, permitindo identificar com precisão o impacto de micro-paragens por máquina.',
    category: 'digitalizacao',
    categoryLabel: 'Business Intelligence & KPIs',
    year: '2024',
    image: dashboardImage,
    clientOrContext: 'Ambiente de Manufatura de Bebidas • Luanda',
    role: 'Arquiteto de Dados Industriais & Especialista Técnico',
    challenge: 'As chefias e equipas de manutenção necessitavam de cruzar rapidamente informações de falhas eletromecânicas com quebras de rendimento das linhas, mas os relatórios estavam dispersos em folhas soltas sem relação causal.',
    solution: 'Construção de um modelo estrela (Star Schema) relacionando tabela de factos de produção com dimensões de Equipamento, Turno, Operador e Causa de Paragem. Criação de medidas DAX para OEE, MTTR (Mean Time to Repair) e MTBF (Mean Time Between Failures).',
    engineeringDetails: [
      'Modelagem relacional de tabelas de factos e dimensões industriais',
      'Medidas analíticas dinâmicas com DAX para cálculo de disponibilidade real',
      'Gráficos de Pareto automáticos das causas principais de paragem',
      'Visualização adaptada para telas de chão de fábrica e reuniões de supervisão'
    ],
    results: [
      { metric: '+14%', label: 'Aumento na disponibilidade operacional em 6 meses' },
      { metric: '30 min', label: 'Economizados diariamente nas reuniões de produção' },
      { metric: '12+', label: 'Linhas e subsistemas monitorizados centralizadamente' }
    ],
    technologies: ['Power BI', 'DAX', 'SQL', 'Metodologias TPM / OEE'],
    deliverables: [
      'Dashboard executivo e tático em Power BI',
      'Dicionário de dados e regras de cálculo de indicadores de manutenção',
      'Módulo de análise de Pareto para reuniões de Kaizen'
    ]
  },
  {
    id: 'rastreabilidade-lotes',
    title: 'Sistema de Rastreabilidade de Lotes',
    shortDescription: 'Ferramenta para consulta ágil de lotes, insumos e histórico de produção alinhada com normas de qualidade ISO 22000.',
    fullDescription: 'Sistema desenhado para responder à exigência crítica de rastreabilidade na indústria alimentar e de bebidas. Permite mapear instantaneamente qual a matéria-prima utilizada, as pré-formas de sopro, os parâmetros de enchimento e os técnicos responsáveis por cada lote expedido.',
    category: 'processos',
    categoryLabel: 'Qualidade & Rastreabilidade',
    year: '2023 - 2024',
    image: traceabilityImage,
    clientOrContext: 'Controlo de Qualidade & Processos • Refriango',
    role: 'Técnico Especialista em Processos e Rastreabilidade',
    challenge: 'Auditorias internas e verificações de qualidade exigiam consultar múltiplos livros de registo físico para rastrear a cadeia produtiva de uma garrafa ou palete específica, consumindo tempo precioso em situações de não-conformidade.',
    solution: 'Criação de um motor de busca indexado por lote e data com verificação cruzada de dados de sopradora (Sidel), enchedora (Krones/KHS) e paletizadora (AND&OR), garantindo rastreabilidade upstream e downstream.',
    engineeringDetails: [
      'Mapeamento lógico da cadeia produtiva: Matéria-Prima -> Sopro -> Enchimento -> Embalagem -> Palete',
      'Integração com sensores de barreira e verificadores ópticos de código de barras / data de validade',
      'Geração de relatórios de conformidade imediatos com carimbo de data e hora',
      'Estrutura em conformidade com os requisitos de auditoria ISO 22000 e HACCP'
    ],
    results: [
      { metric: '< 10s', label: 'Tempo médio de resposta para rastreio completo de lote' },
      { metric: '100%', label: 'Conformidade em auditorias de qualidade' },
      { metric: 'Zero', label: 'Lotes com perda de histórico de fabrico' }
    ],
    technologies: ['Python', 'SQL', 'Sensores Ópticos', 'Norma ISO 22000'],
    deliverables: [
      'Módulo de consulta rápida de lote e auditoria',
      'Relatório padronizado de não-conformidades e rastreio reverso',
      'Matriz de compatibilidade de insumos'
    ]
  },
  {
    id: 'calendario-turnos',
    title: 'Calendário Digital de Turnos & Escalas',
    shortDescription: 'Aplicação para gestão e planeamento ágil de turnos, folgas e escalas técnicas de manutenção 24/7.',
    fullDescription: 'Solução concebida para simplificar a gestão de equipas que operam em regime de turnos rotativos contínuos (Turno A, B, C, D). A ferramenta elimina sobreposições indevidas, calcula automaticamente o saldo de horas de trabalho e assegura a cobertura de operadores técnicos especialistas em todas as linhas críticas.',
    category: 'processos',
    categoryLabel: 'Gestão Operacional',
    year: '2023',
    image: HERO_IMAGE,
    clientOrContext: 'Operações Industriais & Recursos Técnicos',
    role: 'Sub-Supervisor de Produção',
    challenge: 'Alterações de última hora em escalas manuais geravam dúvidas nas equipas, conflitos de marcação de folgas e risco de linhas complexas ficarem sem técnico qualificado em variadores ou sistemas de embalamento.',
    solution: 'Desenvolvimento de um calendário inteligente com código de cores por turno, verificação automática de compatibilidade de competências da equipa em cada escala e visualização móvel para os colaboradores.',
    engineeringDetails: [
      'Algoritmo de rotação de 4 turnos contínuos com validação de descanso obrigatório',
      'Matriz de competências técnicas acoplada à escala (garantia de perfil eletromecânico por turno)',
      'Acesso rápido em smartphones para consulta imediata pelos colaboradores',
      'Registo de presenças e substituições com histórico auditável'
    ],
    results: [
      { metric: '100%', label: 'Cobertura técnica garantida em todos os turnos' },
      { metric: '90%', label: 'Redução de conflitos de escala e pedidos de troca manual' },
      { metric: 'Instantâneo', label: 'Acesso às escalas por toda a equipa de produção' }
    ],
    technologies: ['Interface Responsiva', 'Python', 'Excel VBA', 'Gestão Lean de Pessoas'],
    deliverables: [
      'Plataforma interativa de escalas de turno',
      'Matriz de competências por posto de trabalho na linha',
      'Guia de utilização e transferência de conhecimento para supervisores'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'refriango',
    role: 'Sub-Supervisor de Produção | 2023 - 2026',
    company: 'Refriango Indústria',
    location: 'Luanda, Angola',
    period: 'Experiência Consolidada no Setor de Bebidas & Manufatura',
    isCurrent: true,
    description: 'Atuação na liderança operacional de linhas fabril, para alcançe das metas(OEE), resultados(KPI) e no apoio técnico direto de manutenção, automação, melhoria contínua, Qualidade e Dados.',
    highlights: [
      'Acompanhamento, Treinamento e coordenação da operação de linhas contínuas de alta capacidade (Krones, Sidel, KHS, AND&OR).',
      'Supervisão técnica de equipas de turno, distribuição de postos e monitorização de indicadores(OEE,KPI) de qualidade, perdas e rendimento.',
      'Execução e apoio em manutenções preventivas, corretivas e programas de TPM (Manutenção Produtiva Total).',
      'Diagnóstico metódico de anomalias elétricas, mecânicas, pneumáticas e em malhas de controlo/automação.',
      'Intervenção técnica em motores elétricos, variadores de frequência (VFDs), sensores ópticos/indutivos, válvulas e contactores.',
      'Aplicação diária de ferramentas de melhoria contínua: 5S, Kaizen, Ishikawa (Espinha de Peixe) e análise de 5 Porquês.',
      'Criação de ferramentas digitais internas (Power BI, Python, Excel avançado) para registos operacionais e rastreabilidade.'
    ],
    equipmentHandled: [
      'Linhas Krones (Soprador, Enchimento, Rotulagem, Embalador e Paletizador)',
      'Sidel Combi PET (Soprador, Enchimento, Rotulagem)',
      'linhas KHS (Enchimento, Embaladora, Paletizadora, Transportadores)',
      'AND&OR (Paletizadoras, Envolvedoras, Transportadores e Encartonadoras)',
      'Sistemas Mega CIP Limpeza Automatizados',
      'Robôs Industriais',
      'DOMINO Codificadoras (Tinta e a leizer)',
      'Etiquetadoras',
    ],
    toolsUsed: [
      'Power BI',
      'Python',
      'SQL',
      'Excel Avançado',
      'Metodologia TPM',
      'Kaizen & 5S',
      'ISO 22000'
    ]
  },
  {
    id: 'refriango',
    role: 'Operador Especialista Enchimento | 2023',
    company: 'Refriango Indústria',
    location: 'Luanda, Angola',
    period: 'Experiência Consolidada no Setor de Bebidas & Manufatura',
    isCurrent: true,
    description: 'Atuação no apoio geral operacional de todas linhas fabril e apoio técnico direto à manutenção e melhoria contínua.',
    highlights: [
      'Apoio geral na operação de linhas contínuas de alta capacidade (Krones, Sidel, KHS, AND&OR).',
      'Monitorização de indicadores (KPI), refugos e rendimentos.',
      'Execução e apoio em manutenções preventivas, corretivas e de ocasião.',
      'Diagnóstico de anomalias elétricas, mecânicas, pneumáticas e de controlo/automação.',
      'Intervenção técnica em variadores de frequência (VFDs), sensores ópticos/indutivos, válvulas, Disjuntor motores, contactores, Engrenagens, rolamentos e sistemas de transmição...',
      'Aplicação diária de ferramentas de melhoria contínua: 5S, Kaizen e análise de 5 Porquês.',
      'Criação de ferramentas digitais internas (Python, SQL, Excel avançado) para registos, relatorios operacionais e rastreabilidade.'
    ],
    equipmentHandled: [
      'Linhas Krones (Enchimento & Rotulagem)',
      'Transportadores',
      'Sopradoras Sidel PET',
      'Sistemas KHS de Processo',
      'Paletizadoras e Encartonadoras AND&OR',
      'Sistemas Mega CIP Automatizados'
    ],
    toolsUsed: [
      'Python',
      'SQL',
      'Excel Avançado',
      'Metodologia TPM',
      'Kaizen & 5S',
      'ISO 22000'
    ]
  },
  {
    id: 'refriango',
    role: 'Operador Enchimento de Bebidas | 2022 - 2023',
    company: 'Refriango Indústria',
    location: 'Luanda, Angola',
    period: 'Experiência Consolidada no Setor de Bebidas & Manufatura',
    isCurrent: true,
    description: 'Atuação na operação de linhas fabril de alta velocidade.',
    highlights: [
      'Operação Fabril de linhas contínuas de alta capacidade (Krones, Sidel, KHS, AND&OR).',
      'Apoio em manutenções preventivas, corretivas e programas de TPM (Manutenção Produtiva Total).',
      'Aplicação diária de ferramentas de melhoria contínua: 5S, Kaizen',
      'Criação de ferramentas digitais internas (Mobile App, Excel avançado) para registros e relatorios da Produção.'
    ],
    equipmentHandled: [
      'Linhas Krones (Enchimento & Rotulagem)',
      'Sopradoras Sidel Combi PET',
      'Sistemas KHS de Processo',
      'Paletizadoras e Encartonadoras AND&OR'
    ],
    toolsUsed: [
      'Fsharp',
      'Excel Avançado',
      'TPM',
      'Kaizen & 5S'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-eletromecanica',
    title: 'Manutenção Industrial e Eletromecânica',
    institution: 'Formação Profissional Técnica Industrial',
    year: 'Certificação Técnica',
    category: 'Eletromecânica',
    description: 'Formação aprofundada em sistemas elétricos industriais, quadros de força e comando, circuitos pneumáticos e hidráulicos, máquinas elétricas e procedimentos de segurança.',
    skills: ['Eletromecânica', 'Manutenção Industrial', 'Motores Elétricos', 'Comandos Elétricos', 'Pneumática Industrial']
  },
  {
    id: 'cert-powerbi',
    title: 'Microsoft Power BI para Engenharia e Produção',
    institution: 'Certificação Especializada em Dados',
    year: 'Certificação Avançada',
    category: 'Dados & BI',
    description: 'Modelação de dados industriais, fórmulas DAX avançadas, criação de pipelines de dados e desenvolvimento de dashboards de alta performance.',
    skills: ['Power BI', 'DAX', 'ETL', 'Dashboards Industriais', 'Indicadores de Performance']
  },
  {
    id: 'cert-python',
    title: 'Python para Automação e Análise de Dados',
    institution: 'Desenvolvimento e Scripting Técnico',
    year: 'Certificação Prática',
    category: 'Programação',
    description: 'Automação de rotinas repetitivas, tratamento de ficheiros de telemetria, scripts para rastreabilidade e análise estatística de paragens.',
    skills: ['Python', 'Pandas', 'Automação de Ficheiros', 'Scripting Industrial']
  },
  {
    id: 'cert-excel',
    title: 'Excel Avançado & Modelagem Operacional',
    institution: 'Formação Avançada em Ferramentas de Gestão',
    year: 'Certificação Profissional',
    category: 'Gestão Operacional',
    description: 'Tabelas dinâmicas complexas, funções matriciais, macros/VBA para automação de mapas de produção e controlo de perdas em chão de fábrica.',
    skills: ['Excel Avançado', 'Macros & VBA', 'Análise de KPI', 'Modelos Operacionais']
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'reducao-microparagens-krones',
    title: 'Otimização de Linhas de Alta Velocidade: Redução Sistemática de Micro-Paragens',
    slug: 'reducao-microparagens-krones',
    date: '14 de Outubro de 2024',
    readTime: '6 min de leitura',
    category: 'Manutenção Industrial',
    summary: 'Como uma abordagem baseada em TPM e análise de perdas menores em sensores e transportadores aumentou a fiabilidade em linhas Krones e Sidel.',
    tags: ['TPM', 'Krones', 'Sidel', 'Fiabilidade'],
    content: [
      'Na indústria de bebidas e embalamento de alta cadência, o maior inimigo da produtividade raramente são as grandes avarias catastróficas. O verdadeiro "ladrão silencioso" de eficiência são as micro-paragens: interrupções de 15 a 45 segundos causadas por desalinhamento de garrafas, reflexo espúrio em sensores fotoelétricos ou fricção excessiva nas esteiras de transporte.',
      'Durante a minha atuação operacional, aplicámos uma metodologia rigorosa de três etapas para atacar esse problema na raiz:',
      '1. Estratificação de Paragens com Cronometragem Real: Deixámos de aceitar notas genéricas como "paragem de esteira". Cada interrupção passou a ser associada ao código do sensor específico ou fotocélula de bloqueio.',
      '2. Manutenção Autônoma (Pilar do TPM): Capacitámos os operadores para limpezas de precisão nos espelhos prismáticos e ajustes mecânicos de guias de transporte antes que a acumulação de pó ou condensação cause falsos disparos.',
      '3. Ajuste Fino dos Variadores de Frequência: Suavizámos as curvas de aceleração e desaceleração (ramp-up/ramp-down) dos motores de transporte para evitar o choque brusco entre embalagens nas entradas da rotuladora.',
      'O resultado prático foi um ganho de estabilidade contínua que transformou turnos com centenas de pequenas paragens em linhas fluidas com OEE superior.'
    ],
    keyTakeaways: [
      'Micro-paragens acumuladas representam frequentemente até 20% do tempo perdido de um turno.',
      'Sensores limpos e guias mecânicas alinhadas reduzem 60% dos disparos falsos.',
      'O pilar de Manutenção Autônoma do TPM liberta a equipa técnica para tarefas preditivas de alto valor.'
    ]
  },
  {
    id: 'digitalizacao-mapa-producao',
    title: 'Da Prancheta ao Power BI: A Jornada de Digitalização do Chão de Fábrica',
    slug: 'digitalizacao-mapa-producao',
    date: '28 de Novembro de 2024',
    readTime: '5 min de leitura',
    category: 'Digitalização Industrial',
    summary: 'A experiência prática de desenhar ferramentas digitais que operadores realmente utilizam sem resistência na linha de produção.',
    tags: ['Power BI', 'Digitalização', 'Excel Avançado', 'Gestão Visual'],
    content: [
      'Muitos projetos de software industrial falham não pela tecnologia, mas porque os designers de sistemas não passam um turno inteiro com luvas de proteção em frente a uma máquina barulhenta.',
      'Quando decidi digitalizar o Mapa de Produção, a primeira diretriz foi a ergonomia de inserção: campos grandes, validação automática de erros óbvios (como somas impossíveis de caixas ou tempos sobrepostos) e resposta instantânea.',
      'Em vez de depender de servidores externos lentos, utilizámos scripts em Python e estruturas relacionais locais para sincronizar dados dos turnos com modelos em Power BI atualizados periodicamente.',
      'A gestão visual resultante permitiu que a liderança de produção entrasse nas reuniões diárias já sabendo exatamente qual o equipamento que teve mais paragens e qual o operador que alcançou os melhores índices de qualidade.'
    ],
    keyTakeaways: [
      'Softwares para chão de fábrica devem ser concebidos para velocidade de clique e com poucos passos.',
      'A validação de dados no momento da inserção elimina 99% das inconsistências que corrompem relatórios.',
      'Dashboards só têm valor se levarem a uma ação corretiva imediata na reunião do turno seguinte.'
    ]
  },
  {
    id: 'diagnostico-vfd-sensores',
    title: 'Diagnóstico Metódico em Variadores de Frequência e Sensores Industriais',
    slug: 'diagnostico-vfd-sensores',
    date: '18 de Janeiro de 2025',
    readTime: '7 min de leitura',
    category: 'Automação & Elétrica',
    summary: 'Um roteiro prático para identificar falhas comuns de sobrecorrente, ruído eletromagnético e desalinhamento de instrumentos industriais.',
    tags: ['Variadores', 'Sensores', 'Eletromecânica', 'Diagnóstico'],
    content: [
      'Quando uma máquina para inesperadamente com um erro num variador de frequência (VFD), a pressão por reiniciar a linha pode levar a diagnósticos precipitados. No entanto, trocar um equipamento sem entender a causa-raiz geralmente resulta na queima do substituto horas depois.',
      'No meu dia a dia, sigo um protocolo estruturado:',
      '1. Inspeção de Histórico de Falhas: Códigos como F0001 (Sobrecorrente) ou F0002 (Sobretensão) apontam caminhos distintos. Sobretensão em desaceleração quase sempre indica resistência de travagem defeituosa ou tempos de rampa demasiado curtos.',
      '2. Isolamento Térmico e Ventilação: Em ambientes tropicais ou de produção intensiva como Luanda, a acumulação de pó nos dissipadores e a falha de ventoinhas internas do VFD causam desarmes por sobreaquecimento silencioso.',
      '3. Interferência Eletromagnética (EMI) em Sensores: Cabos de instrumentação que correm paralelos aos cabos de potência dos motores sem blindagem aterrada induzem ruído que simula sinais espúrios nos autómatos.',
      'A aplicação deste método permitiu diminuir significativamente o MTTR (tempo médio de reparação) das nossas intervenções elétricas.'
    ],
    keyTakeaways: [
      'Nunca faça "reset" cego num inversor de frequência sem verificar o código do histórico de alarmes.',
      'Aterramento correto da blindagem em apenas um ponto evita laços de corrente e ruído de indução.',
      'A limpeza preventiva de ventiladores e filtros de painel evita 40% das falhas por temperatura.'
    ]
  },
  {
    id: 'tpm-kaizen-na-pratica',
    title: 'TPM e Kaizen na Prática: Como Envolver a Equipa no Cuidado com os Equipamentos',
    slug: 'tpm-kaizen-na-pratica',
    date: '02 de Março de 2025',
    readTime: '6 min de leitura',
    category: 'Melhoria Contínua',
    summary: 'Transformando 5S e 5 Porquês em hábitos diários no chão de fábrica em vez de simples slogans de parede.',
    tags: ['TPM', 'Kaizen', '5S', 'Ishikawa'],
    content: [
      'Em muitas unidades fabris, o 5S é visto erroneamente como "dia de faxina" e o Kaizen como uma burocracia de preenchimento de fichas. No entanto, quando aplicados por quem opera e conserta as máquinas, eles são a base da excelência operacional.',
      'No nosso departamento, associámos o 5S à identificação imediata de anomalias: uma área de enchimento limpa e pintada permite ver no primeiro segundo uma fuga de óleo num redutor ou uma gota de lubrificante onde não devia estar.',
      'Nas reuniões de análise de falhas, o diagrama de Ishikawa e os 5 Porquês deixaram de ser teóricos. Quando uma correia partiu, perguntámos:',
      '- Porquê? O rolamento travou.',
      '- Porquê? Falta de graxa.',
      '- Porquê? O ponto de lubrificação estava obstruído por sujidade.',
      '- Porquê? Não havia tampão de proteção nem rota semanal de limpeza desse bloco.',
      '- Porquê? A ficha de lubrificação não incluía aquele mancal secundário.',
      'A ação corretiva não foi apenas substituir o rolamento, mas sim atualizar o plano de manutenção preventiva e proteger o niple de graxa. É essa mentalidade que constrói fiabilidade a longo prazo.'
    ],
    keyTakeaways: [
      'Limpeza é inspeção: a principal função do 5S é tornar os desvios imediatamente visíveis.',
      'O 5 Porquês só termina quando se encontra uma falha no sistema ou no procedimento, não na pessoa.',
      'A manutenção preventiva mais barata é a manutenção autônoma executada diariamente pelo operador.'
    ]
  }
];

export const CAREER_GOALS = [
  'Técnico de Manutenção Industrial',
  'Técnico de Automação Industrial',
  'Técnico de Processos Industriais',
  'Produção Industrial',
  'Supervisor de Produção',
  'Lean Manufacturing',
  'TPM & Melhoria Contínua',
  'PCM (Controlo e Planejamento de Manutenção)'
];
