"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Compass, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom websites built with React and Next.js. Fast, accessible, and optimized to convert visitors into customers.",
    features: [
      "React & Next.js",
      "Responsive Design",
      "SEO Optimized",
      "Performance Focused",
    ],
  },
  {
    icon: Layers,
    title: "Web Applications",
    description:
      "Full-stack applications that streamline your operations. Dashboards, portals, and tools tailored to your workflow.",
    features: [
      "Custom Dashboards",
      "API Development",
      "Database Design",
      "Cloud Hosting",
    ],
  },
  {
    icon: Compass,
    title: "Digital Strategy",
    description:
      "Not sure where to start? We help you navigate the digital landscape and plan your path to online success.",
    features: [
      "Technical Consulting",
      "Platform Selection",
      "Growth Planning",
      "Digital Presence",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Subtle pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-50" />

      <Container className="relative">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary mb-2">What We Do</p>
          <h2 className="text-foreground mb-4">
            Nurturing your digital presence
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We approach each project with care and precision. Three core
            services to help your business thrive online.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-primary" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
