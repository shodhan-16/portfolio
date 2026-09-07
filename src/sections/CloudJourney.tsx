import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, ArrowDown, Cpu, Server, Shield, Database, Activity } from 'lucide-react';
import { cloudJourney } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/Primitives';

const serviceIcons: Record<string, typeof Cloud> = {
  EC2: Server,
  S3: Cloud,
  VPC: Cpu,
  IAM: Shield,
  RDS: Database,
  CloudWatch: Activity,
};

export default function CloudJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section id="cloud">
      <SectionHeader
        number="04"
        title="CLOUD JOURNEY"
        subtitle="From learning fundamentals to engineering infrastructure."
      />

      {/* Architecture flow — AWS service nodes */}
      <div className="mb-16 overflow-x-auto no-scrollbar">
        <div className="flex min-w-max items-center gap-3 px-1 py-3">
          {['EC2', 'VPC', 'IAM', 'S3', 'RDS', 'CloudWatch'].map((svc, i) => {
            const Icon = serviceIcons[svc] ?? Cloud;
            return (
              <div key={svc} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass glow-border flex items-center gap-2 px-4 py-2.5 clip-angular-sm"
                >
                  <Icon size={16} className="text-electric-400" />
                  <span className="font-mono text-xs tracking-wider text-slate-300">{svc}</span>
                </motion.div>
                {i < 5 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                    className="h-px w-6 origin-left bg-electric-400/40"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Journey phases — vertical progress with gamer node styling */}
      <div ref={ref} className="relative ml-4">
        {/* Background line */}
        <div className="absolute left-0 top-0 h-full w-px bg-ink-700" />
        {/* Animated progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-electric-500 via-electric-400 to-aurora-400 shadow-[0_0_12px_rgba(11,130,255,0.6)]"
        />

        <div className="space-y-12">
          {cloudJourney.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pl-10"
            >
              {/* Node — diamond style */}
              <div className="absolute left-0 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.2, type: 'spring', stiffness: 200 }}
                  className="h-3 w-3 border-2 border-electric-400 bg-ink-950"
                />
              </div>

              <div className="glass glow-border hud-corners clip-angular p-5 transition-colors hover:bg-ink-800/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-wide text-slate-100">
                    {phase.phase}
                  </h3>
                  <span className="font-mono text-[10px] text-electric-400/50">
                    PHASE_{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{phase.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {phase.nodes.map((node) => (
                    <span
                      key={node}
                      className="flex items-center gap-1.5 border border-electric-500/20 bg-electric-500/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-electric-300/80 clip-angular-sm"
                    >
                      <span className="h-1 w-1 bg-electric-400" />
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {i < cloudJourney.length - 1 && (
                <ArrowDown size={14} className="mt-3 ml-0 text-electric-500/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
