import Image from "next/image";
import { images, quoteBanner } from "@/content/site";

export default function BannerQuote() {
  return (
    <section aria-label="A note from Dr. Reynolds" className="relative isolate flex min-h-[536px] items-center overflow-hidden lg:min-h-0 lg:aspect-[1425/594] lg:items-end">
      <Image src={images.quoteBanner.src} alt={images.quoteBanner.alt} fill sizes="100vw" className="-z-10 object-cover" />
      {/* Ink-tinted overlay keeps white text above 4.5:1 contrast */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink/75 via-ink/40 to-ink/10" aria-hidden />

      <p className="display-2 indent pr-[6vw] text-linen lg:max-w-[68vw] lg:pb-[108px]">
        {quoteBanner.statement} <em className="italic">{quoteBanner.emphasis}</em>
      </p>
    </section>
  );
}
