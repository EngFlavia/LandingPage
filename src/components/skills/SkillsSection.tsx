import { CloudCog, Code2, Database, LayoutPanelTop } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { SkillGroups, SkillsCopy } from '../../types/portfolio';
import { BackendSkills } from './groups/BackendSkills';
import { FrontendSkills } from './groups/FrontendSkills';
import { DatabaseSkills } from './groups/DatabaseSkills';
import { CloudDevOpsSkills } from './groups/CloudDevOpsSkills';

interface SkillsSectionProps {
  skills: SkillGroups;
  copy: SkillsCopy;
}

export function SkillsSection({ skills, copy }: SkillsSectionProps) {
  return (
    <SectionContainer
      id="skills"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      aside={
        <div className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600">
          {copy.badge}
        </div>
      }
      className="text-ink"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <BackendSkills
            title={copy.groups.backend.title}
            icon={Code2}
            description={copy.groups.backend.description}
            items={skills.backend}
          />
        </div>
        <div className="lg:col-span-5">
          <FrontendSkills
            title={copy.groups.frontend.title}
            icon={LayoutPanelTop}
            description={copy.groups.frontend.description}
            items={skills.frontend}
          />
        </div>
        <div className="lg:col-span-4">
          <DatabaseSkills
            title={copy.groups.database.title}
            icon={Database}
            description={copy.groups.database.description}
            items={skills.database}
          />
        </div>
        <div className="lg:col-span-8">
          <CloudDevOpsSkills
            title={copy.groups.cloudDevops.title}
            icon={CloudCog}
            description={copy.groups.cloudDevops.description}
            badge={copy.groups.cloudDevops.badge}
            items={skills.cloud_devops}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
