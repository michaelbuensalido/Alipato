import type { ReactNode } from "react";
import Icon from "./Icon";
import Infographic, { type Visual } from "./Infographic";

type Props = {
  visual: Visual;
  icon: string;
  title: string;
  pill?: string;
  badge?: string;
  subtitle?: string;
  description: string;
  chips?: string[];
  footer?: ReactNode;
  children?: ReactNode;
};

/** Image-led card: illustrated header that fades into a dark content panel. */
export default function ShowcaseCard({
  visual,
  icon,
  title,
  pill,
  badge,
  subtitle,
  description,
  chips,
  footer,
  children,
}: Props) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#141011] text-left">
      {/* Illustrated header */}
      <div className="relative h-48 shrink-0 overflow-hidden bg-[radial-gradient(120%_90%_at_75%_0%,rgb(255_94_26/0.32),transparent_60%),radial-gradient(90%_80%_at_0%_100%,rgb(242_19_104/0.22),transparent_60%),#1B1314] md:h-52">
        <Icon
          icon={icon}
          size={220}
          className="pointer-events-none absolute -bottom-10 -left-8 text-fg/[.04]"
        />
        <Infographic variant={visual} className="absolute inset-0 h-full w-full px-4 pb-2 pt-12 text-fg" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#141011]" />
        {badge && (
          <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-fg backdrop-blur-md">
            {badge}
          </span>
        )}
        <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-fg backdrop-blur-md">
          <Icon icon={icon} size={20} />
        </span>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-1 md:px-7 md:pb-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-condensed text-balance text-[2rem] font-semibold uppercase leading-[0.95] text-fg">
            {title}
          </h3>
          {pill && (
            <span className="mt-0.5 shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-fg">
              {pill}
            </span>
          )}
        </div>
        {subtitle && <p className="mt-2 text-sm text-accent">{subtitle}</p>}
        <p className="mt-3 text-sm font-light leading-relaxed text-muted">{description}</p>

        {children}

        {chips && chips.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c} className="rounded-full bg-white/[.08] px-3 py-1.5 text-xs font-medium text-fg/90">
                {c}
              </li>
            ))}
          </ul>
        )}

        {footer && (
          <div className="mt-auto pt-6">
            <div className="flex items-center gap-2 rounded-2xl bg-white/[.05] px-4 py-3 text-xs text-fg/80">
              {footer}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
