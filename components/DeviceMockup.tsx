"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Icon from "./Icon";

/** Renders children at a fixed design size and scales them to fit the box's width. */
function Scaled({ w, h, children }: { w: number; h: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / w));
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div
        style={{
          width: w,
          height: h,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          visibility: scale ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

type Props = {
  /** Changes whenever the screens change, to replay the enter animation. */
  screenKey: string;
  url: string;
  laptop: ReactNode;
  phone: ReactNode;
};

/** Laptop + phone device frames, drawn in CSS, showing live-built screens. */
export default function DeviceMockup({ screenKey, url, laptop, phone }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[780px] pl-[11%]" aria-hidden="true">
      <div className="pointer-events-none absolute inset-x-[5%] bottom-[2%] top-[12%] rounded-full bg-[radial-gradient(closest-side,rgb(255_94_26/0.22),transparent)] blur-2xl" />

      {/* Laptop */}
      <div className="relative">
        <div className="rounded-t-[14px] bg-[#0d0d0f] p-[1.5%] pb-[2.2%] shadow-[inset_0_0_0_1px_rgba(255,255,255,.14),0_30px_60px_-30px_rgba(0,0,0,.9)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-white">
            <span className="absolute left-1/2 top-0 z-10 h-[3.4%] w-[11%] -translate-x-1/2 rounded-b-[6px] bg-[#0d0d0f]" />
            <Scaled w={960} h={600}>
              <div className="flex h-[600px] flex-col bg-white font-sans text-slate-900">
                <div className="flex h-9 shrink-0 items-center gap-3 border-b border-slate-200 bg-slate-100 px-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="mx-auto flex h-6 w-[340px] items-center justify-center gap-1.5 rounded-md bg-white text-[11px] text-slate-500">
                    <Icon icon="solar:lock-keyhole-minimalistic-linear" size={11} />
                    {url}
                  </div>
                </div>
                <div key={screenKey} className="relative min-h-0 flex-1 animate-[screenIn_.5s_cubic-bezier(.22,1,.36,1)_both]">
                  {laptop}
                </div>
              </div>
            </Scaled>
          </div>
        </div>
        {/* base */}
        <div className="relative -mx-[6.5%] h-[clamp(9px,1.9vw,20px)] rounded-b-[50%_100%] bg-gradient-to-b from-[#e4e5e8] via-[#b9bbc0] to-[#7c7e84] shadow-[0_18px_30px_-12px_rgba(0,0,0,.8)]">
          <span className="absolute left-1/2 top-0 h-[42%] w-[15%] -translate-x-1/2 rounded-b-[8px] bg-[#a2a4a9]" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[-3%] left-0 z-20 w-[25%]">
        <div className="rounded-[18%/8.4%] bg-[#0d0d0f] p-[3.4%] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,.22),0_30px_50px_-18px_rgba(0,0,0,.95)]">
          <div className="relative aspect-[300/650] overflow-hidden rounded-[15%/7%] bg-white">
            <span className="absolute left-1/2 top-[1.7%] z-10 h-[3.6%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
            <Scaled w={300} h={650}>
              <div className="flex h-[650px] flex-col bg-white font-sans text-slate-900">
                <div className="flex h-11 shrink-0 items-center justify-between px-7 pt-1 text-[12px] font-semibold">
                  <span>9:41</span>
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:wi-fi-router-minimalistic-bold" size={13} />
                    <Icon icon="solar:battery-full-bold" size={16} />
                  </span>
                </div>
                <div key={screenKey} className="relative min-h-0 flex-1 animate-[screenIn_.5s_.08s_cubic-bezier(.22,1,.36,1)_both]">
                  {phone}
                </div>
                <div className="flex h-6 shrink-0 items-center justify-center">
                  <span className="h-1 w-24 rounded-full bg-slate-900" />
                </div>
              </div>
            </Scaled>
          </div>
        </div>
      </div>
    </div>
  );
}
