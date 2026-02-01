"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

// Browser mockup component showing a website being built
function BrowserMockup() {
  return (
    <motion.div
      className="relative w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Browser window */}
      <div className="rounded-xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          {/* Address bar */}
          <div className="flex-1 ml-4">
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/60 border border-border/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-3 h-3 rounded-full bg-kai/60" />
              <motion.span
                className="text-xs text-muted-foreground font-mono"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                yourwebsite.com
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Browser content - animated website preview */}
        <div className="p-6 space-y-4 min-h-[320px] bg-gradient-to-b from-background to-muted/20">
          {/* Navigation skeleton */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-20 h-6 rounded bg-kai/20" />
            <div className="flex gap-3">
              <div className="w-12 h-4 rounded bg-muted-foreground/10" />
              <div className="w-12 h-4 rounded bg-muted-foreground/10" />
              <div className="w-12 h-4 rounded bg-muted-foreground/10" />
            </div>
          </motion.div>

          {/* Hero section skeleton */}
          <motion.div
            className="pt-6 space-y-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="w-3/4 h-8 rounded bg-foreground/10" />
            <div className="w-1/2 h-8 rounded bg-kai/30" />
          </motion.div>

          <motion.div
            className="space-y-2 pt-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="w-full h-3 rounded bg-muted-foreground/10" />
            <div className="w-5/6 h-3 rounded bg-muted-foreground/10" />
          </motion.div>

          {/* CTA buttons skeleton */}
          <motion.div
            className="flex gap-3 pt-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="w-24 h-9 rounded-md bg-kai/40" />
            <div className="w-24 h-9 rounded-md border border-border/50 bg-background/50" />
          </motion.div>

          {/* Feature cards skeleton */}
          <motion.div
            className="grid grid-cols-3 gap-3 pt-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="p-3 rounded-lg border border-border/30 bg-background/40 space-y-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + i * 0.1 }}
              >
                <div className="w-6 h-6 rounded bg-kai/20" />
                <div className="w-full h-2 rounded bg-muted-foreground/10" />
                <div className="w-3/4 h-2 rounded bg-muted-foreground/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle glow effect behind browser */}
      <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-kai/10 via-kai/5 to-transparent rounded-2xl blur-2xl" />
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-kai-muted/30 via-background to-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <Container className="py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-kai/20 bg-kai-muted/50 px-3 py-1 text-sm text-kai"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kai opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-kai" />
              </span>
              Now leveraging AI
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              Your digital presence,{" "}
              <span className="text-kai">simplified</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            >
              Starting a business is hard enough. Getting online shouldn&apos;t
              be. We remove the technical barriers—building modern websites and
              AI-powered solutions so you can focus on what matters: growing
              your business.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View our work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right side - Browser mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <BrowserMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
