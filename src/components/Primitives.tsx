import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Gamer-style section header with HUD bracket framing.
 */
type SectionHeaderProps = {
  number: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-electric-400">
        <span className="text-electric-400/60">[{number}]</span>
        <span className="h-px w-8 bg-electric-400/40" />
        <span className="text-shadow-glow">{title}</span>
        <span className="ml-2 h-2 w-2 animate-pulse bg-electric-400/60" />
      </div>
      {subtitle && (
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">
          {subtitle}
        </h2>
      )}
    </motion.div>
  );
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

/**
 * Animated text reveal — splits text into words and staggers them in.
 */
export function RevealText({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}

/**
 * Reveal wrapper for any content.
 */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
