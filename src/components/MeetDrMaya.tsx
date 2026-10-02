import Image from "next/image";
import Link from "next/link";
import { bio, images } from "@/content/site";

export default function MeetDrMaya() {
  return (
    <section
      aria-labelledby="bio-heading"
      className="bg-sand py-20 lg:grid lg:grid-cols-[8.8vw_29vw_1.4vw_29vw_1fr_22.7vw] lg:grid-rows-[auto_auto_auto_1fr] lg:pb-[116px] lg:pt-[117px]"
    >
      <p className="eyebrow gutter text-sage-deep lg:col-[2/5] lg:row-1 lg:px-0">{bio.eyebrow}</p>

      <h2 id="bio-heading" className="display-2 gutter mt-6 text-ink lg:col-[2/5] lg:row-2 lg:mt-[100px] lg:px-0">
        {bio.heading}
      </h2>

      <div className="relative mx-[6vw] mt-10 aspect-[330/420] overflow-hidden md:max-w-[26rem] lg:col-6 lg:max-w-none lg:row-[1/5] lg:mx-0 lg:mt-0 lg:aspect-[323/714]">
        <Image
          src={images.headshot.src}
          alt={images.headshot.alt}
          fill
          sizes="(min-width: 1024px) 23vw, 88vw"
          className="object-cover object-[50%_30%]"
        />
      </div>

      <div className="gutter mt-10 flex flex-col gap-4 lg:col-2 lg:row-3 lg:mt-[52px] lg:px-0">
        <p className="eyebrow font-semibold text-ink">{bio.lead}</p>
        {bio.paragraphsLeft.map((p) => (
          <p key={p} className="body-copy text-ink">
            {p}
          </p>
        ))}
      </div>

      <div className="gutter mt-4 flex flex-col gap-4 lg:col-4 lg:row-3 lg:mt-[52px] lg:px-0">
        {bio.paragraphsRight.map((p) => (
          <p key={p} className="body-copy text-ink">
            {p}
          </p>
        ))}
      </div>

      <div className="gutter mt-8 lg:col-2 lg:row-4 lg:mt-12 lg:px-0">
        <Link href={bio.cta.href} className="btn-link text-ink">
          {bio.cta.label}
        </Link>
      </div>
    </section>
  );
}
