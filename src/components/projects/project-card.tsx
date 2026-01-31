"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-lg border border-border bg-card transition-colors duration-200 hover:border-kai/30"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden bg-muted"
          style={{ viewTransitionName: `project-image-${project.id}` }}
        >
          {project.images.hero ? (
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-kai-muted to-muted">
              <span className="text-4xl font-semibold text-kai/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{project.client}</span>
            <span className="text-border">·</span>
            <span className="capitalize">{project.category.replace("-", " ")}</span>
          </div>

          <h3
            className="mt-2 text-lg font-medium tracking-tight"
            style={{ viewTransitionName: `project-title-${project.id}` }}
          >
            {project.title}
          </h3>

          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
