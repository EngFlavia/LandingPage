import { Languages, MessageSquareQuote } from 'lucide-react';
import type { LanguageItem, LanguagesCopy } from '../../types/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { LanguageCard } from './cards/LanguageCard';

interface LanguagesSectionProps {
  languages: LanguageItem[];
  copy: LanguagesCopy;
}

export function LanguagesSection({ languages, copy }: LanguagesSectionProps) {
  if (!languages.length) {
    return null;
  }

  return (
    <SectionContainer
      id="idiomas"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="text-ink"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {languages.map((item, index) => (
          <LanguageCard
            key={`${item.language}-${item.level}`}
            item={item}
            icon={index === 0 ? Languages : MessageSquareQuote}
            fluencyLabel={copy.fluencyLabel}
            variant={index % 2 === 0 ? 'dark' : 'light'}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
