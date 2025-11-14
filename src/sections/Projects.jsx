import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import Tag from '../components/Tag.jsx';
import Button from '../components/Button.jsx';

function Projects({ projects }) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25
      }
    }
  };

  return (
    <Section id="projects" eyebrow="Ausgewählte Arbeiten" title="Projekte">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card>
              {project.image && (
                <div className="mb-4 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900">
                  <div className="h-40 w-full bg-gradient-to-br from-slate-800 to-slate-900" />
                </div>
              )}
              <h3 className="text-base font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {project.link && project.link !== '#' && (
                <div className="mt-4">
                  <Button as="a" href={project.link} target="_blank" rel="noreferrer">
                    Projekt öffnen
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default Projects;
