# Alipato Hero Bake-off — Shared Brief

This brief is identical for the impeccable build and the taste-skill build. Do not deviate from it.

## Client
Alipato, a digital growth and IT solutions agency. It builds automated client acquisition and operations pipelines for SMEs.

## Scope
Redesign the **hero/header only** (nav + hero, one viewport). No body sections below the hero.
Desktop only, designed at 1440×900. Ignore responsiveness.
Each version is a single self-contained static HTML file (inline CSS/JS). It loads `../assets/logo.svg` and may use Google Fonts. Scripts may come only from cdnjs/jsdelivr/unpkg with pinned versions, though vanilla code is preferred. The real site is Next.js + Tailwind. Write CSS that can later be ported to Tailwind classes, using the token names below.

## Locked content (use exactly; do not rewrite or add copy beyond small labels)
- Logo: `../assets/logo.svg` (wide wordmark+emblem, ~2.94:1), alt "Alipato", height ~44px.
- Nav links, in order: Services, Process, Pricing, Work, About, Contact (hrefs `#services`, `#process`, `#pricing`, `#work`, `#agency`, `#contact`).
- Primary CTA: **"Book a Free Audit"** (href `#contact`), with an arrow-up-right icon (inline SVG). It must be in the nav. You may also repeat it in the hero body, and the primary intent is to get this clicked.
- Headline: **"Digital Growth, Engineered For Scale"** (current page breaks it as: Digital Growth, / Engineered / For Scale — "For Scale" in accent). Line breaks and emphasis may change; the words may not.
- Sub-copy: **"A digital growth and IT solutions partner building automated client acquisition and operations pipelines for SMEs."**
- Secondary link: **"Explore our services"** (href `#services`) with a down-arrow.
- You may add at most a tiny eyebrow/label or decorative micro-labels (e.g. coordinates, "01"), but no invented stats, testimonials, client logos or claims.

## Brand guardrails
- Dark background required. Current tokens: canvas `#0D0A12`, surface `#16111F`, line `#2A2139`, fg `#F8F5FA`, muted `#A59BB8`, **accent `#FF5E1A` (flame orange, primary)**, flame `#F21368` (crimson), violet `#9B23B6` (use sparingly or not at all). You may deepen/neutralize the canvas, but orange stays the accent.
- Font currently Inter (300–600). You may choose a different display face if the aesthetic demands it; justify it in a comment at the top of the file.
- **Monumental visual required:** a custom-built graphic (SVG, canvas or CSS; WebGL is allowed) that evolves the current **wireframe sphere / geometric-ring concept**. Today's visual is concentric circles, a dashed ring, two nested hexagons, and radial spokes, slowly rotating in orange with a counter-rotating crimson dashed outer ring. It should be big, the dominant object of the hero.
- Banned: generic purple gradients, 3D SaaS blobs, stock photos, robot or circuit-board clip-art, emoji, fake metrics.
- Respect `prefers-reduced-motion`.

## The three aesthetics (same for both skills)

### 1. Ember Lab — reference `../refs/ember-lab.png` (library: "Green Room", fxology)
Night-shift lab. A dark wireframe room in perspective (grid lines receding), lit by **one orange light source**. The wireframe sphere hangs in the room as that lamp. Its glow lights the grid and the headline (soft glowing headline type, centered). Faint floating "pipeline" glyphs drift in the space as chalk-math motifs (e.g. lead → call → close, +1, ×3, %) at low contrast. Centered composition: small eyebrow pill, two-line headline, sub-copy, CTA pair.

### 2. Molten Outline — reference `../refs/molten-outline.png` (library: "Iridescent Secrets", clue.io)
Developer-tool cool. Near-pure black. **A huge uppercase headline set left, mixing filled and outlined (stroked) letterforms.** A liquid **orange→crimson** wireframe sphere/ribbon passes *through* the type: it occludes some letters and is occluded by others (real interleaving). Thin flowing line paths run across the canvas. Sub-copy + CTAs sit in a narrow right column. Use no rainbow iridescence; keep it within the ember spectrum.

### 3. Chiaroscuro Still — reference `../refs/chiaroscuro-still.png` (library: "Roasted the Day You Order")
Moody film still. The wireframe sphere is shot like an object in a dark room under one hard raking beam, with **venetian-blind diagonal stripe shadows** falling across it and the background. Add film grain and deep shadows. A **light-weight, large grotesk headline** sits lower-left in sentence case. One **floating card** sits lower-right, glass or solid surface, and pitches the audit: a short label such as "Free Audit", the sub-copy or a tight paraphrase, and the "Book a Free Audit" button. Glass nav bar. Quiet luxury: restraint over effects.

## Deliverables
Write exactly these files (and nothing outside `hero-bakeoff/`):
- `1-ember-lab.html`
- `2-molten-outline.html`
- `3-chiaroscuro-still.html`
in your skill's subfolder (`impeccable/` or `taste/`). They are shown in a 50%-width iframe (~720px wide) inside `../bakeoff.html` and can also be opened full-screen. Design the hero at 1440px, then wrap it in a 1440×900 stage that scales to fit the iframe width (CSS `transform: scale()` driven by a tiny resize script), so the comparison shows the true desktop composition.
