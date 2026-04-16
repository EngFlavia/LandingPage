import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface IconHighlightCardProps {
  text: string;
  icon: LucideIcon;
}

export function IconHighlightCard({ text, icon: Icon }: IconHighlightCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="rounded-[2rem] border border-slate-200 bg-white p-6">
      <div className="mb-5 inline-flex rounded-2xl bg-cyan/15 p-3 text-cyan">
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-lg leading-8 text-slate-700">{text}</p>
    </motion.article>
  );
}
