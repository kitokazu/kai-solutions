"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";

export default function ContactPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and we&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kai-muted">
                  <Mail className="h-5 w-5 text-kai" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="mt-1 text-muted-foreground">hello@kaisolutions.dev</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kai-muted">
                  <MapPin className="h-5 w-5 text-kai" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="mt-1 text-muted-foreground">Remote-first, worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-kai focus:outline-none focus:ring-1 focus:ring-kai"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-kai focus:outline-none focus:ring-1 focus:ring-kai"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-kai focus:outline-none focus:ring-1 focus:ring-kai resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-kai px-6 text-base font-medium text-kai-foreground transition-colors duration-200 hover:bg-kai/90"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
