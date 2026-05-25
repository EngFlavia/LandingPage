import { Activity, Sparkles, Target } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { HighlightsCopy } from '../../types/portfolio';
import { IconHighlightCard } from './cards/IconHighlightCard';

interface HighlightsSectionProps {
  highlights: string[];
  copy: HighlightsCopy;
}

const iconCycle = [Sparkles, Activity, Target];

export function HighlightsSection({ highlights, copy }: HighlightsSectionProps) {
  return (
    <SectionContainer
      id="destaques"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="text-ink"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {highlights.map((highlight, index) => {
          const Icon = iconCycle[index % iconCycle.length];

          return <IconHighlightCard key={highlight} text={highlight} icon={Icon} />;
        })}
      </div>
    </SectionContainer>
  );
}
