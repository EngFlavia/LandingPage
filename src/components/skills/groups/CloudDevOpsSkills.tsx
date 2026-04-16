import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface CloudDevOpsSkillsProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  badge: string;
}

export function CloudDevOpsSkills({ title, description, items, icon: Icon, badge }: CloudDevOpsSkillsProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="h-full rounded-[2rem] bg-gradient-to-br from-slate via-[#16314e] to-ink p-8 text-white"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-cyan">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
          <p className="mt-2 max-w-xl text-sm text-mist/75">{description}</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-mist/70">
          {badge}
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item}
            className={`rounded-3xl px-4 py-4 text-sm ${index === 0 ? 'bg-cyan/15 text-white' : 'bg-white/5 text-mist'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </motion.article>
  );
}
