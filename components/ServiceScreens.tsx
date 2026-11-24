import type { ReactNode } from "react";
import Icon from "./Icon";

/**
 * Sample client screens shown inside the Services device mockup.
 * Laptop screens are authored at 960×564 (below the browser bar), phone screens at 300×~580.
 * Businesses shown are fictional examples.
 */
export type ScreenId = "web" | "seo" | "agents" | "consulting";

const ORANGE = "#FF5E1A";

function Stars({ n = 5, size = 11 }: { n?: number; size?: number }) {
  return (
    <span className="inline-flex text-amber-400">
      {Array.from({ length: n }, (_, i) => (
        <Icon key={i} icon="solar:star-bold" size={size} />
      ))}
    </span>
  );
}

/* ───────────────────────── Web & Mobile ───────────────────────── */

function WebLaptop() {
  return (
    <div className="flex h-full flex-col bg-[#FFF8F3]">
      <nav className="flex items-center justify-between px-10 py-5">
        <span className="flex items-center gap-2 text-[17px] font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{ background: ORANGE }}>
            <Icon icon="solar:smile-circle-bold" size={17} />
          </span>
          Bloom Dental
        </span>
        <div className="flex items-center gap-7 text-[13px] text-slate-600">
          <span>Services</span>
          <span>Doctors</span>
          <span>Prices</span>
          <span>Reviews</span>
          <span className="rounded-full px-4 py-2 font-semibold text-white" style={{ background: ORANGE }}>
            Book a visit
          </span>
        </div>
      </nav>
      <div className="grid flex-1 grid-cols-2 gap-8 px-10 pt-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Makati · Open today until 8 PM
          </span>
          <h1 className="mt-5 text-[46px] font-extrabold leading-[1.02] tracking-tight">
            Brighter smiles,
            <br />
            booked in <span style={{ color: ORANGE }}>seconds.</span>
          </h1>
          <p className="mt-4 max-w-[380px] text-[14px] leading-relaxed text-slate-600">
            Gentle cleanings, braces and implants from a team Makati families trust. Reserve your slot online in under a minute.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full px-5 py-3 text-[13px] font-semibold text-white" style={{ background: ORANGE }}>
              Reserve a slot
            </span>
            <span className="rounded-full border border-slate-300 px-5 py-3 text-[13px] font-semibold">View prices</span>
          </div>
          <div className="mt-7 flex items-center gap-2 text-[12px] text-slate-600">
            <Stars /> <b className="text-slate-900">4.9</b> from 312 Google reviews
          </div>
        </div>
        <div className="relative">
          <div className="h-[300px] rounded-[28px] bg-[linear-gradient(140deg,#FFD9C2,#FF9A6B_55%,#FF5E1A)]">
            <Icon icon="solar:smile-circle-linear" size={150} className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 text-white/70" />
          </div>
          <div className="absolute -left-6 bottom-[150px] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-emerald-500 text-[13px] font-bold text-emerald-600">
              100
            </span>
            <span className="text-[11px] leading-tight text-slate-500">
              <b className="block text-[13px] text-slate-900">PageSpeed</b>Loads in 0.8s
            </span>
          </div>
          <div className="absolute -right-3 top-6 rounded-2xl bg-white px-4 py-3 text-[11px] shadow-lg">
            <b className="block text-[13px]">New booking</b>
            <span className="text-slate-500">Cleaning · Sat 10:00 AM</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-10 pb-7">
        {[
          ["solar:shield-check-linear", "Cleaning & checkup", "from ₱1,200"],
          ["solar:magic-stick-3-linear", "Whitening", "from ₱8,500"],
          ["solar:medal-ribbons-star-linear", "Braces & aligners", "from ₱45,000"],
        ].map(([ic, t, p]) => (
          <div key={t} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50" style={{ color: ORANGE }}>
              <Icon icon={ic} size={18} />
            </span>
            <span className="text-[12px] leading-tight">
              <b className="block text-[13px]">{t}</b>
              <span className="text-slate-500">{p}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebPhone() {
  return (
    <div className="flex h-full flex-col bg-[#FFF8F3] px-5">
      <div className="flex items-center justify-between py-3">
        <span className="flex items-center gap-1.5 text-[14px] font-bold">
          <span className="flex h-6 w-6 items-center justify-center rounded-md text-white" style={{ background: ORANGE }}>
            <Icon icon="solar:smile-circle-bold" size={14} />
          </span>
          Bloom Dental
        </span>
        <Icon icon="solar:hamburger-menu-linear" size={20} />
      </div>
      <h2 className="mt-4 text-[30px] font-extrabold leading-[1.02] tracking-tight">
        Brighter smiles, booked in <span style={{ color: ORANGE }}>seconds.</span>
      </h2>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-600">
        <Stars size={10} /> 4.9 · 312 reviews
      </div>
      <div className="mt-5 space-y-2.5 rounded-2xl bg-white p-4 shadow-sm">
        <b className="text-[14px]">Request an appointment</b>
        {["Full name", "Mobile number", "Preferred date"].map((f) => (
          <div key={f} className="rounded-xl border border-slate-200 px-3 py-2.5 text-[12px] text-slate-400">
            {f}
          </div>
        ))}
        <div className="rounded-xl py-3 text-center text-[13px] font-semibold text-white" style={{ background: ORANGE }}>
          Reserve my slot
        </div>
        <p className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
          <Icon icon="solar:shield-check-linear" size={11} /> Spam-protected form
        </p>
      </div>
    </div>
  );
}

/* ───────────────────────── Local SEO & AEO ───────────────────────── */

const listings = [
  { name: "Bloom Dental Studio", rating: "4.9", count: "312", tag: "Open · Closes 8 PM", top: true },
  { name: "Ayala Smile Clinic", rating: "4.6", count: "158", tag: "Open · Closes 6 PM" },
  { name: "Legaspi Dental Care", rating: "4.4", count: "97", tag: "Closes soon" },
];

/** `className` must set position (relative/absolute) and size. */
function MapTile({ className }: { className: string }) {
  return (
    <div className={`overflow-hidden bg-[#E8EEF2] ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(#fff_2px,transparent_2px),linear-gradient(90deg,#fff_2px,transparent_2px)] bg-[size:46px_46px]" />
      <div className="absolute -left-10 top-[55%] h-3 w-[140%] -rotate-12 bg-[#FFE3A3]" />
      <div className="absolute left-[18%] top-[-10%] h-[130%] w-3 rotate-[18deg] bg-white" />
      <div className="absolute bottom-0 right-0 h-1/3 w-1/3 rounded-tl-[40px] bg-[#CDE8D2]" />
      {[
        { l: "48%", t: "36%", top: true },
        { l: "24%", t: "62%" },
        { l: "72%", t: "64%" },
      ].map((p, i) => (
        <Icon
          key={i}
          icon="solar:map-point-bold"
          size={p.top ? 34 : 24}
          className="absolute -translate-x-1/2 -translate-y-full drop-shadow"
          style={{ left: p.l, top: p.t, color: p.top ? ORANGE : "#94A3B8" }}
        />
      ))}
    </div>
  );
}

function SeoLaptop() {
  return (
    <div className="flex h-full flex-col px-10 py-6">
      <div className="flex h-11 w-[560px] items-center gap-3 rounded-full border border-slate-200 px-5 text-[14px] shadow-sm">
        <Icon icon="solar:magnifer-linear" size={17} className="text-slate-400" />
        best dentist in makati open today
        <Icon icon="solar:microphone-3-linear" size={17} className="ml-auto text-slate-400" />
      </div>
      <div className="mt-6 grid flex-1 grid-cols-[1.15fr_1fr] gap-6">
        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-rose-50 p-5">
          <span className="flex items-center gap-2 text-[13px] font-semibold">
            <Icon icon="solar:stars-bold" size={17} style={{ color: ORANGE }} /> AI Overview
          </span>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
            For a highly rated dentist in Makati that is open today, <b className="text-slate-900">Bloom Dental Studio</b> on Legaspi
            Street stands out with a <b>4.9★ rating from 312 reviews</b>, same-day cleanings and online booking. Prices start at
            ₱1,200 for a cleaning and checkup.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["bloomdental.ph", "bloomdental.ph/prices", "Business profile"].map((c) => (
              <span key={c} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] text-slate-600 shadow-sm">
                <span className="h-3.5 w-3.5 rounded-full" style={{ background: ORANGE }} />
                {c}
              </span>
            ))}
          </div>
          <div className="mt-5 space-y-2 border-t border-orange-100 pt-4 text-[12px] text-slate-600">
            <p className="flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" size={14} className="text-emerald-500" /> Cited by ChatGPT, Gemini & Perplexity
            </p>
            <p className="flex items-center gap-2">
              <Icon icon="solar:check-circle-bold" size={14} className="text-emerald-500" /> LocalBusiness schema + llms.txt detected
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <MapTile className="relative h-[170px]" />
          {listings.map((l, i) => (
            <div
              key={l.name}
              className={`flex items-center gap-3 border-t border-slate-100 px-4 py-3 ${l.top ? "bg-orange-50/70" : ""}`}
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold"
                style={l.top ? { background: ORANGE, color: "#fff" } : { background: "#F1F5F9" }}
              >
                {i + 1}
              </span>
              <span className="text-[12px] leading-tight">
                <b className="block text-[13px]">{l.name}</b>
                <span className="text-slate-500">
                  {l.rating} ★ ({l.count}) · {l.tag}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeoPhone() {
  return (
    <div className="absolute inset-0">
      <MapTile className="absolute inset-0" />
      <div className="absolute inset-x-4 top-2 flex h-10 items-center gap-2 rounded-full bg-white px-4 text-[12px] shadow-md">
        <Icon icon="solar:magnifer-linear" size={14} className="text-slate-400" /> dentist near me
      </div>
      <div className="absolute inset-x-0 bottom-0 rounded-t-[26px] bg-white px-5 pb-5 pt-3 shadow-[0_-8px_24px_rgba(0,0,0,.12)]">
        <span className="mx-auto block h-1 w-10 rounded-full bg-slate-200" />
        <span className="mt-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white" style={{ background: ORANGE }}>
          #1 in Map Pack
        </span>
        <h3 className="mt-2 text-[18px] font-bold">Bloom Dental Studio</h3>
        <p className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500">
          4.9 <Stars size={10} /> (312) · Dentist
        </p>
        <p className="mt-1 text-[11px] font-medium text-emerald-600">Open · Closes 8 PM</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] font-semibold">
          {[
            ["solar:phone-linear", "Call"],
            ["solar:routing-2-linear", "Directions"],
            ["solar:calendar-linear", "Book"],
          ].map(([ic, t], i) => (
            <span
              key={t}
              className="flex flex-col items-center gap-1 rounded-xl py-2.5"
              style={i === 2 ? { background: ORANGE, color: "#fff" } : { background: "#FFF1EA", color: ORANGE }}
            >
              <Icon icon={ic} size={17} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── AI Agents & Automation ───────────────────────── */

const leads = [
  { n: "Andrea Santos", ch: "Messenger", s: "Trial class", d: "₱350", paid: true, sync: "Sheets" },
  { n: "Marco Villanueva", ch: "WhatsApp", s: "PT package", d: "₱2,500", paid: true, sync: "HubSpot" },
  { n: "Jasmine Lim", ch: "Instagram", s: "Trial class", d: "₱350", paid: false, sync: "Sheets" },
  { n: "Paolo Reyes", ch: "Messenger", s: "Monthly", d: "₱1,800", paid: true, sync: "HubSpot" },
  { n: "Bea Cruz", ch: "Instagram", s: "Trial class", d: "₱350", paid: true, sync: "Sheets" },
];
const channelIcon: Record<string, string> = {
  Messenger: "solar:chat-round-dots-bold",
  WhatsApp: "solar:phone-calling-rounded-bold",
  Instagram: "solar:camera-bold",
};

function AgentsLaptop() {
  return (
    <div className="flex h-full bg-slate-50">
      <aside className="flex w-14 flex-col items-center gap-5 border-r border-slate-200 bg-white py-5 text-slate-400">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ background: ORANGE }}>
          <Icon icon="solar:bolt-bold" size={16} />
        </span>
        {["solar:home-2-linear", "solar:inbox-linear", "solar:calendar-linear", "solar:wallet-money-linear", "solar:settings-linear"].map(
          (ic, i) => (
            <Icon key={ic} icon={ic} size={19} className={i === 1 ? "text-slate-900" : ""} />
          ),
        )}
      </aside>
      <div className="flex-1 px-7 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[19px] font-bold">Lead inbox</h3>
            <p className="text-[12px] text-slate-500">Pulse Fitness · AI agent live on 3 channels</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Agent online 24/7
          </span>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3">
          {[
            ["Leads today", "48", "+18%"],
            ["Avg. reply time", "6s", "was 3h"],
            ["Deposits collected", "₱24,500", "GCash · Maya"],
            ["Bookings locked", "31", "auto-synced"],
          ].map(([k, v, s]) => (
            <div key={k} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-[11px] text-slate-500">{k}</p>
              <p className="mt-1 text-[22px] font-bold">{v}</p>
              <p className="text-[11px]" style={{ color: ORANGE }}>
                {s}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="grid grid-cols-[1.4fr_1.1fr_1fr_1fr_.9fr] gap-2 border-b border-slate-100 px-5 py-2.5 text-[11px] font-medium text-slate-400">
            <span>Lead</span>
            <span>Channel</span>
            <span>Service</span>
            <span>Deposit</span>
            <span>Synced to</span>
          </div>
          {leads.map((l) => (
            <div
              key={l.n}
              className="grid grid-cols-[1.4fr_1.1fr_1fr_1fr_.9fr] items-center gap-2 border-b border-slate-50 px-5 py-2.5 text-[12px]"
            >
              <b className="font-semibold">{l.n}</b>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Icon icon={channelIcon[l.ch]} size={13} style={{ color: ORANGE }} />
                {l.ch}
              </span>
              <span className="text-slate-600">{l.s}</span>
              <span
                className={`w-fit rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  l.paid ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                }`}
              >
                {l.paid ? `${l.d} paid` : "Pending"}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Icon icon="solar:check-circle-bold" size={13} className="text-emerald-500" /> {l.sync}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgentsPhone() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-2.5">
        <Icon icon="solar:alt-arrow-left-linear" size={18} />
        <span className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{ background: ORANGE }}>
          <Icon icon="solar:dumbbell-large-minimalistic-bold" size={16} />
        </span>
        <span className="text-[12px] leading-tight">
          <b className="block text-[13px]">Pulse Fitness</b>
          <span className="text-emerald-600">AI assistant · replies instantly</span>
        </span>
      </div>
      <div className="flex-1 space-y-2.5 bg-slate-50 px-3.5 py-4 text-[12px] leading-snug">
        <p className="ml-auto w-fit max-w-[75%] rounded-2xl rounded-br-md px-3 py-2 text-white" style={{ background: "#3B82F6" }}>
          Hi! Magkano po trial class?
        </p>
        <p className="w-fit max-w-[80%] rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">
          ₱350 lang po! May slot bukas 7AM or 6PM. Alin po mas okay? 😊
        </p>
        <p className="ml-auto w-fit max-w-[75%] rounded-2xl rounded-br-md px-3 py-2 text-white" style={{ background: "#3B82F6" }}>
          6PM po
        </p>
        <div className="w-[82%] rounded-2xl rounded-bl-md bg-white p-3 shadow-sm">
          <p className="font-semibold">Reserve Tue 6:00 PM</p>
          <p className="text-[11px] text-slate-500">₱350 deposit · GCash or Maya</p>
          <div className="mt-2.5 rounded-xl py-2 text-center text-[12px] font-semibold text-white" style={{ background: ORANGE }}>
            Pay ₱350 deposit
          </div>
        </div>
        <p className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700">
          <Icon icon="solar:check-circle-bold" size={13} /> Paid · slot locked on calendar
        </p>
      </div>
      <div className="flex items-center gap-2 border-t border-slate-100 px-3 py-2.5">
        <span className="flex-1 rounded-full bg-slate-100 px-3 py-2 text-[11px] text-slate-400">Aa</span>
        <Icon icon="solar:plain-2-bold" size={18} style={{ color: ORANGE }} />
      </div>
    </div>
  );
}

/* ───────────────────────── Digital Consulting ───────────────────────── */

const workstreams = [
  { t: "Lead capture & AI agent", start: 0, len: 2 },
  { t: "CRM + Sheets consolidation", start: 1, len: 3 },
  { t: "Quote & invoice automation", start: 3, len: 3 },
  { t: "Ops dashboard & reporting", start: 5, len: 3 },
];

function ConsultingLaptop() {
  return (
    <div className="flex h-full flex-col px-10 py-6">
      <div className="flex items-start justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
            Digital Transformation Roadmap
          </p>
          <h3 className="mt-1 text-[24px] font-bold">Northpoint Logistics</h3>
          <p className="text-[12px] text-slate-500">Prepared after a 1-day audit · 15 pages · Page 6 of 15</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-[12px] font-medium">
          <Icon icon="solar:file-download-linear" size={15} /> Roadmap.pdf
        </span>
      </div>
      <div className="mt-5 grid flex-1 grid-cols-[1fr_1.6fr] gap-7">
        <div>
          <p className="text-[13px] font-semibold">Where time is lost today</p>
          <div className="mt-3 space-y-3.5">
            {[
              ["Manual data encoding", 82],
              ["Quoting & invoicing", 64],
              ["Lead follow-ups", 58],
              ["Disconnected SaaS tools", 46],
            ].map(([k, v]) => (
              <div key={k as string}>
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-600">{k}</span>
                  <b>{v}%</b>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full" style={{ width: `${v}%`, background: ORANGE }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-orange-50 p-4">
            <p className="text-[11px] text-slate-500">Projected time saved</p>
            <p className="text-[26px] font-extrabold" style={{ color: ORANGE }}>
              18 hrs / week
            </p>
          </div>
        </div>
        <div>
          <p className="text-[13px] font-semibold">12-week rollout</p>
          <div className="mt-3 grid grid-cols-8 border-b border-slate-200 pb-2 text-[11px] text-slate-400">
            {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <div className="mt-3 space-y-4">
            {workstreams.map((w, i) => (
              <div key={w.t}>
                <p className="mb-1.5 text-[12px] text-slate-600">{w.t}</p>
                <div className="grid grid-cols-8">
                  <div
                    className="h-6 rounded-md"
                    style={{
                      gridColumn: `${w.start + 1} / span ${w.len}`,
                      background: ORANGE,
                      opacity: 1 - i * 0.18,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 flex items-center gap-2 text-[12px] text-slate-500">
            <Icon icon="solar:check-circle-bold" size={14} className="text-emerald-500" /> Architecture blueprint approved before any software spend
          </p>
        </div>
      </div>
    </div>
  );
}

function ConsultingPhone() {
  return (
    <div className="flex h-full flex-col bg-slate-50 px-4 pt-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: ORANGE }}>
        Audit summary
      </p>
      <h3 className="text-[20px] font-bold leading-tight">Northpoint Logistics</h3>
      <div className="mt-4 rounded-2xl p-4 text-white" style={{ background: ORANGE }}>
        <p className="text-[11px] opacity-85">Digital maturity score</p>
        <p className="text-[34px] font-extrabold leading-none">
          42<span className="text-[16px] opacity-80">/100</span>
        </p>
        <p className="mt-1 text-[11px] opacity-85">Target after roadmap: 78</p>
      </div>
      <p className="mt-4 text-[12px] font-semibold">Key findings</p>
      <div className="mt-2 space-y-2">
        {[
          ["bg-rose-500", "Orders re-typed into 3 systems"],
          ["bg-amber-500", "Quotes take 2 days to send"],
          ["bg-amber-500", "No single source of customer data"],
          ["bg-emerald-500", "Team ready for automation"],
        ].map(([c, t]) => (
          <div key={t} className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 text-[12px] shadow-sm">
            <span className={`h-2 w-2 shrink-0 rounded-full ${c}`} /> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export const screens: Record<ScreenId, { url: string; laptop: ReactNode; phone: ReactNode }> = {
  web: { url: "bloomdental.ph", laptop: <WebLaptop />, phone: <WebPhone /> },
  seo: { url: "search · best dentist in makati", laptop: <SeoLaptop />, phone: <SeoPhone /> },
  agents: { url: "ops.pulsefitness.ph/inbox", laptop: <AgentsLaptop />, phone: <AgentsPhone /> },
  consulting: { url: "roadmap · northpoint-logistics.pdf", laptop: <ConsultingLaptop />, phone: <ConsultingPhone /> },
};
