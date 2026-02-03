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
    <section className="py-24 lg:py-32 bg-slate-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What we do
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl">
            We focus on three core services that help businesses succeed online.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-emerald-200 hover:shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
