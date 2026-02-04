"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden grain">
      <div className="absolute inset-0 leaf-pattern opacity-50" />

      <Container className="relative">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#143D32]" />

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 opacity-10">
            <Logo size={200} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <motion.p
                className="text-sm font-medium text-primary-foreground/60 mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Ready to grow?
              </motion.p>

              <motion.h2
                className="text-primary-foreground mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Let&apos;s grow something great together
              </motion.h2>

              <motion.p
                className="text-lg text-primary-foreground/70 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Whether you need a new website, a web application, or strategic
                guidance—we&apos;re here to help your business flourish online.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
                >
                  Start a project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:hello@bonsaidigital.jp"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-white/10"
                >
                  <Mail className="w-4 h-4" />
                  hello@bonsaidigital.jp
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
