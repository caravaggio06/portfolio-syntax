import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button.jsx';
import Tag from '../components/Tag.jsx';

function Hero({ data }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4
      }
    }
  };

  return (
    <section id="top" className="scroll-mt-24 pt-10 md:pt-12">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-xl shadow-black/50 backdrop-blur-lg md:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <Tag>Senior Fullstack Developer / IT-Consultant</Tag>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              {data.name}
            </h1>
            <p className="text-sm text-slate-300 md:text-base">
              {data.tagline}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              {data.location}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button as="a" href="#projects">
                Projekte ansehen
              </Button>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {data.socials?.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="underline-offset-2 hover:text-gold-400 hover:underline"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-40 md:flex-shrink-0">
            <div className="mx-auto h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-full border border-gold-500/60 bg-gradient-to-br from-gold-500/30 via-slate-900 to-slate-900 shadow-lg shadow-black/50">
              {data.portrait && (
                <img
                  src={data.portrait}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-400">
              Tech-Stack: PHP, JavaScript, DevOps, AI-gestütztes Development
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
