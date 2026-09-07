import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { scrollToSection } from '@/hooks/useScroll';

export default function Footer() {
  return (
    <footer className="relative border-t border-electric-500/15 bg-ink-950/50">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-center md:text-left"
          >
            <div className="font-display text-xl font-bold text-slate-100">
              <span className="text-electric-400/50">&lt;</span>
              SHODHAN<span className="text-electric-400">.</span>
              <span className="text-electric-400/50">/&gt;</span>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-slate-500">
              CLOUD_ENGINEER
            </div>
          </button>

          {/* Links — angular icons */}
          <div className="flex items-center gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-electric-500/15 text-slate-400 transition-all hover:border-electric-400/50 hover:text-electric-300 hover:shadow-[0_0_12px_rgba(11,130,255,0.2)] clip-angular-sm"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-electric-500/15 text-slate-400 transition-all hover:border-electric-400/50 hover:text-electric-300 hover:shadow-[0_0_12px_rgba(11,130,255,0.2)] clip-angular-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.links.email}
              className="flex h-10 w-10 items-center justify-center border border-electric-500/15 text-slate-400 transition-all hover:border-electric-400/50 hover:text-electric-300 hover:shadow-[0_0_12px_rgba(11,130,255,0.2)] clip-angular-sm"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href={profile.links.resume}
              download
              className="flex h-10 w-10 items-center justify-center border border-electric-500/15 text-slate-400 transition-all hover:border-electric-400/50 hover:text-electric-300 hover:shadow-[0_0_12px_rgba(11,130,255,0.2)] clip-angular-sm"
              aria-label="Download resume"
            >
              <FileDown size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-electric-500/5 pt-6 text-center">
          <p className="font-mono text-[11px] tracking-wider text-slate-600">
            © 2026 Shodhan. Built with curiosity, code & cloud.
          </p>
        </div>
      </div>
    </footer>
  );
}
