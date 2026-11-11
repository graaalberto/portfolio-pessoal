import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/portfolioData';
import { BlogArticle } from '../types/portfolio';

interface BlogSectionProps {
  onSelectArticle: (article: BlogArticle) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="blog" className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-2">
            <span>05</span>
            <span aria-hidden="true">/</span>
            <span>Caderno Técnico & Engenharia Prática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
            Blog & Publicações Técnicas
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Artigos fundamentados na experiência real de chão de fábrica, cobrindo diagnóstico de avarias, metodologias Lean e projetos de digitalização.
          </p>
        </div>

        {/* Editorial Articles List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] flex flex-col justify-between transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md"
            >
              <div>
                {/* Clean unboxed metadata with subtle typographic separators */}
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-4">
                  <span className="font-bold text-neutral-900 dark:text-white uppercase">
                    {article.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="text-[11px]">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white group-hover:underline">
                  <span>Ler Artigo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
