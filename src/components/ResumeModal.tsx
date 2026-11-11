import React from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, Award, Briefcase, GraduationCap, Wrench } from 'lucide-react';
import { CONTACT_INFO, EXPERIENCES, CERTIFICATIONS, TECHNICAL_SKILLS, PROFILE_IMAGE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0e1013] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#131519]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Curriculum Vitae Executivo
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-xs text-neutral-900 dark:text-white font-medium">Graça Alberto</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar janela"
              className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto font-sans text-neutral-800 dark:text-neutral-200">
          {/* Header with Photo */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8 mb-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                {CONTACT_INFO.name}
              </h1>
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 mt-1 font-mono">
                {CONTACT_INFO.title}
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {CONTACT_INFO.location}
                </span>
                <span>·</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1 hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  {CONTACT_INFO.phoneDisplay}
                </a>
                <span>·</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1 hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Authentic Engineering Headshot in CV */}
            <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-neutral-300 dark:border-neutral-700 shrink-0 bg-neutral-100 dark:bg-neutral-800 shadow-xs">
              <img
                src={PROFILE_IMAGE}
                alt={CONTACT_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
              Resumo Profissional
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              Técnico de Manutenção e Automação Industrial com formação em Eletromecânica e consolidada experiência em ambiente industrial contínuo na Refriango. Atuação direta no acompanhamento, diagnóstico de falhas mecânicas e elétricas, manutenção preventiva e corretiva, e aplicação prática de TPM e ferramentas de Melhoria Contínua (5S, Kaizen, Ishikawa). Complemento a capacidade técnica com o desenvolvimento de soluções digitais em Excel Avançado, Power BI, Python e SQL para optimização de processos e rastreabilidade de produção.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-neutral-950 dark:text-white" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-950 dark:text-white">
                Experiência Profissional
              </h2>
            </div>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h3 className="text-base font-black text-neutral-950 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                  {exp.company} • {exp.location}
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-neutral-950 dark:text-white" />
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-950 dark:text-white">
                  Formação Académica
                </h2>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg bg-neutral-50 dark:bg-[#121417]">
                <h3 className="text-sm font-bold text-neutral-950 dark:text-white">
                  Manutenção Industrial e Eletromecânica
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Formação Profissional Técnica Industrial • Eletromecânica & Sistemas Industriais
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-neutral-950 dark:text-white" />
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-950 dark:text-white">
                  Certificações Técnicas
                </h2>
              </div>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="border border-neutral-200 dark:border-neutral-800 p-3 rounded-lg bg-neutral-50 dark:bg-[#121417]">
                    <div className="text-xs font-bold text-neutral-950 dark:text-white">
                      {cert.title}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {cert.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Equipment & Skills Matrix */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-neutral-950 dark:text-white" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-950 dark:text-white">
                Competências & Equipamentos
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="border border-neutral-200 dark:border-neutral-800 p-3 rounded-lg">
                <span className="font-bold block text-neutral-900 dark:text-white mb-1">Linhas & Máquinas</span>
                <span className="text-neutral-600 dark:text-neutral-400">Krones, Sidel, KHS, AND&OR, Sopradoras PET, Enchedoras, Rotuladoras, Paletizadoras</span>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 p-3 rounded-lg">
                <span className="font-bold block text-neutral-900 dark:text-white mb-1">Eletromecânica & Automação</span>
                <span className="text-neutral-600 dark:text-neutral-400">Motores, Variadores VFD, Sensores indutivos/ópticos, Válvulas pneumáticas, Contactores, CIP</span>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 p-3 rounded-lg">
                <span className="font-bold block text-neutral-900 dark:text-white mb-1">Gestão & Melhoria</span>
                <span className="text-neutral-600 dark:text-neutral-400">TPM, Kaizen, 5S, Diagrama de Ishikawa, 5 Porquês, OEE, ISO 22000, HST</span>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 p-3 rounded-lg">
                <span className="font-bold block text-neutral-900 dark:text-white mb-1">Dados & Digitalização</span>
                <span className="text-neutral-600 dark:text-neutral-400">Power BI, DAX, Python, SQL, Excel Avançado (VBA), Dashboards operacionais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#131519] flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            Formato A4 • Pronto para impressão técnica
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
