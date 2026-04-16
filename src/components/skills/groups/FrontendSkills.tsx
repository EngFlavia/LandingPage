import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FrontendSkillsProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export function FrontendSkills({ title, description, items, icon: Icon }: FrontendSkillsProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="h-full rounded-[2rem] border border-slate-200 bg-white p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-2xl bg-cyan/15 p-3 text-cyan">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">{title}</h3>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-3xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
