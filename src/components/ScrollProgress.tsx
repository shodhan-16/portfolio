import { useScrollProgress } from '@/hooks/useScroll';

/**
 * Gamer-style HUD progress bar — segmented top bar.
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-50 flex h-[3px] w-full items-center bg-ink-900">
      <div
        className="h-full bg-gradient-to-r from-electric-500 via-electric-400 to-aurora-400 transition-[width] duration-75"
        style={{ width: `${progress * 100}%`, boxShadow: '0 0 8px rgba(11,130,255,0.6)' }}
      />
      {/* Tick marks at 25% intervals */}
      {[25, 50, 75].map((p) => (
        <div
          key={p}
          className="absolute top-0 h-full w-px bg-ink-950"
          style={{ left: `${p}%` }}
        />
      ))}
    </div>
  );
}
