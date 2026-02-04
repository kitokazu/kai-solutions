"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";

const principles = [
  {
    number: "01",
    title: "Strong Roots",
    description: "Every project starts with understanding. We learn your business, goals, and users before writing code.",
  },
  {
    number: "02",
    title: "Intentional Growth",
    description: "No bloated features, no unnecessary complexity. Just what serves your purpose and helps you succeed.",
  },
  {
    number: "03",
    title: "Patient Craft",
    description: "Quality takes care. We build solutions that mature gracefully and scale with your business.",
  },
  {
    number: "04",
    title: "Clear Communication",
    description: "No jargon, no surprises. You'll always know where we stand and what's happening with your project.",
  },
];

export function Philosophy() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-5">
        <Logo size={300} className="text-white" />
      </div>
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/5 rounded-full" />

      <Container className="relative">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary-foreground/60 mb-2">Our Philosophy</p>
          <h2 className="text-primary-foreground mb-4">
            The art of digital cultivation
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">
            Like the ancient art of bonsai, great digital products require patience,
            precision, and a deep understanding of what helps things grow.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-4xl font-light text-white/20 mb-4 block">
                {principle.number}
              </span>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
