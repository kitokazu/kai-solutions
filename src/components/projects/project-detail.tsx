"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import type { Project } from "@/lib/data/projects";

interface ProjectDetailProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetail({ project, prevProject, nextProject }: ProjectDetailProps) {
  return (
    <article className="py-24 lg:py-32">
      <Container>
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <motion.div
              className="flex items-center gap-2 text-sm text-slate-500"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span>{project.client}</span>
              <span className="text-slate-300">·</span>
              <span className="capitalize">{project.category.replace("-", " ")}</span>
            </motion.div>

            {/* Title - View Transitions handles the animation */}
            <h1
              className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              style={{ viewTransitionName: `project-title-${project.id}` }}
            >
              {project.title}
            </h1>

            <motion.p
              className="mt-6 text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {project.fullDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    View live site
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">
                    View source
                    <Github className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
            </motion.div>
          </div>

          {/* Hero Image - View Transitions handles the animation */}
          <div
            className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100"
            style={{ viewTransitionName: `project-image-${project.id}` }}
          >
            {project.images.hero ? (
              <Image
                src={project.images.hero}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100">
                <span className="text-6xl font-semibold text-emerald-200">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Project details grid */}
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-500">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Role</span>
            </div>
            <p className="mt-2 font-medium text-slate-900">{project.role}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Timeline</span>
            </div>
            <p className="mt-2 font-medium text-slate-900">{project.timeline}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <p className="mt-2 font-medium text-slate-900">
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-slate-500">
              <span className="text-sm font-medium">Client</span>
            </div>
            <p className="mt-2 font-medium text-slate-900">{project.client}</p>
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-slate-900">The Challenge</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl border border-slate-200 bg-white p-6 lg:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-slate-900">The Solution</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-slate-900">Key Features</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-sm text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Results */}
        {project.results && (
          <motion.div
            className="mt-16 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 p-6 lg:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="text-xl font-semibold text-emerald-800">Results</h2>
            <p className="mt-4 text-lg text-emerald-900">{project.results}</p>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold text-slate-900">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="mt-24 flex items-center justify-between border-t border-slate-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 text-slate-500 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div>
                <div className="text-xs uppercase tracking-wider">Previous</div>
                <div className="mt-1 font-medium text-slate-900">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right text-slate-500 hover:text-emerald-600 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wider">Next</div>
                <div className="mt-1 font-medium text-slate-900">{nextProject.title}</div>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </Container>
    </article>
  );
}
