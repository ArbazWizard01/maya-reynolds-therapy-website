import type { Metadata, Viewport } from "next";
import { serif, sans, script } from "./fonts";
import { practice } from "@/content/site";
import "./globals.css";

const title = "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD";
const description =
  "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering anxiety, trauma, EMDR, and burnout therapy for adults. In-person sessions in Santa Monica and secure telehealth across California.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapist Santa Monica",
    "EMDR therapy Santa Monica",
    "burnout therapy Santa Monica",
    "psychologist Santa Monica CA",
    "online therapy California",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: practice.name,
    images: [{ url: "/images/santa-monica-office-windows.jpg", width: 1500, height: 1125, alt: "Dr. Maya Reynolds' Santa Monica therapy office" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1ea",
};

// Structured data so search engines understand the practice and its location.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: practice.name,
  description,
  image: "/images/dr-maya-reynolds-headshot.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.address.street,
    addressLocality: practice.address.locality,
    addressRegion: practice.address.region,
    postalCode: practice.address.postalCode,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Santa Monica" },
    { "@type": "State", name: "California" },
  ],
  knowsAbout: ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism", "CBT", "Mindfulness"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
