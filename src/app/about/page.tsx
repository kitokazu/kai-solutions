"use client";

import { motion } from "framer-motion";
import { Check, MapPin, Zap, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";

const values = [
  {
    icon: Zap,
    title: "Ship Fast",
    description: "We move quickly without sacrificing quality. Your time matters.",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Your success is our success. We're invested in your outcomes.",
  },
  {
    icon: Check,
    title: "No BS",
    description: "Clear communication, honest timelines, transparent pricing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden grain">
        <div className="absolute inset-0 leaf-pattern opacity-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] organic-shape" />

        <Container className="relative">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary mb-2">About Us</p>
            <h1 className="text-foreground mb-6">
              Cultivating digital growth for businesses
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bonsai Digital is a web development agency focused on helping businesses
              establish and thrive online. We combine technical expertise with a
              genuine understanding of what businesses need to succeed.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-primary mb-2">Our Story</p>
              <h2 className="text-foreground mb-6">
                Where patience meets precision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Like the art of bonsai, great digital products require patience,
                  care, and a long-term perspective. We started Bonsai Digital to
                  bring this philosophy to web development.
                </p>
                <p>
                  Too many businesses struggle to navigate the digital landscape.
                  The technical jargon, the overwhelming choices, the fear of getting
                  it wrong—we remove those barriers so you can focus on what you do best.
                </p>
                <p>
                  Based in Japan with roots in America, we bring a global perspective
                  to every project. We understand both markets and help you reach
                  customers wherever they are.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-2xl border border-border bg-muted/30 p-8 relative overflow-hidden">
                {/* Decorative logo */}
                <div className="absolute -top-10 -right-10 opacity-5">
                  <Logo size={200} className="text-primary" />
                </div>

                <div className="grid grid-cols-2 gap-6 relative">
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "3+", label: "Years Experience" },
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "24h", label: "Response Time" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    >
                      <p className="text-3xl font-semibold text-primary mb-1">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30 grain">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-primary mb-2">Our Values</p>
            <h2 className="text-foreground mb-4">How we work</h2>
            <p className="text-muted-foreground">
              Simple principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-2xl border border-border bg-white text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-primary mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-primary mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-foreground mb-4">Based in Japan, working globally</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're headquartered in Tokyo but work with clients around the world.
              Whether you're in Japan, the US, or anywhere else—we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Tokyo, Japan
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                US Clients Welcome
              </span>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
