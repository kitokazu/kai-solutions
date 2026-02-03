"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 min-h-screen">
      <Container>
        {/* Page header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            style={{ viewTransitionName: "projects-title" }}
          >
            Our Work
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A selection of projects we&apos;ve delivered. Each one represents a
            unique challenge solved with thoughtful design and solid engineering.
          </p>
        </motion.div>

        {/* Filter tabs - placeholder for future functionality */}
        <motion.div
          className="mt-10 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {["All", "Website", "Web App", "E-commerce", "Design"].map(
            (filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-200 hover:text-emerald-600"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </motion.div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state - for when there are no projects */}
        {projects.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-slate-300 p-12 text-center">
            <p className="text-slate-500">No projects to display yet.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
