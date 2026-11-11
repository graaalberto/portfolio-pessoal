import React from 'react';
import {
  FileText,
  Printer,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  Award,
  GraduationCap,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';
import { EXPERIENCES, CERTIFICATIONS, CONTACT_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resumo" className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-2">
              <span>03</span>
              <span aria-hidden="true">/</span>
              <span>Resumo Profissional & Formação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
              Resumo & Experiência
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Histórico comprovado em supervisão de turno, manutenção eletromecânica de alta velocidade e digitalização de processos industriais.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Visualizar / Imprimir CV</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-8 pb-3 border-b border-neutral-200 dark:border-neutral-800">
            Trajetória Profissional em Ambiente Fabril
          </h3>

          <div className="space-y-12">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="relative p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] transition-all hover:border-neutral-400 dark:hover:border-neutral-700"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800/80 mb-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                      Função Principal
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-neutral-950 dark:text-white mt-0.5">
                      {exp.role}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-2">
                      <span className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-white">
                        <Building className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <span className="self-start lg:self-auto text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md">
                    Setor de Bebidas & Manufatura
                  </span>
                </div>

                {/* Scope Description */}
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Concrete Deliverables & Activities */}
                <div className="mb-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                    Atividades Chave & Realizações no Chão de Fábrica
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 leading-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Tools tag strips - Zero Pill Discipline */}
                <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Equipamentos & Máquinas Operadas
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                      {exp.equipmentHandled.map((eq, i) => (
                        <React.Fragment key={i}>
                          <span>{eq}</span>
                          {i < exp.equipmentHandled.length - 1 && (
                            <span aria-hidden="true" className="text-neutral-400">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 block mb-2">
                      Ferramentas & Metodologias Aplicadas
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                      {exp.toolsUsed.map((tool, i) => (
                        <React.Fragment key={i}>
                          <span>{tool}</span>
                          {i < exp.toolsUsed.length - 1 && (
                            <span aria-hidden="true" className="text-neutral-400">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              Formação Académica
            </h3>

            <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215]">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
               Instituto Politécnico Industrial 17 De Dezembro 
              </span>
              <h4 className="text-lg font-black text-neutral-950 dark:text-white mt-1 mb-2">
                Mecâtronica
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
               Formação técnica em Mecatrónica, com conhecimentos de mecânica, eletrónica, automação e programação aplicados à instalação, operação e manutenção de máquinas e sistemas automatizados. Prepara para funções técnicas na indústria e para a continuação dos estudos em áreas de engenharia.
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-neutral-700 dark:text-neutral-300 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <span>Mecânica</span>
                <span>·</span>
                <span>Circuitos de Comando</span>
                <span>·</span>
                <span>Pneumática</span>
                <span>·</span>
                <span>Sistemas informaticos</span>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215]">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
               Liceu Eng. João Beirão 
              </span>
              <h4 className="text-lg font-black text-neutral-950 dark:text-white mt-1 mb-2">
                Ciências Fisicas e Biologicas
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Formação média com base em Matemática, Física, Química e Biologia, abrangendo o estudo dos seres vivos, da matéria, da energia e dos fenómenos naturais. Prepara para o prosseguimento de estudos superiores em áreas como saúde, engenharia, ciências, ambiente e geologia.
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-neutral-700 dark:text-neutral-300 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <span>Engenharia</span>
                <span>·</span>
                <span>Ciências</span>
                <span>·</span>
                <span>Saúde</span>
                <span>·</span>
                <span>Ambiente</span>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215]">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
                Universidade Jean Piaget de Angola
              </span>
              <h4 className="text-lg font-black text-neutral-950 dark:text-white mt-1 mb-2">
                Engenharia Eletromecânica
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                Formação superior que integra conhecimentos de engenharia mecânica e eletrotécnica, com foco em projeto, operação e manutenção de máquinas, equipamentos e sistemas industriais. Prepara para atuação em manutenção, produção, automação e gestão de projetos industriais.
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-neutral-700 dark:text-neutral-300 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <span>Máquinas e Sistemas</span>
                <span>·</span>
                <span>Eletricidade Industrial</span>
                <span>·</span>
                <span>Automação</span>
                <span>·</span>
                <span>Manutenção</span>
              </div>
            </div>
            </div>
          </div>
          

          {/* Certifications Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              Certificações & Especializações
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">
                        {cert.category}
                      </span>
                      <Award className="w-4 h-4 text-neutral-900 dark:text-white" />
                    </div>
                    <h5 className="text-sm font-bold text-neutral-950 dark:text-white mb-1.5">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
                    <span>{cert.institution}</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">Verificada</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
