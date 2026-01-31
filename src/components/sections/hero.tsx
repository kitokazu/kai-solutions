"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

// Floating shape component
function FloatingShape({
  className,
  delay = 0,
  duration = 20,
  size,
  gradient,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  size: string;
  gradient: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: gradient,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.1, 1],
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Floating geometric element (sharp shapes)
function FloatingGeometric({
  className,
  delay = 0,
  duration = 15,
  shape = "square",
}: {
  className?: string;
  delay?: number;
  duration?: number;
  shape?: "square" | "circle" | "triangle";
}) {
  const shapeStyles = {
    square: "rounded-lg rotate-12",
    circle: "rounded-full",
    triangle: "clip-triangle",
  };

  return (
    <motion.div
      className={`absolute border border-kai/20 bg-gradient-to-br from-kai/10 to-transparent backdrop-blur-sm ${shapeStyles[shape]} ${className}`}
      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.05, 1],
        rotate: [0, 10, -5, 0],
        y: [0, -20, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-kai-muted/50 via-background to-background" />

      {/* Floating gradient orbs - background layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <FloatingShape
          className="top-20 right-[20%]"
          size="400px"
          gradient="radial-gradient(circle, oklch(0.45 0.12 152 / 0.15) 0%, transparent 70%)"
          delay={0}
          duration={25}
        />
        <FloatingShape
          className="bottom-40 right-[10%]"
          size="300px"
          gradient="radial-gradient(circle, oklch(0.55 0.1 180 / 0.12) 0%, transparent 70%)"
          delay={2}
          duration={20}
        />
        <FloatingShape
          className="top-1/2 right-[30%]"
          size="250px"
          gradient="radial-gradient(circle, oklch(0.5 0.08 140 / 0.1) 0%, transparent 70%)"
          delay={4}
          duration={22}
        />
      </div>

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

          {/* Right side - Floating geometric shapes */}
          <motion.div
            className="relative hidden lg:block h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main large shape */}
            <FloatingGeometric
              className="w-32 h-32 top-20 right-20"
              shape="square"
              delay={0}
              duration={18}
            />

            {/* Medium shapes */}
            <FloatingGeometric
              className="w-24 h-24 top-40 right-60"
              shape="circle"
              delay={1}
              duration={15}
            />
            <FloatingGeometric
              className="w-20 h-20 bottom-32 right-32"
              shape="square"
              delay={2}
              duration={20}
            />

            {/* Small accent shapes */}
            <FloatingGeometric
              className="w-12 h-12 top-10 right-48"
              shape="circle"
              delay={0.5}
              duration={12}
            />
            <FloatingGeometric
              className="w-16 h-16 bottom-48 right-8"
              shape="square"
              delay={3}
              duration={16}
            />
            <FloatingGeometric
              className="w-10 h-10 top-60 right-12"
              shape="circle"
              delay={1.5}
              duration={14}
            />

            {/* Decorative lines */}
            <motion.div
              className="absolute top-32 right-40 w-px h-24 bg-gradient-to-b from-kai/30 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-40 right-52 w-20 h-px bg-gradient-to-r from-kai/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />

            {/* Floating dots */}
            {[
              { top: 25, right: 15, duration: 3.5 },
              { top: 45, right: 45, duration: 4.2 },
              { top: 35, right: 25, duration: 3.8 },
              { top: 65, right: 35, duration: 4.5 },
              { top: 55, right: 55, duration: 3.2 },
              { top: 75, right: 20, duration: 4.0 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-kai/40"
                style={{
                  top: `${dot.top}%`,
                  right: `${dot.right}%`,
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: dot.duration,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
