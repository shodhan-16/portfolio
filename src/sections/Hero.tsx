import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, FolderGit2, Crosshair } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { scrollToSection, useReducedMotion } from '@/hooks/useScroll';

const bootLines = [
  '> booting shodhan.system',
  '> loading cloud infrastructure...',
  '> loading engineering profile...',
  '> access granted',
];

export default function Hero() {
  const [bootStep, setBootStep] = useState(0);
  const [showReveal, setShowReveal] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setBootStep(bootLines.length);
      setShowReveal(true);
      return;
    }
    const timers: number[] = [];
    bootLines.forEach((_, i) => {
      timers.push(window.setTimeout(() => setBootStep(i + 1), 600 * (i + 1)));
    });
    timers.push(window.setTimeout(() => setShowReveal(true), 600 * (bootLines.length + 1)));
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      {/* Terminal boot sequence — HUD framed */}
      <div className="absolute top-20 left-6 z-10 w-full max-w-md md:left-10">
        <div className="relative border border-electric-500/15 bg-ink-900/40 p-3 clip-angular-sm">
          <div className="font-mono text-xs leading-relaxed">
            <div className="mb-1 flex items-center gap-1.5 text-slate-600">
              <span className="h-1.5 w-1.5 bg-electric-400/50" />
              <span className="h-1.5 w-1.5 bg-electric-400/30" />
              <span className="h-1.5 w-1.5 bg-electric-400/20" />
              <span className="ml-2 text-[10px]">shodhan@cloud:~$</span>
            </div>
            <AnimatePresence mode="popLayout">
              {bootLines.slice(0, bootStep).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={i === bootLines.length - 1 ? 'text-emerald-400' : 'text-slate-400'}
                >
                  {line}
                  {i === bootLines.length - 1 && (
                    <span className="ml-2 inline-block h-3 w-1.5 bg-emerald-400 animate-blink align-middle" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {bootStep < bootLines.length && (
              <div className="text-slate-600">
                <span className="inline-block h-3 w-1.5 animate-blink bg-electric-400 align-middle" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status badges — HUD style, top right */}
      <div className="absolute top-24 right-6 z-10 hidden flex-col items-end gap-1.5 md:right-10 md:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: bootStep >= 2 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="border border-electric-500/20 bg-ink-900/40 px-3 py-1 font-mono text-[10px] tracking-widest text-electric-400/70 clip-angular-sm"
        >
          SYSTEM INITIALIZING...
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: bootStep >= 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 font-mono text-[10px] tracking-widest text-electric-400 clip-angular-sm"
        >
          <span className="text-emerald-400">✓</span> IDENTITY VERIFIED
        </motion.div>
      </div>

      {/* Main reveal */}
      <AnimatePresence>
        {showReveal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Targeting reticle around name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Corner brackets around the name */}
              <span className="absolute -left-4 -top-4 h-6 w-6 border-l-2 border-t-2 border-electric-400/40" />
              <span className="absolute -right-4 -top-4 h-6 w-6 border-r-2 border-t-2 border-electric-400/40" />
              <span className="absolute -bottom-4 -left-4 h-6 w-6 border-b-2 border-l-2 border-electric-400/40" />
              <span className="absolute -bottom-4 -right-4 h-6 w-6 border-b-2 border-r-2 border-electric-400/40" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 font-mono text-xs tracking-widest text-electric-400"
              >
                &gt; WELCOME, SHODHAN
              </motion.div>

              {/* Name with glitch */}
              <motion.h1
                initial={{ opacity: 0, y: 20, letterSpacing: '0.5em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '-0.02em' }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient-soft font-display text-6xl font-bold leading-none md:text-8xl lg:text-9xl"
                data-text="SHODHAN"
              >
                SHODHAN
              </motion.h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-electric-400/50" />
              <span className="font-mono text-sm tracking-[0.3em] text-electric-300 md:text-base">
                CLOUD ENGINEER
              </span>
              <span className="h-px w-8 bg-electric-400/50" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 max-w-xl text-balance text-base text-slate-400 md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* Meta tags — HUD style chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2"
            >
              {profile.metaTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-electric-500/20 bg-ink-900/40 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-300 clip-angular-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs — gamer angular buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <button
                onClick={() => scrollToSection('about')}
                className="gamer-btn group flex items-center gap-2 bg-electric-500 px-7 py-3.5 font-mono text-xs tracking-widest text-white transition-all duration-300 hover:bg-electric-400 hover:shadow-[0_0_30px_rgba(11,130,255,0.6)]"
              >
                EXPLORE MY JOURNEY
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="gamer-btn-rev group flex items-center gap-2 border border-electric-500/30 px-7 py-3.5 font-mono text-xs tracking-widest text-slate-300 transition-all duration-300 hover:border-electric-400/60 hover:text-electric-300 hover:bg-electric-500/5"
              >
                <FolderGit2 size={14} />
                VIEW PROJECTS
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator — HUD targeting style */}
      {showReveal && (
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-electric-400"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-[9px] tracking-widest text-slate-600">SCROLL</span>
            <Crosshair size={16} className="animate-pulse" />
          </div>
        </motion.button>
      )}
    </section>
  );
}
