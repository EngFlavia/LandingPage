import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ExperienceItem } from '../../../types/portfolio';

interface CompactExperienceCardProps {
  experience: ExperienceItem;
  icon: LucideIcon;
  label: string;
  companyLabel: string;
}

export function CompactExperienceCard({
  experience,
  icon: Icon,
  label,
  companyLabel,
}: CompactExperienceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="grid gap-6 rounded-[2rem] border border-slate-200 bg-sand p-6 lg:grid-cols-[0.35fr_1fr]"
    >
      <div className="space-y-4">
        <div className="inline-flex rounded-2xl bg-gold/20 p-3 text-ink">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{label}</p>
          <h3 className="font-display text-2xl font-semibold text-ink">{experience.role}</h3>
          {experience.company ? (
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
              {companyLabel}: {experience.company}
            </p>
          ) : null}
          <p className="text-slate-500">{experience.period}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {experience.responsibilities.map((responsibility) => (
          <div
            key={responsibility}
            className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700"
          >
            {responsibility}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
