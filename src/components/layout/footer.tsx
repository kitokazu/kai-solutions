import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "./container";
import { Logo } from "./logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Website Development",
  "Web Applications",
  "Digital Strategy",
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <Logo size={32} className="text-primary" />
              <span className="text-lg font-semibold text-foreground">
                Bonsai Digital
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Web development agency cultivating digital growth. Based in Japan, serving clients worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:border-primary/20 hover:text-primary hover:bg-secondary"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:hello@bonsaidigital.jp"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@bonsaidigital.jp
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Tokyo, Japan</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/20 hover:bg-secondary"
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bonsai Digital. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with care in Tokyo
          </p>
        </div>
      </Container>
    </footer>
  );
}
