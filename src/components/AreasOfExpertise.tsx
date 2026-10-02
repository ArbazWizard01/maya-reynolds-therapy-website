import Accent from "./Accent";
import { expertise } from "@/content/site";

export default function AreasOfExpertise() {
  return (
    <section aria-labelledby="expertise-heading" className="indent bg-mist pb-20 pr-[6vw] pt-16 lg:flex lg:pb-[150px] lg:pr-0 lg:pt-[132px]">
      <h2 id="expertise-heading" className="display-3 text-ink lg:w-[26.5vw] lg:shrink-0">
        {expertise.headingLead}
        <br className="hidden lg:block" /> <Accent>{expertise.headingAccent}</Accent>
      </h2>

      <div className="mt-12 grid gap-x-[4.5vw] md:grid-cols-2 lg:mt-0 lg:w-[56vw]">
        {expertise.columns.map((column, i) => (
          <ul key={i} className={i === 0 ? "[&>li:first-child]:pt-0" : "md:[&>li:first-child]:pt-0"}>
            {column.map((item) => (
              <li key={item} className="eyebrow border-b border-line pb-[1.55rem] pt-[1.5rem] text-ink">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
