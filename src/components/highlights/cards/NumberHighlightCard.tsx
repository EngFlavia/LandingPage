import { motion } from 'framer-motion';

interface NumberHighlightCardProps {
  text: string;
  index: number;
}

export function NumberHighlightCard({ text, index }: NumberHighlightCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="rounded-[2rem] bg-ink p-6 text-white">
      <p className="mb-8 font-display text-5xl text-coral/90">0{index}</p>
      <p className="text-lg leading-8 text-mist">{text}</p>
    </motion.article>
  );
}
