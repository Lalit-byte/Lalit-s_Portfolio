# Design System: Refined Modern Minimalism (Reference: Sumit Chaubey)

## 1. Design Philosophy
The design philosophy is **"Refined Modern Minimalism"**, directly inspired by Sumit Chaubey's portfolio (`sumitchaubey.me`). It is clean, purposeful, content-focused, and distraction-free. The interface pairs deep neutral dark canvases with generous whitespace, subtle 1px border lines, high-contrast typography, and vibrant emerald/white accent highlights.

---

## 2. Color Palette

### Base & Surface Colors (Dark Zinc / Minimalist Canvas)
* **Background Canvas (Deep Obsidian / Zinc 950):** `#09090B` (Clean deep charcoal/zinc)
* **Surface Card Default:** `#121215` / `#141418` (Subtle elevated surface)
* **Surface Card Hover:** `#18181D` (Interactive hover surface)
* **Border Default:** `rgba(255, 255, 255, 0.08)` / `#27272A` (Subtle 1px boundary)
* **Border Accent / Active:** `rgba(16, 185, 129, 0.4)` (Emerald Glow Highlight)

### Text & Foreground Colors
* **Text Primary (Headings & Bold Text):** `#F4F4F5` (Zinc 100 — 98% pure crisp white)
* **Text Secondary (Body & Descriptions):** `#A1A1AA` (Zinc 400 — high readability)
* **Text Muted (Metadata, Tags, Dates):** `#71717A` (Zinc 500)
* **Text Inverse:** `#09090B` (Dark text on light accent buttons)

### Accent & Status Colors
* **Primary Accent (Emerald / Mint):** `#10B981` / `#34D399` (`emerald-500` / `emerald-400`) — Status beacons, active pills, success highlights
* **Secondary Accent (Sky Blue):** `#38BDF8` (`sky-400`) — Technical links & tags
* **Neutral Highlight (White / Slate):** `#FFFFFF` — Primary CTA button background

### GitHub Contribution Heatmap Colors
* **Empty Day / Level 0:** `#161B22` / `rgba(255, 255, 255, 0.05)`
* **Level 1 (1–3 contributions):** `#0E4429`
* **Level 2 (4–6 contributions):** `#006D32`
* **Level 3 (7–9 contributions):** `#26A641`
* **Level 4 (10+ contributions):** `#39D353` (Vibrant Emerald)

---

## 3. Typography System

### Typefaces
* **Primary Sans-Serif:** `Geist Sans` or `Inter` (via `next/font/google`) — Clean, geometric neo-grotesque font for UI, navigation, and body text.
* **Code / Monospace:** `Geist Mono` or `JetBrains Mono` — For tags, metrics, dates, file paths, and code snippets.

### Scale & Hierarchy
| Level | Font Size | Line Height | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `3.5rem` – `4.5rem` (56–72px) | 1.1 | 800 (Extrabold) | `-0.03em` | Hero Name / Main Hook |
| **H1 / Section** | `2.25rem` – `2.75rem` (36–44px) | 1.2 | 700 (Bold) | `-0.02em` | Section Titles |
| **H2 / Card Title**| `1.5rem` – `1.75rem` (24–28px) | 1.3 | 600 (Semibold) | `-0.01em` | Project / Experience Titles |
| **H3 / Subtitle** | `1.125rem` – `1.25rem` (18–20px) | 1.4 | 600 (Semibold) | `0em` | Card Subheadings |
| **Body Large** | `1.125rem` (18px) | 1.6 | 400 (Regular) | `0em` | Hero Bio / Key Paragraphs |
| **Body Default**| `1rem` (16px) | 1.6 | 400 (Regular) | `0em` | Standard Body Content |
| **Small / Caption**| `0.875rem` (14px) | 1.5 | 400 / 500 | `0.01em` | Metadata, Pills, Dates |
| **Mono Badge** | `0.75rem` (12px) | 1.4 | 500 (Medium) | `0.02em` | Code Snippets, Status Chips |

---

## 4. Spacing, Layout & Container System

### Focused Viewport Width (60% to 65% Screen Width)
To match the clean, high-density, centered aesthetic of Sumit Chaubey and the user's reference designs:
* **Section Width Rule:** Every content section is constrained to **60%–65% viewport width** on desktop/laptop displays:
  * Tailwind Class: `w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto`
  * Rationale: Prevents content from stretching horizontally, maintaining tight vertical alignment, high typographic legibility, and recruiter-focused visual density.
* **Horizontal Divider Framing (Top & Bottom):**
  * Each section features a horizontal 1px line (`border-t border-zinc-800/80` and `border-b border-zinc-800/80`) at its top and bottom.
  * **Crucial Rule:** The divider lines span **strictly across the component container's width** (the 60%–65vw width), NOT 100vw edge-to-edge. This frames each section with architectural precision as seen in the uploaded reference screenshots.
* **Vertical Spacing & Section Rhythm (Optimized Compact Rhythm):**
  * **Hero Section:** `min-h-[85vh] flex flex-col justify-center py-10 sm:py-14` (fills initial viewport comfortably without unnecessary dead space).
  * **Content Sections:** `py-8 sm:py-10 flex flex-col justify-center` (eliminates bloated `100vh` voids on smaller sections like Current Status and Tech Stack, providing a natural, smooth scrolling flow).
  * **Component Divider Spacing:** `mb-5 sm:mb-6` below the top divider line, `mt-5 sm:mt-6` above the bottom divider line. This keeps content neatly framed with tight, cohesive vertical margins.

---

## 5. Shape, Border Radius & Elevation

### Border Radius
* **Pills / Status Chips:** `rounded-full` (9999px)
* **Cards & Containers:** `rounded-2xl` (16px)
* **Buttons & Inputs:** `rounded-xl` (12px)
* **Code / Badges:** `rounded-lg` (8px)

### Visual Effects & Glassmorphism
* **Backdrop Blur:** `backdrop-blur-md` (12px blur) with `bg-slate-950/70` for navigation and floating cards.
* **Spotlight Card Glow:** Radial gradient overlay following mouse cursor:
  `background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.06), transparent 40%)`.
* **Border Highlight:** Subtle linear gradient border for featured elements.

---

## 6. Components & State Guidelines

### Buttons
* **Primary Action:** Solid electric accent (`bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/20 active:scale-[0.98] transition-all`).
* **Secondary / Outline:** Ghost border (`border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800/60 text-slate-200 transition-all`).
* **Icon Button:** Circular or square (`p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors`).

### Cards & Surfaces
* Default Card: `bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700/90 hover:shadow-xl hover:shadow-black/40`.

### Navigation Dock
* Floating pill positioned at `fixed top-6 left-1/2 -translate-x-1/2 z-50`.
* Glassmorphic background with active tab indicator using Framer Motion layout animations.

### 6-Column Squircle Technical Stack Grid (Reference: Uploaded Screenshot)
* **Section Header:**
  * Left: `TECHNICAL STACK` (uppercase font-mono/sans, tracking-wider, text-zinc-300 font-semibold)
  * Right: `Full Stack · Cloud · AI` (muted font-sans, text-zinc-500)
* **Grid Architecture:** 6 columns on desktop/laptop (`grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4`).
* **Squircle Card Anatomy:**
  * Outer Card: `rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-3.5 sm:p-4 flex flex-col items-center justify-center text-center hover:border-zinc-700 hover:bg-zinc-900/90 transition-all duration-200 group`
  * Inner Squircle Icon Box: `w-12 h-12 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-center mb-2.5 shadow-inner group-hover:scale-105 transition-transform` containing the official brand SVG logo.
  * Title: Bold white text (`text-xs sm:text-sm font-bold text-white tracking-tight`).
  * Sub-label: Category tag (`text-[10px] sm:text-[11px] font-mono text-zinc-500 mt-0.5`).

### Merged Education & Campus Glories Section
* **Purpose:** Unifies academic accomplishments (MCA, NIELIT certs) and sports honors (Basketball Runner-Up) in a single cohesive framed view.
* **Layout:** Two complementary cards or split column layout within the 60%–65vw framed container:
  * Left / Top Card: MCA @ DIT University (8.23 CGPA) + NIELIT 'A' Level & 'O' Level.
  * Right / Bottom Card: Sphurti University Sports Fest Basketball Championship (Two-Time Runner-Up 🏀) + Technical leadership & hackathons.

### macOS Interactive Dock (Reference: `docs/dock-reference.jpg` & Yash Jaiswal)
* **Placement & Dual-State Morphing (User Specification):**
  * **State A (Hero Viewport):** Centered horizontally within the Hero section layout under the main CTAs.
  * **State B (Scrolled / Persistent Viewport):** Upon scrolling past the Hero section, smoothly animates to the **right side corner of the viewport** (`fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50`), reorganizing into a **compact vertical stack** (`flex-col`) that follows the visitor through every section down to the footer.
  * **Transition Curve:** `transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)` with smooth layout repositioning.
* **Dock Shell States:**
  * In Hero (Horizontal): `backdrop-blur-xl bg-zinc-900/70 border border-white/10 rounded-2xl px-3.5 py-2.5 shadow-2xl shadow-black/50 flex flex-row items-center gap-2 sm:gap-3`.
  * Scrolled (Vertical Right Stack): `fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 backdrop-blur-2xl bg-zinc-900/85 border border-white/15 rounded-2xl p-2.5 shadow-2xl shadow-black/70 flex flex-col items-center gap-2 sm:gap-2.5 scale-95 sm:scale-100`.
* **Dock Icon Squircle:** `w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-150 ease-out cursor-pointer relative group`.
* **Icon Composition (8 Items):**
  1. Pixel art avatar squircle (Profile / About)
  2. macOS Blue Folder icon (Projects)
  3. Bar Chart / Metrics squircle (Tech Stack & Skills)
  4. Gmail "M" squircle (Contact & Mail)
  5. Apple Calendar squircle with live dynamic day & date (Schedule / Meeting)
  6. GitHub Octocat black squircle (@Lalit-byte profile)
  7. **LinkedIn official blue squircle (Replaces the tic-tac-toe game icon)**
  8. PDF document squircle with red badge (Resume Viewer & Download)
* **Magnification Physics:** As cursor hovers over the dock, mouse proximity dynamically scales nearby icons from `scale(1)` up to `scale(1.25)` – `scale(1.35)` with smooth spring physics.
* **Smart Tooltips:**
  * When Horizontal (Hero): Floats above icon (`bottom-full mb-2 text-center`).
  * When Vertical (Right Edge): Floats to the left of the icon (`right-full mr-3 top-1/2 -translate-y-1/2`) to ensure full legibility on screen.
* **Dynamic Calendar Icon:** Displays dynamic uppercase day (`MON`) and numeric date (`16`) with live local time synchronization.

### Minimalist Preloader (Reference: Sumit Chaubey)
* **Preloader Background:** Pure midnight slate (`#090D16`).
* **Typography:** `LALIT BISHT` centered, tracking `0.15em`, accompanied by subtle blinking emerald/cyan pulse dot.
* **Exit Animation:** Smooth vertical slide-up / dissolve (`opacity: 0, y: -20` with easing `[0.76, 0, 0.24, 1]`, duration: 600ms), revealing the portfolio without causing layout shifts.

### macOS Mail Compose Window & Tactile Light Desk (Reference: Uploaded Reference Screenshot)
* **Tactile Light Mesh Environment:**
  * Full-width section with soft multi-stop pastel radial gradients (`#f8fafc` base with sky, peach, and mint ambient color washes) overlaid with a crisp dot grid pattern (`radial-gradient(#cbd5e1 1.2px, transparent 1.2px)` on a 24px grid).
  * Floating avatar badge centered at the top: `[Avatar] Lalit Bisht` pill badge with soft backdrop blur and drop shadow.
  * Section Header: `Contact` in `#2563eb` (vibrant blue) and bold heading `Got something fun to build?` in deep `#09090b` typography.
* **macOS Mail Window (Wide & Prominent Layout):**
  * Spans generous width (`max-w-2xl w-full lg:flex-1`), styled as a native macOS Mail composition card (`bg-white rounded-2xl border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden`).
  * **Title Bar:** macOS traffic light dots (🔴 `#ff5f56`, 🟡 `#ffbd2e`, 🟢 `#27c93f`), centered `New Message` title, and paper airplane send button.
  * **To Field:** Pill recipient badge with initial avatar + `Lalit Bisht` in `bg-sky-50 text-sky-700`, raw email `lalitbisht0105@gmail.com`, and a 1-click clipboard copy button.
  * **Subject Chips:** Interactive pills (`A project idea`, `Freelance work`, `A full-time role`, `Just saying hi`), active in `bg-zinc-900 text-white`, dynamically updating textarea placeholders.
  * **From & Body:** `Your name` input and generous multiline textarea with contextual greeting.
  * **Footer Action Bar:** Prominent `✈ Send` button in macOS blue (`#007AFF`), secondary `📅 Or grab 15 minutes` button, and `Opens in your mail app` footnote.
* **Yellow Taped Post-it Sticky Note:**
  * Positioned alongside the mail window on desktop (`w-full lg:w-72`), rotated `rotate-1 sm:rotate-2` with warm drop shadow.
  * Background: Authentic Post-it yellow (`#FEF08A`, text `#713F12`), with translucent frosted Scotch tape overlay at top center and a folded dog-ear corner at the bottom-right.
  * Copy: `PSST` header with *"A rough idea is plenty. Working out what it should be is <mark>half the fun</mark> and we can do that part together."*
* **Reference Bottom Controls:**
  * Pill toggle for `📊 sound on / sound off`, copyright & live Dehradun time, and an interactive `Unbloat` pill button.

### Blue Folder Name Physics Animation (Reference: Uploaded Screenshots & Yash Jaiswal)
* **Borderless Open Presentation & Natural Centering:**
  * Root-level section with `w-full py-12 sm:py-16 flex flex-col justify-center items-center text-center overflow-hidden`.
  * The canvas container uses natural, clean `w-full max-w-6xl mx-auto px-4 h-80 sm:h-96 md:h-[440px] flex items-center justify-center` (free from transform/relative breakout conflicts with flexbox centering).
  * Top and bottom 1px divider lines use `w-[92%] sm:w-[85%] md:w-[65vw] max-w-3xl mx-auto`, preserving exact visual continuity with all 60–65vw content sections above and below.
* **Uniform 3-Column Typography & Sub-Pixel Visual Centering ("Lalit Bisht"):**
  * Displays **Lalit Bisht** in Title Case where every character is uniformly 3 columns wide (5 rows high), ensuring consistent visual balance and rhythm across the word design:
    * `L`: 3 cols wide with solid 3-pixel base `[[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,1]]`
    * `a`: 3 cols wide with centered arch, distinct legs & crossbar `[[0,0,0],[0,1,0],[1,0,1],[1,1,1],[1,0,1]]` (unmistakable arch A)
    * `l`: 3 cols wide with centered tall vertical stem and right foot hook `[[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,1]]`
    * `i`: 3 cols wide with centered floating dot, blank gap, stem, and 3-wide serif base `[[0,1,0],[0,0,0],[0,1,0],[0,1,0],[1,1,1]]`
    * `t`: 3 cols wide with ascender, crossbar, stem, and hook foot `[[0,1,0],[1,1,1],[0,1,0],[0,1,0],[0,1,1]]`
    * `B`: 3 cols wide uppercase double loop `[[1,1,0],[1,0,1],[1,1,0],[1,0,1],[1,1,0]]`
    * `s`: 3 cols wide top curve, left shelf, right shelf, bottom bar `[[0,0,0],[1,1,1],[1,1,0],[0,0,1],[1,1,1]]`
    * `h`: 3 cols wide tall left ascender, shoulder arch, and two legs `[[1,0,0],[1,0,0],[1,1,1],[1,0,1],[1,0,1]]`
  * Responsive Sizing & Spacing:
    * **Grand Desktop (`cw >= 1080px`):** Single line, `cellW = 24`, `cellH = 20`, `pWidth = 34`, `pHeight = 26`, generous `letterGap = 32px`, `wordGap = 76px`.
    * **Standard Desktop / Laptop (`920px <= cw < 1080px`):** Single line, `cellW = 21`, `cellH = 17.5`, `pWidth = 30`, `pHeight = 23`, `letterGap = 26px`, `wordGap = 64px`.
    * **Medium Desktop (`760px <= cw < 920px`):** Single line, `cellW = 18`, `cellH = 15`, `pWidth = 26`, `pHeight = 20`, `letterGap = 22px`, `wordGap = 52px`.
    * **Compact Desktop / Tablet Single Line (`660px <= cw < 760px`):** Single line, `cellW = 15`, `cellH = 13`, `letterGap = 18px`, `wordGap = 42px`.
    * **Tablet / Large Mobile Stacked (`440px <= cw < 660px`):** Two centered stacked lines ("Lalit" top, "Bisht" bottom), `cellW = 20`, `cellH = 17`, `pWidth = 28`, `pHeight = 22`, `letterGap = 22px`.
    * **Compact Mobile Phone (`cw < 440px`):** Two centered stacked lines, `cellW = 16`, `cellH = 13.5`, `pWidth = 22`, `pHeight = 18`, `letterGap = 16px`.
  * **Sub-Pixel Centering Algorithm:**
    * Computes the exact visual bounding box (`minX`, `maxX`, `minY`, `maxY`) of all created folder particles.
    * Applies `shiftX = (cw / 2) - ((minX + maxX) / 2)` and `shiftY = (ch / 2) - ((minY + maxY) / 2)`.
    * Guarantees `LeftMargin === RightMargin` with `0.0000px` deviation on all screen resolutions and aspect ratios, perfectly aligned with the companion text and like button below it.
* **Ultra-Smooth Liquid Physics Model:**
  * **Cursor Interaction:** Smooth mouse lerping (`lerp = 0.25`) with a non-linear cubic hermite repulsion curve across a wide 120px radius (`smoothForce = 8.5`) suited to larger folders.
  * **Spring & Damping:** Fluid spring constant (`spring = 0.046`) and viscous friction (`friction = 0.86`) creating silky liquid return physics.
  * **Organic Ambient Wave:** Subtle sinusoidal vertical breathing wave (`Math.sin(time + phase) * 0.40`).
  * **Click to Scatter:** Radial explosive velocity burst (`18 - 44px/frame`) with natural spring restoration.
* **Companion Controls:**
  * Centered prompt below: *"Wave your cursor through it. Click to scatter."* (`text-xs sm:text-sm font-mono text-zinc-400 mt-5`).
  * Interactive pill button: `♡ Like this site?` matching reference screenshot.

### Compact Section Rhythm Guidelines
* Intermediate sections use `py-8 sm:py-10 flex flex-col justify-center` with component-width top and bottom 1px divider lines (`mb-5 sm:mb-6` and `mt-5 sm:mt-6`), eliminating dead vertical space while preserving clean visual separation.
* The Hero section uses `min-h-[85vh] py-10 sm:py-14` to command initial focus.

### Transitions & Motion
* Standard Duration: `200ms` for micro-interactions (hover, focus, button clicks).
* Section Entrances: `500ms` with spring easing `[0.25, 0.4, 0.25, 1]`.
* Respect `prefers-reduced-motion` at all times.

---

## 7. Responsive Breakpoints
* **Mobile (default):** `< 640px` (Single-column layout, compact padding, mobile drawer)
* **Tablet (`sm` / `md`):** `640px – 768px` (2-column grids for skills, stacked projects)
* **Laptop (`lg`):** `1024px` (Full bento-grid, 2-column experience timeline)
* **Desktop (`xl` / `2xl`):** `1280px+` (Optimal wide spacing, side-by-side hero presentation)
