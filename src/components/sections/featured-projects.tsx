"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-24 lg:py-32 border-y border-border bg-muted/30">
      <Container>
        <motion.div
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-3 text-muted-foreground">
              Recent projects we&apos;ve delivered for our clients.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="secondary" size="sm">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
