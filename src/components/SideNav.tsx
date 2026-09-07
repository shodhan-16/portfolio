import { sections } from '@/data/portfolio';
import { useActiveSection, scrollToSection } from '@/hooks/useScroll';

/**
 * Vertical side navigation — HUD targeting reticle style.
 * Hidden on mobile.
 */
export default function SideNav() {
  const active = useActiveSection(sections.map((s) => s.id));

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            className="group flex items-center gap-3 justify-end"
            aria-label={`Go to ${s.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`font-mono text-[10px] tracking-widest transition-all duration-300 ${
                isActive
                  ? 'text-electric-300 opacity-100'
                  : 'text-slate-500 opacity-0 group-hover:opacity-100'
              }`}
            >
              {s.label}
            </span>
            {/* Reticle / targeting marker */}
            <span
              className={`relative flex items-center justify-center transition-all duration-300 ${
                isActive ? 'h-3 w-3' : 'h-2 w-2'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 border border-electric-400/40" style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }} />
              )}
              <span
                className={`block transition-all duration-300 ${
                  isActive
                    ? 'h-1.5 w-1.5 bg-electric-400 shadow-[0_0_8px_rgba(11,130,255,0.8)]'
                    : 'h-1 w-1 bg-slate-600 group-hover:bg-electric-500'
                }`}
              />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
