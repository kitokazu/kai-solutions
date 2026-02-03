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
        className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:border-emerald-200 hover:shadow-lg"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden bg-slate-100"
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
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100">
              <span className="text-4xl font-semibold text-emerald-200">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>{project.client}</span>
            <span className="text-slate-300">·</span>
            <span className="capitalize">{project.category.replace("-", " ")}</span>
          </div>

          <h3
            className="mt-2 text-lg font-medium tracking-tight text-slate-900"
            style={{ viewTransitionName: `project-title-${project.id}` }}
          >
            {project.title}
          </h3>

          <p className="mt-1.5 text-sm text-slate-600 line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
