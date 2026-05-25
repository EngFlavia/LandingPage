import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { EducationItem } from '../../../types/portfolio';

interface SupportingEducationCardProps {
  education: EducationItem;
  icon: LucideIcon;
  label: string;
}

export function SupportingEducationCard({
  education,
  icon: Icon,
  label,
}: SupportingEducationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-[2rem] bg-gradient-to-br from-ink via-slate to-[#183453] p-6 text-white shadow-soft"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="inline-flex h-fit rounded-2xl bg-white/10 p-3 text-cyan">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-mist/60">{label}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-3 text-sm leading-6 text-mist">{education.institution}</p>
          </div>
        </div>
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mist">
          {education.period}
        </span>
      </div>
    </motion.article>
  );
}
