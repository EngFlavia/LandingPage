import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface BackendSkillsProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export function BackendSkills({ title, description, items, icon: Icon }: BackendSkillsProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="rounded-[2rem] bg-ink p-8 text-white shadow-soft">
      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-2xl bg-coral/15 p-3 text-coral">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
          <p className="text-sm text-mist/70">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={item}
            className={`rounded-full px-4 py-3 text-sm font-medium ${
              index % 2 === 0 ? 'bg-white text-ink' : 'bg-white/10 text-mist'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
