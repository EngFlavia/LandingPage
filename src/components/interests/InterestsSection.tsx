import { motion } from 'framer-motion';
import { BrainCircuit, LaptopMinimal, MapPinned, Network } from 'lucide-react';
import { SectionContainer } from '../layout/SectionContainer';
import type { InterestsCopy } from '../../types/portfolio';

interface InterestsSectionProps {
  interests: string[];
  copy: InterestsCopy;
}

const icons = [LaptopMinimal, Network, MapPinned, BrainCircuit];

export function InterestsSection({ interests, copy }: InterestsSectionProps) {
  return (
    <SectionContainer
      id="interesses"
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      className="pb-16 text-ink"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {interests.map((interest, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.article
              key={interest}
              whileHover={{ scale: 1.02, y: -3 }}
              className={`rounded-[1.75rem] border p-5 ${
                index % 2 === 0 ? 'border-slate-200 bg-white' : 'border-cyan/20 bg-cyan/10'
              }`}
            >
              <div className="mb-4 inline-flex rounded-2xl bg-ink p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-base font-medium text-slate-700">{interest}</p>
            </motion.article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
