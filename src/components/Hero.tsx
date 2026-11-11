import React, { useState } from 'react';
import { ArrowRight, FileText, MessageSquare, Cpu, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, CORE_STATS, HERO_IMAGE, PROFILE_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onNavigateToProjects: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToProjects,
  onOpenResumeModal
}) => {
  const [heroView, setHeroView] = useState<'profile' | 'facility'>('profile');
  return (
    <section className="relative pt-6 pb-16 sm:pb-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Powerhouse */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-4">
              <span>01</span>
              <span aria-hidden="true">/</span>
              <span>Engenharia & Automação Industrial</span>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-900 dark:text-white font-semibold">Luanda, Angola</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-6 text-balance">
              Alta fiabilidade em linhas contínuas & automação de processos.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 max-w-2xl">
              Sou <strong className="text-neutral-950 dark:text-white font-semibold">Graça Alberto</strong>,
              Técnico de Manutenção e Automação Industrial com sólida experiência prática na
              operação, diagnóstico e melhoria de linhas industriais de engarrafamento e embalamento
              (Krones, Sidel, KHS, AND&OR).
              Uno a Manutenção Industrial à PCM e Dados.
            </p>

            {/* Zero-Pill Unboxed Metadata strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-8 border-y border-neutral-200 dark:border-neutral-800 py-3">
              <span className="text-neutral-950 dark:text-neutral-200 font-medium">Eletromecânica & Mecânica Industrial</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-950 dark:text-neutral-200 font-medium">Automação Industrial</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-950 dark:text-neutral-200 font-medium">Processos Industrial</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-950 dark:text-neutral-200 font-medium">Melhoria Continua</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-950 dark:text-neutral-200 font-medium">Power BI & Excel & SQL & Python</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-950 dark:text-neutral-200 font-medium">ISO 22000</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-sm"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider uppercase border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Currículo Completo</span>
              </button>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider uppercase text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 rounded-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Right Column: Industrial Frame with User Photo & Facility View Toggle */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-md">
              {/* Media Container with View Toggle */}
              <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden relative bg-neutral-950">
                <img
                  src={heroView === 'profile' ? PROFILE_IMAGE : HERO_IMAGE}
                  alt={heroView === 'profile' ? 'Graça Alberto - Técnico de Manutenção e Automação Industrial' : 'Linha automatizada de envase e embalamento industrial'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top contrast-105 transition-all duration-500"
                />

                {/* View Switcher Controls in photo corner */}
                <div className="absolute top-3 right-3 flex items-center gap-1 p-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
                  <button
                    onClick={() => setHeroView('profile')}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                      heroView === 'profile'
                        ? 'bg-white text-neutral-950 font-bold shadow-xs'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Técnico
                  </button>
                  <button
                    onClick={() => setHeroView('facility')}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                      heroView === 'facility'
                        ? 'bg-white text-neutral-950 font-bold shadow-xs'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Linha Fabril
                  </button>
                </div>
              </div>

              {/* Technical Caption Box */}
              <div className="p-4 bg-white/95 dark:bg-[#121316]/95 backdrop-blur-xs border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-1">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                    <span>{heroView === 'profile' ? 'PERFIL OPERACIONAL • GRAÇA ALBERTO' : 'CHÃO DE FÁBRICA • AUTOMAÇÃO DE ALTA CADÊNCIA'}</span>
                  </div>
                  <span className="font-semibold text-neutral-900 dark:text-white">LUANDA / AO</span>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300">
                  {heroView === 'profile'
                    ? 'Técnico de Manutenção e Automação Industrial em regime fabril com EPI normativo de eletromecânica.'
                    : 'Enchimento assético, rotulagem de precisão, controlo eletromecânico e robótica de paletização.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip below the split */}
        <div className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {CORE_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950 dark:text-white font-mono tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
