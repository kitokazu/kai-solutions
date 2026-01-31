# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kai Solutions portfolio website - a digital agency site built with Next.js 16, featuring View Transitions API for smooth page navigation.

## Commands

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animations**: Framer Motion + View Transitions API
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode)

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with View Transitions
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── projects/          # Projects section
│   │   ├── page.tsx       # Projects listing
│   │   └── [slug]/page.tsx # Project detail (dynamic)
│   ├── contact/page.tsx   # Contact form page
│   └── api/contact/route.ts # Contact form API endpoint
├── components/
│   ├── ui/                # shadcn/ui + custom UI primitives
│   ├── layout/            # Header, Footer, Container
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   └── projects/          # ProjectCard, ProjectGrid, ProjectDetail
└── lib/
    ├── data/              # Static data (projects.ts)
    ├── utils.ts           # Utility functions (cn helper)
    └── validations/       # Zod schemas for forms
```

### Key Patterns

**View Transitions**: Use `view-transition-name` CSS property for shared element transitions between pages. Project cards should have unique transition names: `view-transition-name: project-image-{id}`.

**Component Organization**:
- `ui/` - Reusable, stateless UI primitives (Button, Card, Input)
- `layout/` - App shell components
- `sections/` - Homepage and page-specific sections
- `projects/` - Project-related compound components

**Data Layer**: Project data lives in `src/lib/data/projects.ts` with the following interface:

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'website' | 'web-app' | 'e-commerce' | 'design';
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  features: string[];
  results?: string;
  techStack: string[];
  images: { hero: string; gallery: string[] };
  liveUrl?: string;
  githubUrl?: string;
  timeline: string;
  role: string;
  date: string;
}
```

## Design System

### Colors (Kai Theme)
Forest green brand colors defined in `globals.css`:
- `--kai`: Primary forest green (oklch 0.45 0.12 152)
- `--kai-foreground`: Text on kai backgrounds
- `--kai-muted`: Subtle green for backgrounds/accents

Usage:
- `bg-kai` / `text-kai` for primary brand elements
- `bg-kai-muted` for subtle accent backgrounds
- `border-kai/30` for hover states on cards/buttons

### Typography
- Font: Geist Sans (headings + body)
- Hero: 4xl-6xl (responsive), Body: base-lg
- Line height: relaxed for body text
- Font weight: semibold for headings, medium for UI elements

### Spacing
Uses 4pt/8pt scale consistently:
- Section padding: py-24 lg:py-32 (96px / 128px)
- Component gaps: gap-6 (24px) or gap-8 (32px)
- Card padding: p-5 or p-6

### Layout
- Max-width container: max-w-7xl (1280px)
- Container padding: px-4 sm:px-6 lg:px-8
- Mobile-first responsive design

### Breakpoints
- Mobile: default
- md: 768px
- lg: 1024px

### Animation
- Duration: 200ms for interactions, 400ms for content reveals
- Easing: ease-out for entrances
- Motion values: y: 16 for subtle slide-up reveals
- Hover: scale-[1.02] max, border color transitions

## View Transitions CSS

Add to `globals.css`:
```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: fade-out 0.3s ease-out;
}

::view-transition-new(root) {
  animation: fade-in 0.3s ease-in;
}
```

## Performance Requirements

- Lighthouse: 95+ all metrics
- LCP: <2.5s
- CLS: <0.1
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content

## Accessibility Requirements

- Semantic HTML with proper heading hierarchy
- WCAG AA color contrast minimum
- Keyboard navigation for all interactive elements
- Alt text for all images
- Proper form labels and ARIA attributes
