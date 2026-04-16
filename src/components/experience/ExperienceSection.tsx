import { BriefcaseBusiness, Orbit, ShieldCheck } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { ExperienceCopy, ExperienceItem } from '../../types/portfolio';
import { FeaturedExperienceCard } from './cards/FeaturedExperienceCard';
import { TimelineExperienceCard } from './cards/TimelineExperienceCard';
import { CompactExperienceCard } from './cards/CompactExperienceCard';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  copy: ExperienceCopy;
}

const icons = [ShieldCheck, Orbit, BriefcaseBusiness];

export function ExperienceSection({ experiences, copy }: ExperienceSectionProps) {
  return (
    <SectionContainer
      id="experiencia"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="text-ink"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {experiences.map((experience, index) => {
          const Icon = icons[index] ?? BriefcaseBusiness;

          if (index === 0) {
            return (
              <div key={`${experience.role}-${experience.period}`} className="lg:col-span-7">
                <FeaturedExperienceCard
                  experience={experience}
                  icon={Icon}
                  label={copy.featuredLabel}
                  companyLabel={copy.companyLabel}
                />
              </div>
            );
          }

          if (index === 1) {
            return (
              <div key={`${experience.role}-${experience.period}`} className="lg:col-span-5">
                <TimelineExperienceCard
                  experience={experience}
                  icon={Icon}
                  label={copy.timelineLabel}
                  milestoneLabel={copy.milestoneLabel}
                  companyLabel={copy.companyLabel}
                />
              </div>
            );
          }

          return (
            <div key={`${experience.role}-${experience.period}`} className="lg:col-span-12">
              <CompactExperienceCard
                experience={experience}
                icon={Icon}
                label={copy.compactLabel}
                companyLabel={copy.companyLabel}
              />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
