import Image from "next/image";
import Link from "next/link";
import Accent from "./Accent";
import { hero, images } from "@/content/site";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-linen pb-16 pt-6 lg:pb-[78px] lg:pt-10">
      <div className="relative flex flex-col lg:flex-row">
        {/* Left image – flush to the viewport edge */}
        <div className="relative order-2 mt-14 aspect-[267/304] w-[71vw] shrink-0 overflow-hidden lg:order-1 lg:mt-0 lg:aspect-[492/588] lg:w-[34.5vw]">
          <Image
            src={images.heroMain.src}
            alt={images.heroMain.alt}
            fill
            preload
            sizes="(min-width: 1024px) 35vw, 71vw"
            className="object-cover object-center"
          />
        </div>

        {/* Copy */}
        <div className="gutter order-1 flex flex-col lg:order-2 lg:ml-[8.3vw] lg:w-[44.5vw] lg:justify-between lg:px-0 lg:pb-4">
          <p className="eyebrow max-w-[22rem] text-ink">{hero.eyebrow}</p>

          <div className="mt-8 lg:mt-0">
            <h1 id="hero-heading" className="display-1 text-ink">
              {hero.headingLead} <Accent>{hero.headingAccent}</Accent>.
            </h1>
            <p className="body-copy mt-7 max-w-[36rem] text-ink">{hero.subtext}</p>
            <Link href={hero.cta.href} className="btn-link mt-6 text-ink">
              {hero.cta.label}
            </Link>
          </div>
        </div>

        {/* Narrow accent image – flush right, aligned to the bottom of the main image */}
        <div className="absolute bottom-0 right-0 aspect-[54/199] w-[14.4vw] overflow-hidden lg:aspect-[115/393] lg:w-[8vw]">
          <Image src={images.heroAccent.src} alt={images.heroAccent.alt} fill sizes="(min-width: 1024px) 8vw, 15vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
