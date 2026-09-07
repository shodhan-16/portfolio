import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useScroll';

const bootLogs = [
  'INITIALIZING KERNEL...',
  'MOUNTING FILE SYSTEM...',
  'LOADING CLOUD MODULES...',
  'ESTABLISHING AWS CONNECTION...',
  'VERIFYING CREDENTIALS...',
  'LOADING ENGINEERING PROFILE...',
  'CALIBRATING HUD INTERFACE...',
  'SYSTEM READY.',
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const reduced = useReducedMotion();

  const finish = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 700);
  }, [onComplete]);

  useEffect(() => {
    if (reduced) {
      setLogs(bootLogs);
      setProgress(100);
      const t = setTimeout(finish, 400);
      return () => clearTimeout(t);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const totalDuration = 2600;
    const stepDuration = totalDuration / bootLogs.length;

    bootLogs.forEach((log, i) => {
      timers.push(
        setTimeout(() => {
          setLogs((prev) => [...prev, log]);
          setProgress(Math.round(((i + 1) / bootLogs.length) * 100));
        }, stepDuration * (i + 1))
      );
    });

    timers.push(setTimeout(finish, totalDuration + 300));

    return () => timers.forEach(clearTimeout);
  }, [reduced, finish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 px-6"
        >
          {/* Grid background for the loader */}
          <div
            className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-40"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }}
          />

          {/* Scanline sweep */}
          {!reduced && (
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric-400/50 to-transparent animate-scanline-sweep" />
          )}

          {/* HUD corner brackets — viewport frame */}
          <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-electric-500/30" />
          <div className="pointer-events-none absolute right-6 top-6 h-12 w-12 border-r-2 border-t-2 border-electric-500/30" />
          <div className="pointer-events-none absolute bottom-6 left-6 h-12 w-12 border-l-2 border-b-2 border-electric-500/30" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-r-2 border-b-2 border-electric-500/30" />

          {/* Main loader content */}
          <div className="relative z-10 w-full max-w-lg">
            {/* System label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center justify-between font-mono text-[10px] tracking-widest text-electric-400/60"
            >
              <span>SHODHAN.SYS</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse bg-electric-400" />
                BOOTING
              </span>
            </motion.div>

            {/* Boot name — glitchy reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1
                className="text-gradient-soft font-display text-4xl font-bold tracking-tight md:text-6xl"
                style={{ textShadow: '0 0 30px rgba(11,130,255,0.3)' }}
              >
                SHODHAN
              </h1>
              <div className="mt-2 font-mono text-[10px] tracking-[0.3em] text-electric-400/50">
                CLOUD ENGINEER
              </div>
            </motion.div>

            {/* Boot log terminal */}
            <div className="mb-6 border border-electric-500/15 bg-ink-900/60 p-4 clip-angular-sm">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-electric-400/50" />
                <span className="h-1.5 w-1.5 bg-electric-400/30" />
                <span className="h-1.5 w-1.5 bg-electric-400/20" />
                <span className="ml-2 font-mono text-[9px] text-slate-600">system_boot.log</span>
              </div>
              <div className="font-mono text-[11px] leading-relaxed">
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={
                      i === logs.length - 1 && log === 'SYSTEM READY.'
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }
                  >
                    <span className="text-electric-400/40">[{String(i + 1).padStart(2, '0')}]</span>{' '}
                    {log}
                    {i === logs.length - 1 && log === 'SYSTEM READY.' && (
                      <span className="ml-2 text-emerald-400">✓</span>
                    )}
                  </motion.div>
                ))}
                {logs.length < bootLogs.length && (
                  <span className="inline-block h-3 w-1.5 animate-blink bg-electric-400 align-middle" />
                )}
              </div>
            </div>

            {/* Progress bar — XP style */}
            <div className="flex items-center gap-3">
              <div className="xp-bar flex-1">
                <motion.div
                  className="xp-bar-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              <span
                className="font-mono text-xs font-bold text-electric-400"
                style={{ textShadow: '0 0 8px rgba(11,130,255,0.5)' }}
              >
                {String(progress).padStart(3, '0')}%
              </span>
            </div>

            {/* Status text */}
            <div className="mt-3 flex justify-between font-mono text-[9px] tracking-widest text-slate-600">
              <span>LOADING ASSETS</span>
              <span>{progress >= 100 ? 'COMPLETE' : 'IN PROGRESS'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
