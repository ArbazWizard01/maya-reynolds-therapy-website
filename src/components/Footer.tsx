import Link from "next/link";
import { footer, nav, practice, services } from "@/content/site";

export default function Footer() {
  const { address } = practice;

  return (
    <footer className="bg-mist">
      <div className="gutter grid gap-12 py-16 text-center md:text-left lg:grid-cols-[1.7fr_0.8fr_1.1fr_1.1fr] lg:gap-x-[4vw] lg:py-[65px]">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="font-serif text-[2.1rem] text-ink">Maya Reynolds, PsyD</span>
            <span className="mt-2 text-[0.62rem] font-normal uppercase tracking-[0.3em] text-sage-deep">
              {practice.title}
            </span>
          </Link>
          <p className="body-copy mx-auto mt-6 max-w-sm text-ink md:mx-0">{footer.blurb}</p>
        </div>

        <div>
          <p className="eyebrow font-semibold text-ink">Navigate</p>
          <ul className="mt-3 space-y-1">
            <li>
              <Link href="/" className="body-copy text-ink hover:text-clay">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="body-copy text-ink hover:text-clay">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow font-semibold text-ink">Services</p>
          <ul className="mt-3 space-y-1">
            {services.items.map((s) => (
              <li key={s.title}>
                <Link href="#services" className="body-copy text-ink hover:text-clay">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow font-semibold text-ink">Office</p>
          <address className="body-copy mt-3 not-italic text-ink">
            {address.street}
            <br />
            {address.locality}, {address.region} {address.postalCode}
          </address>
          <p className="body-copy mt-3 text-ink">In-person &amp; telehealth</p>
          <p className="body-copy mt-3 italic text-slate">{footer.serving}</p>
        </div>
      </div>

      <div className="gutter flex flex-col items-center justify-between gap-2 bg-ink py-4 text-center text-[0.85rem] text-linen md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} {practice.name} · {practice.title} · Santa Monica, CA
        </p>
        <p>
          In crisis? Call or text <a href="tel:988" className="underline underline-offset-2 hover:text-sand">988</a> (Suicide &amp; Crisis Lifeline)
        </p>
      </div>
    </footer>
  );
}
