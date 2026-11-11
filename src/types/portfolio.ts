export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'digitalizacao' | 'automacao' | 'processos';
  categoryLabel: string;
  year: string;
  image: string;
  clientOrContext: string;
  role: string;
  challenge: string;
  solution: string;
  engineeringDetails: string[];
  results: { metric: string; label: string }[];
  technologies: string[];
  deliverables: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  equipmentHandled: string[];
  toolsUsed: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  category: string;
  description: string;
  skills: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface ContactData {
  name: string;
  title: string;
  location: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  email: string;
  linkedin: string;
  github: string;
  availability: string;
}
