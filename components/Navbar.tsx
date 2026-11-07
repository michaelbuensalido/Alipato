"use client";

import { useState } from "react";
import Icon from "./Icon";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#work", label: "Work" },
  { href: "/#agency", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-canvas/80 backdrop-blur-md border-b border-line/50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <a href="/" className="flex items-center gap-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo.svg"
            alt="Cendralis"
            className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
          />
          <span className="sr-only">Cendralis</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-light text-fg/80 hover:text-accent transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/#contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-canvas text-sm font-medium hover:bg-fg transition-colors duration-300"
          >
            Book a Free Audit
            <Icon icon="solar:arrow-right-up-linear" size={16} />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-fg hover:text-accent transition-colors flex items-center justify-center"
          >
            <Icon
              icon={
                open
                  ? "solar:close-circle-linear"
                  : "solar:hamburger-menu-linear"
              }
              size={24}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-6 border-t border-line/50">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-light text-fg/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center px-5 py-3 rounded-full bg-accent text-canvas text-sm font-medium"
          >
            Book a Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}
