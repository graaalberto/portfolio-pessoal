import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, PROFILE_IMAGE } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenResumeModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'sobre', label: 'SOBRE' },
    { id: 'resumo', label: 'RESUMO' },
    { id: 'projetos', label: 'PROJETOS' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0c0d0e]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-xs'
          : 'bg-white/60 dark:bg-[#0c0d0e]/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand with Photo Avatar */}
          <button
            onClick={() => handleNavClick('sobre')}
            className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white rounded-sm shrink-0"
            aria-label="Ir para o início"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 shrink-0 bg-neutral-200 dark:bg-neutral-800">
              <img
                src={PROFILE_IMAGE}
                alt="Graça Alberto"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-neutral-950 dark:text-white uppercase transition-colors leading-tight">
                {CONTACT_INFO.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                Automação & Manutenção Industrial
              </span>
            </div>
          </button>

          {/* Desktop Navigation - EXACTLY 5 requested items: SOBRE, RESUMO, PROJETOS, BLOG, CONTACTO */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-bold tracking-wider"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md transition-all whitespace-nowrap uppercase cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 dark:text-white font-extrabold border-b-2 border-neutral-900 dark:border-white'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Theme toggle + Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xs"
            >
              <span>Ver CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden p-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0c0d0e] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 text-sm font-bold tracking-wider uppercase rounded-md transition-colors ${
                  isActive
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-extrabold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md"
            >
              <span>Visualizar / Descarregar CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
