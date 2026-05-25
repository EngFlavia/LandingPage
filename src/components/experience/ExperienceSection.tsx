import { ShieldCheck } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { ExperienceCopy, ExperienceItem } from '../../types/portfolio';
import { FeaturedExperienceCard } from './cards/FeaturedExperienceCard';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  copy: ExperienceCopy;
}

export function ExperienceSection({ experiences, copy }: ExperienceSectionProps) {
  const [featuredExperience] = experiences;

  if (!featuredExperience) {
    return null;
  }

  return (
    <SectionContainer
      id="experiencia"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="text-ink"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <FeaturedExperienceCard
            experience={featuredExperience}
            icon={ShieldCheck}
            label={copy.featuredLabel}
            companyLabel={copy.companyLabel}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
