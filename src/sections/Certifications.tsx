import { motion } from 'framer-motion';
import { Cloud, Award, BadgeCheck, Database, ExternalLink, type LucideIcon } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/Primitives';

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  award: Award,
  badge: BadgeCheck,
  database: Database,
};

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        number="06"
        title="CERTIFICATIONS & ACHIEVEMENTS"
        subtitle="Verified learning and earned credentials."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] ?? Award;
          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass glow-border hud-corners group relative overflow-hidden clip-angular p-5"
            >
              <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-electric-500/10 to-transparent" />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-electric-500/20 bg-electric-500/10 text-electric-400 clip-angular-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(11,130,255,0.4)]">
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold leading-snug text-slate-100">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                  <div className="mt-2 flex items-center gap-2 font-mono text-[10px] tracking-wider text-electric-400/60">
                    <span>{cert.date}</span>
                    <span className="text-slate-700">|</span>
                    <span className="text-emerald-400/80">✓ VERIFIED</span>
                  </div>
                </div>
              </div>

              <button className="mt-4 flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-slate-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:text-electric-300">
                <ExternalLink size={11} />
                &gt; VIEW_CREDENTIAL
              </button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
