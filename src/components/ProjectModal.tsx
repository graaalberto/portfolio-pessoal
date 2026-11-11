import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Wrench, Layers, ExternalLink } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0e1013] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#131519]">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="uppercase font-bold tracking-wider">{project.categoryLabel}</span>
            <span>·</span>
            <span className="text-neutral-900 dark:text-white font-medium">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[82vh] overflow-y-auto">
          {/* Main Visual Image Banner */}
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-neutral-900 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                  {project.clientOrContext}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1 text-white">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* Overview & Key Results Strip */}
            <div>
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {project.fullDescription}
              </p>

              {/* Quantified Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                {project.results.map((res, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-50 dark:bg-[#131519] border border-neutral-200 dark:border-neutral-800">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-neutral-950 dark:text-white block">
                      {res.metric}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 block">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white"></span>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-950 dark:text-white font-bold">
                    O Desafio Operacional
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white"></span>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-950 dark:text-white font-bold">
                    A Solução Implementada
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 font-bold">
                Especificações de Engenharia & Arquitetura
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.engineeringDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables & Technologies */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                  Entregáveis do Projeto
                </h4>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-neutral-400">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                  Stack & Ferramentas Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#131519] flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            Projeto documentado por {project.role}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
