import { motion } from 'framer-motion';
import { ArrowDownRight, MapPin, MessageCircleMore } from 'lucide-react';
import type { HeroCopy } from '../../types/portfolio';

interface HeroSectionProps {
  name: string;
  title: string;
  location: string;
  objective: string;
  copy: HeroCopy;
}

export function HeroSection({ name, title, location, objective, copy }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {copy.availability ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-mist backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-coral" />
              {copy.availability}
            </div>
          ) : null}

          <div className="space-y-5">
            <p className="font-display text-sm uppercase tracking-[0.35em] text-cyan/80">
              {copy.portfolioLabel}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              {name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-base text-mist sm:text-lg">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{title}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin className="h-4 w-4 text-coral" />
                {location}
              </span>
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-mist/90 sm:text-xl">{objective}</p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-ink transition hover:bg-[#ff9b81] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {copy.primaryCta}
              <MessageCircleMore className="h-4 w-4" />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {copy.secondaryCta}
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur lg:p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-white">{copy.spotlightTitle}</span>
              <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-teal">
                {copy.spotlightBadge}
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {copy.spotlightCards.map(({ label, text }, index) => (
                <div
                  key={label}
                  className={`rounded-3xl border px-5 py-4 ${
                    index === 1 ? 'border-coral/30 bg-coral/10' : 'border-white/10 bg-slate/70'
                  }`}
                >
                  <p className="mb-2 text-sm uppercase tracking-[0.28em] text-mist/60">{label}</p>
                  <p className="text-sm leading-6 text-mist">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
