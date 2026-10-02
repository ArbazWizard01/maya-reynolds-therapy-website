# Dr. Maya Reynolds, PsyD — Homepage

Grow My Therapy front-end internship assignment: a clone of the
[Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home) homepage layout,
redesigned for the fictional Santa Monica psychologist Dr. Maya Reynolds.

**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · lucide-react

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/globals.css` | Theme tokens (colours, fonts) and the shared type scale / button styles |
| `src/app/fonts.ts` | Self-hosted fonts via `next/font/local` (Cormorant Garamond, Mulish, Ephesis) |
| `src/content/site.ts` | All homepage copy and image references, written from Dr. Reynolds' profile |
| `src/components/*` | One component per homepage section |
| `public/images/` | Headshot and office photos from the profile |

## Theme — "Santa Monica Calm"

Colours are sampled from the therapist's own office photos.

| Token | Hex | Role |
| --- | --- | --- |
| `linen` | `#F6F1EA` | Page background |
| `ink` | `#22313B` | Primary — headings, body, dark bands |
| `clay` | `#A65A3E` | Accent — script words, primary CTA |
| `sage-deep` | `#5E6B52` | Secondary — eyebrows, labels |
| `sand` | `#EAE1D4` | Warm section band |

All text colours meet WCAG AA contrast.

## Sections

Navbar · Hero · About intro · Services (3) · Quote banner · Areas of focus · Meet Dr. Maya (bio) ·
Reflection banner · Approach (CBT, EMDR, mindfulness, body-oriented) · **Our Office (new)** · FAQs ·
Contact · Footer

## Run locally

```bash
npm install
npm run dev
```
