"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette } from "lucide-react";
import { Container } from "@/components/layout/container";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Custom websites built with React and Next.js. Fast, accessible, and optimized for search engines.",
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description:
      "Full-stack applications that streamline operations. From dashboards to customer portals.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with usability. Prototypes to production-ready systems.",
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What we do
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            We focus on three core services that help businesses succeed online.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-kai/30"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-kai-muted text-kai">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
