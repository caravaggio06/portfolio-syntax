import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';

function Contact({ contact }) {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const cardVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.3
      }
    }
  };

  return (
    <Section id="contact" eyebrow="Kontakt" title="Lass uns sprechen">
      <motion.div
        variants={cardVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      >
        <Card>
          <p className="text-sm text-slate-300">
            Direktkontakt für Projekte, Freelance-Mandate oder Beratung:
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <div>
              <span className="text-slate-400">E-Mail: </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-gold-400 underline-offset-2 hover:underline"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <span className="text-slate-400">Telefon: </span>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="text-gold-400 underline-offset-2 hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </Card>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-gold-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-gold-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300">
                Nachricht
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-50 outline-none ring-0 transition focus:border-gold-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit">Nachricht senden</Button>
              {submitted && (
                <p className="text-[11px] text-slate-400">
                  Formular ohne Backend – Nachricht wird nicht gespeichert.
                </p>
              )}
            </div>
          </form>
        </Card>
      </motion.div>
    </Section>
  );
}

export default Contact;
