import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, FileDown, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Section } from '@/components/Primitives';

const links = [
  { label: 'LINKEDIN', href: profile.links.linkedin, icon: Linkedin },
  { label: 'GITHUB', href: profile.links.github, icon: Github },
  { label: 'EMAIL', href: profile.links.email, icon: Mail },
  { label: 'DOWNLOAD RESUME', href: profile.links.resume, icon: FileDown, download: true },
] as const;

const terminalLines = ['> initiate_connection()', 'Connection request ready.'];

export default function Contact() {
  const [termStep, setTermStep] = useState(0);

  useEffect(() => {
    const timers: number[] = [];
    terminalLines.forEach((_, i) => {
      timers.push(window.setTimeout(() => setTermStep(i + 1), 800 * (i + 1)));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Section id="contact" className="py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-mono text-xs tracking-widest text-electric-400"
      >
        [08] — LET'S BUILD SOMETHING
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-gradient-soft font-display text-5xl font-bold leading-tight md:text-7xl"
        style={{ textShadow: '0 0 40px rgba(11,130,255,0.2)' }}
      >
        READY TO CONNECT?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 max-w-xl text-base text-slate-400 md:text-lg"
      >
        I'm currently focused on growing as a Cloud Engineer and building practical projects that
        solve real problems.
      </motion.p>

      {/* Buttons — gamer angular */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              download={'download' in link && link.download ? '' : undefined}
              className={`group flex items-center gap-2 border border-electric-500/25 px-5 py-3 font-mono text-xs tracking-widest text-slate-300 transition-all duration-300 hover:border-electric-400/60 hover:bg-electric-500/10 hover:text-electric-200 hover:shadow-[0_0_24px_rgba(11,130,255,0.25)] ${
                i % 2 === 0 ? 'gamer-btn' : 'gamer-btn-rev'
              }`}
            >
              <Icon size={15} />
              {link.label}
              <ArrowUpRight
                size={13}
                className="opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>
          );
        })}
      </motion.div>

      {/* Terminal — HUD framed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 max-w-md"
      >
        <div className="glass-strong hud-corners clip-angular p-4 font-mono text-xs">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 border border-red-500/50" />
            <span className="h-2.5 w-2.5 border border-yellow-500/50" />
            <span className="h-2.5 w-2.5 border border-green-500/50" />
            <span className="ml-2 text-[10px] text-slate-600">connection.shodhan</span>
          </div>
          <div className="space-y-1">
            {terminalLines.slice(0, termStep).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={i === 0 ? 'text-electric-300' : 'text-emerald-400'}
              >
                {line}
              </motion.div>
            ))}
            {termStep < terminalLines.length && (
              <span className="inline-block h-3 w-1.5 animate-blink bg-electric-400 align-middle" />
            )}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
