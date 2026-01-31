"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Vercel",
  "Figma",
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32 border-y border-border bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Technologies
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            We use modern, reliable tools to build fast and maintainable products.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
