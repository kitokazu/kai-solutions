"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          className="rounded-lg bg-kai px-8 py-16 sm:px-12 lg:px-16 lg:py-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-kai-foreground sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mt-4 text-kai-foreground/80 leading-relaxed">
              We&apos;d like to hear about what you&apos;re building.
              Get in touch and let&apos;s discuss how we can help.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-6 text-base font-medium rounded-md bg-kai-foreground text-kai transition-colors duration-200 hover:bg-kai-foreground/90"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
