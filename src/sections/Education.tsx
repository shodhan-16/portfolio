import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Section, SectionHeader, Reveal } from '@/components/Primitives';

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader number="02" title="EDUCATION" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-electric-500/40 via-electric-500/20 to-transparent md:left-1/2" />

        {/* Education card */}
        <div className="relative pl-12 md:pl-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:mx-auto md:max-w-2xl"
          >
            {/* Node — hexagon style */}
            <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center md:left-1/2 md:-translate-x-1/2">
              <div className="clip-hex flex h-8 w-8 items-center justify-center border border-electric-500/40 bg-ink-900">
                <div className="h-2 w-2 bg-electric-400 shadow-[0_0_12px_rgba(11,130,255,0.8)]" />
              </div>
            </div>

            <div className="glass glow-border hud-corners clip-angular-lg p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-1 shrink-0 text-electric-400" size={24} />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-100 md:text-2xl">
                      {education.degree}
                    </h3>
                    <p className="mt-1 text-slate-300">{education.institution}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin size={13} />
                      {education.location}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] tracking-wider text-emerald-400 clip-angular-sm">
                  <span className="text-emerald-400/60">[</span> {education.status} <span className="text-emerald-400/60">]</span>
                </span>
              </div>

              <div className="mt-6 flex items-center gap-2 font-mono text-xs text-electric-400/80">
                <Calendar size={13} />
                {education.period}
              </div>

              {/* XP bar — gamer style */}
              <div className="mt-4">
                <div className="xp-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '50%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="xp-bar-fill"
                  />
                </div>
                <div className="mt-1.5 flex justify-between font-mono text-[10px] text-slate-600">
                  <span>2023</span>
                  <span className="text-electric-400/60">LVL 2 / 4</span>
                  <span>2027</span>
                </div>
              </div>

              {/* Coursework */}
              <Reveal delay={0.3}>
                <div className="mt-6">
                  <div className="font-mono text-[10px] tracking-widest text-electric-400/60">
                    &gt; RELEVANT_COURSEWORK
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {education.coursework.map((c) => (
                      <span
                        key={c}
                        className="border border-electric-500/15 bg-ink-700/60 px-3 py-1 text-xs text-slate-400 clip-angular-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
