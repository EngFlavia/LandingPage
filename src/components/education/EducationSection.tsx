import { GraduationCap, Landmark, LibraryBig } from 'lucide-react';
import type { EducationCopy, EducationItem } from '../../types/portfolio';
import { SectionContainer } from '../layout/SectionContainer';
import { FeaturedEducationCard } from './cards/FeaturedEducationCard';
import { SupportingEducationCard } from './cards/SupportingEducationCard';

interface EducationSectionProps {
  education: EducationItem[];
  copy: EducationCopy;
}

const icons = [GraduationCap, Landmark, LibraryBig];

export function EducationSection({ education, copy }: EducationSectionProps) {
  if (!education.length) {
    return null;
  }

  const [featured, ...supporting] = education;

  return (
    <SectionContainer
      id="formacao"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="text-ink"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <FeaturedEducationCard education={featured} icon={icons[0]} label={copy.featuredLabel} />
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-6">
            {supporting.map((item, index) => {
              const Icon = icons[index + 1] ?? LibraryBig;

              return (
                <SupportingEducationCard
                  key={`${item.degree}-${item.period}`}
                  education={item}
                  icon={Icon}
                  label={copy.supportingLabel}
                  accent={index % 2 === 0 ? 'light' : 'sand'}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
