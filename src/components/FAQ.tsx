import { Plus } from "lucide-react";
import Accent from "./Accent";
import { faq } from "@/content/site";

export default function FAQ() {
  // FAQPage structured data helps these answers appear in search results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="indent scroll-mt-4 bg-mist py-20 pr-[6vw] lg:flex lg:pb-[120px] lg:pr-0 lg:pt-[110px]"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h2 id="faq-heading" className="display-3 text-ink lg:w-[30.2vw] lg:shrink-0 lg:pr-[4vw]">
        {faq.headingLead} <Accent>{faq.headingAccent}</Accent>
      </h2>

      <div className="mt-10 border-t border-line lg:mt-2 lg:w-[56vw]">
        {faq.items.map((item) => (
          <details key={item.q} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-ink transition-colors hover:text-clay [&::-webkit-details-marker]:hidden">
              <span className="display-4">{item.q}</span>
              <Plus
                size={22}
                strokeWidth={1.25}
                aria-hidden
                className="shrink-0 text-clay transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <p className="body-copy max-w-[46rem] pb-7 pr-10 text-ink">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
