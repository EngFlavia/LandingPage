import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { LanguageItem } from '../../../types/portfolio';

interface LanguageCardProps {
  item: LanguageItem;
  icon: LucideIcon;
  fluencyLabel: string;
  variant: 'dark' | 'light';
}

export function LanguageCard({ item, icon: Icon, fluencyLabel, variant }: LanguageCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`rounded-[2rem] p-8 ${
        variant === 'dark'
          ? 'bg-ink text-white shadow-soft'
          : 'border border-slate-200 bg-white text-ink'
      }`}
    >
      <div className="mb-6 inline-flex rounded-2xl bg-cyan/15 p-3 text-cyan">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-3xl font-semibold">{item.language}</h3>
      <div className="mt-6 flex items-center justify-between gap-4 rounded-3xl border border-current/10 bg-current/5 px-5 py-4">
        <span className={variant === 'dark' ? 'text-mist/70' : 'text-slate-500'}>{fluencyLabel}</span>
        <strong className="font-display text-xl">{item.level}</strong>
      </div>
    </motion.article>
  );
}
