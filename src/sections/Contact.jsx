// src/sections/Contact.jsx
import { useState } from "react";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import ContactSuccess from "../components/ContactSuccess";

export default function Contact({ contact }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id="contact" title="Kontakt">
      {submitted ? (
        <ContactSuccess
          contact={contact}
          onReset={() => setSubmitted(false)}
        />
      ) : (
        <ContactForm contact={contact} onSubmitted={() => setSubmitted(true)} />
      )}
    </Section>
  );
}
