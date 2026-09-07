import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, X, Star, ChevronRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { Section, SectionHeader } from '@/components/Primitives';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeader
        number="05"
        title="PROJECTS"
        subtitle="Missions I've taken on — real problems, working solutions."
      />

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`glass glow-border hud-corners group relative w-full overflow-hidden clip-angular-lg p-6 text-left transition-all duration-300 hover:bg-ink-800/50 md:p-8 ${
        project.flagship ? 'ring-1 ring-electric-500/30' : ''
      }`}
    >
      {project.flagship && (
        <div className="absolute right-4 top-4 flex items-center gap-1 border border-electric-500/40 bg-electric-500/15 px-3 py-1 font-mono text-[10px] tracking-wider text-electric-300 clip-angular-sm">
          <Star size={10} className="fill-electric-400 text-electric-400" />
          FLAGSHIP
        </div>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <div className="font-mono text-[10px] tracking-widest text-electric-400/60">
            &gt; MISSION_{String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="mt-1.5 font-display text-xl font-bold text-slate-100 md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-slate-400">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="border border-electric-500/15 bg-electric-500/5 px-2.5 py-1 font-mono text-[10px] tracking-wider text-electric-300/70 clip-angular-sm"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-2.5 py-1 font-mono text-[10px] text-slate-500">
                +{project.tech.length - 5} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-electric-400 transition-all duration-300 group-hover:gap-3">
          <span className="font-mono text-xs tracking-widest">ENTER MISSION</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6 md:items-center"
        >
          <div
            className="absolute inset-0 bg-ink-950/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong hud-corners relative z-10 my-auto w-full max-w-2xl clip-angular-lg p-6 md:p-8"
          >
            {/* Header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-electric-400">
                  <span className="h-1.5 w-1.5 animate-pulse bg-electric-400" />
                  &gt; MISSION SELECTED
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-slate-100">
                  {project.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="border border-electric-500/20 p-2 text-slate-400 transition-all hover:border-electric-400/50 hover:text-electric-300 clip-angular-sm"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] space-y-6 overflow-y-auto pr-2">
              <CaseBlock label="PROJECT OVERVIEW">
                <p className="text-sm leading-relaxed text-slate-400">{project.tagline}</p>
              </CaseBlock>

              <CaseBlock label="PROBLEM">
                <p className="text-sm leading-relaxed text-slate-400">{project.problem}</p>
              </CaseBlock>

              <CaseBlock label="ARCHITECTURE">
                <div className="flex flex-col gap-2">
                  {project.architecture.map((node, i) => (
                    <div key={node}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <span className="font-mono text-[10px] text-electric-400/40">
                          [{String(i + 1).padStart(2, '0')}]
                        </span>
                        <span className="border border-electric-500/20 bg-electric-500/5 px-3 py-1.5 font-mono text-xs tracking-wider text-slate-300 clip-angular-sm">
                          {node}
                        </span>
                      </motion.div>
                      {i < project.architecture.length - 1 && (
                        <ChevronRight size={12} className="my-0.5 ml-6 rotate-90 text-electric-500/30" />
                      )}
                    </div>
                  ))}
                </div>
              </CaseBlock>

              <CaseBlock label="SOLUTION">
                <p className="text-sm leading-relaxed text-slate-400">{project.solution}</p>
              </CaseBlock>

              <CaseBlock label="TECHNOLOGY">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-electric-500/15 bg-electric-500/5 px-2.5 py-1 font-mono text-[10px] tracking-wider text-electric-300/80 clip-angular-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CaseBlock>

              <CaseBlock label="KEY FEATURES">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 border border-electric-400/60" style={{ transform: 'rotate(45deg)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </CaseBlock>
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3 border-t border-electric-500/10 pt-5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gamer-btn-rev flex items-center gap-2 border border-electric-500/30 px-4 py-2 font-mono text-xs tracking-wider text-slate-300 transition-all hover:border-electric-400/60 hover:text-electric-300"
                >
                  <Github size={14} />
                  GITHUB
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gamer-btn flex items-center gap-2 bg-electric-500 px-4 py-2 font-mono text-xs tracking-wider text-white transition-all hover:bg-electric-400"
                >
                  <ExternalLink size={14} />
                  LIVE DEMO
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] tracking-widest text-electric-400/60">
        &gt; {label}
      </div>
      {children}
    </div>
  );
}
