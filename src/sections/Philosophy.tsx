import { motion } from 'framer-motion';
import { philosophy } from '@/data/portfolio';

export default function Philosophy() {
  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 py-32 md:py-40">
      <div className="space-y-8 md:space-y-12">
        {philosophy.map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span
              className={`font-display text-5xl font-bold tracking-tight md:text-7xl ${
                i === philosophy.length - 1
                  ? 'text-gradient'
                  : 'text-slate-200'
              }`}
              style={i === philosophy.length - 1 ? { textShadow: '0 0 30px rgba(11,130,255,0.3)' } : undefined}
            >
              {word}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 border-l-2 border-electric-500/40 pl-6"
      >
        <p className="text-lg italic leading-relaxed text-slate-400 md:text-xl">
          "The goal isn't to know everything.
          <br />
          The goal is to keep becoming better at building."
        </p>
      </motion.div>
    </section>
  );
}
