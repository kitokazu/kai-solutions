import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Container } from "./container";
import { Logo } from "./logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Website Development",
  "Web Applications",
  "UI/UX Design",
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4 lg:py-16">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
              <Logo size={24} className="text-emerald-600" />
              <span>Bonsai Digital</span>
            </Link>
            <p className="mt-3 text-sm text-slate-600 max-w-xs leading-relaxed">
              Digital solutions that help businesses grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-slate-900">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors duration-200 hover:text-emerald-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-slate-900">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-slate-600">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium text-slate-900">Connect</h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors duration-200 hover:text-emerald-600"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 py-6">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Bonsai Digital
          </p>
        </div>
      </Container>
    </footer>
  );
}
