import Image from "next/image";
import Link from "next/link";
import Accent from "./Accent";
import { images, office } from "@/content/site";

/**
 * New section (not in the original template): "Our Office".
 * Uses the two office photos from Dr. Reynolds' profile.
 */
export default function OurOffice() {
  return (
    <section
      id="office"
      aria-labelledby="office-heading"
      className="scroll-mt-4 bg-linen py-20 lg:grid lg:grid-cols-[8.8vw_31vw_1fr_46vw] lg:items-center lg:pb-[150px] lg:pt-[120px]"
    >
      <div className="gutter lg:col-2 lg:row-1 lg:px-0">
        <p className="eyebrow text-sage-deep">{office.eyebrow}</p>
        <h2 id="office-heading" className="display-2 mt-6 text-ink">
          {office.headingLead} <Accent>{office.headingAccent}</Accent>
        </h2>
        {office.paragraphs.map((p) => (
          <p key={p} className="body-copy mt-5 text-ink">
            {p}
          </p>
        ))}
      </div>

      {/* Photo composition: large room shot, smaller framed window shot overlapping */}
      <div className="relative mt-12 pb-[22vw] lg:col-4 lg:row-[1/3] lg:mt-0 lg:pb-[7vw]">
        <div className="relative ml-[6vw] aspect-[4/3] overflow-hidden lg:ml-0">
          <Image
            src={images.officeSeating.src}
            alt={images.officeSeating.alt}
            fill
            sizes="(min-width: 1024px) 46vw, 94vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-[6vw] aspect-[4/3] w-[58vw] overflow-hidden border-[8px] border-linen lg:-left-[9vw] lg:w-[24vw] lg:border-[12px]">
          <Image
            src={images.officeWindows.src}
            alt={images.officeWindows.alt}
            fill
            sizes="(min-width: 1024px) 24vw, 58vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="gutter mt-12 lg:col-2 lg:row-2 lg:mt-10 lg:self-start lg:px-0">
        <dl className="border-t border-line">
          {office.details.map((d) => (
            <div key={d.label} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
              <dt className="text-[0.75rem] font-semibold uppercase leading-7 tracking-[0.14em] text-sage-deep">{d.label}</dt>
              <dd className="body-copy text-ink">{d.value}</dd>
            </div>
          ))}
        </dl>
        <Link href={office.cta.href} className="btn-link mt-8 text-ink">
          {office.cta.label}
        </Link>
      </div>
    </section>
  );
}
