import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface DatabaseSkillsProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export function DatabaseSkills({ title, description, items, icon: Icon }: DatabaseSkillsProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 bg-sand p-8"
    >
      <div className="mb-8">
        <div className="mb-4 inline-flex rounded-2xl bg-gold/25 p-3 text-ink">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-300 bg-white px-4 py-4 text-sm font-medium text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
