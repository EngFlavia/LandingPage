import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import type { ContactCopy, PortfolioContent } from '../../types/portfolio';
import { SectionContainer } from '../layout/SectionContainer';

interface ContactSectionProps {
  copy: ContactCopy;
  resumeHref: string;
  contact?: PortfolioContent['contact'];
}

export function ContactSection({ copy, resumeHref, contact }: ContactSectionProps) {
  return (
    <SectionContainer
      id="contato"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="pb-24 text-ink"
      aside={
        <span className="rounded-full border border-coral/20 bg-coral/10 px-4 py-2 text-sm text-coral">
          {copy.availabilityBadge}
        </span>
      }
    >
      <motion.div
        whileHover={{ y: -4 }}
        className="flex flex-col gap-4 rounded-[2rem] bg-ink p-8 text-white shadow-soft sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-mist/65">{copy.eyebrow}</p>
          <p className="mt-3 text-lg leading-8 text-mist">{copy.description}</p>
          {contact ? (
            <div className="grid gap-3 text-sm text-mist sm:grid-cols-3">
              <a
                href={`mailto:${contact.email}`}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <span className="block text-xs uppercase tracking-[0.24em] text-mist/60">{copy.emailLabel}</span>
                <span className="mt-1 block break-all">{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\\d+]/g, '')}`}
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <span className="block text-xs uppercase tracking-[0.24em] text-mist/60">{copy.phoneLabel}</span>
                <span className="mt-1 block">{contact.phone}</span>
              </a>
              <a
                href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://${contact.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                <span className="block text-xs uppercase tracking-[0.24em] text-mist/60">{copy.linkedinLabel}</span>
                <span className="mt-1 block break-all">{contact.linkedin}</span>
              </a>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:min-w-[220px]">
          <a
            href={resumeHref}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 font-semibold text-ink transition hover:bg-[#ff9b81] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {copy.primaryCta}
            <Download className="h-4 w-4" />
          </a>
          <a
            href="#topo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {copy.secondaryCta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
