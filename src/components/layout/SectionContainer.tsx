import type { PropsWithChildren, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps extends PropsWithChildren {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  aside?: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  eyebrow,
  title,
  description,
  aside,
  className = '',
  children,
}: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`scroll-mt-28 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
    >
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan">{eyebrow}</p>
          ) : null}
          {title ? (
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {aside}
      </div>
      {children}
    </motion.section>
  );
}
