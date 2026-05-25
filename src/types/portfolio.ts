export type Language = 'pt' | 'en';

export interface ExperienceItem {
  role: string;
  company?: string;
  period: string;
  note?: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface SkillGroups {
  backend: string[];
  frontend: string[];
  database: string[];
  cloud_devops: string[];
}

export interface ProjectItem {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export interface PortfolioContent {
  name: string;
  title: string;
  location: string;
  contact?: {
    email: string;
    phone: string;
    linkedin: string;
  };
  objective: string;
  summary: string;
  education?: EducationItem[];
  languages?: LanguageItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroups;
  highlights: string[];
  interests: string[];
}

export interface HeroCopy {
  availability?: string;
  portfolioLabel: string;
  primaryCta: string;
  secondaryCta: string;
  spotlightTitle: string;
  spotlightBadge: string;
  spotlightCards: Array<{
    label: string;
    text: string;
  }>;
}

export interface HeaderCopy {
  brand: string;
  resume: string;
  languageLabel: string;
  navigation: Array<{
    id: string;
    label: string;
  }>;
}

export interface SummaryCopy {
  eyebrow: string;
  title: string;
}

interface SectionCopy {
  eyebrow: string;
  title?: string;
  description?: string;
}

export interface ExperienceCopy extends SectionCopy {
  featuredLabel: string;
  timelineLabel: string;
  milestoneLabel: string;
  compactLabel: string;
  companyLabel: string;
}

export interface EducationCopy extends SectionCopy {
  featuredLabel: string;
  supportingLabel: string;
}

export interface LanguagesCopy extends SectionCopy {
  fluencyLabel: string;
}

export interface SkillsCopy extends SectionCopy {
  badge?: string;
  groups: {
    backend: { title: string; description: string };
    frontend: { title: string; description: string };
    database: { title: string; description: string };
    cloudDevops: { title: string; description: string; badge: string };
  };
}

export interface ProjectsCopy extends SectionCopy {
  repositoryLabel: string;
}

export interface HighlightsCopy extends SectionCopy {
  ribbonLabel: string;
}

export interface InterestsCopy extends SectionCopy {}

export interface ContactCopy {
  eyebrow: string;
  title?: string;
  description?: string;
  primaryCta: string;
  secondaryCta: string;
  availabilityBadge?: string;
  emailLabel: string;
  phoneLabel: string;
  linkedinLabel: string;
}

export interface SeoCopy {
  title: string;
  description: string;
}

export interface UiCopy {
  header: HeaderCopy;
  hero: HeroCopy;
  summary: SummaryCopy;
  experience: ExperienceCopy;
  education: EducationCopy;
  skills: SkillsCopy;
  projects: ProjectsCopy;
  highlights: HighlightsCopy;
  languages: LanguagesCopy;
  interests: InterestsCopy;
  contact: ContactCopy;
  seo: SeoCopy;
}

export interface PortfolioDocument extends PortfolioContent {}
