import localFont from "next/font/local";

/*
 * Self-hosted Google Fonts (SIL Open Font License), served from /src/fonts.
 * The original template uses Beaufort Pro (Adobe, paid) for headings and
 * Muli for body copy. Cormorant Garamond is the closest open-licence
 * match for the light, high-contrast serif; Mulish is Muli's current name.
 * Ephesis stands in for the hand-written accent script.
 */

export const serif = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const sans = localFont({
  src: [
    { path: "../fonts/mulish-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/mulish-latin-300-italic.woff2", weight: "300", style: "italic" },
    { path: "../fonts/mulish-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/mulish-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/mulish-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mulish",
  display: "swap",
});

export const script = localFont({
  src: [{ path: "../fonts/ephesis-latin-400-normal.woff2", weight: "400", style: "normal" }],
  variable: "--font-ephesis",
  display: "swap",
});
