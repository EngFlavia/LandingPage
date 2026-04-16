import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { EducationItem } from '../../../types/portfolio';

interface FeaturedEducationCardProps {
  education: EducationItem;
  icon: LucideIcon;
  label: string;
}

export function FeaturedEducationCard({ education, icon: Icon, label }: FeaturedEducationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="h-full rounded-[2rem] bg-gradient-to-br from-ink via-slate to-[#183453] p-8 text-white shadow-soft"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-3 text-cyan">
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-sm uppercase tracking-[0.28em] text-mist/60">{label}</p>
      <h3 className="mt-4 font-display text-3xl font-semibold">{education.degree}</h3>
      <p className="mt-4 text-base leading-7 text-mist">{education.institution}</p>
      <p className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-mist">
        {education.period}
      </p>
    </motion.article>
  );
}
