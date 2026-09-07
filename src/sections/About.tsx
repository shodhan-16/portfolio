import { motion } from 'framer-motion';
import { Cloud, RefreshCw, Rocket } from 'lucide-react';
import { aboutCards, profile } from '@/data/portfolio';
import { Section, SectionHeader, Reveal, RevealText } from '@/components/Primitives';

const iconMap = {
  cloud: Cloud,
  refresh: RefreshCw,
  rocket: Rocket,
} as const;

export default function About() {
  return (
    <Section id="about">
      <SectionHeader number="01" title="WHO IS SHODHAN?" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Left: narrative */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-slate-300">
            <RevealText text="I'm Shodhan, an Information Science & Engineering student focused on building my career in Cloud Engineering." />
          </p>
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-slate-400">
              I work across the cloud and development stack — AWS services like EC2, S3, IAM and
              VPC, Linux systems, SQL databases, and backend/API fundamentals with Node.js. I use
              Git and GitHub daily, and I'm constantly building practical projects to turn concepts
              into working systems.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Cloud Computing', 'AWS', 'Linux', 'SQL', 'Backend/APIs', 'Git/GitHub'].map((t) => (
                <span
                  key={t}
                  className="border border-electric-500/20 bg-electric-500/5 px-3 py-1 font-mono text-[10px] tracking-wider text-electric-300/80 clip-angular-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="pt-4 font-mono text-xs text-slate-500">
              <span className="text-electric-400/60">&gt; </span>
              LOC: {profile.location}
            </div>
          </Reveal>
        </div>

        {/* Right: interactive profile cards — HUD panels */}
        <div className="grid gap-4">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="glass glow-border hud-corners group clip-angular p-6 transition-all duration-300 hover:bg-ink-800/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-electric-500/20 bg-electric-500/10 text-electric-400 clip-angular-sm transition-all duration-300 group-hover:scale-110 group-hover:border-electric-400/40 group-hover:shadow-[0_0_16px_rgba(11,130,255,0.3)]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-electric-400/60">
                      [{card.label}]
                    </div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-slate-100">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
