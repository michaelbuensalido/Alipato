"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Icon from "./Icon";

type Slide = { key: string; label: string; node: ReactNode };

const GLOW_ACTIVE =
  "shadow-[0_0_0_1px_rgb(255_94_26/0.95),0_0_22px_rgb(255_94_26/0.55),0_0_70px_rgb(255_94_26/0.28)]";
const GLOW_IDLE = "shadow-[0_0_0_1px_rgb(255_94_26/0.45),0_0_18px_rgb(255_94_26/0.18)]";

/** 3D-ish coverflow: the focused card sits forward and glows, neighbours recede on both sides. */
export default function Coverflow({
  slides,
  initial = 0,
  label,
}: {
  slides: Slide[];
  initial?: number;
  label: string;
}) {
  const [active, setActive] = useState(initial);
  const startX = useRef<number | null>(null);
  const n = slides.length;
  const go = (i: number) => setActive(Math.max(0, Math.min(n - 1, i)));

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKey}
      className="rounded-[28px] focus-visible:outline-offset-8"
    >
      <div
        className="relative grid touch-pan-y select-none py-10"
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
        }}
      >
        {slides.map((s, i) => {
          const o = i - active;
          const d = Math.abs(o);
          const x = o === 0 ? 0 : Math.sign(o) * (66 + (d - 1) * 42);
          const scale = d === 0 ? 1 : d === 1 ? 0.84 : 0.7;
          const hidden = d > 2;
          return (
            <div
              key={s.key}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${s.label}`}
              aria-hidden={o !== 0}
              onClick={() => o !== 0 && go(i)}
              className="col-start-1 row-start-1 mx-auto w-[min(84vw,392px)] transition-[transform,opacity,filter] duration-500 ease-out"
              style={{
                transform: `translateX(${x}%) scale(${scale})`,
                zIndex: 10 - d,
                opacity: hidden ? 0 : 1,
                filter: d === 0 ? undefined : `brightness(${d === 1 ? 0.5 : 0.3})`,
                pointerEvents: hidden ? "none" : undefined,
                cursor: o !== 0 ? "pointer" : undefined,
              }}
            >
              <div
                className={`h-full rounded-[28px] transition-shadow duration-500 ${
                  o === 0 ? GLOW_ACTIVE : GLOW_IDLE
                }`}
              >
                {s.node}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition hover:text-accent hover:shadow-[inset_0_0_0_1px_theme(colors.accent)] disabled:opacity-30 disabled:hover:text-fg disabled:hover:shadow-[inset_0_0_0_1px_theme(colors.line)]"
        >
          <Icon icon="solar:arrow-left-linear" size={18} />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Go to ${s.label}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => go(i)}
              className="flex h-6 items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-accent" : "w-1.5 bg-fg/25 hover:bg-fg/50"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(active + 1)}
          disabled={active === n - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition hover:text-accent hover:shadow-[inset_0_0_0_1px_theme(colors.accent)] disabled:opacity-30 disabled:hover:text-fg disabled:hover:shadow-[inset_0_0_0_1px_theme(colors.line)]"
        >
          <Icon icon="solar:arrow-right-linear" size={18} />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {`${active + 1} of ${n}: ${slides[active].label}`}
      </p>
    </div>
  );
}
