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

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-condensed px-6 text-[18vw] font-semibold uppercase leading-none md:px-10 md:text-[9rem] ${
              item.gradient || "text-outline"
            }`}
          >
            {item.text}
          </span>
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-accent/70 md:h-4 md:w-4" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-line/60 bg-canvas py-10 md:py-14">
      <div className="flex animate-marquee whitespace-nowrap motion-reduce:animate-none">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
