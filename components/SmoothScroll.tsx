"use client";

import { useEffect } from "react";

/** Space left above a section for the fixed navbar. */
const HEADER_OFFSET = 96;

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let cancelCurrent: (() => void) | null = null;

function animateTo(y: number) {
  cancelCurrent?.();
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const end = Math.max(0, Math.min(y, max));
  const start = window.scrollY;
  const dist = end - start;

  if (Math.abs(dist) < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, end);
    return;
  }

  // Longer trips take a little longer, within limits.
  const duration = Math.min(1100, Math.max(450, Math.abs(dist) * 0.3));
  let raf = 0;
  let t0: number | null = null;

  // Hand control back if the visitor scrolls during the animation.
  const stop = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    cancelCurrent = null;
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  cancelCurrent = stop;

  const step = (now: number) => {
    t0 ??= now;
    const p = Math.min(1, (now - t0) / duration);
    window.scrollTo(0, start + dist * ease(p));
    if (p < 1) raf = requestAnimationFrame(step);
    else stop();
  };
  raf = requestAnimationFrame(step);
}

function scrollToElement(el: HTMLElement) {
  animateTo(el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
  // Move keyboard focus to the section without a second jump.
  if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

/**
 * Smoothly animates same-page links (e.g. "/#pricing", "#contact", "/") instead of jumping,
 * and glides to the section when a page is opened with a #hash from another page.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      if (url.hash) {
        const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!el) return;
        e.preventDefault();
        scrollToElement(el);
        if (url.hash !== window.location.hash) history.pushState(null, "", url.hash);
      } else if (url.search === window.location.search) {
        // Logo / home link while already on that page: glide to the top.
        e.preventDefault();
        animateTo(0);
        if (window.location.hash) history.pushState(null, "", url.pathname);
      }
    };

    document.addEventListener("click", onClick);

    // Arriving from another page with a #hash: start at the top, then glide down.
    const hash = window.location.hash;
    let timer: number | undefined;
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        window.scrollTo(0, 0);
        timer = window.setTimeout(() => scrollToElement(el), 250);
      }
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(timer);
      cancelCurrent?.();
    };
  }, []);

  return null;
}
