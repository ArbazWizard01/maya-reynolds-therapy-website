import Image from "next/image";
import { aboutIntro, images } from "@/content/site";

export default function AboutIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-4 bg-linen py-14 lg:grid lg:grid-cols-[8.8vw_25.2vw_1.4vw_25.2vw_1fr_30.2vw] lg:grid-rows-[auto_auto_1fr] lg:py-25"
    >
      <h2
        id="about-heading"
        className="display-2 gutter text-ink lg:col-[2/5] lg:row-1 lg:mt-31.75 lg:max-w-[48vw] lg:px-0"
      >
        {aboutIntro.heading}
      </h2>

      <div className="gutter mt-6 lg:col-2 lg:row-2 lg:mt-14 lg:px-0">
        <p className="eyebrow font-semibold text-sage-deep">
          {aboutIntro.lead}
        </p>
        <p className="body-copy mt-4 text-ink">{aboutIntro.paragraphs[0]}</p>
      </div>

      <div className="relative mx-[6vw] mt-11 aspect-330/234 overflow-hidden lg:col-6 lg:row-[1/4] lg:mx-0 lg:mt-0 lg:aspect-431/626">
        <Image
          src={images.aboutIntro.src}
          alt={images.aboutIntro.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 88vw"
          className="object-cover"
        />
      </div>

      <p className="body-copy gutter mt-11 text-ink lg:col-4 lg:row-2 lg:mt-14 lg:px-0">
        {aboutIntro.paragraphs[1]}
      </p>
    </section>
  );
}
