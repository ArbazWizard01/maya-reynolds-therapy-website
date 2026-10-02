import Image from "next/image";
import Accent from "./Accent";
import { images, reflection } from "@/content/site";

export default function ReflectionBanner() {
  return (
    <section aria-label="Healing and moving forward" className="bg-mist py-14 lg:flex lg:items-end lg:py-[95px]">
      <div className="relative ml-[6vw] aspect-[353/304] overflow-hidden lg:ml-0 lg:aspect-[761/533] lg:w-[53.4vw] lg:shrink-0">
        <Image src={images.reflection.src} alt={images.reflection.alt} fill sizes="(min-width: 1024px) 54vw, 94vw" className="object-cover" />
      </div>
      <h2 className="display-2 gutter mt-6 text-ink lg:ml-[4.6vw] lg:mt-0 lg:max-w-[37vw] lg:px-0">
        {reflection.headingLead} <Accent>{reflection.headingAccent}</Accent> {reflection.headingTail}
      </h2>
    </section>
  );
}
