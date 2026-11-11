import React, { useEffect, useState } from 'react';
import { X, Clock, Calendar, Bookmark, CheckCircle2, Share2, Check } from 'lucide-react';
import { BlogArticle } from '../types/portfolio';
import { CONTACT_INFO, PROFILE_IMAGE } from '../data/portfolioData';

interface ArticleModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0e1013] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#131519]">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="uppercase font-bold tracking-wider">{article.category}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              aria-label="Copiar link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Partilhar'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar artigo"
              className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
            <span>·</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author Badge with Photo */}
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-neutral-200 dark:border-neutral-800">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 shrink-0 bg-neutral-200 dark:bg-neutral-800">
              <img
                src={PROFILE_IMAGE}
                alt={CONTACT_INFO.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white block">
                {CONTACT_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 block">
                {CONTACT_INFO.title} • Refriango / Luanda
              </span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121417] mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-950 dark:text-white font-bold mb-3 flex items-center gap-2">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Pontos Críticos de Engenharia</span>
            </h3>
            <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Prose */}
          <div className="space-y-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2 text-xs font-mono">
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#131519] flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            Publicado no Caderno Técnico de Graça Alberto
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Fechar Leitor
          </button>
        </div>
      </div>
    </div>
  );
};
