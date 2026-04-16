import { motion } from 'framer-motion';
import type { HeaderCopy, Language } from '../../types/portfolio';

interface HeaderProps {
  copy: HeaderCopy;
  language: Language;
  onLanguageChange: (language: Language) => void;
  resumeHref: string;
}

export function Header({ copy, language, onLanguageChange, resumeHref }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className="font-display text-lg font-semibold tracking-[0.18em] text-white transition hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          {copy.brand}
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {copy.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-mist/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={resumeHref}
            download
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:inline-flex"
          >
            {copy.resume}
          </a>

          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1">
            <span className="sr-only">{copy.languageLabel}</span>
            {(['pt', 'en'] as const).map((option) => (
              <motion.button
                key={option}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => onLanguageChange(option)}
                className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  language === option
                    ? 'bg-coral text-ink'
                    : 'text-mist/75 hover:text-white'
                }`}
                aria-pressed={language === option}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
