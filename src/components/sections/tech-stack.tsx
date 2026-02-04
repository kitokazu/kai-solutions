"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Vercel", category: "Deployment" },
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 leaf-pattern opacity-30" />

      <Container className="relative">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary mb-2">Our Tools</p>
          <h2 className="text-foreground mb-4">
            Modern tech, timeless quality
          </h2>
          <p className="text-muted-foreground">
            We use reliable, cutting-edge tools to build fast, scalable, and maintainable products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group p-5 rounded-xl border border-border bg-white text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <p className="font-semibold text-foreground mb-1">{tech.name}</p>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
