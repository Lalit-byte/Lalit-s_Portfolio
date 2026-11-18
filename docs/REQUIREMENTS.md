# Centralized Requirements Specification

This document serves as the single source of truth for all project requirements. It is continuously maintained and updated as new user preferences and resume details are finalized.

---

## 1. Functional Requirements

* **FR-01: Hero Presentation & macOS Interactive Dock (Reference: `docs/dock-reference.jpg`):**
  * Must display Lalit's professional name, primary engineering role, dynamic availability badge, and core value proposition.
  * Must include immediate call-to-action buttons: *Explore Work*, *Say Hello*, and *Resume*.
  * Must include direct social link icons (GitHub, LinkedIn, Email).
  * **macOS Interactive Dock:** Featured in the Hero section (first section):
    * 8 interactive squircle icons with magnification physics:
      1. Pixel art avatar squircle (Profile / About)
      2. Blue Folder icon (Projects)
      3. Bar Chart / Metrics squircle (Technical Stack)
      4. Gmail "M" squircle (Contact & Mail)
      5. Apple Calendar squircle with live dynamic day & date
      6. GitHub Octocat black squircle (@Lalit-byte profile)
      7. **LinkedIn official blue squircle (Replaces the game icon)**
      8. PDF document squircle with red badge (Resume Viewer & Download modal)

* **FR-02: About Section:**
  * Must provide a concise, high-impact narrative summary of Lalit's background and engineering interests.
  * Must feature a quick stats display highlighting key numerical metrics.

* **FR-03: Skills Matrix:**
  * Must display technical skills cleanly organized by category (Languages, Frontend, Backend, Databases/Cloud, Tools).
  * Must use clean badge pills with technology icons (no arbitrary percentages or progress bars).

* **FR-04: Projects Showcase:**
  * Must showcase curated projects with high-quality visual previews, taglines, problem/architecture summaries, tech stack pills, and direct links to live deployments and GitHub repositories.
  * Must support distinguishing between "Flagship" featured builds and secondary builds.

* **FR-05: Work Experience (Reference: Uploaded Design):**
  * Must feature Lalit Bisht's professional software development experience:
    * **Role:** Software Developer Intern
    * **Company:** Technogetic Pvt Ltd.
    * **Timeline:** Sept 2026 / Feb 2025 – Present (Full Time · Onsite)
    * **Impact:** Developing full-scale SaaS web applications with React.js, Tailwind CSS, and Supabase; designing modular components; integrating RESTful APIs; enforcing code quality in Agile/Jira workflows.
    * **Tags:** React.js, Tailwind CSS, Supabase, REST APIs, Agile/Jira, Code Reviews.
  * Must follow the vertical timeline layout with connecting line and node dot.

* **FR-06: Education & Campus Glories (Merged Section):**
  * **Academic Credentials:**
    * MCA candidate at DIT University (2024–2026) with **8.23 CGPA**.
    * NIELIT IT DOEACC 'A' Level & 'O' Level Government certifications.
  * **Campus Glories & Athletic Leadership:**
    * **Two-time Runner Up — Sphurti University Sports Fest Basketball Championship** 🏀.
    * Highlights team leadership, athletic discipline, strategic thinking, and resilience.
    * Technical leadership & peer hackathons at DIT University.

* **FR-07: GitHub Contribution Heatmap (2nd to Last Section):**
  * Must be placed immediately before the interactive folder name / Get in Touch section.
  * Displays 52-week contribution calendar for `@Lalit-byte` with hover tooltips and live metrics (428+ contributions, 14-day streak, 12+ public repos).

* **FR-08: Get in Touch & Footer (Last Section):**
  * Interactive contact triggers (1-click email copy, LinkedIn link, location, live local time).

* **FR-09: Section Ordering & Compact Spacing Rhythm (User Specification):**
  * Vertical spacing is tightened: Hero occupies `min-h-[85vh] py-10 sm:py-14`, while content sections occupy a natural compact rhythm (`py-8 sm:py-10 flex flex-col justify-center`) with `mb-5 sm:mb-6` top and `mt-5 sm:mt-6` bottom divider lines, eliminating excessive empty vertical gaps.
  * Exact page sequence:
    1. Hero Section (Headline, bio, CTAs, macOS interactive dock)
    2. Technical Stack (6-column squircle grid matching uploaded screenshot)
    3. Current Status (Live Snapshot: MCA @ DIT, Intern @ Technogetic, SDE Opportunities)
    4. Work Experience (Technogetic timeline card matching reference screenshot)
    5. Featured Projects (AI Fitness, Resume Craft, Data Analysis, To-Do)
    6. Education & Campus Glories (Merged Academic + Basketball Runner-Up honors)
    7. GitHub Contribution Heat Map (2nd to last section, 52-week activity)
    7.5. Interactive Blue Folder Name Physics ("Lalit Bisht" formed of folders: cursor wave & scatter)
    8. Get in Touch & Footer (macOS Mail compose window + taped yellow sticky note)

* **FR-10: 60% to 65% Viewport Width Framing (User Specification):**
  * Width of all sections must be constrained to **60%–65% viewport width** (`w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto`).
  * Maintains high content density, prevents horizontal overstretching, and mimics modern minimalist developer portfolios.

* **FR-11: Component-Width Top and Bottom Horizontal Lines (User Specification):**
  * In each section, a horizontal 1px line (`border-t border-zinc-800/80` and `border-b border-zinc-800/80`) must frame the top and bottom.
  * Crucially, the horizontal line covers **only the component's width** (the 60%–65vw width), NOT the full screen edge-to-edge.

* **FR-12: 6-Column Squircle Technical Stack Grid (Reference: Uploaded Screenshot):**
  * Header: `TECHNICAL STACK` on left, `Full Stack · Cloud · AI` on right.
  * 6 columns on desktop/laptop displays (`grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5`).
  * Each card: Rounded dark squircle container with inner squircle icon box, bold title, and category label below.

* **FR-13: Interactive Blue Folder Name Animation (Reference: Uploaded Screenshots & Yash Jaiswal):**
  * Spells "Lalit Bisht" in Title Case using larger macOS blue folder icon sprites (`32x24px`).
  * Generous alphabet spacing (`26px` between letters, `55px` between words) for high legibility.
  * Borderless, seamless canvas without any enclosing box or border.
  * Ultra-smooth physics simulation: smooth cubic hermite repulsion curve, mouse lerping, fluid spring restitution, and organic sinusoidal ambient breathing.
  * Caption: *"Wave your cursor through it. Click to scatter."* with interactive `♡ Like this site?` pill button.

* **FR-14: macOS Mail Window Get in Touch (Reference: Uploaded Image 2):**
  * Kicker: `Contact`, Title: `Got something fun to build?`
  * Styled as a macOS Mail Compose window:
    * 🔴 🟡 🟢 traffic lights + `New Message` + paper airplane icon.
    * `To:` chip with Lalit Bisht (`lalitbisht0105@gmail.com`) + `[Copy]` button.
    * `Subject:` Clickable chips: `[A project idea]`, `[Freelance work]`, `[A full-time role]`, `[Just saying hi]`.
    * `From:` input for sender name.
    * `Message:` textarea for message body.
    * Actions: `[Send]` button, `[📅 Or grab 15 minutes]` button, and caption *"Opens in your mail app"*.
  * Floating Yellow Taped Sticky Note:
    * Taped to the card with translucent tape:
      * `PSST`
      * *"A rough idea is plenty. Working out what it should be is half the fun and we can do that part together."*

* **FR-15: macOS Dock Scroll Morphing Animation & Right-Edge Persistence (User Specification):**
  * When on the Hero Section, the macOS dock sits horizontally centered under the introductory pitch.
  * When the visitor scrolls down past the Hero section, the dock triggers a smooth transition:
    * Repositions from horizontal center to the **right-hand screen corner** (`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50`).
    * Re-stacks from horizontal (`flex-row`) into a sleek **vertical stack** (`flex-col`).
    * Remains persistent and pinned across all sections down to the footer, acting as a quick navigation and action dock.
    * Tooltips automatically switch from floating above to floating on the left side of the icons.
    * Scrolling back up returns the dock seamlessly to its centered horizontal position in the Hero section.

---

## 2. Non-Functional Requirements

* **NFR-01: Performance & Speed:**
  * First Contentful Paint (FCP) < 1.0s.
  * Largest Contentful Paint (LCP) < 1.8s.
  * Cumulative Layout Shift (CLS) = 0.
  * Google Lighthouse score > 95 in all 4 categories (Performance, Accessibility, Best Practices, SEO).

* **NFR-02: Reliability & Error Handling:**
  * Contact form must gracefully handle offline states and API failure with human-readable error messages.
  * Custom 404 page for nonexistent routes.

* **NFR-03: Security:**
  * Client-side inputs sanitized; environment variables used for any sensitive contact API keys.
  * No hardcoded private credentials in public repositories.

---

## 3. Design Requirements

* **DR-01: Theme & Visual Identity (Reference: Sumit Chaubey):**
  * Refined modern minimalism: Deep charcoal/zinc canvas (`#09090B`), subtle 1px border lines (`#27272A` / `rgba(255,255,255,0.08)`), high-contrast zinc-100 typography, and vibrant emerald accent highlights (`#10B981`).
  * Generous whitespace, clean padding, and zero visual clutter.

* **DR-02: Typography:**
  * Clean neo-grotesque sans-serif (Inter / Geist) paired with monospace accents for dates, tags, and metrics.

* **DR-03: Layout & Information Density:**
  * Clean, scannable cards and lists optimized for fast recruiter evaluation.
* **DR-04: Micro-Interactions:** Subtle card spotlight borders on cursor movement, smooth spring button hovers, and clean section scroll reveals.

---

## 4. Technical Requirements

* **TR-01:** Next.js (App Router) using React Server Components wherever practical.
* **TR-02:** 100% TypeScript with strict type checking enabled.
* **TR-03:** Tailwind CSS for modular, utility-first styling.
* **TR-04:** Content/Code separation: All personal data, projects, and skills stored in typed data files (`src/data/portfolio.ts`).
* **TR-05:** Zero unnecessary heavy dependencies (no heavy 3D canvases, no bulky component frameworks).

---

## 5. Responsive Requirements

* **RR-01:** Fluid responsiveness across Mobile (<640px), Tablet (640px–1023px), Laptop (1024px–1279px), and Desktop (1280px+).
* **RR-02:** Strict prohibition of horizontal overflow or layout breakage on any mobile device.
* **RR-03:** Touch-friendly targets: Minimum 44x44px hit areas for all buttons, links, and navigation items.

---

## 6. Accessibility (A11y) Requirements

* **AR-01:** WCAG 2.1 Level AA compliance for color contrast ratios.
* **AR-02:** Full keyboard navigation support (logical tab order, visible focus rings).
* **AR-03:** Screen-reader friendly semantic HTML (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`, `<article>`).
* **AR-04:** Respect user motion preferences via CSS `prefers-reduced-motion`.

---

## 7. User Inputs & Verified Information (Source of Truth)

All details sourced directly from Lalit Bisht's resume:

| Field | Verified Detail |
| :--- | :--- |
| **Full Name** | Lalit Bisht |
| **Role / Title** | Full-Stack Developer & AI Application Engineer |
| **Email** | `lalitbisht0105@gmail.com` |
| **Phone** | `+91 7906960372` |
| **Location** | Dehradun, Uttarakhand, India |
| **LinkedIn** | `https://linkedin.com/in/lalit-bisht-b5285b269` |
| **GitHub** | `https://github.com/Lalit-byte` |
| **Work Experience** | **Software Developer Intern** at **Technogetic Pvt Ltd.** (Feb 2025 – Present / Sept 2026, Full Time · Onsite). Developing SaaS web apps with React.js, Tailwind CSS, Supabase, REST APIs, Agile/Jira. |
| **Education** | **Masters in Computer Applications (MCA)** — DIT University, Dehradun (08/2024 – 05/2026), **CGPA: 8.23** |
| **Certifications** | 1. **IT DOEACC 'A' Level** in Computer Science & Technology, NIELIT (Data Structures & Algorithms, Computer Networks, Information Security, Operating Systems)<br>2. **IT DOEACC 'O' Level** in Computer Science & Technology, NIELIT (Web Development, HTML, CSS, JavaScript) |
| **Campus Glories & Sports** | 🏀 **Two-time Runner Up** in **Sphurti University Sports Fest Basketball Championship**. |
| **Programming Languages** | Python, Java, JavaScript, TypeScript, HTML5, CSS3, SQL |
| **Frontend & GUI** | React.js, Next.js, Bootstrap, Tailwind CSS, Tkinter |
| **Backend & APIs** | Node.js, Express.js, REST APIs, Axios, Fetch API, Strapi CMS |
| **Databases** | MySQL, SQLite, MongoDB |
| **Data Analysis & ML** | Google Gemini AI, Pandas, NumPy, Matplotlib |
| **Developer Tools** | Git, GitHub, Postman, Hopscotch, Vercel, Render |

### Verified Featured Projects
1. **Full Stack AI Fitness App** (React.js, Strapi, Node.js, SQLite, Google Gemini API, Vercel, Render)
2. **Resume Craft – Resume Builder Web Application** (React.js, Node.js, Express.js, MongoDB, Axios, PDF Generation)
3. **Employee Data Analysis & Visualization** (Python, Pandas, NumPy, Matplotlib, Git, GitHub)
4. **To-Do List Desktop Application** (Python, Tkinter, MySQL, mysql-connector-python)
