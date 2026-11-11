import React, { useState } from 'react';
import {
  Wrench,
  Cpu,
  Layers,
  Database,
  CheckCircle,
  Activity,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import {
  TECHNICAL_SKILLS,
  INDUSTRIAL_EQUIPMENT,
  CAREER_GOALS,
  PROFILE_IMAGE
} from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      title: 'Manutenção & Electromêcanica ',
      icon: Wrench,
      description:
        'PCM, Intervenção preventiva, preditiva, corretiva sistemática em motores, Engrenagens, válvulas, rolamentos, cilindros, e rotinas de lubrificação sob metodologia TPM.'
    },
    {
      title: 'Automação & Instrumentação',
      icon: Cpu,
      description:
        'Parametrização de variadores de frequência (VFDs), calibração de sensores ópticos e indutivos, análise de loops de controlo e apoio à resolução de falhas em autómatos e PLC.'
    },
    {
      title: 'Processos & Melhoria Contínua',
      icon: Layers,
      description:
        'Maximização de OEE, redução de micro-paragens, condução de análises de causa raiz (Ishikawa e 5 Porquês), 5S diário e conformidade rigorosa com a norma ISO 22000.'
    },
    {
      title: 'Digitalização & Inteligência Industrial',
      icon: Database,
      description:
        'Desenvolvimento de ferramentas práticas para operadores: dashboards em Power BI, pipelines em Python, automação de mapas de produção e rastreabilidade total de lotes.'
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-2">
            <span>02</span>
            <span aria-hidden="true">/</span>
            <span>Perfil Técnico & Metodologia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
            Sobre & Filosofia de Engenharia
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A convergência entre a intervenção física no chão de fábrica e a análise metódica de dados operacionais.
          </p>
        </div>

        {/* Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-7 space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
            {/* Operational Identification Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-[#121316]">
              <div className="w-16 h-20 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700 shrink-0 bg-neutral-200 dark:bg-neutral-800 shadow-2xs">
                <img
                  src={PROFILE_IMAGE}
                  alt="Graça Alberto em ambiente industrial"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400 block">
                  Identificação Técnica • Chão de Fábrica
                </span>
                <h3 className="text-base font-black uppercase text-neutral-950 dark:text-white">
                  Graça Alberto
                </h3>
                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-0.5">
                  Técnico Eletromecânico • Luanda, Angola
                </p>
                <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>EPIs Normativos: Capacete, Óculos e Proteção Auditiva</span>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium text-neutral-900 dark:text-white">
              Acredito que a excelência operacional de uma fábrica é alcançada quando a mecânica de precisão, a automação estável e a disciplina de manutenção trabalham em perfeita sintonia.
            </p>
            <p>
              Ao longo do meu percurso em ambiente industrial contínuo na <strong>Refriango</strong> (uma das maiores referências do setor de bebidas e manufatura em Angola), liderei o acompanhamento operacional de linhas de engarrafamento de altíssima velocidade, atuando diretamente no diagnóstico rápido de anomalias mecânicas, elétricas e pneumáticas de modo reduzir o tempo de paragem.
            </p>
            <p>
              O contacto diário com fabricantes líderes mundiais — como <strong>Krones, Sidel, KHS e AND&OR</strong> — consolidou o meu domínio prático em sistemas complexos: sopradoras rotativas PET, enchedoras asséticas, rotuladoras de precisão, empacotadoras robóticas e sistemas de paletização fim de linha.
            </p>
            <p>
              Para além da intervenção direta nos componentes (motores, redutores, atuadores e inversores de frequência), identifiquei cedo o poder da tecnologia para transformar o chão de fábrica. Por isso, utilizo <strong>Excel avançado, Power BI, Python e SQL</strong> para criar soluções ágeis que eliminam a prancheta de papel e entregam relatórios confiáveis para a tomada de decisão da liderança.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neutral-900 dark:text-white" />
                <span>Normas ISO 22000 & HACCP</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-neutral-900 dark:text-white" />
                <span>Segurança no Trabalho (HST)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-neutral-900 dark:text-white" />
                <span>Metodologias Lean & 5S</span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316] transition-all hover:border-neutral-400 dark:hover:border-neutral-700 shadow-2xs"
                >
                  <Icon className="w-5 h-5 text-neutral-900 dark:text-white mb-3" />
                  <h3 className="text-sm font-bold text-neutral-950 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Domain Matrix: Equipment & Skills */}
        <div className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Matriz Operacional
              </span>
              <h3 className="text-2xl font-black text-neutral-950 dark:text-white uppercase mt-1">
                Equipamentos & Competências Técnicas
              </h3>
            </div>

            {/* Interactive Tab Switcher for technical categories */}
            <div className="flex flex-wrap gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              {TECHNICAL_SKILLS.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === idx
                      ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-2xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {cat.category.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Skills Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {TECHNICAL_SKILLS[activeTab].items.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] flex items-center justify-between"
              >
                <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                  {skill}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0 ml-2" />
              </div>
            ))}
          </div>

          {/* Industrial Equipment Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Equipamentos de Produção Contínua Dominados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INDUSTRIAL_EQUIPMENT.map((eq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#121316]/50"
                >
                  <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">
                    {eq.type}
                  </span>
                  <h5 className="text-base font-black text-neutral-950 dark:text-white mt-1 mb-2">
                    {eq.name}
                  </h5>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {eq.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Objectives / Áreas de Interesse */}
          <div className="mt-12 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316]">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
              Áreas de Atuação & Especialização
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              {CAREER_GOALS.map((goal, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white"></span>
                  <span>{goal}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
