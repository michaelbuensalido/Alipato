---
name: Alipato
description: Digital growth and IT solutions partner for PH/SG SMEs, set as one molten object and its type.
colors:
  canvas: "#070506"
  surface: "#100C0D"
  line: "#2A2224"
  fg: "#F8F5F2"
  muted: "#A39A95"
  accent: "#FF5E1A"
  blaze: "#FF3F3A"
  flame: "#F21368"
  violet: "#9B23B6"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "160px"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.012em"
    fontVariation: "\"wdth\" 64"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "8.5rem"
    fontWeight: 600
    lineHeight: 0.84
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 64"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 0.92
    fontVariation: "\"wdth\" 64"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.625
  body-lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.625
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.16em"
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
rounded:
  hairline: "2px"
  panel: "18px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  gutter-desktop: "6.25vw"
  section-y: "96px"
  section-y-md: "128px"
  heading-gap: "64px"
  heading-gap-md: "80px"
  card-pad: "28px"
  card-pad-md: "40px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 20px 0 22px"
    height: "46px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.canvas}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.panel}"
    height: "72px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card-tier:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.panel}"
    padding: "40px"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    padding: "0 48px 12px 0"
  icon-disc:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    size: "56px"
---

# Design System: Alipato

## Overview

**Creative North Star: "The Molten Outline"**

The page is one molten object and its type. A warm near-black ground holds monumental condensed uppercase headlines in Archivo at 64% width, set as a mix of solid and 1.5px outlined words, and a single live molten sphere with a twisting ribbon that physically weaves through the hero letters on stacked canvases. Every section after the hero echoes that one gesture typographically: an outlined word beside a solid one, an outlined numeral that fills with flame on hover, a heat glow rising from below a line.

Density is editorial rather than dashboard: hairline rules divide content into rows, sections breathe on 96 to 128px of vertical space, and reading copy is Inter Light in muted warm grey so the headlines and the orange carry the voice. Colour is restrained to one action colour (flame orange) on a dark ground; crimson exists as the hot end of the molten gradient and as a secondary heat note, never as a control.

The system is dark-only (`color-scheme: dark`). It rejects the centred-headline-over-glow-blob hero and the grid of icon cards: services are hairline-ruled rows, not tiles.

**Key Characteristics:**
- Warm near-black ground with one action colour, flame orange.
- Archivo condensed 600 uppercase for every heading, mixing solid and outlined words.
- Inter Light for reading, in warm grey.
- Hairline rules and inset 1px hairline rings instead of borders and shadows.
- Pill-shaped controls, 18px-radius panels, nothing in between.
- One molten object (the hero sphere); everything else echoes it through type, gradient and contour lines.

## Colors

A warm, ember-lit dark palette: near-black and charcoal neutrals with a faint red cast, one flame-orange action colour, and a crimson heat note borrowed from the logo.

### Primary
- **Flame Orange** (accent): The only action colour. Every primary button, the active nav underline, focus outlines, caret, text selection, check icons, tier and market labels, the per-service meta line and the "Book a free audit" headline link. Also the near end of the molten gradient.

### Secondary
- **Blaze Red** (blaze): Midpoint of the orange-to-crimson molten gradient only (molten text fill, Process pipeline line). Never used flat.
- **Logo Crimson** (flame): The hot end of the molten gradient; also the alternating solid word in the Marquee and inline form error text. Never a button, link or fill.

### Tertiary
- **Royal Violet** (violet): The logo crown. Defined for parity with the logo asset; no UI surface uses it.

### Neutral
- **Ember Black** (canvas): Page ground and text on orange buttons.
- **Banked Coal** (surface): Raised panels: the floating nav bar, tier cards, project image wells, and the alternating Process and Agency section bands.
- **Ash Hairline** (line): Every rule, row divider, inset ring, chip outline and scrollbar thumb. Often at 60% for section edges.
- **Warm Paper** (fg): Primary text and solid headline words; the outline stroke colour at 92%.
- **Warm Ash** (muted): Body copy, sub-copy, count tags, footer text.

### Named Rules
**The One Flame Rule.** Flame Orange is the only colour that means "act". Crimson and blaze never fill a button, a link or a selected state.

**The Gradient Is The Heat Rule.** Orange-to-blaze-to-crimson appears only as the molten gradient (92deg, accent 10%, blaze 55%, flame 95%), on headline text, the pipeline line, and radial ember glows. It is never a background fill for a panel or a button.

## Typography

**Display Font:** Archivo (variable, `wdth` axis at 64, weight 600), fallback sans-serif
**Body Font:** Inter (300, 400, 500, 600), fallback sans-serif

**Character:** Archivo squeezed to 64% width is loud, industrial and stacked tight (line-height 0.82 to 0.95); Inter Light at muted grey is the quiet reader underneath it. The contrast in width, weight and colour between the two is the whole hierarchy.

### Hierarchy
- **Display** (Archivo 600 condensed, 160px at the 1440 stage via 11.11cqw; 20vw mobile, 16vw tablet; line-height 0.86; tracking -0.012em; uppercase): The hero headline only, three rows, mixing solid, outlined and molten words.
- **Headline** (Archivo 600 condensed, 8.5rem at lg, 10vw md, 15vw mobile; line-height 0.84; tracking -0.01em; uppercase): Section headings, always one solid phrase plus one outlined word ("Selected **Work**"). Services (11rem, fully outlined) and Contact (10.5rem) run larger as bookends.
- **Title** (Archivo 600 condensed, 1.875rem to 3.75rem; line-height 0.92 to 0.95; uppercase; text-balance): Service names, process step names, tier names, project titles, market titles.
- **Body** (Inter 300, 16px, md 18px on lead paragraphs; line-height 1.625; max 38 to 60ch): All reading copy, in Warm Ash. Hero sub-copy is Inter 400 at 1.55.
- **Label** (Inter 400, 12px, tracking 0.14 to 0.16em, uppercase): Row labels in definition-style grids (market names), the tier code on pricing cards, footer column headings, and the hero capability strip. Never placed above a headline as an eyebrow.
- **Button** (Inter 500, 15px): All pill controls.

### Named Rules
**The Solid-And-Outline Rule.** Section headlines pair a solid phrase with a 1.5px outlined word (stroke Warm Paper at 92%, or Flame Orange for the accent outline). A heading that is all solid with no outlined counterpart is off-system, except titles inside rows and cards.

**The Condensed Is Uppercase Rule.** Archivo always runs at `wdth` 64, weight 600, uppercase. It never sets body copy and Inter never sets a heading.

## Layout

Content sits in a max 1440px column with side gutters of 20px (mobile), 32px (sm) and 6.25vw (lg). Sections stack with 96px vertical padding, 128px from md, and section headings sit 64 to 80px above their content. Section bands alternate canvas and surface (Process and Agency on surface) and meet at hairline rules at 60% opacity.

Desktop structure is a 12-column grid used asymmetrically: 5/7 for service rows and the Agency split, 8/4 for the Pricing heading and its intro. Tier cards run two-up from md; project cards run two-up with every second card offset down 96px (stagger). Process is four columns at lg, two at md.

The hero at lg is a fixed 1440x900 composition scaled with container-query units (1cqw = 14.4px), width capped at min(100%, max(160svh, 1024px)); below lg the same layers flow vertically and the sphere centres behind the headline. Breakpoints are Tailwind defaults (640, 768, 1024) plus 1400px where the hero CTA pair stops wrapping.

## Elevation & Depth

The system is flat and tonal. Depth comes from the surface band against canvas, from 1px inset hairline rings (`inset 0 0 0 1px` in Ash Hairline) used in place of borders on cards and ghost buttons, and from heat: soft radial ember glows in Flame Orange at 16 to 22% opacity that bleed from behind a featured card or from below the footer. The single true drop shadow belongs to the floating nav bar, which also blurs what scrolls beneath it.

### Shadow Vocabulary
- **Nav float** (`box-shadow: inset 0 0 0 1px rgba(255,255,255,.07), 0 12px 32px -12px rgba(0,0,0,.6)`, with `backdrop-filter: blur(12px)` over surface at 86%): The fixed nav bar only.
- **Hairline ring** (`box-shadow: inset 0 0 0 1px #2A2224`): Cards, ghost buttons, project image wells, arrow discs. Swaps to Flame Orange for the featured tier and contact-button hover.
- **Ember glow** (`radial-gradient(circle, rgb(255 94 26 / .22), transparent 65%)`): Behind the featured tier card's top-right corner; a wider orange-to-crimson version rises from below the Contact section.

### Named Rules
**The Heat Not Shadow Rule.** Things are lifted by light, not by drop shadows. Use a hairline ring or an ember glow; the only drop shadow is the floating nav.

## Shapes

Two radii and a circle. Every control is a full pill (buttons, chips, tags, the email submit, icon discs, nav burger). Every panel is 18px (nav bar, tier cards, project image wells). Focus outlines carry a 2px radius. Lines are the other recurring shape: hairline row rules, the 1px orange-to-crimson pipeline line with a 10px orange dot in Process, and thin flowing contour paths (the hero's orbit lines, the two slow curves at 8% Warm Paper behind Agency). Service glyphs are hand-drawn geometric line icons at 0.9 stroke inside a 48 to 56px hairline circle.

## Components

### Buttons
Tactile and quick: a pill that lifts a pixel and brightens.
- **Shape:** full pill (9999px), 46 to 48px tall.
- **Primary:** Flame Orange fill, Ember Black text, Inter 500 15px, 22px left and 20px right padding, a trailing up-right arrow icon at 17px.
- **Hover / Focus:** translateY(-1px) and brightness 110%; the arrow nudges up-right 2px; press drops 1px and scales to 0.985. 150ms on the shared ease-out. Focus is a 2px Flame Orange outline offset 3px.
- **Ghost:** transparent with the Ash Hairline ring and Warm Paper text; on hover it fills Flame Orange with Ember Black text and the ring drops. Contact's ghost variant instead turns text and ring orange.
- **Text link:** Inter 500 15px with a 1px underline at 35% Warm Paper that turns Flame Orange on hover, followed by a down or right arrow.

### Chips
- **Style:** pill, 1px Ash Hairline border, 12px Warm Paper text at 80%, 4px by 12px padding; on row hover the border warms to Flame Orange at 30%.
- **Badge variant:** on tier cards, a hairline-ring pill; the featured tier's badge is solid Flame Orange with Ember Black text.

### Cards / Containers
- **Corner Style:** 18px.
- **Background:** Banked Coal at 50% at rest, full on hover; featured card is full Banked Coal.
- **Shadow Strategy:** hairline ring (Flame Orange for featured), plus ember glow on featured. See Elevation & Depth.
- **Border:** none; inner divisions are hairline rules.
- **Internal Padding:** 28px, 40px from md.

### Inputs / Fields
- **Style:** underline field: transparent, Inter Light 16px, 1px Ash Hairline bottom rule with 12px below the text, a 40px orange pill submit button riding the right end.
- **Focus:** the bottom rule turns Flame Orange (300ms).
- **Error / Disabled:** error text 12px in Logo Crimson below the rule; disabled at 50% opacity. Success replaces the form with a 10% orange tinted panel and a 40% orange hairline ring.

### Navigation
A floating dark bar inset 12px from the viewport (24px from sm, 22px top at lg), 64px tall (72px at lg), 18px radius, Banked Coal at 86% with blur and the nav-float shadow. Logo left, links centred in Inter 14px at Warm Paper 74% (full on hover or active), with a 1px Flame Orange underline that scales in from the left. Primary pill CTA right. Below lg, a burger opens a stacked menu of condensed uppercase 30px links on hairline rules with a full-width pill CTA.

### Service Row (signature)
Services are not cards. Each is a full-width row between hairline rules: a hairline icon disc and a condensed title on the left five columns, Inter Light description, outline chips and a Flame Orange meta line on the right seven. Hover warms the disc and chip borders to orange.

### Molten Sphere (signature)
The hero's live canvas: a displaced wireframe sphere lit from top-left, shaded orange to crimson, with a twisting ribbon (gradient #FF8A4A, #FF4E2A, #F21368) orbiting it. Three stacked canvases interleave with a solid headline copy and an outline headline copy so the ribbon passes in front of and behind the letters. It pauses off-screen or in a hidden tab and renders a single still frame under reduced motion. It exists once, in the hero.

### Outlined Numeral
Process steps lead with a 7.5 to 8rem outlined condensed numeral that fills Flame Orange on hover (500ms), over an orange dot and a 1px gradient pipeline line.

## Do's and Don'ts

### Do:
- **Do** pair every section headline's solid phrase with one 1.5px outlined word, Archivo 600 at `wdth` 64, uppercase.
- **Do** keep Flame Orange (#FF5E1A) as the only fill for actions, and set Ember Black text on it.
- **Do** separate content with hairline rules and 1px inset rings in Ash Hairline (#2A2224) rather than borders, boxes or shadows.
- **Do** use full pills for every control and 18px for every panel.
- **Do** set reading copy in Inter Light (300) in Warm Ash, capped at 38 to 60ch.
- **Do** run state transitions on cubic-bezier(.22,1,.36,1): 150ms for controls, 300ms for card and row hovers, 700ms for image reveals.
- **Do** respect reduced motion: the marquee stops, entrances and transitions collapse, and the sphere renders one still frame.

### Don't:
- **Don't** fill a button, link or panel with crimson, blaze or violet; they live only in the molten gradient, the marquee alternation and error text.
- **Don't** add a second molten object or glow blob; the sphere appears once, in the hero, and other sections echo it through type and contour lines.
- **Don't** lay services or features out as a grid of icon cards; use hairline-ruled rows.
- **Don't** place small uppercase tracked labels above headlines as eyebrows or kickers; the label style is for row labels, metadata and footer column headings only.
- **Don't** introduce drop shadows beyond the floating nav; lift with a hairline ring or an ember glow.
- **Don't** add a light theme; the system is dark-only.
