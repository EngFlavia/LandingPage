import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ExperienceItem } from '../../../types/portfolio';

interface FeaturedExperienceCardProps {
  experience: ExperienceItem;
  icon: LucideIcon;
  label: string;
  companyLabel: string;
}

export function FeaturedExperienceCard({
  experience,
  icon: Icon,
  label,
  companyLabel,
}: FeaturedExperienceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="h-full rounded-[2rem] bg-ink p-8 text-white shadow-soft"
    >
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-4 inline-flex rounded-2xl bg-coral/15 p-3 text-coral">
            <Icon className="h-6 w-6" />
          </div>
          <p className="text-sm uppercase tracking-[0.28em] text-mist/60">{label}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold">{experience.role}</h3>
          {experience.company ? (
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-cyan/75">
              {companyLabel}: {experience.company}
            </p>
          ) : null}
          <p className="mt-2 text-mist/80">{experience.period}</p>
        </div>
        {experience.note ? (
          <span className="max-w-xs rounded-full border border-coral/30 bg-coral/10 px-4 py-2 text-sm text-coral">
            {experience.note}
          </span>
        ) : null}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {experience.responsibilities.map((responsibility) => (
          <div
            key={responsibility}
            className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-mist"
          >
            {responsibility}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
