import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Terminal,
  Code2,
  Database,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories, type Skill } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/Primitives';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  terminal: Terminal,
  code: Code2,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  const [hovered, setHovered] = useState<Skill | null>(null);

  return (
    <Section id="skills">
      <SectionHeader number="03" title="SKILL MATRIX" subtitle="An interactive view of what I work with." />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Skill categories — HUD panels */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="glass hud-corners clip-angular p-5"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center border border-electric-500/20 bg-electric-500/10 text-electric-400 clip-angular-sm">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-mono text-sm tracking-widest text-slate-200">{cat.title}</h3>
                  <span className="ml-auto font-mono text-[10px] text-slate-600">
                    x{cat.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.button
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.03 }}
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(skill)}
                      onBlur={() => setHovered(null)}
                      className="group relative border border-electric-500/15 bg-ink-800/50 px-3 py-1.5 text-xs text-slate-300 transition-all duration-300 clip-angular-sm hover:border-electric-400/50 hover:bg-electric-500/10 hover:text-electric-200 hover:shadow-[0_0_16px_rgba(11,130,255,0.3)]"
                    >
                      {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Description panel — HUD info screen */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="glass-strong hud-corners clip-angular min-h-[200px] p-6">
            <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-electric-400/60">
              <span className="h-1.5 w-1.5 animate-pulse bg-electric-400" />
              SKILL_INFO
            </div>
            <AnimatePresence mode="wait">
              {hovered ? (
                <motion.div
                  key={hovered.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-display text-2xl font-semibold text-gradient">
                    {hovered.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {hovered.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-display text-xl font-semibold text-slate-300">
                    Hover a skill
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    Move your cursor over any skill chip to see a short description. Each category
                    represents a domain I actively work in.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Counter — XP display */}
          <div className="mt-4 flex items-center justify-between border border-electric-500/15 bg-ink-900/50 px-5 py-3 clip-angular-sm">
            <span className="font-mono text-[10px] tracking-widest text-slate-500">TOTAL_SKILLS</span>
            <CountBadge />
          </div>
        </div>
      </div>
    </Section>
  );
}

function CountBadge() {
  const total = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-display text-2xl font-bold text-electric-400"
      style={{ textShadow: '0 0 12px rgba(11,130,255,0.5)' }}
    >
      {String(total).padStart(2, '0')}
    </motion.span>
  );
}
