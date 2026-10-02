import Image from "next/image";
import Link from "next/link";
import Accent from "./Accent";
import { contact, images } from "@/content/site";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-4 bg-linen py-14 lg:grid lg:grid-cols-[11.9vw_8.2vw_37vw_1fr_34.5vw] lg:grid-rows-[auto_auto_1fr] lg:pb-[134px] lg:pt-[95px]"
    >
      {/* Narrow accent image – flush left */}
      <div className="relative aspect-[182/199] w-[48.5vw] overflow-hidden lg:col-1 lg:row-[2/4] lg:mt-[90px] lg:aspect-[169/489] lg:w-auto">
        <Image src={images.contactAccent.src} alt={images.contactAccent.alt} fill sizes="(min-width: 1024px) 12vw, 49vw" className="object-cover" />
      </div>

      <p className="eyebrow gutter mt-14 text-sage-deep lg:col-3 lg:row-1 lg:mt-0 lg:px-0">{contact.eyebrow}</p>

      <div className="gutter lg:col-3 lg:row-[2/4] lg:px-0">
        <h2 id="contact-heading" className="display-2 mt-6 text-ink lg:mt-[90px]">
          {contact.headingLead} <Accent>{contact.headingAccent}</Accent> {contact.headingTail}
        </h2>
        {contact.paragraphs.map((p) => (
          <p key={p} className="body-copy mt-5 text-ink">
            {p}
          </p>
        ))}
        <Link href={contact.cta.href} className="btn-solid mt-8">
          {contact.cta.label}
        </Link>
      </div>

      <div className="relative ml-auto mt-12 aspect-[310/269] w-[82.7vw] overflow-hidden lg:col-5 lg:row-[1/4] lg:ml-0 lg:mt-0 lg:aspect-[492/606] lg:w-full">
        <Image src={images.contactMain.src} alt={images.contactMain.alt} fill sizes="(min-width: 1024px) 35vw, 83vw" className="object-cover" />
      </div>
    </section>
  );
}
