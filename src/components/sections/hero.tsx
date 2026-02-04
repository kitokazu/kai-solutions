"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { useEffect, useState } from "react";

// Static code lines - no dynamic generation to avoid hydration issues
const codeLines = [
  {
    lineNum: "01",
    parts: [
      { text: "<", type: "bracket" },
      { text: "section", type: "tag" },
      { text: " ", type: "plain" },
      { text: "className", type: "attr" },
      { text: "=", type: "plain" },
      { text: '"hero"', type: "string" },
      { text: ">", type: "bracket" },
    ],
  },
  {
    lineNum: "02",
    parts: [
      { text: "  <", type: "bracket" },
      { text: "h1", type: "tag" },
      { text: ">", type: "bracket" },
      { text: "Welcome to", type: "plain" },
    ],
  },
  {
    lineNum: "03",
    parts: [
      { text: "    <", type: "bracket" },
      { text: "span", type: "tag" },
      { text: " ", type: "plain" },
      { text: "className", type: "attr" },
      { text: "=", type: "plain" },
      { text: '"gradient"', type: "string" },
      { text: ">", type: "bracket" },
    ],
  },
  { lineNum: "04", parts: [{ text: "      Your Brand", type: "plain" }] },
  {
    lineNum: "05",
    parts: [
      { text: "    </", type: "bracket" },
      { text: "span", type: "tag" },
      { text: ">", type: "bracket" },
    ],
  },
  {
    lineNum: "06",
    parts: [
      { text: "  </", type: "bracket" },
      { text: "h1", type: "tag" },
      { text: ">", type: "bracket" },
    ],
  },
  {
    lineNum: "07",
    parts: [
      { text: "  <", type: "bracket" },
      { text: "Button", type: "component" },
      { text: " ", type: "plain" },
      { text: "onClick", type: "attr" },
      { text: "={", type: "plain" },
      { text: "handleClick", type: "function" },
      { text: "}>", type: "plain" },
    ],
  },
  { lineNum: "08", parts: [{ text: "    Get Started", type: "plain" }] },
  {
    lineNum: "09",
    parts: [
      { text: "  </", type: "bracket" },
      { text: "Button", type: "component" },
      { text: ">", type: "bracket" },
    ],
  },
  {
    lineNum: "10",
    parts: [
      { text: "</", type: "bracket" },
      { text: "section", type: "tag" },
      { text: ">", type: "bracket" },
    ],
  },
];

const typeColors: Record<string, string> = {
  bracket: "text-gray-400",
  tag: "text-[#F472B6]",
  attr: "text-[#5EEAD4]",
  string: "text-[#4ADE80]",
  component: "text-[#FB923C]",
  function: "text-[#FBBF24]",
  plain: "text-gray-300",
};

// Hydration-safe code editor
function CodeEditor() {
  const [mounted, setMounted] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < codeLines.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 350);

    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <motion.div
      className="w-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="code-window rounded-xl overflow-hidden shadow-2xl">
        {/* Editor header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1512] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="ml-3 text-xs text-gray-500 font-mono">page.tsx</span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-500/80">Live</span>
          </div>
        </div>

        {/* Code content */}
        <div className="p-4 font-mono text-sm min-h-[280px]">
          {codeLines.map((line, index) => (
            <div
              key={line.lineNum}
              className={`flex leading-7 transition-all duration-300 ${
                mounted && index < visibleLines ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-8 text-gray-600 select-none text-xs">
                {line.lineNum}
              </span>
              <span className="flex-1">
                {line.parts.map((part, partIndex) => (
                  <span key={partIndex} className={typeColors[part.type]}>
                    {part.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
          {/* Cursor */}
          {mounted && visibleLines >= codeLines.length && (
            <div className="flex leading-7">
              <span className="w-8" />
              <span className="w-2 h-5 bg-white/70 cursor" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Website preview that builds progressively
function WebsitePreview() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timers: NodeJS.Timeout[] = [];
    for (let i = 1; i <= 5; i++) {
      timers.push(setTimeout(() => setStage(i), i * 600 + 500));
    }
    return () => timers.forEach(clearTimeout);
  }, [mounted]);

  return (
    <motion.div
      className="w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="rounded-xl border border-border bg-white shadow-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-gray-50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 ml-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-border max-w-[200px]">
              <div className="w-3 h-3 rounded-full bg-primary/30" />
              <span className="text-xs text-muted-foreground">
                yourbrand.com
              </span>
            </div>
          </div>
        </div>

        {/* Browser content */}
        <div className="p-6 min-h-[260px] bg-gradient-to-b from-white to-gray-50/50 relative">
          {/* Nav */}
          <div
            className={`flex items-center justify-between mb-6 transition-all duration-500 ${mounted && stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
          >
            <div className="w-16 h-5 rounded bg-primary/20" />
            <div className="flex gap-3">
              <div className="w-10 h-3 rounded bg-gray-200" />
              <div className="w-10 h-3 rounded bg-gray-200" />
              <div className="w-10 h-3 rounded bg-gray-200" />
            </div>
          </div>

          {/* Heading */}
          <div
            className={`mb-3 transition-all duration-500 ${mounted && stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            <div className="w-40 h-5 rounded bg-gray-200 mb-2" />
            <div
              className={`w-56 h-6 rounded transition-all duration-700 ${mounted && stage >= 3 ? "bg-gradient-to-r from-primary to-primary/70" : "bg-gray-200"}`}
            />
          </div>

          {/* Description */}
          <div
            className={`space-y-2 mb-5 transition-all duration-500 ${mounted && stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            <div className="w-full h-2.5 rounded bg-gray-100" />
            <div className="w-4/5 h-2.5 rounded bg-gray-100" />
          </div>

          {/* Button */}
          <div
            className={`flex gap-3 transition-all duration-500 ${mounted && stage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            <div
              className={`w-24 h-9 rounded-md transition-colors duration-500 ${mounted && stage >= 4 ? "bg-primary" : "bg-primary/20"}`}
            />
            <div className="w-24 h-9 rounded-md border border-border" />
          </div>

          {/* Feature cards */}
          <div
            className={`mt-6 grid grid-cols-3 gap-2 transition-all duration-500 ${mounted && stage >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="p-3 rounded-lg border border-border bg-white"
              >
                <div className="w-5 h-5 rounded bg-primary/15 mb-2" />
                <div className="w-full h-2 rounded bg-gray-100 mb-1" />
                <div className="w-3/4 h-2 rounded bg-gray-100" />
              </div>
            ))}
          </div>

          {/* Sparkle on complete */}
          {mounted && stage >= 5 && (
            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-5 h-5 text-accent" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Decorative bonsai illustration
function BonsaiDecoration() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute -bottom-20 -right-20 w-80 h-80 text-primary/[0.03]"
      fill="currentColor"
    >
      <ellipse cx="100" cy="180" rx="40" ry="8" />
      <rect x="70" y="165" width="60" height="18" rx="3" />
      <path
        d="M100 165 C100 140 95 120 90 100 C85 80 80 60 90 45 C100 30 110 25 100 10"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="50" rx="35" ry="20" opacity="0.5" />
      <ellipse cx="100" cy="20" rx="40" ry="18" opacity="0.5" />
      <ellipse cx="140" cy="60" rx="30" ry="18" opacity="0.5" />
      <ellipse cx="50" cy="90" rx="30" ry="16" opacity="0.5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background */}
      <div className="absolute inset-0 leaf-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] organic-shape" />
      <div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] organic-shape"
        style={{ animationDelay: "-5s" }}
      />

      {/* Decorative bonsai */}
      <BonsaiDecoration />

      <Container className="py-24 lg:py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-secondary/50 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Web Development Agency
              </span>
            </motion.div>

            <motion.h1
              className="text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We cultivate <span className="gradient-text">digital growth</span>{" "}
              for your business
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Starting a business is hard enough. Getting online shouldn't be.
              We remove the technical barriers—building modern websites and
              AI-powered solutions so you can focus on what matters: growing
              your business.
            </motion.p>

            {/* Tech tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {["Next.js", "React", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-white text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
              >
                View our work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-12 pt-8 border-t border-border grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { value: "10+", label: "Projects shipped" },
                { value: "3+", label: "Years building" },
                { value: "100%", label: "Customer Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Code + Preview */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Code editor - behind */}
              <div className="absolute -left-4 top-0 z-10">
                <CodeEditor />
              </div>

              {/* Website preview - front */}
              <div className="relative z-20 ml-24 mt-20">
                <WebsitePreview />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
