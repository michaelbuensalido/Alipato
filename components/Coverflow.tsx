"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Icon from "./Icon";

type Slide = { key: string; label: string; node: ReactNode };

const GLOW_ACTIVE =
  "shadow-[0_0_0_1px_rgb(255_94_26/0.95),0_0_22px_rgb(255_94_26/0.55),0_0_70px_rgb(255_94_26/0.28)]";
const GLOW_IDLE = "shadow-[0_0_0_1px_rgb(255_94_26/0.45),0_0_18px_rgb(255_94_26/0.18)]";

/** Infinite 3D-ish coverflow: the focused card sits forward and glows, neighbours recede on both sides. */
export default function Coverflow({
  slides,
  initial = 0,
  label,
}: {
  slides: Slide[];
  initial?: number;
  label: string;
}) {
  const n = slides.length;
  // `step` is the signed distance of the last move; it tells wrapping cards which way to exit.
  const [{ active, step }, setNav] = useState({ active: initial, step: 1 });
  const startX = useRef<number | null>(null);
  const prevOffsets = useRef<number[]>([]);

  const mod = (v: number) => ((v % n) + n) % n;
  /** Move by k cards (negative = backwards), wrapping around the ends. */
  const move = (k: number) => k !== 0 && setNav({ active: mod(active + k), step: k });
  /** Shortest signed distance from the active card to card i. */
  const distanceTo = (i: number) => {
    const raw = mod(i - active);
    return raw > n / 2 ? raw - n : raw;
  };

  /** Position of card i relative to the active one, on a loop. */
  const offsetOf = (i: number) => {
    const raw = mod(i - active);
    // With an even count, one card sits exactly opposite: park it on the side it's leaving from.
    if (raw * 2 === n) return step > 0 ? -raw : raw;
    return raw > n / 2 ? raw - n : raw;
  };
  const offsets = slides.map((_, i) => offsetOf(i));

  useEffect(() => {
    prevOffsets.current = offsets;
  });

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      move(1);
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
          if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1);
        }}
      >
        {slides.map((s, i) => {
          const o = offsets[i];
          const d = Math.abs(o);
          const x = o === 0 ? 0 : Math.sign(o) * (66 + (d - 1) * 42);
          const scale = d === 0 ? 1 : d === 1 ? 0.84 : 0.7;
          const hidden = d > 2;
          // A card that wrapped to the other end jumps there instead of sliding across the stage.
          const prev = prevOffsets.current[i];
          const wrapped = prev !== undefined && prev !== o && Math.abs(o - prev) !== Math.abs(step);
          return (
            <div
              key={s.key}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}: ${s.label}`}
              aria-hidden={o !== 0}
              onClick={() => o !== 0 && move(o)}
              className={`col-start-1 row-start-1 mx-auto w-[min(84vw,392px)] duration-500 ease-out ${
                wrapped ? "transition-opacity" : "transition-[transform,opacity,filter]"
              }`}
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
          onClick={() => move(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition hover:text-accent hover:shadow-[inset_0_0_0_1px_theme(colors.accent)]"
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
              onClick={() => move(distanceTo(i))}
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
          onClick={() => move(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition hover:text-accent hover:shadow-[inset_0_0_0_1px_theme(colors.accent)]"
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
