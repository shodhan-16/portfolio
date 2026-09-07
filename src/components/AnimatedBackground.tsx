import { useReducedMotion } from '@/hooks/useScroll';

/**
 * Futuristic gaming HUD background.
 * Layers: gradient base, hex grid, animated scanlines, floating orbs, scan sweep, vignette.
 */
export default function AnimatedBackground() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Radial gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(11,130,255,0.12), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(11,184,212,0.10), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(20,29,54,0.4), transparent 70%)',
        }}
      />

      {/* Animated grid */}
      <div
        className={`absolute inset-0 bg-grid-pattern bg-[size:50px_50px] ${reduced ? '' : 'animate-grid-pan'}`}
        style={{ maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }}
      />

      {/* Hex grid overlay — adds a tech feel */}
      <div
        className="absolute inset-0 bg-hex-grid bg-[size:30px_52px]"
        style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 90%)', opacity: 0.5 }}
      />

      {/* Floating orbs */}
      {!reduced && (
        <>
          <div className="absolute left-[8%] top-[15%] h-[280px] w-[280px] rounded-full bg-electric-500/12 blur-[80px] animate-float" />
          <div
            className="absolute right-[12%] top-[55%] h-[240px] w-[240px] rounded-full bg-aurora-500/10 blur-[70px] animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute left-[35%] bottom-[8%] h-[200px] w-[200px] rounded-full bg-electric-400/8 blur-[60px] animate-float"
            style={{ animationDelay: '4s' }}
          />
        </>
      )}

      {/* Scan sweep — a horizontal line that sweeps down */}
      {!reduced && (
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-electric-400/40 to-transparent animate-scanline-sweep" />
      )}

      {/* HUD corner decorations — top left */}
      <div className="pointer-events-none absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-electric-500/20" />
      {/* Top right */}
      <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 border-r-2 border-t-2 border-electric-500/20" />
      {/* Bottom left */}
      <div className="pointer-events-none absolute bottom-4 left-4 h-16 w-16 border-l-2 border-b-2 border-electric-500/20" />
      {/* Bottom right */}
      <div className="pointer-events-none absolute bottom-4 right-4 h-16 w-16 border-r-2 border-b-2 border-electric-500/20" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(4,6,13,0.7) 100%)',
        }}
      />
    </div>
  );
}
