import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface RibbonHighlightCardProps {
  text: string;
  icon: LucideIcon;
  label: string;
}

export function RibbonHighlightCard({ text, icon: Icon, label }: RibbonHighlightCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-sand">
      <div className="flex items-center gap-3 bg-ink px-6 py-4 text-white">
        <Icon className="h-5 w-5 text-gold" />
        <span className="text-sm uppercase tracking-[0.28em] text-mist/70">{label}</span>
      </div>
      <div className="p-6">
        <p className="text-lg leading-8 text-slate-700">{text}</p>
      </div>
    </motion.article>
  );
}
