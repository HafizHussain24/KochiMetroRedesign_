# KMRL Website Redesign — Comprehensive Master Prompt
### Version 1.0 | Frontend Prototype Specification

---

## 0. DOCUMENT PURPOSE

This document is the single, authoritative reference for designing and building the **Kochi Metro Rail Limited (KMRL) website redesign** as a frontend-only prototype. Every design decision, every section, every piece of mock data, and every interaction pattern is defined here. Nothing should be left to guesswork. Any developer or AI agent receiving this document should be able to implement the prototype without asking a single follow-up question.

---

## 1. PROJECT CONTEXT & BACKGROUND

### 1.1 The Organisation

**Kochi Metro Rail Limited (KMRL)** is a joint venture between the Government of India and the Government of Kerala. It operates the Kochi Metro, which commenced operations on **17 June 2017**. It is India's **first metro to have a social commitment charter** — hiring transgender individuals, featuring vertically themed stations, and running India's only urban Water Metro service alongside the rail network.

- **Headquarters:** JLN Metro Station, 4th Floor, Kaloor, Kochi, Kerala - 682017
- **Helpline:** 1800-425-0355 (Toll Free) | 0484-2846700
- **Operating Hours:** 6:00 AM – 10:00 PM daily
- **Email:** info@kochimetro.org
- **Social Media:**
  - Twitter/X: @MetroRailKochi
  - Facebook: KochiMetroRail
  - Instagram: @KochiMetroRail
  - YouTube: Kochi Metro Rail

### 1.2 The Current Website

The current website at `kochimetro.org` is built on WordPress using the "Greenthumb" theme. It suffers from:
- Outdated visual design (flat 2017-era aesthetics)
- Bloated plugin architecture (Revolution Slider, WPBakery, Essential Grid)
- No true responsive experience
- Heavy page weight, slow load times
- Disconnected sections with no coherent UX flow
- No interactive route map
- No station detail pages
- No modern commuter services UI

### 1.3 The New Vision

The new website must feel **alive** — as if Kochi itself breathes through it. It should evoke:
- The **emerald backwaters and monsoon rains** of Kerala
- The **vibrant murals and temple processions** of Ernakulam
- The **modern engineering and glass** of a cutting-edge metro system
- The **warmth and inclusiveness** of God's Own Country
- The **rhythm of daily life** of a Kochi commuter

This is NOT a generic transit website. It must feel like a **living cultural document** wrapped in premium digital craft.

---

## 2. DESIGN PHILOSOPHY & AESTHETIC IDENTITY

### 2.1 Design Direction: "Living Kerala"

The concept is **"Living Kerala"** — a design system that marries the organic, natural textures of Kerala's landscape (coconut palms, monsoon waters, lotus flowers, spice markets) with the clean precision of modern transit design. Every section transitions naturally, like scenes along a metro journey.

Think of it as: **National Geographic meets Apple meets Kerala Tourism** — lush, cinematic, and effortlessly functional.

### 2.2 Colour Palette

The palette is derived from Kerala's natural environment and KMRL's existing brand:

```
Primary Colors (Brand)
--kmrl-teal:       #07AFB1   /* KMRL brand teal — metro line, CTAs */
--kmrl-teal-dark:  #058A8C   /* Hover states, depth */
--kmrl-teal-glow:  rgba(7,175,177,0.30)

Kerala Nature Palette
--kerala-deep:     #0D2B1F   /* Deep forest green — hero backgrounds */
--kerala-canopy:   #1A4731   /* Jungle canopy — section accents */
--kerala-moss:     #3D6B45   /* Living moss — card tints */
--kerala-palm:     #6B8E23   /* OliveDrab — sustainability, eco */
--kerala-gold:     #D4A017   /* Kathakali gold — accents, highlights */
--kerala-spice:    #C0392B   /* Kashmiri chilli — alert, warning */
--kerala-water:    #1B6CA8   /* Backwater blue — water metro */
--kerala-sand:     #F5EDD6   /* Backwater sand — light backgrounds */
--kerala-cream:    #FFFBF2   /* Jasmine cream — base light bg */

Neutral Scale
--ink-900:         #0A0F14   /* Near-black — main text */
--ink-700:         #2D3748   /* Secondary text */
--ink-500:         #64748B   /* Tertiary text, placeholders */
--ink-200:         #E2E8F0   /* Dividers, borders */
--ink-50:          #F8FAFC   /* Background washes */

Glassmorphism
--glass-dark:      rgba(13, 43, 31, 0.78)   /* Dark glass panels */
--glass-light:     rgba(255, 251, 242, 0.88) /* Light glass panels */
--glass-border:    rgba(7, 175, 177, 0.22)   /* Glass borders */
```

### 2.3 Typography

```
Font Stack:
--font-display:  'Fraunces', serif         /* Headlines — has optical variation, feels alive */
--font-body:     'DM Sans', sans-serif     /* Body text — clean, modern, accessible */
--font-mono:     'JetBrains Mono', mono   /* Station codes, data, fares */
--font-malayalam:'Noto Sans Malayalam', sans-serif  /* Malayalam script text */

Scale (Desktop → Mobile):
--text-hero:    clamp(3.5rem, 7vw, 7rem)
--text-h1:      clamp(2.5rem, 5vw, 4.5rem)
--text-h2:      clamp(1.8rem, 3.5vw, 3rem)
--text-h3:      clamp(1.3rem, 2.5vw, 2rem)
--text-h4:      clamp(1.1rem, 2vw, 1.5rem)
--text-body-lg: 1.125rem
--text-body:    1rem
--text-sm:      0.875rem
--text-xs:      0.75rem
```

> **Note on Fraunces:** Import from Google Fonts. This serif has multiple optical axes — use `opsz` (optical size), `wght` (100-900), and `SOFT` (0-100) to create expressive, living headlines. Use it only for display headings.

### 2.4 Spacing & Layout

```
Container max-width: 1440px (with 80px horizontal padding)
Content max-width:   1200px
Section padding:     clamp(5rem, 10vw, 8rem) vertical
Grid gap:            clamp(1.5rem, 3vw, 2.5rem)

Breakpoints:
--bp-xs:  375px
--bp-sm:  640px
--bp-md:  768px
--bp-lg:  1024px
--bp-xl:  1280px
--bp-2xl: 1440px
```

### 2.5 Motion & Animation Language

All animations follow the principles of **organic movement** — nothing snaps or jumps. Everything breathes.

```
Easing Functions:
--ease-out-expo:   cubic-bezier(0.19, 1, 0.22, 1)   /* Most transitions */
--ease-in-out-back: cubic-bezier(0.68, -0.55, 0.27, 1.55) /* Bouncy reveals */
--ease-spring:     cubic-bezier(0.175, 0.885, 0.32, 1.275) /* Card lifts */

Duration:
--dur-instant:  100ms
--dur-fast:     200ms
--dur-base:     350ms
--dur-slow:     600ms
--dur-cinematic: 1200ms

Rules:
- Never animate more than 2 properties simultaneously on the same element
- Always prefer transform + opacity over layout-affecting properties
- Use will-change: transform sparingly (only when actively animating)
- Honour prefers-reduced-motion: disable/reduce all animations for accessibility
```

### 2.6 Visual Motifs

These recurring visual elements create cohesion across the site:

1. **Coconut Palm Silhouettes:** SVG fronds as decorative dividers between sections, rendered in semi-transparent dark green. Appear as subtle background textures, never foreground noise.

2. **Backwater Water Ripples:** Animated SVG wave paths at section transitions (subtle, 4-second loop). Used especially above the footer.

3. **Metro Track Lines:** Thin teal lines (2px) that run diagonally or horizontally as decorative borders and card accents — echoing the route map.

4. **Kathakali Gold Accents:** #D4A017 used sparingly for premium highlights — awards, achievements, milestones.

5. **Monsoon Texture Overlay:** A very subtle (3% opacity) noise texture over hero areas, giving depth to gradients.

6. **Station Code Badges:** Monospaced 2-letter badges (e.g., "AL" for Aluva, "MG" for M.G Road) styled like physical station signage.

### 2.7 Component Visual Style

- **Cards:** Rounded corners (16px), subtle shadow (`0 4px 24px rgba(0,0,0,0.08)`), hover lifts 6px with deeper shadow
- **Buttons:** Two styles — Primary (filled teal, white text, 48px height) and Outline (transparent, teal border, teal text). Both have 12px border radius. 
- **Glassmorphism panels:** `backdrop-filter: blur(16px)`, 1px border with glass-border color, used for overlays and the sticky navigation
- **Input fields:** 48px height, 12px radius, 1.5px teal focus ring with a glow
- **Badges/Tags:** Pill-shaped (999px radius), small (28px height), semantic colors

---

## 3. TECHNOLOGY STACK

```
Framework:     React 18 + Vite (existing project at d:/Projects/KMRL)
Routing:       React Router v6 (already installed)
Styling:       Vanilla CSS (CSS Modules per component) + CSS custom properties
Icons:         Lucide React (already installed as dependency)
Maps:          Leaflet.js (open-source, no API cost) OR custom SVG — prefer SVG
Animation:     CSS animations + Intersection Observer API (no GSAP dependency)
Fonts:         Google Fonts (Fraunces, DM Sans, JetBrains Mono, Noto Sans Malayalam)
Build:         Vite (existing vite.config.js)
Package:       npm (existing package.json)
```

**Existing project structure at `d:/Projects/KMRL/src/`:**
```
src/
  App.jsx              ← main router shell (has Router, Navigation, Footer)
  components/
    Navigation.jsx     ← existing nav (must be redesigned)
    Navigation.css
    Hero/Hero.jsx      ← existing hero (must be replaced)
    HomeMap/HomeMap.jsx ← existing SVG map (expand significantly)
    Footer/Footer.jsx  ← existing footer (must be redesigned)
    SustainabilityTeaser/ ← existing section (merge into new page)
  data/
    stations.js        ← 26 stations with full data (KEEP and expand)
    careers.js         ← job listings mock data
    fares.js           ← fare chart data
    news.js            ← news articles
    tenders.js         ← tender listings
  pages/
    Home.jsx           ← main homepage (major redesign)
  styles/
    global.css
    variables.css      ← CSS variables (replace entirely with new palette)
    animations.css
```

---

## 4. SITE ARCHITECTURE & PAGES

The prototype must implement the following **8 primary routes**:

```
/                    → Homepage
/stations            → All Stations Index
/stations/:id        → Individual Station Detail Page
/ticketing           → Journey Planner + Fares
/sustainability      → Green Metro & Initiatives
/media               → Media Library (Photos, Videos, Press)
/careers             → Career & Recruitment Portal
/tenders             → Tenders Portal
/rti                 → RTI & Transparency
/business            → Business Opportunities
/vigilance           → Vigilance Portal
/help                → Help, Feedback & Grievances
/about               → About KMRL
```

---

## 5. COMPLETE PAGE-BY-PAGE SPECIFICATION

---

### 5.1 GLOBAL COMPONENTS

#### 5.1.1 Navigation Bar

**Behaviour:**
- Transparent on homepage hero scroll position (overlaying the video/image)
- Transitions to a **dark glassmorphism** state (`--glass-dark`) on scroll past 80px — smooth 350ms transition
- On all inner pages: starts in dark glassmorphism state
- Sticky (`position: sticky; top: 0; z-index: 1000`)

**Desktop Layout (≥1024px):**
```
[KMRL Logo] ........... [Nav Links] ........... [Lang Toggle] [Search] [Buy Ticket CTA]

Logo: KMRL wordmark (text-based: "Kochi Metro" in Fraunces, with a teal metro line running 
      under the K) + "Rail Limited" in small DM Sans below
      
Nav Links (dropdown menus):
  - Plan Your Journey   → /ticketing
  - Stations            → /stations (dropdown: list all 26)
  - About KMRL          → /about (dropdown: Who We Are, Board, Milestones, CSR)
  - Sustainability      → /sustainability
  - Media               → /media
  - Transparency        → /rti (dropdown: RTI, Tenders, Vigilance, Open Data)
  - Careers             → /careers
  - Business            → /business

Right Section:
  - Language toggle: "EN | ML" pill button
  - Search icon (opens full-screen search overlay)
  - "Buy Ticket" button: primary teal CTA → external link (opens in new tab)
```

**Mobile Layout (< 1024px):**
- Hamburger menu icon (3 horizontal lines → X animation on open)
- Full-screen slide-in drawer from right
- Logo centered in top bar
- "Buy Ticket" button at bottom of drawer
- Language toggle at top of drawer

**Accessibility:**
- All nav items keyboard-navigable
- Proper ARIA labels on all interactive elements
- Focus visible ring on all interactive elements

---

#### 5.1.2 Footer

**Layout (4-column desktop, stacked mobile):**

```
Column 1: Brand
  - KMRL logo + tagline: "Connecting Kochi, Enriching Lives"
  - Malayalam tagline: "കൊച്ചിയെ ബന്ധിപ്പിക്കുന്നു, ജീവിതം സമ്പുഷ്ടമാക്കുന്നു"
  - Address: JLN Metro Station, 4th Floor, Kaloor, Kochi - 682017
  - Phone: 0484-2846700
  - Helpline: 1800-425-0355 (Toll Free)
  - Social media icons: Twitter, Facebook, Instagram, YouTube, LinkedIn

Column 2: Commuters
  - Plan Journey
  - Fare Chart
  - Train Timetable
  - Kochi1 Card
  - Parking Services
  - Lost & Found
  - Feeder Services
  - Water Metro

Column 3: Corporate
  - About KMRL
  - Board of Directors
  - Annual Reports
  - Sustainability
  - Business Opportunities
  - Tenders
  - Careers
  - Consultancy Services

Column 4: Transparency & Help
  - RTI Portal
  - Vigilance
  - Gazette & Orders
  - Open Data
  - Grievance Redressal
  - Privacy Policy
  - Accessibility Statement
  - Site Map

Bottom Bar:
  - © 2025 Kochi Metro Rail Limited. All rights reserved.
  - Hosted on AWS | Compliant with GIGW 3.0 | ISO 27001
  - Links: Privacy | Disclaimer | Accessibility | Terms
```

**Aesthetic:**
- Background: `--kerala-deep` (#0D2B1F) — deep jungle green
- Animated water ripple SVG wave at the very top of footer (subtle)
- Small palm frond SVG watermark in top-right corner of footer at 8% opacity
- Social icons: circular teal-bordered buttons, teal icon fill on hover

---

### 5.2 HOMEPAGE (`/`)

#### 5.2.1 Hero Section

**Concept:** Full-viewport hero with a cinematic video background that captures the essence of Kochi Metro + Kerala life. The hero feels like an opening shot of a documentary.

**Implementation (since no actual video API is available, use a CSS animated gradient that simulates video):**

Instead of a real video (which requires assets), create a **layered parallax hero** with:
1. A dark-green-to-teal radial gradient base
2. Animated SVG metro tracks flying across the background
3. Floating station names appearing and fading in a choreographed sequence
4. Animated monsoon rain effect (CSS particle animation, very subtle)

**Hero Content:**
```
Eyebrow tag: "India's Most Advanced Metro Network"

Main Headline (Fraunces, hero size):
  Line 1: "Kochi, in Motion."
  
Subheadline (DM Sans, body-lg):
  "26 stations. 30 km. One seamless city."
  
Malayalam subtitle (Noto Sans Malayalam, text-sm):
  "26 സ്റ്റേഷനുകൾ. 30 കി.മി. ഒരു തടസ്സമില്ലാത്ത നഗരം."

CTA Buttons (side by side):
  Primary: "Plan My Journey →"  (fills teal, links to /ticketing)
  Secondary: "Explore Network"  (outline teal, smooth scrolls to map section)
  
Bottom-left corner: 
  Live ticker strip — "Next train from Aluva: 2 min | Ernakulam South: 5 min | M.G Road: 3 min"
  (auto-scrolling, loops, teal background with white text, monospaced font)
  
Bottom-right corner:
  Animated "Scroll" indicator — thin line that pulses downward
```

**Animation sequence on page load:**
1. 0ms: Dark background appears instantly
2. 200ms: Background gradient animates in (fade up)
3. 600ms: Eyebrow tag slides in from left (opacity 0→1 + translateX(-20px→0))
4. 900ms: Main headline characters stagger in (word by word, staggered 80ms each)
5. 1400ms: Subheadline fades in
6. 1600ms: CTA buttons bounce in (ease-spring)
7. 2000ms: Bottom ticker slides up from below
8. Continuous: Floating station name particles drift across background

---

#### 5.2.2 Quick Services Bar

Immediately below the hero (always visible without scrolling on desktop). This is the utility belt.

**Layout:** 6-card horizontal strip (wraps to 3×2 on tablet, 2×3 on mobile)

```
Cards (icon + title + subtitle):
1.  🎫  Buy Ticket         "Online booking"              → external link
2.  🗺️  Plan Journey       "Routes & fares"              → /ticketing
3.  🅿️  Parking            "Book a space online"         → external link
4.  💳  Kochi1 Card        "Recharge & manage"           → external link
5.  🚨  Live Alerts        "Service status & updates"    → #alerts section
6.  📞  Contact            "1800-425-0355 | Free"        → /help
```

**Aesthetic:**
- Pure white background with a very faint teal left-border on each card
- Card shadow: `0 2px 12px rgba(0,0,0,0.07)`
- Hover: card lifts 4px, teal left border expands to fill teal background, icon becomes white, text becomes white
- This strip should feel like a metro station's service kiosk UI

---

#### 5.2.3 Welcome + Integrated Transport Vision

A split-content section (image carousel left, text right on desktop; stacked on mobile).

**Text Content:**
```
Section Label: "Our Mission"
Heading: "The First City Where Transport Thinks as One"

Body:
Our objective is to make Kochi the first city in the country where the entire 
public transport system — the Metro, the Feeder Buses, the Water Metro, the 
auto-rickshaws, and the taxis — work together as a seamless integrated system; 
with a common timetable, common ticketing, and a centralised command and control.

Stats strip below text:
  • 2017: Year of inception
  • 30 km: Total network length
  • 26: Active stations
  • 3: Integrated transport modes
```

**Image carousel (left side):** 
Show 3 rotating cards depicting:
1. Metro train interior (modern, clean)
2. Water Metro vessel on backwaters
3. Aerial view of Kochi with metro line

Since real photos aren't available, use **CSS gradient art** with SVG shapes that represent each:
- Card 1: Deep teal gradient with metro window silhouette shapes
- Card 2: Blue-green gradient with wave shapes (water metro)
- Card 3: Aerial view — dark map-style grid pattern with golden teal route line

---

#### 5.2.4 Interactive Network Map

**This is the centrepiece of the homepage.** Users can interact with stations to get contextual information.

**Layout:**
- Full-width section, `--kerala-deep` background
- Section heading (white): "Explore Our Network"
- Subheading: "Click any station to plan your journey"
- SVG map fills the available width (responsive, scrollable horizontally on mobile)

**Map Design:**
The SVG map must visually represent Kochi's geography. It is NOT a geographic map — it's a **schematic transit map** inspired by London's Tube map style, but with Kerala aesthetics.

```
Map Elements:
1. Background: Dark teal/forest green with subtle grid lines (like a physical metro map)
2. Main Line (Blue line): Aluva → Thripunithura (25 stations, Phase 1 - operating)
   - Rendered as a smooth bezier curve, not straight lines
   - Line color: #07AFB1 (primary teal), 6px stroke
3. Branch line (Vyttila → Kakkanad Phase 2):
   - Dashed line, same color, indicates "under construction / planned"
4. Station markers: Circles (8px radius) white fill, teal stroke
   - Interchange stations (Vyttila): Double ring, larger (12px radius)
   - Water metro connection stations: Blue dot inside ring
5. Station labels: DM Sans 11px, alternating above/below to avoid overlap
6. Station codes: JetBrains Mono, 9px, shown in small badge next to name
```

**Station List (all 26, in order):**
```
Zone 1 (Aluva Area):
01. Aluva          (AL) — Phase 1
02. Pulinchodu     (PU) — Phase 1
03. Companypady    (CO) — Phase 1
04. Ambattukavu    (AM) — Phase 1
05. Muttom         (MU) — Phase 1

Zone 2 (Kalamassery Area):
06. Kalamassery    (KA) — Phase 1
07. Cochin Univ.   (CU) — Phase 1
08. Pathadipalam   (PA) — Phase 1
09. Edapally       (ED) — Phase 1 ★ Major interchange hub
10. Changampuzha   (CP) — Phase 1
11. Palarivattom   (PL) — Phase 1

Zone 3 (City Centre):
12. JLN Stadium    (JL) — Phase 1 ★ KMRL HQ nearby
13. Kaloor         (KL) — Phase 1
14. Town Hall      (TH) — Phase 1 (formerly Lissie)
15. M.G Road       (MG) — Phase 1 ★ Shopping hub
16. Maharajas      (MC) — Phase 1

Zone 4 (Ernakulam South):
17. Ernakulam Sth  (ES) — Phase 1 ★ Water Metro interchange
18. Kadavanthra    (KD) — Phase 1
19. Elamkulam      (EK) — Phase 1
20. Vyttila        (VY) — Phase 1 ★ Major interchange, Water Metro
21. Thaikoodam     (TK) — Phase 1

Zone 5 (Tripunithura):
22. Petta          (PT) — Phase 1
23. Vadakkekotta   (VK) — Phase 1
24. SN Junction    (SN) — Phase 1
25. Thripunithura  (TR) — Phase 1 (Southern terminus)

Phase 2 (Branch):
26. Kakkanad       (KK) — Phase 2 (planned, from Vyttila)
```

**Hover / Click Interaction (Station Panel):**
When a user hovers (desktop) or taps (mobile) a station:
- A **glassmorphism panel** slides in from the right side of the map container
- Panel content:
  ```
  [Station Code Badge] [Station Name in Fraunces]
  [Malayalam name in Noto Sans Malayalam]
  ─────────────────────────────────────────────
  NEXT DEPARTURES (mock real-time)
  → Towards Thripunithura:  2 min, 8 min, 14 min
  → Towards Aluva:           5 min, 11 min, 17 min
  ─────────────────────────────────────────────
  CONNECTIVITY
  [Bus icon] Feeder buses: Route 8C, 18E, 25B
  [Boat icon] Water Metro: Platform 3 (if applicable)
  [Auto icon] Auto-rickshaws: Stand at Exit 2
  ─────────────────────────────────────────────
  NEARBY (top 3 for mock data)
  [Landmark icon] [Landmark name] — Xm away
  ─────────────────────────────────────────────
  [Button] "Full Station Guide →"  → links to /stations/:id
  ```
- Panel animates in from right: `translateX(120%) → translateX(0)`, 350ms ease-out-expo

**Mock station data for all 26 stations — key details:**

| Station | Malayalam | Nearby Landmarks | Bus Routes | Water Metro |
|---------|-----------|-----------------|------------|-------------|
| Aluva | ആലുവ | Aluva Manapuram, Aluva Palace | 1A, 10, 15C | No |
| Pulinchodu | പുലിഞ്ചോട് | CUSAT Gate | 10B | No |
| Companypady | കമ്പനിപ്പടി | Malayalee Club | — | No |
| Ambattukavu | അമ്പത്തുകാവ് | Karumathu Temple | — | No |
| Muttom | മുട്ടം | Muttom Temple | 12 | No |
| Kalamassery | കളമശ്ശേരി | Kalamassery Market, KELTRON HQ | 2, 6B, 14 | No |
| Cochin University | കൊച്ചിൻ സർവ്വകലാശാല | CUSAT Campus | 5, 18 | No |
| Pathadipalam | പാതടിപ്പാലം | Chembumukku | — | No |
| Edapally | എടപ്പള്ളി | LuLu Mall, NH Bypass Junction | 3, 8, 22, 40 | No |
| Changampuzha Park | ചങ്ങമ്പുഴ പാർക്ക് | Changampuzha Park, PVS Hospital | — | No |
| Palarivattom | പാലാരിവട്ടം | Palarivattom Flyover | 4, 17 | No |
| JLN Stadium | ജെ.എൽ.എൻ സ്റ്റേഡിയം | Jawaharlal Nehru Stadium, KMRL HQ | — | No |
| Kaloor | കലൂർ | Kaloor Market, EMS Stadium | 5, 19 | No |
| Town Hall | ടൗൺ ഹാൾ | Town Hall, Durbar Hall | — | No |
| M.G Road | എം.ജി. റോഡ് | Marine Drive, MG Road Shopping | 6, 24 | No |
| Maharajas College | മഹാരാജാസ് കോളേജ് | Maharajas College, Durbar Hall Ground | — | No |
| Ernakulam South | എറണാകുളം സൗത്ത് | Ernakulam Jn. Railway Stn | 7, 29 | Yes — Ernakulam Boat Jetty |
| Kadavanthra | കടവന്ത്ര | Kadavanthra Market | — | No |
| Elamkulam | ഏലംകുളം | Lotus Club, InfoPark Road | — | No |
| Vyttila | വൈറ്റില | Vyttila Hub (bus terminus), Willingdon Island | 9, 11, 31, Hub | Yes — Vyttila Jetty |
| Thaikoodam | തൈക്കൂടം | Thaikoodam Bridge | — | No |
| Petta | പേട്ട | Petta Market | — | No |
| Vadakkekotta | വടക്കേക്കോട്ട | Vadakkekotta Fort | — | No |
| SN Junction | എസ്.എൻ. ജംഗ്ഷൻ | SN College | — | No |
| Thripunithura | തൃപ്പൂണിത്തുറ | Hill Palace Museum, Thripunithura Palace | 8, 35 | No |
| Kakkanad | കക്കനാട് | InfoPark, Kochi SEZ (Phase 2, planned) | — | No |

---

#### 5.2.5 Live Stats Counter Section

**Layout:** 4 stats on a dark background (–kerala-deep). Count-up animation triggers when section enters viewport.

**Stats (mock data, all realistic):**
```
🚇 6,50,000+   Daily Riders
☀️ 20.8 MWp    Solar Capacity  
🌿 30,000+     Trees Planted
🌍 15,000 T    CO₂ Offset/Year
```

**Design:**
- Background: `--kerala-deep` with subtle animated gradient shift
- Numbers: Fraunces bold, very large (clamp 3rem, 6vw, 5rem)
- Suffix/unit: DM Sans medium, `--kmrl-teal`
- Label: DM Sans regular, 0.9rem, `--ink-200`
- Teal dotted SVG dividers between stats

**Animation:**
- On scroll into view: numbers count up from 0 using `requestAnimationFrame`
- Easing: ease-out — fast at start, slow at end (like a speedometer)
- Duration: 2000ms for each counter, staggered 200ms per card

---

#### 5.2.6 Latest News Section

**Layout:** Horizontal scrollable card row (on mobile) / 3-column grid (desktop)

**News Data (mock — all realistic KMRL news):**
```
1. Tag: "Ridership"
   Title: "Kochi Metro Crosses 6.5 Lakh Daily Riders — New All-Time Record"
   Date: "June 15, 2025"
   
2. Tag: "Sustainability"  
   Title: "KMRL Wins National Award for Green Building Certification"
   Date: "May 28, 2025"
   
3. Tag: "Service Update"
   Title: "New Feeder Bus Routes Added: Kakkanad IT Corridor to Vyttila"
   Date: "May 10, 2025"
   
4. Tag: "Technology"
   Title: "Kochi Metro Launches AI-Powered Crowd Management System at Peak Hours"
   Date: "April 22, 2025"
   
5. Tag: "Community"
   Title: "KMRL Metrolympics 2025: Celebrating Sport and Inclusivity"
   Date: "April 5, 2025"
   
6. Tag: "Infrastructure"
   Title: "Phase 2 Vyttila–Kakkanad Extension: Work Reaches 40% Completion"
   Date: "March 18, 2025"
```

**Card design:**
- White background
- Top: Colored tag pill (category color)
- Middle: News title (DM Sans semibold, 3 lines max with ellipsis)
- Bottom: Date in small muted text + "Read more →" link
- Hover: card lifts 6px, shadow deepens, left edge fills with tag color
- Image area at top (80px height): gradient block in the tag's color family

---

#### 5.2.7 Sustainability Teaser

A visually dramatic full-width section showcasing KMRL's environmental commitment.

**Layout:** Dark background, 2-column (left: animated ring/progress visual; right: 4 initiative cards)

**Content:**
```
Section heading: "Green Metro. Greener Kochi."
Subheading: "How we're building a carbon-neutral future for Kerala."

Left: Animated circular progress ring
  - 87% ring fill (animated on scroll)
  - Centre text: "87%"
  - Caption: "Renewable Energy Powered"

Right: 4 initiative cards
1. ☀️  Solar Energy        "20.8 MWp solar panels across all stations and depots"
2. 🌿  Vertical Gardens   "Living green walls at 12 major stations"
3. ♻️  Plastic Recycling  "6,000+ kg of plastic recycled through reverse vending machines"
4. 🌊  Water Metro        "Zero-emission electric vessels on Kochi's backwaters"
```

**CTA:** "Explore Our Sustainability Journey →" → links to /sustainability

---

#### 5.2.8 Social Media Feed Teaser

A row of embedded social post cards pulled from KMRL's social channels.

**Layout:** 4-card horizontal strip with brand color headers

**Mock social posts:**
```
Post 1 (Twitter/X):
  "@MetroRailKochi: Monsoon is here! 🌧️ Our trains are running on time. 
   Stay dry, Kochi! #KochiMetro #RainyDay"
  Likes: 342 | RT: 87 | Time: "2h ago"

Post 2 (Instagram):
  Image: Metro crossing backwaters at sunset (CSS gradient art)
  Caption: "When engineering meets nature. The Kochi Metro crosses the Petta 
   waterway at dusk. 🌅"
  Likes: 2.4K | Time: "5h ago"

Post 3 (Facebook):
  "📢 Service Alert: Slight delay on northbound trains from Edapally due to 
   scheduled maintenance. Expected resolution: 20 minutes. Thank you!"
  Reactions: 145 | Time: "8h ago"

Post 4 (YouTube):
  Thumbnail area (gradient): "Kochi Metro — A Ride Through Kerala's Future"
  Views: "184K views"
```

**CTA:** Social icons row → links to actual social media pages

---

### 5.3 STATIONS INDEX (`/stations`)

**Purpose:** Overview of all 26 stations with search and filter.

**Layout:**
- Full-width hero strip: "Find Your Station" with a search bar (large, centered)
- Filter pills below: "All | Zone 1 | Zone 2 | Zone 3 | Zone 4 | Zone 5 | Water Metro | Parking | Interchange"
- Results grid: 3 columns desktop, 2 tablet, 1 mobile

**Station card design:**
```
[Station code badge — top left: "AL"]
[Station name — Fraunces heading]
[Malayalam name — small]
[Zone indicator bar — thin colored line]
──────────────────────────────────────
Facility icons row (emoji icons):
  🛗 Lift  ♿ Accessible  🅿️ Parking  ☕ Café  🏧 ATM

Connectivity tags:
  [Bus] [Auto] [Water Metro]
──────────────────────────────────────
[Button: "Station Details →"]
```

**Zone color coding:**
```
Zone 1: #4CAF50 (green)
Zone 2: #2196F3 (blue)
Zone 3: #FF9800 (orange)
Zone 4: #9C27B0 (purple)
Zone 5: #F44336 (red)
Branch: #607D8B (blue-grey, dashed)
```

---

### 5.4 STATION DETAIL PAGE (`/stations/:id`)

**Purpose:** Deep information hub for each station. This is the most information-rich page.

**Layout (single column with sidebars on desktop):**

**Hero Section (station-specific):**
```
Background: Gradient specific to zone color
Station code badge (large — 48px height)
Station name: Large Fraunces heading
Malayalam name: Below in Noto Sans Malayalam
Zone + line indicator
Subtitle: "[N] km from Aluva | Zone [X]"
```

**Tab system (3 tabs):**

**Tab 1: Getting There**
```
NEXT TRAINS (mock real-time)
Table:
  Direction          | Next   | After  | After that
  → Thripunithura   | 3 min  | 9 min  | 15 min
  ← Aluva           | 6 min  | 12 min | 18 min

CONNECTIVITY
Bus routes (with route numbers and key stops):
  Route 8C → Edapally | Route 18E → Vyttila | Route 25B → Town Hall

Water Metro (if applicable):
  Platform: [X] | Services to: [destinations] | Frequency: every 30 min

Feeder Services:
  Auto-rickshaws: Stand at Exit 2, metered fare
  Taxi: Available at Exit 1 (Rapido, Ola, Uber)

Parking:
  [Available / Full / Limited] — XX spaces
  Rate: ₹20/hour (Two-wheeler), ₹50/hour (Four-wheeler)
  Booking: [Book Online] → external link
```

**Tab 2: Station Facilities**
```
[Icon grid of all available facilities with descriptions]

Essential:
  🛗 Lifts: 3 lifts serving all floors
  ♿ Accessibility: Ramps, tactile paths, visual impairment aids
  🚻 Toilets: Available on Concourse level (separate for differently-abled)
  
Services:
  ☕ Cafeteria: Open 7 AM–9 PM
  🏧 ATM: SBI and Federal Bank
  💳 Kochi1 Top-up: Kiosk near Exit 1
  🛒 Convenience Store: Platform level
  
Safety:
  👮 Security: 24/7 CISF personnel
  📷 CCTV: 100% coverage
  🔥 Fire Safety: Certified suppression system
  
Platform:
  Platform Type: Island platform
  Platform Length: 180 metres
  Screen Doors: Full-height platform screen doors
```

**Tab 3: Nearby (Walk-in 5 min)**
```
[Card grid of 6 nearby places — 3 columns desktop]

Each card:
  [Category icon]
  [Place name]
  [Distance: X min walk / X metres]
  [Type: Restaurant | Shopping | Hospital | Landmark | Hotel]

Mock data for M.G Road station (as example):
  1. 🍽️ Dhe Puttu — Restaurant — 2 min walk
  2. 🛍️ Centre Square Mall — Shopping — 3 min walk
  3. 🌊 Marine Drive Promenade — Landmark — 4 min walk
  4. 🏨 The Grand Hotel Kochi — Hotel — 5 min walk
  5. 🍺 Kashi Art Café — Café — 4 min walk
  6. 🏥 Amrita Institute — Hospital — 8 min walk
```

---

### 5.5 JOURNEY PLANNER / TICKETING (`/ticketing`)

**Purpose:** Help commuters plan their journey and view fares.

**Main Feature: Route Planner**
```
UI Design: Two large input fields with swap button between them

[🔵 FROM] [ Aluva           ▼ ] 
         [ ⇅ Swap ]
[🔴 TO  ] [ M.G Road        ▼ ]

[Search button: "FIND ROUTE →"]

Results (after "search"):
──────────────────────────────────────────────────────────
ROUTE FOUND
Aluva → M.G Road
Journey time: ~35 minutes | 14 stations | Zone 1 → Zone 3

[Timeline view — vertical list of stations with dots and line:]
● Aluva (AL)
  ↓ 3 min
● Pulinchodu (PU)
  ↓ 3 min
... (abbreviated) ...
● M.G Road (MG)  ✓

FARE: ₹45  (Smart card: ₹40.50 | 10% discount)

BUYING OPTIONS:
[Buy Token: ₹45] → external
[Recharge Kochi1] → external
[Tourist Pass] → external
──────────────────────────────────────────────────────────
```

**Fare Chart Section (below planner):**
```
Complete Fare Table:
Zones:    1    2    3    4    5
Zone 1:  ₹10  ₹20  ₹30  ₹40  ₹50
Zone 2:  ₹20  ₹10  ₹20  ₹30  ₹40
Zone 3:  ₹30  ₹20  ₹10  ₹20  ₹30
Zone 4:  ₹40  ₹30  ₹20  ₹10  ₹20
Zone 5:  ₹50  ₹40  ₹30  ₹20  ₹10

Smart Card Discount: 10%
Senior Citizen: 15% discount (Smart Card required)
Student Pass: ₹200/month (valid Mon–Fri)
Tourist Day Pass: ₹150 (unlimited travel, 1 day)
```

**Train Timetable Section:**
```
First Train: 06:00 AM from Aluva / 06:00 AM from Thripunithura
Last Train:  10:00 PM from Aluva / 10:00 PM from Thripunithura
Frequency:  Peak hours (7-10 AM, 5-8 PM): Every 5 minutes
            Off-peak: Every 10 minutes
```

**Group Booking Info:**
```
Groups of 20+: 15% discount | Pre-booking required 48 hours in advance
Special charter services available for events
Contact: groupbooking@kochimetro.org
```

---

### 5.6 SUSTAINABILITY PAGE (`/sustainability`)

**Purpose:** Showcase KMRL's environmental leadership and achievements.

**Sections:**

**Section 1: Carbon Dashboard**
```
Hero stat: "87% Renewable Energy Powered"
(Animated circular gauge, fills on scroll)

Supporting metrics:
  • Annual CO₂ avoided: 15,000 tonnes
  • Equivalent to: Planting 6,25,000 trees
  • Energy from solar: 20.8 MWp installed
  • Green Building Rating: Platinum LEED (13 stations)
```

**Section 2: Solar Energy**
```
"20.8 MWp — India's Greenest Metro"

Visual: Animated solar panel grid (CSS art) with energy flow lines
Stats:
  - Panels installed: 72,000+ across all stations and depot
  - Annual generation: ~25 million kWh
  - Coverage: 85% of daily energy demand
  - Carbon saved: 18,000 tonnes/year
```

**Section 3: Green Initiatives Grid (6 cards)**
```
1. 🌿 Vertical Gardens
   "Living walls at 12 stations — 50,000+ plants, 120+ species"

2. ♻️ Plastic Recycling
   "6 reverse vending machines — 8,000+ kg recycled since 2021"

3. 💧 Rainwater Harvesting
   "3,000 litre capacity at each station — used for cleaning"

4. 🌊 Water Metro
   "16 zero-emission electric boats — 38 routes — 100% electric"

5. 🚲 Cycle Docking
   "Cycle docking stations at 8 metro stations — 120 cycles available"

6. 🌍 Social Inclusion
   "India's first metro with transgender staff — 23 employees"
```

**Section 4: Reports & Certifications**
```
Downloadable documents:
  • Annual Sustainability Report 2024-25 (PDF, 4.2 MB)
  • ISO 14001 Environmental Management Certificate
  • LEED Platinum Rating Certificate
  • Carbon Audit Report 2024
  • Solar Energy Generation Data 2023-24
```

---

### 5.7 MEDIA LIBRARY (`/media`)

**Purpose:** Archive of photos, videos, press releases, and event coverage.

**Layout:**
- Filter bar: "All | Photos | Videos | Press Releases | Events | Awards"
- Date range picker
- Search bar
- Masonry grid layout (3 columns desktop)

**Mock Media Content:**

Photos (12 items):
```
1. "Metro Interior — Morning Rush" — March 2025
2. "Kochi Metro Crossing the Petta Waterway" — Feb 2025
3. "Solar Panel Installation at Aluva Depot" — Jan 2025
4. "Metrolympics 2025 — Athletes at JLN Station" — April 2025
5. "Water Metro — Vyttila to Marine Drive" — Dec 2024
6. "Lady Loco Pilots — KMRL's Women in Rail" — Nov 2024
7. "Vertical Garden at Edapally Station" — Oct 2024
8. "Station Inauguration — Phase 1 Extension" — Sep 2024
9. "Kathakali Mural — MG Road Station" — Aug 2024
10. "FIT India Cyclothon at Kalamassery" — July 2024
11. "KMRL Head Office at JLN Station" — June 2024
12. "Thripunithura Station at Dusk" — May 2024
```

Videos (6 items):
```
1. "Kochi Metro — A Blend of Technology and Sustainability" (12:34) — KMRL Official
2. "Journey from Aluva to Thripunithura" (8:20) — Documentary
3. "Water Metro Experience — Kochi Backwaters" (5:45)
4. "Kochi Metro Accessibility Features" (7:12)
5. "Annual Day Celebration 2024" (15:20)
6. "How Kochi Metro Changed My Life" — Commuter Stories (9:50)
```

Press Releases (8 items):
```
1. "KMRL Records All-Time High Ridership — 6.5 Lakh Daily Commuters" — Jun 2025
2. "Phase 2 Construction Update — Vyttila Kakkanad" — May 2025
3. "KMRL Wins National Metro Excellence Award" — Apr 2025
4. "New Feeder Bus Integration — 15 New Routes" — Mar 2025
5. "Kochi Metro Launches AI Crowd Management" — Feb 2025
6. "Annual Report 2024-25 Published" — Jan 2025
7. "Water Metro Fleet Expansion — 4 New Vessels" — Dec 2024
8. "KMRL Partners with CUSAT for Research" — Nov 2024
```

**Video card design:**
- Thumbnail area: Dark gradient with play button SVG overlay
- Duration badge: bottom-right of thumbnail
- Play button animates scale on hover

**Photo card design:**
- Full bleed image (CSS gradient art as placeholder)
- Hover: slight zoom (1.05 scale) + semi-transparent overlay with download icon
- Click: opens full-screen lightbox overlay

---

### 5.8 CAREERS PAGE (`/careers`)

**Purpose:** Showcase open positions and allow applicants to explore KMRL as an employer.

**Sections:**

**Hero:** 
```
Background: Kerala forest green with metro tracks silhouette
Heading: "Build the Future of Kochi's Transport"
Subheading: "Join 3,000+ KMRL employees shaping tomorrow's mobility"

Culture highlights:
  🤝 Inclusive Workplace   "India's first metro with transgender employees"
  📈 Career Growth         "Internal promotion rate: 67%"
  🎓 Learning & Dev        "Annual training budget: ₹15,000 per employee"
  🏆 Recognition           "Best Public Sector Employer 2024"
```

**Open Positions Section:**

Filter: "All | Engineering | Operations | IT | Administration | Contractual"

**Mock Job Listings (8 positions):**
```
1. Station Controller
   Department: Operations | Type: Permanent | Location: Multiple Stations
   Experience: 2-5 years | Qualification: B.E/B.Tech (Electrical/Electronics)
   Last Date: July 31, 2025
   [Apply Now] [Job Description]

2. Software Developer (Full Stack)
   Department: IT | Type: Permanent | Location: KMRL HQ, Kaloor
   Experience: 3-6 years | Qualification: B.Tech (CS/IT)
   Last Date: August 15, 2025
   [Apply Now] [Job Description]

3. Civil Engineer (Infrastructure)
   Department: Engineering | Type: Contract (2 years)
   Experience: 5-8 years | Qualification: B.E Civil
   Last Date: July 25, 2025
   [Apply Now] [Job Description]

4. Customer Service Executive
   Department: Operations | Type: Permanent | Location: All Stations
   Experience: 0-2 years | Qualification: Any Degree
   Last Date: August 5, 2025
   [Apply Now] [Job Description]

5. Finance Manager
   Department: Finance | Type: Permanent | Location: KMRL HQ
   Experience: 8-12 years | Qualification: CA/MBA Finance
   Last Date: July 28, 2025
   [Apply Now] [Job Description]

6. Security Personnel (CISF Support)
   Department: Security | Type: Contract
   Experience: Ex-servicemen preferred | Qualification: 12th Pass
   Last Date: August 20, 2025
   [Apply Now] [Job Description]

7. Data Analyst
   Department: IT | Type: Permanent
   Experience: 2-4 years | Qualification: B.Tech/MCA
   Last Date: August 10, 2025
   [Apply Now] [Job Description]

8. Public Relations Officer
   Department: Corporate Communications | Type: Permanent
   Experience: 5-7 years | Qualification: Mass Communication/MBA
   Last Date: July 30, 2025
   [Apply Now] [Job Description]
```

**Application Flow (UI only — no backend):**
Clicking "Apply Now" opens a modal with:
```
Step 1: Personal Details (Name, DOB, Email, Phone, Address)
Step 2: Qualifications (Education history, Certificates upload)
Step 3: Experience (Previous employers, duration, role)
Step 4: Documents Upload (CV, Photo, Certificates — file inputs)
Step 5: Review & Submit

Progress bar showing current step
"Submit" button → shows success toast: "Application received! Reference ID: KMRL-2025-XXXXX"
```

**Fake Job Alert warning banner (existing feature from website):**
```
⚠️ Warning: KMRL does not collect fees for job applications. 
Report suspicious recruitment calls to: vigilance@kochimetro.org
```

---

### 5.9 TENDERS PORTAL (`/tenders`)

**Purpose:** Transparency in procurement. Shows active, closed, and awarded tenders.

**Layout:**

**Tab system: "Active Tenders | Result/Awards | Archive"**

**Active Tenders (8 mock tenders):**
```
1. Tender No: KMRL/CIVIL/2025-001
   Title: "Construction of Kakkanad Extension Phase 2 — Viaduct Work Package 3"
   Department: Civil Engineering
   Type: Open Tender
   Estimated Value: ₹185 Crores
   Published: 01 June 2025
   Closing: 31 July 2025
   Documents Downloaded: 147
   [Download Documents (PDF, 12.4 MB)] [View Corrigenda]

2. Tender No: KMRL/IT/2025-008
   Title: "Supply and Commissioning of Integrated Passenger Information System (IPIS)"
   Department: IT & Systems
   Type: Limited Tender
   Estimated Value: ₹8.5 Crores
   Published: 10 June 2025
   Closing: 10 July 2025
   Documents Downloaded: 63
   [Download Documents] [View Corrigenda]

3. Tender No: KMRL/SOLAR/2025-003
   Title: "Additional Solar Panel Installation — Phase 2 Stations (6 stations)"
   Department: Electrical
   Type: Open Tender
   Estimated Value: ₹22 Crores
   Published: 15 May 2025
   Closing: 20 July 2025
   Documents Downloaded: 209
   [Download Documents] [View Corrigenda]

4. Tender No: KMRL/HR/2025-012
   Title: "Manpower Supply for Housekeeping and Sanitation Services"
   Department: Administration
   Type: Open Tender
   Estimated Value: ₹4.2 Crores
   Published: 20 May 2025
   Closing: 25 June 2025
   Documents Downloaded: 318
   [Download Documents]

5. Tender No: KMRL/OPS/2025-006
   Title: "Procurement of Platform Screen Doors — Kakkanad Extension"
   Department: Operations Engineering
   Estimated Value: ₹35 Crores
   Published: 5 June 2025
   Closing: 5 August 2025
   Documents Downloaded: 88
   [Download Documents]

6. Tender No: KMRL/ADV/2025-015
   Title: "Advertising Rights — Station Display Panels (3-year contract)"
   Department: Business Development
   Type: Open Tender
   Estimated Value: ₹12 Crores
   Published: 8 June 2025
   Closing: 8 August 2025
   Documents Downloaded: 42
   [Download Documents]

7. Tender No: KMRL/WATER/2025-009
   Title: "Annual Maintenance Contract for Water Metro Vessels (2 units)"
   Department: Water Metro
   Type: Limited Tender
   Estimated Value: ₹3.8 Crores
   Published: 1 June 2025
   Closing: 1 July 2025
   Documents Downloaded: 27
   [Download Documents]

8. Tender No: KMRL/SECURITY/2025-011
   Title: "Security Services Contract — All 26 Metro Stations"
   Department: Security
   Type: Open Tender
   Estimated Value: ₹18 Crores
   Published: 12 June 2025
   Closing: 12 August 2025
   Documents Downloaded: 156
   [Download Documents]
```

**Tender card design:**
- Status badge: "OPEN" (green) / "CLOSING SOON" (amber, < 7 days) / "CLOSED" (red)
- Download count shown prominently (as per requirement)
- Corrigenda count badge if amendments exist

**Vendor Registration Section:**
```
Modal/overlay form: 
1. Company Name, Type (Pvt Ltd / Proprietorship / Partnership / PSU)
2. GST Registration Number
3. PAN Number
4. Contact Person + Email + Phone
5. Upload Company Registration Certificate
6. Email verification step (mock — shows "OTP sent" on click)
7. Success: "Registration complete! Vendor ID: KMRL-VND-2025-XXXXX"
```

---

### 5.10 RTI & TRANSPARENCY (`/rti`)

**Purpose:** Comply with RTI Act and provide structured access to public information.

**Sections:**

**RTI Overview:**
```
Public Information Officer (PIO):
  Name: [Name], General Manager (Administration)
  Address: JLN Metro Station, 4th Floor, Kaloor, Kochi - 682017
  Phone: 0484-2846700 Ext. 1021
  Email: pio@kochimetro.org

Appellate Authority:
  Name: [Name], Director (Finance)
  Email: appellate@kochimetro.org
  
Filing Fee: ₹10 (DD/IPO/Cash) | BPL Applicants: Exempt
```

**RTI Form (online submission UI):**
```
Full Name:          [text input]
Address:           [textarea]
Contact Number:     [phone input]
Email:             [email input]
Type of Information: [dropdown: Financial | Operations | Procurement | HR | Infrastructure | Other]
Description of Info: [textarea — 500 chars max]
Preferred Format:   [Radio: Physical copy / Email]
Declaration: [Checkbox] I certify I am an Indian citizen and this request is not for commercial purposes
[Submit RTI Application]
```

**Document Library:**
```
Annual Reports:
  • Annual Report 2024-25 (PDF, 8.2 MB)
  • Annual Report 2023-24 (PDF, 7.6 MB)
  • Annual Report 2022-23 (PDF, 7.1 MB)

Financial Disclosures:
  • Audited Accounts 2024-25
  • Budget Allocation Report 2025-26

Policies & SOPs:
  • Citizens Charter
  • Ticketing Guidelines
  • SOP for Licensing of KMRL Space
  • Privacy Policy
  • Vigilance Manual

Gazette & Orders:
  • GoK Gazette Notifications (2017–2025)
  • Ministry of Housing & Urban Affairs Orders
```

---

### 5.11 BUSINESS OPPORTUNITIES (`/business`)

**Purpose:** Attract commercial partnerships, advertising, and vendor registrations.

**Sections:**

**Opportunities Grid (6 categories):**
```
1. 🏪 Commercial Leasing
   "Retail spaces, ATM spaces, and kiosks at 26 stations"
   Rates: ₹800–₹4,000/sq.ft/month (zone-based)
   [Enquire Now]

2. 📢 Advertising
   "Station branding, train wraps, digital displays, station naming rights"
   Formats: Banner, Digital, Platform Naming, Train Wrap
   [Download Media Kit]

3. 🛒 Food & Beverage Licensing
   "Cafeteria, kiosk, and vending machine placements"
   Revenue share: 15-20% of gross revenue
   [Apply for License]

4. 🤝 CSR Partnerships
   "Adopt-a-Station, Green Initiatives, Education Programs"
   [Corporate Enquiry]

5. 💻 Technology Partnerships
   "API integrations, digital solutions, smart city pilots"
   Contact: tech@kochimetro.org
   [Partner With Us]

6. 🚌 Last Mile Integration
   "Feeder service operators, e-rickshaw providers, parking operators"
   [Register as Operator]
```

---

### 5.12 VIGILANCE PORTAL (`/vigilance`)

**Purpose:** Secure whistleblower and complaint channel.

**Design Note:** This page must feel **secure and trustworthy** — use a slightly different aesthetic (slightly darker, more formal, with security iconography). 

**Sections:**

**Complaint Form:**
```
Label: [Optional — keep anonymous]
Type: [Dropdown: Corruption | Misuse of Position | Financial Irregularity | 
       Bribery | Misconduct | Other]
Incident Date: [date picker]
Location: [dropdown of stations + HQ + Depot]
Description: [textarea — minimum 100 chars]
Evidence Upload: [file upload — accepts PDF, JPG, PNG — max 10MB]
Contact (optional for follow-up): [email]
[Submit Securely]
```

**After submit:** 
```
"Your complaint has been registered. Reference ID: VIG-2025-XXXXXX
Complaints are reviewed by the Vigilance Officer within 7 working days.
All submissions are encrypted and handled with strict confidentiality."
```

**Information Panel:**
```
Vigilance Officer Contact (for non-anonymous matters):
  Email: vigilance@kochimetro.org
  Secure Line: 0484-2846700 Ext. 1099

Your Rights:
  • All complaints are treated as strictly confidential
  • Whistleblowers are protected under the Whistle Blowers Protection Act, 2014
  • No action shall be taken against bona fide complainants

Vigilance Policies: [downloadable links]
  • Vigilance Manual
  • Anti-Corruption Policy  
  • Integrity Pact (IP) with vendors
```

---

### 5.13 HELP & CONTACT (`/help`)

**Purpose:** Support hub for commuters and public.

**Sections:**

**FAQ Accordion (10 most common):**
```
Q: How do I recharge my Kochi1 Card?
A: You can recharge your Kochi1 Card at any metro station customer service counter, 
   via the official app, or through our online portal. Minimum recharge: ₹50.

Q: Can I carry a bicycle on the metro?
A: Folding bicycles are permitted in designated coaches during off-peak hours 
   (before 8 AM and after 7 PM). Full-size bicycles are not permitted.

Q: What is the luggage policy?
A: Passengers may carry one suitcase (max 60cm x 40cm x 25cm) and one carry-on bag. 
   Oversized, hazardous, or offensive items are prohibited.

Q: Are pets allowed on the metro?
A: Only guide dogs and assistance animals for differently-abled passengers are permitted.

Q: What happens if I lose something?
A: Report to the nearest station's Customer Service desk or call 1800-425-0355. 
   Items are stored at Aluva Station's Lost & Found for 30 days.

Q: Is there a student or senior citizen discount?
A: Yes. Senior citizens get 15% discount with a valid Smart Card. 
   Student Monthly Passes are available for ₹200 (Mon–Fri validity).

Q: How do I book parking at metro stations?
A: Parking can be booked online through our parking portal or at station kiosks.

Q: What are the first and last train timings?
A: First train departs at 6:00 AM; last train at 10:00 PM from both terminals.

Q: Can I use UPI for ticket payments?
A: Yes, UPI, debit cards, credit cards, and the Kochi1 Smart Card are accepted.

Q: Is the metro accessible for wheelchair users?
A: Yes. All stations have lifts, ramps, tactile paths, and accessible toilets. 
   Station staff are trained to assist differently-abled passengers.
```

**Grievance Form:**
```
Category: [Metro Service | Cleanliness | Staff Behaviour | Fare Issues | Accessibility | Other]
Station: [dropdown]
Date of Incident: [date picker]
Description: [textarea]
Name: [optional text field]
Mobile: [optional phone field]
Email: [optional email field]
[Submit Grievance]
```

**Contact Info:**
```
Customer Support: 1800-425-0355 (Toll Free) | 0484-2846700
Email: support@kochimetro.org
Operating Hours: 6:00 AM – 10:30 PM (all days)
Head Office: JLN Metro Station, 4th Floor, Kaloor, Kochi – 682017
```

---

### 5.14 ABOUT KMRL (`/about`)

**Purpose:** Corporate profile, governance, and history.

**Sections:**

**History Timeline:**
```
2012: KMRL Incorporated as a Special Purpose Vehicle (SPV)
2013: Foundation stone laid by Prime Minister
2014: Civil construction begins on priority stretch
2015: Viaduct spanning 25 km completed
2016: Rolling stock (trains) delivered from Alstom, France
June 17, 2017: Phase 1A inaugurated (Aluva–Palarivatttom) by PM Narendra Modi
September 2017: Phase 1B extended to Petta  
March 2019: Phase 1 fully completed to Thripunithura
January 2020: All-time ridership high — 1 lakh+ single day
2021: Water Metro inaugurated by PM Modi
2023: Phase 2 Kakkanad extension groundbreaking
2025: Phase 2 construction at 40% completion
```

**Leadership (Board of Directors):**
```
[Mock names — clearly labeled as representative]
• Shri [Name], IAS — Managing Director, KMRL
• Shri [Name], IAS — Director (Finance) — GoK Nominee
• Shri [Name] — Director (Operations)
• Dr. [Name] — Independent Director
• Smt. [Name] — Director — GoI Nominee
```

**Key Stats Section:**
```
3,000+ employees | 30 km network | ₹5,181 crore invested | 
26 stations | 40+ trains | 3 integrated modes
```

---

## 6. GLOBAL INTERACTIONS & UX PATTERNS

### 6.1 Search Overlay
- Triggered by search icon in nav
- Full-screen dark overlay (95% opacity)
- Large centered search input (auto-focused)
- Results appear below in real-time (simulated with JS filtering of stations, pages, news)
- Press Escape or click X to close

### 6.2 Language Toggle (EN/ML)
- Switches between English and Malayalam
- Store selection in localStorage
- Malayalam content is pre-written (use static translations for prototype)
- Key nav items in Malayalam:
  - Plan Journey → "യാത്ര ആസൂത്രണം ചെയ്യൂ"
  - Stations → "സ്റ്റേഷനുകൾ"
  - Sustainability → "സുസ്ഥിരത"
  - Buy Ticket → "ടിക്കറ്റ് വാങ്ങൂ"

### 6.3 Toast Notifications
- Bottom-right corner, 350px wide, 60px tall
- Types: Success (teal), Warning (amber), Error (red)
- Auto-dismiss after 4000ms with fade-out
- Use for: form submissions, "copied to clipboard", alerts

### 6.4 Loading States
- Page transitions: Thin teal progress bar at top of page (like YouTube)
- Section loading: Skeleton screens (grey animated placeholders matching content shape)

### 6.5 Scroll Animations
All major sections use `IntersectionObserver` for scroll-triggered entrance animations:
- Cards: stagger-fade up (each card 80ms delay after the previous)
- Headings: slide in from left
- Stats: count-up on entry
- Images: subtle zoom from scale(1.05) to scale(1)
- Default: `opacity: 0; transform: translateY(24px)` → `opacity: 1; transform: translateY(0)` over 600ms

### 6.6 Hover Micro-interactions
All interactive elements must respond:
- Cards: `translateY(-6px)` + deeper shadow
- Buttons: scale(1.03) on primary, background-shift on outline
- Nav links: underline slides in from left
- Icons: slight rotation (5-10 degrees) on hover
- Station dots on map: pulse animation (1-second loop) on hover

---

## 7. RESPONSIVE DESIGN SPECIFICATIONS

### 7.1 Breakpoint Behaviour

**Mobile (< 640px):**
- Single column layouts throughout
- Navigation: full-screen hamburger drawer
- Map: horizontally scrollable, touch-pan enabled
- Hero: 100vh, text centred
- Stat cards: 2×2 grid
- Quick services: 2×3 grid
- Font sizes reduced (use clamp values)

**Tablet (640px – 1024px):**
- 2-column layouts for most grids
- Navigation: still hamburger, but drawer is 60% width
- Map: full width, no scroll needed
- Stat cards: 2×2 grid
- Quick services: 3×2 grid

**Desktop (≥ 1024px):**
- Full layout as described per section
- Maximum content width: 1200px
- Sticky navigation visible

### 7.2 Touch Considerations
- All touch targets minimum 48×48px
- Swipe gestures for carousels (use CSS scroll snapping)
- Map: pinch-to-zoom where applicable
- Station panel: on mobile, slides in from bottom as a sheet (not from right)

---

## 8. ACCESSIBILITY REQUIREMENTS (WCAG 2.1 AA)

- All images have descriptive `alt` text
- All form inputs have visible `<label>` elements
- Colour contrast ratio ≥ 4.5:1 for normal text, 3:1 for large text
- Skip navigation link at top of page (`Skip to main content`)
- Focus indicators: visible teal ring on all interactive elements
- `aria-expanded` on all accordion/dropdown elements
- `role="alert"` on toast notifications
- No information conveyed by colour alone
- All animated elements respect `prefers-reduced-motion: reduce`
- Keyboard navigation: Tab order follows visual reading order
- Screen reader: all icon-only buttons have `aria-label`

---

## 9. MOCK DATA COMPLETENESS REFERENCE

### 9.1 News (10 articles total)
All defined in Section 5.2.6 and expandable.

### 9.2 Stations (26 complete records)
All stations with: id, name, Malayalam name, code, zone, line (main/branch), facilities array, connectivity object, nearby attractions array (3 items each), mock next train times.

### 9.3 Tenders (8 active, 5 closed, 3 awarded)
All defined in Section 5.9.

### 9.4 Careers (8 openings)
All defined in Section 5.8.

### 9.5 Media (12 photos, 6 videos, 8 press releases)
All defined in Section 5.7.

### 9.6 Fare Matrix (5×5 zone matrix)
Defined in Section 5.5.

---

## 10. WHAT THIS PROTOTYPE DOES NOT INCLUDE

The following are backend concerns and are **explicitly OUT OF SCOPE** for the frontend prototype:
- Real-time train data API integration
- Payment gateway processing
- Backend authentication (admin panel / HR module)
- AES-256 encryption implementation
- Database storage of form submissions
- Actual email notifications
- CMS integration
- OAuth2 implementation
- MFA for admin portal

In their place, the prototype uses:
- Mock data arrays for all data
- Simulated "submit" actions that show success toasts
- `localStorage` for language preference and session simulation

---

## 11. FILE STRUCTURE (IMPLEMENTATION GUIDE)

```
src/
  components/
    Navigation/
      Navigation.jsx        ← Redesigned glassmorphism nav
      Navigation.css
    Footer/
      Footer.jsx            ← Redesigned Kerala-themed footer
      Footer.css
    Hero/
      Hero.jsx              ← Animated Kerala hero
      Hero.css
    HomeMap/
      HomeMap.jsx           ← Interactive SVG metro map
      HomeMap.css
    StationPanel/
      StationPanel.jsx      ← Slide-in station info panel
      StationPanel.css
    QuickServices/
      QuickServices.jsx
      QuickServices.css
    NewsCard/
      NewsCard.jsx
      NewsCard.css
    SustainabilityTeaser/
      SustainabilityTeaser.jsx
      SustainabilityTeaser.css
    Toast/
      Toast.jsx
      Toast.css
    SearchOverlay/
      SearchOverlay.jsx
      SearchOverlay.css
    TickerBar/
      TickerBar.jsx
      TickerBar.css
      
  pages/
    Home/
      Home.jsx
      Home.css
    Stations/
      Stations.jsx          ← Station index
      Stations.css
    StationDetail/
      StationDetail.jsx     ← :id detail page
      StationDetail.css
    Ticketing/
      Ticketing.jsx
      Ticketing.css
    Sustainability/
      Sustainability.jsx
      Sustainability.css
    Media/
      Media.jsx
      Media.css
    Careers/
      Careers.jsx
      Careers.css
    Tenders/
      Tenders.jsx
      Tenders.css
    RTI/
      RTI.jsx
      RTI.css
    Business/
      Business.jsx
      Business.css
    Vigilance/
      Vigilance.jsx
      Vigilance.css
    Help/
      Help.jsx
      Help.css
    About/
      About.jsx
      About.css
      
  data/
    stations.js             ← EXPAND to include malayalam, nearby, nextTrains
    news.js                 ← EXPAND to 10 articles
    careers.js              ← EXPAND to 8 openings with full details
    tenders.js              ← EXPAND to 8 active + 5 closed
    media.js                ← NEW: photos, videos, press releases
    fares.js                ← EXPAND to full fare matrix
    
  styles/
    variables.css           ← REPLACE with new Living Kerala design tokens
    global.css              ← Base resets + typography
    animations.css          ← Entrance animations + keyframes
```

---

## 12. CRITICAL IMPLEMENTATION NOTES

1. **The map is SVG-based (no Google Maps).** Use a hand-crafted SVG that approximates the Kochi metro schematic. Position stations using percentage-based coordinates within the SVG viewBox. The SVG must be accessible (aria-labels on all station groups).

2. **Fonts must be loaded from Google Fonts.** Add the following to `index.html`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Noto+Sans+Malayalam:wght@400;600&display=swap" rel="stylesheet">
   ```

3. **The hero video background is simulated.** Use layered CSS gradients + SVG animations + CSS keyframe animations. Do NOT attempt to embed an actual video unless a real video URL is provided.

4. **All forms must have client-side validation.** Show inline error messages below inputs (red text, icon). No form should submit with empty required fields.

5. **All external links open in new tab** with `rel="noopener noreferrer"`.

6. **The "Buy Ticket" CTA always links to** `https://kochimetro.org` (the external booking system), opening in new tab.

7. **Station detail pages use dynamic routing:** `/stations/aluva`, `/stations/mg-road`, etc., using the station `id` field from the data file.

8. **The colour system must be applied via CSS custom properties exclusively.** No hardcoded hex values in component CSS files — always reference variables from `variables.css`.

9. **The vite.config.js base path** may need to be set if deploying to a subdirectory. For local dev, `npm run dev` should work as-is.

10. **Lucide React icons are already installed.** Use them for all system icons (bus, train, arrow, search, etc.). SVG inline code only for brand-specific icons (KMRL logo, social media).

---

## 13. AESTHETIC CHECKLIST (Must Pass Before Completion)

- [ ] Hero section is visually stunning and animated — not a static gradient
- [ ] Fraunces serif is used for all major headings (minimum H1, H2 levels)
- [ ] Kerala colour palette is applied throughout — no generic blue/grey corporate look
- [ ] The interactive metro map has hover states, station panel, and connectivity info
- [ ] All stat counters animate on scroll entry
- [ ] The footer has the Kerala deep-green aesthetic and subtle palm/water motifs
- [ ] Cards have hover lift effects on all section grids
- [ ] Mobile layout is tested and functional for all 13 pages
- [ ] Language toggle works (EN/ML) for at least nav items and hero text
- [ ] All forms show validation errors and success states
- [ ] No emoji used as primary icons for data-critical content (use SVG/Lucide)
- [ ] Quick services bar is distinct and utility-focused
- [ ] News cards have category-colored tags and proper hover states
- [ ] Sustainability section has the animated progress ring
- [ ] Station detail pages have all 3 tabs working with real mock data

---

*End of KMRL Website Redesign Master Prompt v1.0*
*Prepared for: Kochi Metro Rail Limited Website Revamp Project*
*Stack: React 18 + Vite + Vanilla CSS | Project path: d:/Projects/KMRL*
