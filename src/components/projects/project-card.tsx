"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
      >
        {/* Image */}
        <div
          className="relative aspect-[16/10] overflow-hidden bg-muted"
          style={{ viewTransitionName: `project-image-${project.id}` }}
        >
          {project.images.hero ? (
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <span className="text-5xl font-semibold text-primary/20">
                {project.title.charAt(0)}
              </span>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* View indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm font-medium">View project</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-foreground capitalize">
              {project.category.replace("-", " ")}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span>{project.client}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>{project.date}</span>
          </div>

          <h3
            className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
            style={{ viewTransitionName: `project-title-${project.id}` }}
          >
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
