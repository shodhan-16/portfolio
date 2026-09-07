import { motion } from 'framer-motion';
import { Cloud, Settings, Shield, Rocket, type LucideIcon } from 'lucide-react';
import { pillars } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/Primitives';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  settings: Settings,
  shield: Shield,
  rocket: Rocket,
};

export default function WhatIBuild() {
  return (
    <Section id="what-i-build">
      <SectionHeader number="07" title="WHAT I BUILD" subtitle="Four pillars of my engineering practice." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => {
          const Icon = iconMap[p.icon] ?? Cloud;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass glow-border hud-corners group relative overflow-hidden clip-angular p-6"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-electric-500/5 blur-2xl transition-all duration-500 group-hover:bg-electric-500/15" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center border border-electric-500/20 bg-electric-500/10 text-electric-400 clip-angular-sm transition-all duration-300 group-hover:scale-110 group-hover:border-electric-400/50 group-hover:shadow-[0_0_20px_rgba(11,130,255,0.3)]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-slate-100">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
              </div>

              <div className="mt-4 font-mono text-[10px] tracking-widest text-electric-400/40">
                [{String(i + 1).padStart(2, '0')}/04]
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
