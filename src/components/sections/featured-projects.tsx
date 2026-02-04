"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/50 grain">
      {/* Pattern */}
      <div className="absolute inset-0 leaf-pattern opacity-30" />

      <Container className="relative">
        <motion.div
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-sm font-medium text-primary mb-2">
              Selected Work
            </p>
            <h2 className="text-foreground mb-3">Projects we&apos;ve built </h2>
            <p className="text-muted-foreground max-w-lg">
              Each project represents a unique challenge solved with care,
              modern technology, and clean code.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
