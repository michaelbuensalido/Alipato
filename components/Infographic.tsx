import type { ReactElement } from "react";

/**
 * Decorative line-art illustrations for the service / package cards.
 * Drawn on a 400×208 canvas; `currentColor` is the neutral stroke, ACCENT the highlight.
 */
export type Visual = "web" | "seo" | "chat" | "automation" | "mobile" | "audit";

const ACCENT = "#FF5E1A";
const INK = "#070506";

const label = {
  fill: "currentColor",
  fontSize: 10,
  fontFamily: "var(--font-inter), Inter, sans-serif",
  stroke: "none",
} as const;

function Web() {
  return (
    <>
      <rect x="62" y="40" width="214" height="138" rx="10" fill="#fff" fillOpacity=".04" />
      <line x1="62" y1="60" x2="276" y2="60" />
      {[74, 84, 94].map((cx) => (
        <circle key={cx} cx={cx} cy="50" r="3" />
      ))}
      <rect x="78" y="74" width="112" height="10" rx="5" stroke={ACCENT} fill={ACCENT} fillOpacity=".25" />
      <rect x="78" y="92" width="78" height="6" rx="3" />
      <rect x="78" y="112" width="52" height="50" rx="6" />
      <rect x="138" y="112" width="52" height="50" rx="6" />
      <rect x="198" y="112" width="52" height="50" rx="6" />
      {/* phone */}
      <rect x="258" y="72" width="74" height="124" rx="14" fill="#100C0D" stroke={ACCENT} strokeOpacity=".9" />
      <line x1="284" y1="82" x2="306" y2="82" stroke={ACCENT} />
      <rect x="268" y="94" width="54" height="30" rx="5" />
      <rect x="268" y="132" width="54" height="6" rx="3" />
      <rect x="268" y="144" width="36" height="6" rx="3" />
      <rect x="268" y="166" width="54" height="16" rx="8" stroke={ACCENT} />
      {/* speed badge */}
      <circle cx="334" cy="52" r="24" stroke={ACCENT} fill={INK} fillOpacity=".6" />
      <path d="M318 60 A18 18 0 1 1 350 60" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeOpacity=".5" />
      <text x="334" y="56" textAnchor="middle" {...label} fontSize="11" fontWeight="600">
        0.8s
      </text>
    </>
  );
}

function Seo() {
  return (
    <>
      {/* map grid */}
      {[56, 88, 120, 152, 184].map((y) => (
        <line key={y} x1="20" y1={y} x2="210" y2={y} strokeOpacity=".5" />
      ))}
      {[40, 90, 140, 190].map((x) => (
        <line key={x} x1={x} y1="30" x2={x} y2="200" strokeOpacity=".5" />
      ))}
      <path d="M20 170 L95 120 L150 140 L210 80" strokeWidth="3" strokeOpacity=".7" />
      {/* pulse + pin */}
      <ellipse cx="128" cy="150" rx="46" ry="12" stroke={ACCENT} strokeOpacity=".35" />
      <ellipse cx="128" cy="150" rx="26" ry="7" stroke={ACCENT} strokeOpacity=".7" />
      <path
        d="M128 70c-18 0-32 14-32 32 0 24 32 48 32 48s32-24 32-48c0-18-14-32-32-32z"
        fill={ACCENT}
        stroke={ACCENT}
      />
      <circle cx="128" cy="102" r="11" fill={INK} stroke="none" />
      {/* ranking panel */}
      <rect x="232" y="40" width="136" height="132" rx="12" fill={INK} fillOpacity=".55" />
      <text x="246" y="62" {...label} fillOpacity=".7">
        Map Pack · AI answers
      </text>
      {[
        { y: 76, w: 92, hi: true, n: "#1" },
        { y: 102, w: 70, n: "#2" },
        { y: 128, w: 54, n: "#3" },
      ].map((r) => (
        <g key={r.y}>
          <text x="246" y={r.y + 12} {...label} fill={r.hi ? ACCENT : "currentColor"} fontWeight="600">
            {r.n}
          </text>
          <rect
            x="266"
            y={r.y + 3}
            width={r.w}
            height="12"
            rx="6"
            stroke={r.hi ? ACCENT : "currentColor"}
            fill={r.hi ? ACCENT : "none"}
            fillOpacity=".3"
          />
        </g>
      ))}
      <path d="M352 150l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={ACCENT} stroke="none" />
    </>
  );
}

function Chat() {
  return (
    <>
      <rect x="40" y="34" width="176" height="42" rx="16" fill="#fff" fillOpacity=".06" />
      <text x="56" y="59" {...label}>
        Hi! May slot pa po sa Sabado?
      </text>
      <rect x="168" y="88" width="192" height="42" rx="16" fill={ACCENT} fillOpacity=".9" stroke={ACCENT} />
      <text x="184" y="113" {...label} fill={INK} fontWeight="600">
        Yes! 10AM is open — reserve now?
      </text>
      {/* payment confirmation */}
      <rect x="40" y="144" width="190" height="44" rx="12" fill={INK} fillOpacity=".6" />
      <circle cx="64" cy="166" r="11" stroke={ACCENT} />
      <path d="M59 166l4 4 7-8" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="84" y="162" {...label} fontWeight="600">
        ₱500 deposit · GCash
      </text>
      <text x="84" y="176" {...label} fillOpacity=".6">
        Verified automatically
      </text>
      {/* typing dots */}
      <rect x="252" y="150" width="64" height="30" rx="15" fill="#fff" fillOpacity=".06" />
      {[270, 284, 298].map((cx, i) => (
        <circle key={cx} cx={cx} cy="165" r="3.5" fill="currentColor" fillOpacity={0.3 + i * 0.25} stroke="none" />
      ))}
    </>
  );
}

function Automation() {
  const nodes = [
    { x: 30, y: 36, t: "Leads" },
    { x: 296, y: 36, t: "CRM" },
    { x: 30, y: 144, t: "Sheets" },
    { x: 296, y: 144, t: "Invoice" },
  ];
  return (
    <>
      {nodes.map((n) => {
        const cx = n.x + 37;
        const cy = n.y + 15;
        return (
          <g key={n.t}>
            <path
              d={`M${cx} ${cy} C ${(cx + 200) / 2} ${cy}, ${(cx + 200) / 2} 104, 200 104`}
              stroke={ACCENT}
              strokeOpacity=".55"
              strokeDasharray="4 5"
            />
            <rect x={n.x} y={n.y} width="74" height="30" rx="9" fill={INK} fillOpacity=".7" />
            <text x={cx} y={cy + 3.5} textAnchor="middle" {...label}>
              {n.t}
            </text>
          </g>
        );
      })}
      <circle cx="200" cy="104" r="44" stroke={ACCENT} strokeOpacity=".25" />
      <circle cx="200" cy="104" r="30" fill={ACCENT} fillOpacity=".18" stroke={ACCENT} />
      <path d="M204 86l-14 21h10l-4 15 14-21h-10z" fill={ACCENT} stroke="none" />
    </>
  );
}

function Mobile() {
  return (
    <>
      <rect x="120" y="22" width="88" height="176" rx="18" fill="#100C0D" />
      <line x1="150" y1="34" x2="178" y2="34" />
      <rect x="132" y="48" width="64" height="40" rx="8" fill={ACCENT} fillOpacity=".2" stroke={ACCENT} />
      {[100, 112, 124].map((y, i) => (
        <rect key={y} x="132" y={y} width={64 - i * 14} height="6" rx="3" />
      ))}
      <rect x="132" y="168" width="64" height="16" rx="8" stroke={ACCENT} />
      {/* notifications */}
      <rect x="186" y="58" width="176" height="38" rx="12" fill={INK} fillOpacity=".85" stroke={ACCENT} />
      <circle cx="206" cy="77" r="8" fill={ACCENT} stroke="none" />
      <text x="222" y="81" {...label} fontWeight="600">
        New VIP booking · 3:00 PM
      </text>
      <rect x="198" y="108" width="160" height="38" rx="12" fill={INK} fillOpacity=".85" />
      <path d="M218 117l3 6.5 7 .8-5.2 4.8 1.4 7-6.2-3.5-6.2 3.5 1.4-7-5.2-4.8 7-.8z" stroke={ACCENT} />
      <text x="234" y="131" {...label}>
        +50 loyalty points
      </text>
      <text x="44" y="96" {...label} fontSize="22" fontWeight="700" fill={ACCENT}>
        iOS
      </text>
      <text x="30" y="128" {...label} fontSize="22" fontWeight="700" fillOpacity=".5">
        Android
      </text>
    </>
  );
}

function Audit() {
  return (
    <>
      <rect x="44" y="26" width="128" height="164" rx="10" fill="#fff" fillOpacity=".04" />
      <rect x="58" y="42" width="70" height="8" rx="4" stroke={ACCENT} fill={ACCENT} fillOpacity=".3" />
      {[66, 94, 122, 150].map((y, i) => (
        <g key={y}>
          <rect x="58" y={y} width="14" height="14" rx="4" stroke={i < 3 ? ACCENT : "currentColor"} />
          {i < 3 && (
            <path
              d={`M61 ${y + 7}l3 3 5-6`}
              stroke={ACCENT}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <rect x="80" y={y + 4} width={78 - i * 8} height="6" rx="3" />
        </g>
      ))}
      {/* roadmap */}
      <path d="M200 176 C 250 176, 250 124, 290 116 S 340 60, 366 44" stroke={ACCENT} strokeWidth="2" />
      {[
        { x: 200, y: 176, t: "Audit" },
        { x: 290, y: 116, t: "Build" },
        { x: 366, y: 44, t: "Scale" },
      ].map((m) => (
        <g key={m.t}>
          <circle cx={m.x} cy={m.y} r="7" fill={INK} stroke={ACCENT} strokeWidth="2" />
          <text x={m.x} y={m.y - 14} textAnchor="middle" {...label} fontWeight="600">
            {m.t}
          </text>
        </g>
      ))}
    </>
  );
}

const art: Record<Visual, () => ReactElement> = {
  web: Web,
  seo: Seo,
  chat: Chat,
  automation: Automation,
  mobile: Mobile,
  audit: Audit,
};

export default function Infographic({ variant, className }: { variant: Visual; className?: string }) {
  const Art = art[variant];
  return (
    <svg
      viewBox="0 0 400 208"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeOpacity=".45"
      aria-hidden="true"
      className={className}
    >
      <Art />
    </svg>
  );
}
