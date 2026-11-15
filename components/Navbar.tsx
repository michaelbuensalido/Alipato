"use client";

import { useEffect, useState } from "react";
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
  const [active, setActive] = useState<string | null>(null);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(2)))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const top = document.getElementById("top");
    const topIo = top
      ? new IntersectionObserver(([e]) => e.isIntersecting && setActive(null), {
          rootMargin: "-45% 0px -50% 0px",
        })
      : null;
    if (top) topIo?.observe(top);
    return () => {
      io.disconnect();
      topIo?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-3 top-3 z-50 rounded-[18px] bg-surface/[.86] shadow-[inset_0_0_0_1px_rgba(255,255,255,.07),0_12px_32px_-12px_rgba(0,0,0,.6)] backdrop-blur-md sm:inset-x-6 lg:top-[22px]">
      <div className="relative flex h-16 items-center justify-between pl-5 pr-3 lg:h-[72px] lg:pl-6 lg:pr-3.5">
        <a href="/" className="group flex items-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/logo.svg"
            alt="Alipato"
            className="h-9 w-auto object-contain transition-opacity duration-150 group-hover:opacity-90 lg:h-11"
          />
          <span className="sr-only">Alipato</span>
        </a>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[34px] lg:flex"
        >
          {links.map((l) => {
            const isActive = active === l.href.slice(2);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative py-2.5 text-sm transition-colors duration-150 hover:text-fg ${
                  isActive ? "text-fg" : "text-fg/[.74]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 bottom-1 h-px origin-left bg-accent transition-transform duration-150 ease-out group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="group hidden h-[46px] items-center gap-2.5 whitespace-nowrap rounded-full bg-accent pl-[22px] pr-5 text-[15px] font-medium text-canvas transition duration-150 ease-out hover:-translate-y-px hover:brightness-110 active:translate-y-px active:scale-[.985] sm:inline-flex"
          >
            Book a Free Audit
            <Icon
              icon="solar:arrow-right-up-linear"
              size={17}
              className="transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-fg transition-colors hover:text-accent lg:hidden"
          >
            <Icon
              icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
              size={24}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="flex animate-[fadeIn_0.2s_ease-out] flex-col border-t border-line px-5 pb-5 pt-2 lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-condensed border-b border-line/60 py-3 text-3xl font-semibold uppercase text-fg/85 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-[15px] font-medium text-canvas"
          >
            Book a Free Audit
            <Icon icon="solar:arrow-right-up-linear" size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
