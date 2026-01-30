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

**Color Scheme:** Royal Blue (#1e3a5f) + Gold (#d4a853)
- Royal Blue = Trust, stability, professionalism
- Gold = Wealth, success, premium feel

**Aesthetic:**
- Dark theme (#0c0c0c background)
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
