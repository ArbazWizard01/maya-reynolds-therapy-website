"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, practice } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="gutter relative z-50 bg-linen">
      <div className="flex h-24 items-center justify-between lg:h-[115px]">
        <Link href="/" className="group flex flex-col leading-none" aria-label={`${practice.name} – home`}>
          <span className="font-serif text-[1.75rem] text-ink transition-colors group-hover:text-clay sm:text-[2rem]">
            Maya Reynolds, PsyD
          </span>
          <span className="mt-1.5 whitespace-nowrap text-[0.58rem] font-normal uppercase tracking-[0.2em] text-sage-deep sm:text-[0.62rem] sm:tracking-[0.3em]">
            Clinical Psychology · Santa Monica
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 whitespace-nowrap lg:flex xl:gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.83rem] font-normal uppercase tracking-[0.1em] text-ink transition-colors hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-pill ml-1 text-ink">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="p-1 text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={28} strokeWidth={1.25} />
        </button>
      </div>

      {/* Full-screen mobile menu, styled after the template's overlay */}
      <div
        id="mobile-menu"
        className={`gutter fixed inset-0 z-50 flex flex-col bg-linen transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-24 items-center justify-end">
          <button type="button" onClick={() => setOpen(false)} className="p-1 text-ink" aria-label="Close menu" tabIndex={open ? 0 : -1}>
            <X size={28} strokeWidth={1.25} />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-7 pb-24">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="font-serif text-[2.4rem] leading-none text-ink transition-colors hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn-pill mt-6 self-start text-ink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
