export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "website" | "web-app" | "e-commerce" | "design";
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  features: string[];
  results?: string;
  techStack: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
  timeline: string;
  role: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "modern-ecommerce-platform",
    title: "Modern E-commerce Platform",
    client: "StyleHub",
    category: "e-commerce",
    description:
      "A fast, conversion-optimized online store with seamless checkout and inventory management.",
    fullDescription:
      "StyleHub needed a complete overhaul of their online presence. We built a modern e-commerce platform that increased their conversion rate by 40% and reduced cart abandonment significantly.",
    challenge:
      "The existing platform was slow, difficult to navigate, and had a complicated checkout process that led to high cart abandonment rates.",
    solution:
      "We designed and developed a streamlined shopping experience with lightning-fast page loads, intuitive navigation, and a simplified one-page checkout process.",
    features: [
      "One-page checkout",
      "Real-time inventory sync",
      "Advanced filtering and search",
      "Wishlist and save for later",
      "Mobile-first responsive design",
    ],
    results: "40% increase in conversion rate, 25% reduction in cart abandonment",
    techStack: ["Next.js", "TypeScript", "Stripe", "Supabase", "Tailwind CSS"],
    images: {
      hero: "",
      gallery: [],
    },
    liveUrl: "https://example.com",
    timeline: "3 months",
    role: "Design & Development",
    date: "2025-10",
  },
  {
    id: "2",
    slug: "saas-dashboard",
    title: "Analytics Dashboard",
    client: "DataFlow Inc",
    category: "web-app",
    description:
      "A comprehensive analytics dashboard for tracking business metrics and KPIs in real-time.",
    fullDescription:
      "DataFlow needed a centralized dashboard to help their clients visualize and understand their business data. We created an intuitive, real-time analytics platform.",
    challenge:
      "Clients were struggling to make sense of their data spread across multiple platforms and spreadsheets.",
    solution:
      "We built a unified dashboard that aggregates data from multiple sources and presents it through beautiful, interactive visualizations.",
    features: [
      "Real-time data updates",
      "Custom report builder",
      "Interactive charts and graphs",
      "Export to PDF/Excel",
      "Team collaboration features",
    ],
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    images: {
      hero: "",
      gallery: [],
    },
    timeline: "4 months",
    role: "Full-stack Development",
    date: "2025-08",
  },
  {
    id: "3",
    slug: "creative-agency-website",
    title: "Creative Agency Portfolio",
    client: "Artisan Creative",
    category: "website",
    description:
      "A stunning portfolio website showcasing creative work with smooth animations and transitions.",
    fullDescription:
      "Artisan Creative wanted a portfolio that matched their creative excellence. We delivered a visually striking website with fluid animations.",
    challenge:
      "The agency needed a website that would stand out in a crowded market and truly showcase their creative capabilities.",
    solution:
      "We crafted a unique, animation-rich website with custom interactions that tell the agency's story in an engaging way.",
    features: [
      "Custom scroll animations",
      "Video backgrounds",
      "Case study templates",
      "Contact form integration",
      "CMS for easy updates",
    ],
    techStack: ["Next.js", "Framer Motion", "Sanity CMS", "Tailwind CSS"],
    images: {
      hero: "",
      gallery: [],
    },
    liveUrl: "https://example.com",
    timeline: "2 months",
    role: "Design & Development",
    date: "2025-06",
  },
  {
    id: "4",
    slug: "mobile-banking-app",
    title: "Mobile Banking Interface",
    client: "FinTech Startup",
    category: "design",
    description:
      "A complete UI/UX redesign for a mobile banking application focused on simplicity and trust.",
    fullDescription:
      "This fintech startup needed a fresh, trustworthy design for their mobile banking app that would appeal to younger demographics.",
    challenge:
      "The existing app felt outdated and complicated, leading to poor user retention and negative reviews.",
    solution:
      "We redesigned the entire user interface with a focus on clarity, security indicators, and delightful micro-interactions.",
    features: [
      "Biometric authentication flows",
      "Transaction categorization",
      "Spending insights dashboard",
      "Quick transfer shortcuts",
      "Accessibility compliance",
    ],
    techStack: ["Figma", "Prototyping", "User Research", "Design System"],
    images: {
      hero: "",
      gallery: [],
    },
    timeline: "6 weeks",
    role: "UI/UX Design",
    date: "2025-04",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}
