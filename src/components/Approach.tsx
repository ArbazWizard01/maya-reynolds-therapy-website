import Link from "next/link";
import Accent from "./Accent";
import { approach } from "@/content/site";

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="indent scroll-mt-4 bg-mist pb-20 pr-[6vw] pt-6 lg:flex lg:pb-[110px] lg:pr-0 lg:pt-[98px]"
    >
      <h2 id="approach-heading" className="display-3 text-ink lg:w-[30.2vw] lg:shrink-0 lg:pr-[4vw]">
        {approach.headingLead} <Accent>{approach.headingAccent}</Accent> {approach.headingTail}
      </h2>

      <div className="mt-12 grid gap-x-[4.6vw] gap-y-14 md:grid-cols-2 lg:mt-[18px] lg:w-[56vw] lg:gap-y-[88px]">
        {approach.items.map((item) => (
          <article key={item.title}>
            <h3 className="display-4 text-ink">{item.title}</h3>
            <p className="body-copy mt-5 text-ink lg:mt-[30px]">{item.description}</p>
            <Link href={approach.cta.href} aria-label={`Learn more about ${item.title}`} className="btn-link mt-5 text-ink">
              {approach.cta.label}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
