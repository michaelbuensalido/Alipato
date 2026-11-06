import Icon from "./Icon";

const socials = [
  { label: "Instagram", hover: "hover:text-accent" },
  { label: "Facebook", hover: "hover:text-accent" },
  { label: "LinkedIn", hover: "hover:text-accent" },
  { label: "WhatsApp", hover: "hover:text-accent" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-32 pb-12 px-6 md:px-12 flex flex-col justify-between flex-grow relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full mb-24 text-center md:text-left relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-8 leading-tight">
          Ready to automate?
          <br />
          <a
            href="mailto:hello@agency.com"
            className="text-accent hover:opacity-80 transition-opacity duration-300 underline decoration-accent/50 underline-offset-8"
          >
            Book a free audit.
          </a>
        </h2>

        <div className="mt-16 max-w-md mx-auto md:mx-0">
          <p className="text-sm font-light text-muted mb-4">
            Get a 30-minute audit of your site, Map Pack listing and inquiry
            response speed
          </p>
          <div className="relative flex items-center border-b border-line pb-2 focus-within:border-accent transition-colors duration-300">
            <input
              type="email"
              placeholder="Email address or business website"
              className="w-full bg-transparent outline-none text-sm font-light placeholder:text-muted/70 text-fg"
            />
            <button
              aria-label="Subscribe"
              className="absolute right-0 text-muted hover:text-accent transition-colors"
            >
              <Icon icon="solar:arrow-right-linear" size={20} />
            </button>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto w-full pt-12 border-t border-line/50 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <a
            href="#"
            className="text-xl font-medium tracking-tighter uppercase inline-block mb-4 text-fg"
          >
            Cendralis
          </a>
          <p className="text-xs font-light text-muted max-w-xs">
            Cendralis is a digital agency building web, SEO/AEO, AI
            agents and automation for SMBs.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium text-muted tracking-wider uppercase mb-2">
            Socials
          </span>
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              className={`text-sm font-light text-fg/80 ${s.hover} transition-colors w-fit`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="col-span-1 md:col-span-4 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-light text-muted/70 gap-4">
          <p>© 2026 Cendralis. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-fg/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-fg/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
