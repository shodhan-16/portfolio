import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Circle } from 'lucide-react';
import { sections } from '@/data/portfolio';
import { scrollToSection, useActiveSection } from '@/hooks/useScroll';

const navItems = sections.filter((s) => s.id !== 'hero');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-[3px] z-40 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-electric-500/15 bg-ink-950/80 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo — gamer style with bracket */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-display text-lg font-bold tracking-tight text-slate-100"
            aria-label="Go to top"
          >
            <span className="text-electric-400/50">&lt;</span>
            SHODHAN<span className="text-electric-400">.</span>
            <span className="text-electric-400/50">/&gt;</span>
          </button>

          {/* Desktop nav — HUD style */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className={`group relative px-3 py-1.5 font-mono text-[11px] tracking-widest transition-all duration-300 ${
                  active === s.id
                    ? 'text-electric-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 border border-electric-400/30 bg-electric-500/10"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Status badge — HUD style */}
          <div className="hidden items-center gap-2 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <Circle className="relative h-2 w-2 fill-emerald-400 text-emerald-400" />
            </span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400">
              <span className="text-emerald-400/60">[</span> ONLINE <span className="text-emerald-400/60">]</span>
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-slate-300 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/90 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-16 flex flex-col gap-1 px-6 py-6"
            >
              {navItems.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleClick(s.id)}
                  className="group flex items-center gap-4 border-b border-electric-500/10 py-4 text-left"
                >
                  <span className="font-mono text-xs text-electric-400/50">[{s.number}]</span>
                  <span
                    className={`font-display text-lg tracking-wide transition-colors ${
                      active === s.id ? 'text-electric-300' : 'text-slate-200 group-hover:text-electric-300'
                    }`}
                  >
                    {s.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-slate-700 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </motion.button>
              ))}
              <div className="mt-6 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                  <Circle className="relative h-2 w-2 fill-emerald-400 text-emerald-400" />
                </span>
                <span className="font-mono text-[10px] tracking-widest text-slate-400">
                  <span className="text-emerald-400/60">[</span> ONLINE <span className="text-emerald-400/60">]</span>
                </span>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
