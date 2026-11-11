import React from 'react';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'sobre', label: 'SOBRE' },
    { id: 'resumo', label: 'RESUMO' },
    { id: 'projetos', label: 'PROJETOS' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0d0e] text-neutral-600 dark:text-neutral-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <span className="text-xl font-black uppercase tracking-tight text-neutral-950 dark:text-white block">
              {CONTACT_INFO.name}
            </span>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1">
              Técnico de Manutenção e Automação Industrial • Luanda, Angola
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-500">
          <p>© 2026 Graça Alberto. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Eletromecânica</span>
            <span>·</span>
            <span>TPM & Kaizen</span>
            <span>·</span>
            <span>Linhas de Alta Cadência</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
