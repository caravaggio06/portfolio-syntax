import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';

function Experience({ items }) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -16 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25
      }
    }
  };

  return (
    <Section
      id="experience"
      eyebrow="Werdegang"
      title="Berufserfahrung (Auswahl)"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-3"
      >
        {items.map((exp) => (
          <motion.div key={exp.when + exp.org} variants={item}>
            <Card className="flex gap-4">
              <div className="mt-1 w-28 flex-shrink-0 text-xs font-medium text-gold-400">
                {exp.when}
              </div>
              <div className="space-y-1 text-sm">
                <div className="font-semibold text-slate-50">
                  {exp.title}{' '}
                  <span className="text-slate-400">
                    · {exp.org}
                  </span>
                </div>
                <p className="text-slate-300">{exp.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default Experience;
