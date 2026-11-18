# Technology Stack & Architectural Justifications

This document outlines the selected technology stack for Lalit's developer portfolio, detailing why each tool is chosen, its specific role, and how it delivers a fast, maintainable, and recruiter-ready website without unnecessary dependencies.

---

## 1. Core Framework & Language

### Next.js (App Router)
* **Role:** Primary web framework and full-stack application foundation.
* **Why Selected:**
  * **React Server Components (RSC):** Enables static rendering of the majority of portfolio content (About, Experience, Skills), minimizing client-side JavaScript bundle size to near zero for pure content.
  * **Next.js App Router (`/src/app`):** Industry standard architecture with built-in route segment layouts, streaming, and metadata API.
  * **Optimized Image & Font Handling:** Built-in `<Image />` optimization with automatic WebP conversion and zero-layout-shift font injection via `next/font`.
  * **Developer Identity:** Building on Next.js signals up-to-date engineering competence to modern recruiters.

### TypeScript (Strict Mode)
* **Role:** Type-safe development language.
* **Why Selected:**
  * Strict compile-time safety across all portfolio data structures (projects, skills, experience models).
  * Auto-completion and self-documenting data schemas, ensuring adding a new project or skill never breaks the UI.

---

## 2. Styling & UI Architecture

### Tailwind CSS
* **Role:** Utility-first CSS engine.
* **Why Selected:**
  * Zero runtime overhead (compiles directly to minimal static CSS).
  * Seamless responsive design using intuitive prefix modifiers (`sm:`, `md:`, `lg:`).
  * Rapid creation of complex glassmorphism, subtle gradients, and dark mode palettes using custom theme tokens.

### `clsx` & `tailwind-merge` (`cn` utility)
* **Role:** Conditional class concatenation and conflict resolution.
* **Why Selected:**
  * Lightweight standard (combined < 2KB) ensuring reusable UI components (Buttons, Cards, Badges) accept custom overrides cleanly.

---

## 3. Motion & Micro-Interactions

### Framer Motion (`framer-motion`)
* **Role:** Declarative animation and gesture library.
* **Why Selected:**
  * Production-grade spring physics that make cards, hero elements, and hover states feel organic rather than robotic.
  * Native `whileInView` viewport triggering for effortless scroll-based reveals.
  * Built-in `prefers-reduced-motion` detection, ensuring full accessibility compliance.

---

## 4. Iconography & Visual Assets

### Lucide React (`lucide-react`)
* **Role:** Consistent, lightweight vector icon library.
* **Why Selected:**
  * Clean, modern line aesthetics perfectly aligned with our developer design system.
  * Fully tree-shakable (only icons actually imported are bundled).
  * Direct SVG rendering with full CSS color/size inheritance.

---

## 5. Typography

### `next/font/google` (Geist / Inter + JetBrains Mono)
* **Role:** Self-hosted web fonts.
* **Why Selected:**
  * Zero external network requests at runtime (fonts are downloaded at build time and served locally).
  * Zero Cumulative Layout Shift (CLS) via automatic CSS font-fallback size matching.

---

## 6. Forms & Contact Handling

### React Hook Form + Zod
* **Role:** Form state management and schema validation.
* **Why Selected:**
  * Uncontrolled inputs for minimal re-renders and snappy keystrokes.
  * Zod provides strict runtime schema validation with clear, human-readable error messages.

### Contact Route / Web3Forms / Resend API
* **Role:** Form submission and delivery to Lalit's inbox.
* **Why Selected:**
  * Secure serverless endpoint without exposing private API keys or email credentials to client bundles.
  * Fallback to direct `mailto:` link and instant "Copy Email" button so recruiters can reach Lalit with zero barriers.

---

## 7. Deployment & Hosting

### Vercel
* **Role:** Edge global hosting and continuous integration.
* **Why Selected:**
  * Native Next.js hosting with automated edge caching, instant preview branches on git push, and automated SSL.
  * Global CDN ensures sub-100ms load times for recruiters worldwide.

---

## 8. Summary of Dependencies

| Package | Purpose | Bundle Impact |
| :--- | :--- | :--- |
| `next` | Core React framework & SSR/SSG | Essential |
| `react` & `react-dom` | UI component library | Essential |
| `typescript` | Static typing | Dev dependency (0KB runtime) |
| `tailwindcss` | Utility CSS styling | Dev dependency (0KB runtime) |
| `framer-motion` | Spring animations & scroll effects | ~30KB (isolated to interactive leaves) |
| `lucide-react` | Tree-shaken SVG icons | Minimal (<5KB tree-shaken) |
| `clsx` & `tailwind-merge` | Class composition | <2KB |
| `react-hook-form` & `zod` | Contact form validation | Minimal |
