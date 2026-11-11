import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, BarChart3, Clock, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'digitalizacao') return p.category === 'digitalizacao';
    if (filter === 'processos') return p.category === 'processos';
    return true;
  });

  return (
    <section id="projetos" className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-2">
              <span>04</span>
              <span aria-hidden="true">/</span>
              <span>Engenharia & Soluções Aplicadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
              Projetos & Inovação no Chão de Fábrica
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Sistemas desenvolvidos para resolver estrangulamentos operacionais reais, com foco em medição rigorosa e aumento de eficiência.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-2xs font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Todos ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('digitalizacao')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'digitalizacao'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-2xs font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Digitalização
            </button>
            <button
              onClick={() => setFilter('processos')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                filter === 'processos'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-2xs font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              Processos & Qualidade
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && filter === 'all';
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Media Container */}
                  <div className={`relative w-full overflow-hidden bg-neutral-900 ${isFeatured ? 'aspect-16/9 sm:aspect-21/9' : 'aspect-16/10'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                      <div className="text-white w-full flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 mb-1">
                            <span>{project.categoryLabel}</span>
                            <span>·</span>
                            <span>{project.year}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                            {project.title}
                          </h3>
                        </div>

                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-neutral-950 transition-all shrink-0 ml-4">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Results Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 mb-6">
                      {project.results.slice(0, isFeatured ? 3 : 2).map((res, i) => (
                        <div key={i}>
                          <span className="text-lg font-black font-mono text-neutral-950 dark:text-white block">
                            {res.metric}
                          </span>
                          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block mt-0.5 leading-tight">
                            {res.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Technologies */}
                <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <React.Fragment key={i}>
                        <span className="text-neutral-800 dark:text-neutral-200 font-medium">{tech}</span>
                        {i < Math.min(project.technologies.length, 3) - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 dark:text-white group-hover:underline flex items-center gap-1">
                    <span>Estudo de Caso</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
