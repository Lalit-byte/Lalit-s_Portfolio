# Website Structure & Section Specifications (Sumit Chaubey Theme)

This document defines the finalized page flow and section specifications for Lalit Bisht's portfolio.

### Global Framing & Layout Rules
* **Section Width:** Bounded to **60%–65% viewport width** (`max-w-3xl` / `w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto`), matching the focused, high-density look of the reference screenshots.
* **Horizontal Divider Framing:** Each section features a clean horizontal 1px line at its top and bottom, spanning exactly the width of the component.
* **Vertical Spacing & Rhythm:** Natural compact rhythm (`py-8 sm:py-10 flex flex-col justify-center` with `mb-5 sm:mb-6` top and `mt-5 sm:mt-6` bottom divider lines; Hero at `min-h-[85vh] py-10 sm:py-14`). Eliminates excessive empty vertical gaps while preserving focused component framing.

```
[0. Preloader] (Fast minimalist monogram wipe)
      ↓
[1. Hero Section] (Headline, status beacon, bio pitch, primary CTAs)
      ↓
[2. Technical Stack] (6-column squircle grid matching uploaded screenshot)
      ↓
[3. Current Status] (Live Snapshot: MCA @ DIT, Intern @ Technogetic)
      ↓
[4. Work Experience] (Technogetic Pvt Ltd. timeline card matching reference)
      ↓
[5. Featured Projects] (Flagship AI Fitness, Resume Craft, Data Analysis, To-Do)
      ↓
[6. Education & Campus Glories] (MERGED: MCA 8.23 CGPA, NIELIT certs + Sphurti Basketball honors)
      ↓
[7. GitHub Heat Map] (2nd to Last: 52-week contribution graph @Lalit-byte)
      ↓
[7.5. Interactive Blue Folder Name Physics] ("Lalit Bisht" formed of folders: cursor wave & scatter)
      ↓
[8. Get in Touch & Footer] (Last Section: macOS Mail window, taped yellow sticky note, credits)
```

---

## 0. Initial Loading Sequence (Preloader)
* **Purpose:** Minimalist brand introduction that feels instantaneous and silky-smooth.
* **Mechanism:** Fast entrance (~0.8s max) displaying `<lalit.dev />` with an emerald pulse dot and progress bar.

---

## 1. Floating Navigation Header & Hero Section
* **Framing:** Top and bottom component-width divider lines.
* **Navigation Header:**
  * Floating pill with glassmorphism (`backdrop-blur-md bg-zinc-900/70 border border-zinc-800`).
  * Monogram logo: `<lalit.dev />`.
  * Jump links: *About, Tech, Experience, Projects, Education, Contact*.
  * Action button: Direct *"Resume"* download pill.
* **Hero Section:**
  * **Status Badge:** Animated emerald beacon + *"Available for Software Developer & AI Roles"*.
  * **Main Headline:** *"Crafting performant web apps & scalable AI solutions."*
  * **Bio Pitch:** *"Hi, I'm Lalit Bisht — Full-Stack Developer & AI Application Engineer. MCA Candidate at DIT University (8.23 CGPA) with NIELIT 'A' & 'O' Level Certifications. Currently working as a Software Developer Intern at Technogetic Pvt Ltd."*
  * **CTAs:** *Explore Work* (Solid white button), *Say Hello* (Ghost outline button), *Resume PDF*.
  * **Social Links:** Direct icons for GitHub, LinkedIn, and Email.
  * **macOS Interactive Dock (Reference: `docs/dock-reference.jpg`):**
    * **Initial Hero Mode:** Horizontally centered directly within the Hero section layout.
    * **Scroll-Triggered Morphing Animation (User Specification):**
      * As soon as the visitor scrolls down past the Hero section, the dock smoothly animates from the center of the hero to the **right side corner of the viewport** (`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50`).
      * It reorganizes itself from a horizontal bar into a **compact vertical stack** (`flex-col`), remaining pinned and accessible across every section of the portfolio all the way to the bottom footer.
      * When scrolling back up to the Hero section, it seamlessly returns to its original horizontal position below the hero CTAs.
      * Tooltips automatically reposition to the left of the icons when in vertical right-stack mode so they remain fully visible within the viewport.
    * **8 Dock Icons with Magnification Physics & Tooltips:**
      1. **Avatar Icon:** Pixel art avatar representing Lalit (Links to `#hero`).
      2. **macOS Blue Folder:** Projects directory (Links to `#projects`).
      3. **Bar Chart / Stats:** Technical skills & competencies (Links to `#tech-stack`).
      4. **Gmail Icon:** Official Google "M" icon (Opens macOS mail window / `mailto:`).
      5. **Calendar Icon:** Apple-style calendar with live dynamic day & date (e.g., `MON 16`), links to grab 15 minutes.
      6. **GitHub Icon:** Black squircle with Octocat logo (Opens `https://github.com/Lalit-byte`).
      7. **LinkedIn Icon:** Official LinkedIn blue squircle with white "in" logo (Replaces the game icon from reference screenshot, opens `https://linkedin.com/in/lalit-bisht-b5285b269`).
      8. **Resume PDF Icon:** Document icon with red "PDF" badge (Opens interactive Resume preview modal).

---

## 2. Technical Stack Section (Reference: Uploaded Screenshot)
* **Framing:** Top and bottom component-width divider lines.
* **Header:**
  * Left: `TECHNICAL STACK` (uppercase, tracking-wider font-mono)
  * Right: `Full Stack · Cloud · AI`
* **Layout:** 6-column squircle card grid (3x6 on desktop, 3x2 on mobile, 3x4 on tablet).
* **Card Anatomy (Per Tech):**
  * Outer card: `rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-4 flex flex-col items-center justify-between text-center`.
  * Inner squircle icon box: `w-12 h-12 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center mb-2.5` containing official brand SVG logo.
  * Label: Bold tech name (e.g., `React.js`, `TypeScript`, `Node.js`, `Google Gemini`, `Supabase`, `Python`, etc.).
  * Sub-label: Category tag (`Frontend`, `Backend`, `AI & LLMs`, `Database`, `Tools`, `Languages`).

---

## 3. Current Status Section
* **Framing:** Top and bottom component-width divider lines.
* **Content:**
  * **Academic Milestone:** Final stretch of MCA at DIT University (**8.23 CGPA**).
  * **Active Role:** Software Developer Intern @ **Technogetic Pvt Ltd.**
  * **Looking For:** Software Developer / SDE Roles (Open to Onsite & Remote).

---

## 4. Work Experience Section (Reference: Uploaded Screenshot)
* **Framing:** Top and bottom component-width divider lines.
* **Layout:** Vertical timeline with connecting line and node dot (matching `docs/experience-reference.png`).
* **Content (Technogetic Pvt Ltd.):**
  * `Software Developer Intern · Technogetic Pvt Ltd.` (`Full Time · Onsite` | `Feb 2025 — Present` / `Sept 2026`).
  * Description: *"Developing and maintaining full-scale SaaS web applications with React.js, Tailwind CSS, and Supabase. Designing reusable modular components, integrating RESTful APIs and real-time backend services, and enforcing code quality and scalability through peer reviews in an Agile/Jira workflow."*
  * Pills: `React.js` • `Tailwind CSS` • `Supabase` • `REST APIs` • `Agile / Jira` • `Code Reviews`.

---

## 5. Featured Projects Section
* **Framing:** Top and bottom component-width divider lines.
* **Curated Projects:**
  1. **Full Stack AI Fitness App** *(Flagship)*: React.js, Strapi CMS, Node.js, SQLite, Google Gemini API, Vercel & Render.
  2. **Resume Craft – Resume Builder Web App** *(Featured)*: React.js, Node.js, Express.js, MongoDB, Axios, PDF Generation.
  3. **Employee Data Analysis & Visualization**: Python, Pandas, NumPy, Matplotlib, Git & GitHub.
  4. **Python Desktop To-Do Manager**: Tkinter, MySQL Relational Database, mysql-connector-python.

---

## 6. Education & Campus Glories Section (MERGED SECTION)
* **Framing:** Top and bottom component-width divider lines.
* **Purpose:** Unifies formal academic credentials with athletic and extracurricular leadership in one cohesive view.
* **Part A: Academic Credentials & Certifications:**
  * **MCA (Masters in Computer Applications):** DIT University, Dehradun (2024 – 2026) | **8.23 CGPA**.
  * **IT DOEACC 'A' Level:** NIELIT (DSA, OS, Networks, Information Security).
  * **IT DOEACC 'O' Level:** NIELIT (Web Development, HTML5, CSS3, JavaScript).
* **Part B: Campus Glories & Sports Leadership:**
  * 🏀 **Two-time Runner Up — Sphurti University Sports Fest Basketball Championship**: Demonstrated competitive grit, team leadership, athletic endurance, and on-court strategy.
  * **Technical Leadership & Hackathons**: Active peer coding and AI hackathons at DIT University.

---

## 7. GitHub Contribution Heatmap (2nd to Last Section)
* **Framing:** Top and bottom component-width divider lines.
* **Content Elements:**
  * **52-Week Contribution Calendar:** Full interactive GitHub heatmap for `@Lalit-byte`.
  * **Metrics Grid:** Total Contributions (428+), Current Streak (14 days 🔥), Longest Streak (38 days), Public Repos (12+).
  * **Interactive Hover Tooltips:** Dynamically displays contribution count per day.
  * Direct action link to `https://github.com/Lalit-byte`.

---

## 7.5. Interactive Blue Folder Name Physics
* **Visual Presentation:** Completely borderless, seamless canvas directly integrated on the background.
* **Typography & Sizing:** Larger high-resolution folder sprites (`32x24px`) displaying "Lalit Bisht" in Title Case with generous alphabet spacing (`26px` between letters, `55px` between words) matching the reference screenshot.
* **Physics Engine:** Ultra-smooth cubic hermite repulsion curve, mouse lerping, fluid spring restitution, and organic sinusoidal ambient breathing.
* **Interactivity & Action:** Prompt *"Wave your cursor through it. Click to scatter."* with interactive `♡ Like this site?` pill button.

---

## 8. Get in Touch & macOS Mail Window (Last Section)
* **Framing:** Top and bottom component-width divider lines.
* **Kicker & Title:** `Contact` • *"Got something fun to build?"*
* **macOS Mail Window (Reference: `docs/contact-mail-window-reference.jpg`):**
  * Traffic lights (🔴 🟡 🟢) + `New Message` + paper airplane icon.
  * `To:` chip with Lalit Bisht (`lalitbisht0105@gmail.com`) + `[Copy]` button.
  * Subject chips: `[A project idea]`, `[Freelance work]`, `[A full-time role]`, `[Just saying hi]`.
  * Input for sender name + textarea for message.
  * Action row: `[Send]` button + `[📅 Or grab 15 minutes]` button + caption *"Opens in your mail app"*.
* **Floating Yellow Taped Sticky Note:**
  * `PSST` • *"A rough idea is plenty. Working out what it should be is half the fun and we can do that part together."*
* **Footer:**
  * Copyright notice (*"© 2026 Lalit Bisht • Built with Next.js & Tailwind CSS"*).
  * Location & real-time clock: `📍 Dehradun, India • [Live Time] IST`.
