import Icon from "./Icon";

export default function Hero() {
  return (
    <main className="flex-grow pt-32 md:pt-48 pb-24 px-6 md:px-12 flex flex-col justify-end min-h-screen border-b border-line/50 relative overflow-hidden">
      {/* Abstract Geometric Background Element */}
      <div className="absolute top-1/4 right-0 md:right-1/4 w-[500px] h-[500px] opacity-35 pointer-events-none text-accent drop-shadow-[0_0_16px_rgba(255,94,26,0.5)] animate-[spin_60s_linear_infinite] mix-blend-screen hidden md:block">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="2 4" />
          <polygon points="100 10 178 55 178 145 100 190 22 145 22 55" />
          <polygon points="100 30 161 65 161 135 100 170 39 135 39 65" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="36.36" y1="36.36" x2="163.64" y2="163.64" />
          <line x1="36.36" y1="163.64" x2="163.64" y2="36.36" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] uppercase">
              Digital Growth,
              <br />
              Engineered
              <br />
              <span className="text-accent">For Scale</span>
            </h1>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-6 pb-2 lg:pb-4">
            <p className="text-base md:text-lg font-light text-muted leading-relaxed">
              A digital growth and IT solutions partner building automated client
              acquisition and operations pipelines for SMEs.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-sm font-medium hover:text-accent transition-colors duration-300 group w-fit"
            >
              Explore our services
              <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-canvas transition-all duration-300">
                <Icon icon="solar:arrow-down-linear" size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
