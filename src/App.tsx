import portfolioData from './data/portfolio.json';
import { ContactSection } from './components/contact/ContactSection';
import { EducationSection } from './components/education/EducationSection';
import { HeroSection } from './components/hero/HeroSection';
import { ProfessionalSummary } from './components/summary/ProfessionalSummary';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { HighlightsSection } from './components/highlights/HighlightsSection';
import { InterestsSection } from './components/interests/InterestsSection';
import { Header } from './components/layout/Header';
import { SectionDivider } from './components/layout/SectionDivider';
import { LanguagesSection } from './components/languages/LanguagesSection';
import { useLanguage } from './hooks/useLanguage';
import { usePortfolioMeta } from './hooks/usePortfolioMeta';
import { getLocalizedPortfolio, resumeLinks, uiTranslations } from './i18n/translations';
import { getPortfolioData } from './lib/portfolio';
import type { PortfolioContent } from './types/portfolio';

const basePortfolio = getPortfolioData(portfolioData as unknown as PortfolioContent);

function App() {
  const { language, setLanguage } = useLanguage('pt');
  const portfolio = getLocalizedPortfolio(basePortfolio, language);
  const ui = uiTranslations[language];
  const resumeHref = resumeLinks[language];

  usePortfolioMeta(portfolio, ui.seo);

  return (
    <div id="topo" className="min-h-screen bg-ink text-slate-50">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,#08111f_0%,#0a1727_48%,#f4efe8_48%,#f4efe8_100%)]" />
      <div className="fixed inset-0 -z-10 bg-noise opacity-80" />

      <Header
        copy={ui.header}
        language={language}
        onLanguageChange={setLanguage}
        resumeHref={resumeHref}
      />

      <main className="pt-24">
        <HeroSection
          name={portfolio.name}
          title={portfolio.title}
          location={portfolio.location}
          objective={portfolio.objective}
          copy={ui.hero}
        />
        <ProfessionalSummary summary={portfolio.summary} copy={ui.summary} />
        <SectionDivider />
        <ExperienceSection experiences={portfolio.experience} copy={ui.experience} />
        <EducationSection education={portfolio.education ?? []} copy={ui.education} />
        <SkillsSection skills={portfolio.skills} copy={ui.skills} />
        <HighlightsSection highlights={portfolio.highlights} copy={ui.highlights} />
        <LanguagesSection languages={portfolio.languages ?? []} copy={ui.languages} />
        <InterestsSection interests={portfolio.interests} copy={ui.interests} />
        <ContactSection copy={ui.contact} resumeHref={resumeHref} contact={portfolio.contact} />
      </main>
    </div>
  );
}

export default App;
