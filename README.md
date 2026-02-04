# Dushyant Bist - Mortgage Loan Officer Website

Personal website and digital contact card for Dushyant Bist, a licensed Mortgage Loan Officer serving New York State.

**Live Site:** [dushyant-rho.vercel.app](https://dushyant-rho.vercel.app)

---

## Features

### Landing Page (`/`)
- Hero section with floating stat badges
- 10 loan program types (Conventional, FHA, VA, Jumbo, etc.)
- 5-step loan process timeline
- Client testimonials
- FAQ accordion
- Contact section with call/text/Instagram buttons
- Sticky navigation on scroll

### Digital Contact Card (`/dushyant`)
- Shareable contact page for networking
- One-tap call, text, email, or Instagram
- Website link button
- Save contact (vCard download)
- Share button (native share API)
- "View Full Website" link

### Global Features
- Scroll progress indicator bar
- Parallax background orbs
- Spring physics animations

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans/Mono
- **Hosting:** Vercel

---

## Project Structure

```
dushyant/
├── app/
│   ├── page.tsx           # Landing page
│   ├── dushyant/page.tsx  # Contact card
│   ├── layout.tsx         # Root layout + SEO
│   └── globals.css        # Brand colors, animations
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── TrustBar.tsx
│   ├── Navbar.tsx
│   ├── ScrollProgress.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Container.tsx
├── lib/
│   ├── constants.ts       # All content/data
│   ├── utils.ts           # Helper functions
│   └── vcard.ts           # vCard generation
└── public/
    └── dushyant.jpeg      # Profile photo
```

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## Content Updates

All content is in `lib/constants.ts`:

- **CONTACT** - Name, phone, Instagram, SMS message
- **LOAN_TYPES** - 10 loan program descriptions
- **TESTIMONIALS** - Client reviews
- **FAQ_ITEMS** - Common questions and answers
- **PROCESS_STEPS** - 5-step loan timeline
- **CREDENTIALS** - NMLS#, experience, ratings

---

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#050505` | Deep black base |
| Royal Blue | `#0c2340` | Trust, accents |
| Gold | `#b8860b` | CTAs, highlights (warm natural) |
| Gold Light | `#d4a62a` | Gradients |
| Text | `rgba(255,255,255,0.95)` | Primary text |
| Text Muted | `rgba(255,255,255,0.50)` | Secondary text |
| Borders | `rgba(255,255,255,0.06)` | Subtle borders |

---

## License

Private project for Dushyant Bist.
