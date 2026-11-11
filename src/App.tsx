/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { BlogSection } from './components/BlogSection';
import { ArticleModal } from './components/ArticleModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project, BlogArticle } from './types/portfolio';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('sobre');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Sync theme with document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Section observer for scroll spy
  useEffect(() => {
    const sections = ['sobre', 'resumo', 'projetos', 'blog', 'contacto'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#0c0d0e] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* 3-Zone Top Bar Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onNavigateToProjects={() => handleNavigate('projetos')}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        {/* 1. SOBRE */}
        <AboutSection />

        {/* 2. RESUMO */}
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 3. PROJETOS */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. BLOG */}
        <BlogSection onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* 5. CONTACTO */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Printable / Full Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
