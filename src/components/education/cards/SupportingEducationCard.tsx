import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { EducationItem } from '../../../types/portfolio';

interface SupportingEducationCardProps {
  education: EducationItem;
  icon: LucideIcon;
  label: string;
  accent: 'light' | 'sand';
}

export function SupportingEducationCard({
  education,
  icon: Icon,
  label,
  accent,
}: SupportingEducationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[2rem] border p-6 ${
        accent === 'sand' ? 'border-slate-200 bg-sand' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="inline-flex h-fit rounded-2xl bg-cyan/15 p-3 text-cyan">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{education.degree}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{education.institution}</p>
          </div>
        </div>
        <span className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600">
          {education.period}
        </span>
      </div>
    </motion.article>
  );
}
