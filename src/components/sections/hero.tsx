"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-kai-muted/40 via-background to-background" />

      <Container className="py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            We build digital solutions that grow your business
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            Kai Solutions crafts modern websites and web applications.
            From strategy to launch, we help businesses establish a strong digital presence.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View our work
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
