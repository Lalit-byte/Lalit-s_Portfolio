# Portfolio Architecture: Next.js Application Architecture

## 1. Architectural Principles
* **Component-Driven & Modular:** Decoupled UI components adhering to single responsibility.
* **Content/Code Separation:** All personal information, projects, skills, and links reside in centralized, typed data files (`src/data/`), making updates effortless without modifying JSX.
* **Server-First with Client Leaves:** Maximize React Server Components (RSC) for zero-bundle-size static content, reserving `'use client'` strictly for interactive leaf components (navbar, animations, contact form).
* **High Performance & Accessibility:** 100% responsive, optimized fonts (`next/font`), zero CLS (Cumulative Layout Shift), and fast time-to-interactive.

---

## 2. Next.js App Router Structure
The application leverages Next.js App Router (`src/app/`):
* `src/app/layout.tsx`: Root layout with font injection, theme providers, metadata, and global floating navigation.
* `src/app/page.tsx`: Single-page seamless experience combining Hero, About, Skills, Projects, Experience, Education, and Contact sections.
* `src/app/not-found.tsx`: Custom, styled 404 page with quick navigation back to home.
* `src/app/robots.ts` & `src/app/sitemap.ts`: Dynamic SEO crawlers generation.
* `src/app/api/contact/route.ts`: Optional serverless route for handling contact form submissions securely.

---

## 3. Component Architecture

```
src/components/
├── layout/              # Structural wrappers
│   ├── Preloader.tsx    # Fast, minimal entry preloader (Sumit Chaubey reference)
│   ├── Navbar.tsx       # Floating glassmorphic header with <lalit.dev />
│   └── Footer.tsx       # Minimalist footer with local time & credits
│
├── sections/            # Feature section containers (in exact order)
│   ├── Hero.tsx         # Headline, status beacon, bio pitch, primary CTAs
│   ├── TechStack.tsx    # 6-column squircle grid matching uploaded screenshot
│   ├── CurrentStatus.tsx# MCA progression @ DIT University, active AI focus
│   ├── Experience.tsx   # Work Experience (Technogetic Pvt Ltd. timeline card)
│   ├── Projects.tsx     # Featured Projects (AI Fitness, Resume Craft, etc.)
│   ├── EducationGlories.tsx # Merged: Academic milestones & NIELIT certs + Sphurti Basketball honors
│   ├── GitHubHeatmap.tsx# 52-week activity calendar for @Lalit-byte (2nd to last)
│   ├── FolderNameAnimation.tsx # Interactive blue folder name physics ("Lalit Bisht")
│   └── ContactMailWindow.tsx   # macOS Mail compose window + taped yellow sticky note (Last)
│
└── ui/                  # Atomic & reusable primitives
    ├── SectionFrame.tsx # 60%–65vw width wrapper with top & bottom horizontal divider lines
    ├── MacOSDock.tsx    # 8-icon interactive macOS dock with magnification physics & scroll-morphing right stack
    ├── Button.tsx       # Primary solid white, outline, and ghost variants
    ├── Card.tsx         # Zinc surface container with subtle border
    ├── Badge.tsx        # Tech stack pills and status chips
    ├── SectionHeading.tsx # Standardized section title & kicker
    └── Modal.tsx        # Resume PDF viewer dialog
```

---

## 4. Data Management Approach
To ensure the portfolio can be easily maintained and updated when Lalit adds new projects or skills, content is isolated into typed TypeScript configuration files:

```typescript
// src/data/portfolio.ts
export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack & AI' | 'Web Apps' | 'Data & Python' | 'Systems & GUI';
  description: string;
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; icon: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bioSummary: string;
}
```

---

## 5. Styling Strategy
* **Tailwind CSS:** Modern utility-first CSS framework configured with semantic tokens.
* **CSS Variables:** Dark/neutral color schemes configured in `globals.css` for easy theme tuning.
* **Class Variance Authority (`cva`) & `tailwind-merge` (`cn` helper):** Deterministic class merging for reusable UI components.

---

## 6. Animation Architecture
* **Framer Motion (`framer-motion`):**
  * Viewport scroll triggers using `whileInView={{ opacity: 1, y: 0 }}`.
  * Spring-physics transitions for natural motion without stiffness.
  * Micro-interactions: Card scale (`whileHover={{ y: -4 }}`), button magnetic effect, and smooth tab switching.
  * Accessibility: Respects `prefers-reduced-motion` to disable animations automatically for sensitive users.

---

## 7. Asset & Image Organization
* **Images:** Placed in `/public/images/projects/` and `/public/images/profile/`. Rendered using `next/image` with explicit aspect ratios, priority flags for hero assets, and WebP/AVIF auto-conversion.
* **Icons:** Imported as tree-shaken SVG components directly from `lucide-react`.

---

## 8. SEO & Social Architecture
* **Metadata API:** Configured in `src/app/layout.tsx` including `title`, `description`, `keywords`, `authors`, and canonical URL.
* **OpenGraph & Twitter Cards:** Custom social share preview images (`/public/og-image.png`).
* **Structured Data (JSON-LD):** Embedding schema.org `Person` and `WebSite` metadata to help Google and search engines index skills, social profiles, and credentials accurately.

---

## 9. Proposed Project Directory Structure

```
Lalit_Portfolio/
├── docs/                        # Complete project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── REFERENCE_ANALYSIS.md
│   ├── PORTFOLIO_ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── WEBSITE_STRUCTURE.md
│   ├── TECH_STACK.md
│   ├── DEVELOPMENT_ROADMAP.md
│   └── REQUIREMENTS.md
├── public/                      # Static assets
│   ├── images/
│   │   ├── projects/
│   │   └── avatar.jpg
│   ├── resume.pdf
│   ├── og-image.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── api/
│   │       └── contact/route.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── portfolio.ts
│   │   └── navigation.ts
│   ├── lib/
│   │   └── utils.ts             # cn helper (clsx + twMerge)
│   └── types/
│       └── index.ts
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
