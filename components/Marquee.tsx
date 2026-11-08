const base = "text-5xl md:text-7xl font-medium tracking-tighter mx-8 uppercase";
const g1 = "text-accent";
const g2 = "text-flame";

const items = [
  { text: "Alipato", gradient: g1 },
  { text: "Digital Growth", gradient: "" },
  { text: "IT Solutions", gradient: g2 },
  { text: "Local SEO & AEO", gradient: "" },
  { text: "24/7 AI Agents", gradient: g1 },
  { text: "Digital Consulting", gradient: "" },
];

export default function Marquee() {
  return (
    <div className="py-12 border-b border-line/50 overflow-hidden relative flex items-center bg-canvas">
      <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-50">
        {items.map((item, i) => (
          <span key={i} className={`${base} ${item.gradient}`}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
