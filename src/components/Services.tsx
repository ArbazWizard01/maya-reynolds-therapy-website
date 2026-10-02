import Image from "next/image";
import Accent from "./Accent";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="gutter scroll-mt-4 bg-mist py-16 lg:pb-[94px] lg:pt-[98px]">
      <h2 id="services-heading" className="display-2 text-ink">
        {services.headingLead} <Accent>{services.headingAccent}</Accent>
      </h2>

      <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-5 lg:ml-[11.5vw] lg:mt-[52px]">
        {services.items.map((item) => (
          <article key={item.title} className="group flex flex-col">
            <div className="relative aspect-[330/304] overflow-hidden bg-sand md:aspect-[359/416]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 768px) 26vw, 88vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="display-4 mt-8 text-ink lg:mt-[50px]">{item.title}</h3>
            <p className="body-copy mt-4 text-ink lg:mt-6">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
