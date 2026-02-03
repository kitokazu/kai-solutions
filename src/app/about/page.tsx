"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        {/* Page header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We&apos;re a small team passionate about building exceptional digital
            experiences that help businesses grow.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold tracking-tight">Our Approach</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe in building things the right way. That means clean code,
              thoughtful design, and a focus on performance and accessibility. Every
              project starts with understanding your goals and ends with a solution
              that exceeds expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold tracking-tight">What We Do</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From concept to launch, we handle the full spectrum of web development.
              Custom websites, web applications, e-commerce platforms, and design
              systems. We use modern technologies to build fast, scalable, and
              maintainable solutions.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold tracking-tight">Our Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Quality First",
                description:
                  "We don't cut corners. Every line of code and every design decision reflects our commitment to excellence.",
              },
              {
                title: "Clear Communication",
                description:
                  "No jargon, no surprises. We keep you informed throughout the process and make sure you understand what we're building.",
              },
              {
                title: "Long-term Thinking",
                description:
                  "We build solutions that scale. Your investment today should continue to pay dividends as your business grows.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
