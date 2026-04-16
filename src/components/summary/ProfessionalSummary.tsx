import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { SummaryCopy } from '../../types/portfolio';

interface ProfessionalSummaryProps {
  summary: string;
  copy: SummaryCopy;
}

export function ProfessionalSummary({ summary, copy }: ProfessionalSummaryProps) {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="scroll-mt-28 mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur lg:grid-cols-[0.35fr_1fr] lg:p-10">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan">{copy.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{copy.title}</h2>
        </div>
        <div className="rounded-[1.5rem] bg-white px-6 py-8 text-ink">
          <Quote className="mb-5 h-10 w-10 text-coral" />
          <p className="text-lg leading-8 text-slate-700">{summary}</p>
        </div>
      </div>
    </motion.section>
  );
}
