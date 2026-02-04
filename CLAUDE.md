# CLAUDE.md - Dushyant Bist Website

## ⚠️ CRITICAL: Pre-Compact Context Preservation

**MANDATORY RULE:** Before ANY auto-compact occurs, Claude MUST run `/wrap` to save session context.

---

## 🔗 MCP Integrations

MCP integrations (Notion, Google Calendar, Google Drive) are configured at system level.

**References:**
- Root CLAUDE.md: `/Users/rahullalia/Developer/CLAUDE.md`
- Full MCP docs: `~/.claude/INTEGRATIONS.md`

---

## Project Overview

**For:** Dushyant Bist (friend project, free)
**Type:** Personal website + digital contact card for a NY Mortgage Loan Officer
**Tech Stack:** Next.js 16, Tailwind CSS 4, Framer Motion
**Deployed:** Vercel at [dushyant-rho.vercel.app](https://dushyant-rho.vercel.app)
**Repo:** [github.com/rahullalia/dushyant-bist-website](https://github.com/rahullalia/dushyant-bist-website)

---

## Brand & Design

**Color Scheme:** Royal Blue (#0c2340) + Gold (#b8860b)
- Royal Blue = Trust, stability, professionalism
- Gold = Wealth, success, premium feel (warmer, less saturated)

**Aesthetic:**
- Dark theme (#050505 background - deeper black)
- Glassmorphism cards (backdrop-blur, translucent borders)
- Floating orb animations
- Smooth Framer Motion transitions
- Mobile-first responsive design

---

## Site Structure

### Landing Page (`/`)

| Section | Component | Description |
|---------|-----------|-------------|
| Navbar | `Navbar.tsx` | Sticky glass nav, appears on scroll |
| Hero | `Hero.tsx` | Photo, name, stats badges, CTAs |
| Services | `Services.tsx` | 10 loan types in 3-column grid |
| Process | `Process.tsx` | 5-step timeline with animations |
| Testimonials | `Testimonials.tsx` | 3 client reviews (placeholders) |
| FAQ | `FAQ.tsx` | 6-question accordion |
| Contact | `Contact.tsx` | 2-column layout with buttons |
| TrustBar | `TrustBar.tsx` | NMLS credentials, trust badges |

### Contact Card (`/dushyant`)

Digital business card for networking:
- Large avatar with gradient border
- Stats row (Loans, Rating, Years)
- Action buttons (Call, Text, Instagram, Save Contact)
- Share button with native share API
- vCard download functionality
- NMLS credentials footer

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/constants.ts` | All content: CONTACT, LOAN_TYPES, TESTIMONIALS, FAQ_ITEMS, PROCESS_STEPS, CREDENTIALS, STATS |
| `lib/vcard.ts` | vCard generation for contact download |
| `lib/utils.ts` | Helpers: cn(), formatPhone(), formatPhoneLink(), formatSmsLink() |
| `app/globals.css` | Brand colors, glassmorphism, animations |

---

## Placeholders to Replace

| Item | Current Value | Action |
|------|---------------|--------|
| NMLS# | `[NMLS #]` | Get from Dushyant |
| Loans closed | `500+` | Update with real number |
| Rating | `4.9` | Update with real Google rating |
| Years experience | `5+` | Update with real number |
| Testimonials | 3 placeholders | Replace with real client reviews |

**Where to update:** `lib/constants.ts` - CREDENTIALS and TESTIMONIALS exports

---

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
vercel --prod    # Deploy to Vercel
```

---

## Session Log

### 2026-02-03: UI Bug Fixes & Polish

**Issues Fixed:**
1. **Sticky header merging with content** - Removed `glass-card` class from Navbar, replaced with solid `bg-[#0c0c0c]/95` background + `backdrop-blur-md` for readability
2. **Services cards not centered when odd number** - Changed CSS Grid to Flexbox with `justify-center` and responsive width classes
3. **"Experience" label overlapping image** - Moved from `-bottom-4` to `-bottom-20` and increased container margin to `mb-24`
4. **Profile image cropping** - Added `object-top` to show face instead of center-crop

**Files Modified:**
- `components/Navbar.tsx` - Solid background instead of glass-card
- `components/Services.tsx` - Flexbox layout with `w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`
- `components/Hero.tsx` - Experience label positioning, image alignment, container margin

**SOP Created:** `~/.claude/docs/mortgageLenderWebsiteSOP.md` - Comprehensive 8-section guide for building mortgage lender websites

---

### 2026-01-30: Major Website Enhancement

**Completed:**
- Fixed TypeScript errors (ease property, Button spread types)
- Deployed initial rebrand (Royal Blue + Gold, route /card → /dushyant)
- Researched mortgage website best practices
- Created 5 new components: Process, Testimonials, FAQ, TrustBar, Navbar
- Expanded Hero with floating stat badges
- Redesigned Services to 3-column grid
- Enhanced Card page with stats, tagline, share button
- Added enhanced animations to globals.css
- Updated constants with all new data structures

**New Files Created:**
- `components/Process.tsx` - 5-step loan timeline
- `components/Testimonials.tsx` - Client reviews section
- `components/FAQ.tsx` - Accordion with 6 questions
- `components/TrustBar.tsx` - Credentials and badges
- `components/Navbar.tsx` - Sticky glass navigation

**Deployed:** https://dushyant-rho.vercel.app

**Next Steps:**
1. Get NMLS# from Dushyant and update constants
2. Collect real testimonials or confirm placeholders are OK
3. Verify stats are acceptable or get real numbers
4. Consider adding email to vCard if Dushyant provides one

---

### 2026-02-04: Color Scheme Overhaul (Rmit Palette)

**Changes Made:**
Reworked entire color scheme to match Rmit's more refined palette:

| Element | Old | New |
|---------|-----|-----|
| Background | `#0c0c0c` | `#050505` (deeper black) |
| Navy | `#1e3a5f` | `#0c2340` (deeper) |
| Navy Light | `#2d5a8a` | `#1a3a5c` |
| Gold | `#d4a853` (bright) | `#b8860b` (warmer, natural) |
| Gold Light | `#e8c87a` | `#d4a62a` |
| Borders | Gold-based RGBA | White-based RGBA (`rgba(255,255,255,0.06)`) |

**Files Modified (13 files):**
- `app/globals.css` - CSS variables, glassmorphism, glow effects, ambient bg, orbs, scrollbar, selection
- `app/layout.tsx` - Theme color meta, body bg/text
- `app/dushyant/page.tsx` - Header gradient, borders, gold accents, image positioning
- `components/Navbar.tsx` - Nav/mobile menu backgrounds
- `components/ui/Button.tsx` - All button variants
- `components/Hero.tsx` - Gold accents
- `components/Services.tsx` - Badge, icons, hover states
- `components/Process.tsx` - Timeline gradient, step circles, icons, CTA
- `components/FAQ.tsx` - Badge, accordion icons
- `components/Contact.tsx` - Badge, icons, borders
- `components/Testimonials.tsx` - Badge, stars
- `components/TrustBar.tsx` - Icons
- `components/ScrollProgress.tsx` - Progress bar gradient

**Card Page Image Fix:**
- Added `object-[center_0%]` for top-center alignment
- Added `scale-[1.2]` for 20% zoom
- Added `origin-top` to preserve head visibility

**Deployed:** https://dushyant-rho.vercel.app
