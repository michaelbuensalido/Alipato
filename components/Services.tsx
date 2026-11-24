"use client";

import { useState } from "react";
import DeviceMockup from "./DeviceMockup";
import Icon from "./Icon";
import { screens, type ScreenId } from "./ServiceScreens";

type Service = {
  id: ScreenId;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  icon: string;
  /** Card tint, taken from the logo's molten gradient. */
  color: string;
};

const services: Service[] = [
  {
    id: "web",
    title: "Web & Mobile Development",
    description:
      "Sub-second websites with spam-protected lead forms, plus cross-platform iOS & Android apps with push notifications, loyalty programs, VIP bookings and staff tools.",
    tags: ["5-page custom site", "Cloudflare / Vercel", "Expo / FlutterFlow", "Supabase"],
    meta: "Sites live in under 7 days · Apps in 3–4 weeks",
    icon: "solar:monitor-smartphone-linear",
    color: "#FF5E1A",
  },
  {
    id: "seo",
    title: "Local SEO & AEO",
    description:
      "Rank on the Google Map Pack and get cited by ChatGPT, Gemini, Perplexity and Google AI Overviews, with machine-readable context kept fresh every month.",
    tags: ["Google Business Profile", "llms.txt", "LocalBusiness JSON-LD", "AI citation tracking"],
    meta: "One-time setup or monthly retainer",
    icon: "solar:map-point-linear",
    color: "#FF3F3A",
  },
  {
    id: "agents",
    title: "AI Agents & Automation",
    description:
      "24/7 AI sales agents on Messenger, Instagram and WhatsApp that answer instantly, collect deposits via GCash, Maya, PayNow or Stripe, and sync every lead to your CRM.",
    tags: ["Messenger / IG / WhatsApp", "n8n / Make", "PayMongo / Stripe", "Google Sheets / CRM"],
    meta: "Agent deployed in under 90 minutes",
    icon: "solar:chat-round-dots-linear",
    color: "#F21368",
  },
  {
    id: "consulting",
    title: "Digital Consulting",
    description:
      "A productized AI Workflow & Digital Audit for growing businesses with disjointed tools. We interview your team and deliver a roadmap you can act on.",
    tags: ["1-day audit", "15-page roadmap", "Fractional CTO"],
    meta: "Fixed scope, no open-ended hourly billing",
    icon: "solar:document-text-linear",
    color: "#9B23B6",
  },
];

const STEP_X = 14; // px each card is indented from the one behind it
const STEP_Y = 60; // px each card drops; equals the tab height so every tab stays readable

export default function Services() {
  const [active, setActive] = useState(0);
  // Stack order back→front: the others keep their order, the active card moves to the front.
  const order = services.map((_, i) => i).filter((i) => i !== active).concat(active);
  const depth = services.length - 1;
  const current = services[active];
  const screen = screens[current.id];

  return (
    <section
      id="services"
      className="overflow-x-clip bg-canvas px-5 py-24 sm:px-8 md:py-32 lg:px-[6.25vw]"
    >
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-condensed text-outline mb-12 text-[22vw] font-semibold uppercase leading-[0.82] tracking-[-0.01em] md:mb-16 md:text-[15vw] lg:text-[11rem]">
          Services
        </h2>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Stacked service cards */}
          <div
            className="grid lg:col-span-5"
            style={{ paddingBottom: depth * STEP_Y }}
          >
            {services.map((s, i) => {
              const pos = order.indexOf(i);
              const isActive = i === active;
              const panelId = `service-panel-${s.id}`;
              return (
                <div
                  key={s.id}
                  className="col-start-1 row-start-1 transition-transform duration-500 ease-out"
                  style={{
                    transform: `translate(${pos * STEP_X}px, ${pos * STEP_Y}px)`,
                    zIndex: pos,
                    width: `calc(100% - ${depth * STEP_X}px)`,
                  }}
                >
                  <article
                    className={`flex h-full flex-col overflow-hidden rounded-[18px] transition-[transform,box-shadow] duration-300 ${
                      isActive ? "" : "hover:-translate-y-1.5"
                    }`}
                    style={{
                      background: `color-mix(in srgb, ${s.color} ${isActive ? 20 : 13}%, #110C0D)`,
                      boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${s.color} ${isActive ? 60 : 32}%, transparent), 0 -14px 30px -14px rgba(0,0,0,.85)${
                        isActive ? `, 0 0 46px -12px ${s.color}` : ""
                      }`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      className="flex w-full shrink-0 items-center gap-3.5 px-5 text-left"
                      style={{ height: STEP_Y }}
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: `color-mix(in srgb, ${s.color} 26%, transparent)`,
                          color: s.color,
                        }}
                      >
                        <Icon icon={s.icon} size={18} />
                      </span>
                      <span
                        className={`font-condensed truncate text-[1.35rem] font-semibold uppercase tracking-[0.02em] transition-colors md:text-2xl ${
                          isActive ? "text-fg" : "text-fg/70"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="ml-auto text-xs tabular-nums text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </button>

                    <div
                      id={panelId}
                      inert={!isActive}
                      className={`flex flex-1 flex-col px-5 pb-6 pt-1 transition-opacity duration-500 md:px-6 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-[15px] font-light leading-relaxed text-fg/80">
                        {s.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <li
                            key={t}
                            className="rounded-full bg-white/[.08] px-3 py-1.5 text-xs font-medium text-fg/90"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-fg/85">
                        <Icon icon="solar:bolt-linear" size={16} style={{ color: s.color }} />
                        {s.meta}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Device mockup showing the active service */}
          <div className="order-first lg:order-none lg:col-span-7">
            <DeviceMockup
              screenKey={current.id}
              url={screen.url}
              laptop={screen.laptop}
              phone={screen.phone}
            />
            <p className="sr-only" aria-live="polite">
              Showing an example of {current.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
