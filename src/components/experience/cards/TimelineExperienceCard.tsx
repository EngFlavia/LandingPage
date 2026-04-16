import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ExperienceItem } from '../../../types/portfolio';

interface TimelineExperienceCardProps {
  experience: ExperienceItem;
  icon: LucideIcon;
  label: string;
  milestoneLabel: string;
  companyLabel: string;
}

export function TimelineExperienceCard({
  experience,
  icon: Icon,
  label,
  milestoneLabel,
  companyLabel,
}: TimelineExperienceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8"
    >
      <div className="absolute bottom-8 left-8 top-24 w-px bg-gradient-to-b from-cyan via-slate-200 to-transparent" />
      <div className="relative space-y-6">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-cyan/15 p-3 text-cyan">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{label}</p>
            <h3 className="font-display text-2xl font-semibold text-ink">{experience.role}</h3>
            {experience.company ? (
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-cyan">
                {companyLabel}: {experience.company}
              </p>
            ) : null}
            <p className="text-sm text-slate-500">{experience.period}</p>
          </div>
        </div>

        <div className="space-y-4 pl-8">
          {experience.responsibilities.map((responsibility, index) => (
            <div key={responsibility} className="relative rounded-3xl bg-slate-50 px-4 py-4">
              <span className="absolute -left-[2.15rem] top-5 h-3 w-3 rounded-full bg-cyan ring-8 ring-white" />
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                {milestoneLabel} {index + 1}
              </p>
              <p className="text-sm leading-6 text-slate-700">{responsibility}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
