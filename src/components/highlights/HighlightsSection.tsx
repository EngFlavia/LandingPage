import { Activity, Sparkles, Target } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { HighlightsCopy } from '../../types/portfolio';
import { IconHighlightCard } from './cards/IconHighlightCard';
import { NumberHighlightCard } from './cards/NumberHighlightCard';
import { RibbonHighlightCard } from './cards/RibbonHighlightCard';

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

          if (index % 3 === 0) {
            return <IconHighlightCard key={highlight} text={highlight} icon={Icon} />;
          }

          if (index % 3 === 1) {
            return <NumberHighlightCard key={highlight} text={highlight} index={index + 1} />;
          }

          return <RibbonHighlightCard key={highlight} text={highlight} icon={Icon} label={copy.ribbonLabel} />;
        })}
      </div>
    </SectionContainer>
  );
}
