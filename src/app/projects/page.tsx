"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden grain">
        <div className="absolute inset-0 leaf-pattern opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] organic-shape" />

        <Container className="relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary mb-2">Our Work</p>
            <h1
              className="text-foreground mb-6"
              style={{ viewTransitionName: "projects-title" }}
            >
              Projects we&apos;ve Built
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each project represents a unique challenge solved with care,
              modern technology, and clean code. Real solutions for real
              businesses.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-16 lg:py-24 bg-white min-h-[50vh]">
        <Container>
          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {["All", "Website", "Web App", "E-commerce", "Design"].map(
              (filter, index) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ),
            )}
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {projects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects to display yet.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
