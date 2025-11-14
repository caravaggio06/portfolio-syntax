import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Card from '../components/Card.jsx';
import Tag from '../components/Tag.jsx';

function Skills({ skills }) {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.2 }
    }
  };

  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & Technologien">
      <Card>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill) => (
            <motion.div key={skill} variants={item}>
              <Tag>{skill}</Tag>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </Section>
  );
}

export default Skills;
