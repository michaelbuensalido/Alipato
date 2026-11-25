"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit. Please contact us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please reach out via WhatsApp or email directly.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-grow flex-col justify-between overflow-hidden bg-canvas px-5 pb-10 pt-28 sm:px-8 md:pt-36 lg:px-[6.25vw]"
    >
      {/* Ember heat rising from below the footer line. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[560px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_94_26/0.16),rgb(242_19_104/0.05)_55%,transparent)]"
      />

      <div className="relative z-10 mx-auto mb-24 w-full max-w-[1440px]">
        <h2 className="font-condensed mb-12 text-[16vw] font-semibold uppercase leading-[0.86] tracking-[-0.01em] md:text-[11vw] lg:text-[10.5rem]">
          <span className="text-outline">Ready to automate?</span>
          <br />
          <a
            href="mailto:alipatosolutions@gmail.com"
            className="text-accent decoration-accent/50 decoration-2 underline-offset-[0.12em] transition-opacity duration-300 hover:underline hover:opacity-90"
          >
            Book a free audit.
          </a>
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Direct Contact Buttons */}
          <div className="flex flex-wrap items-center gap-3 lg:col-span-7">
            <a
              href="https://wa.me/639957431885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-canvas transition duration-150 ease-out hover:-translate-y-px hover:brightness-110 active:translate-y-px"
            >
              <Icon icon="solar:chat-round-dots-linear" size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+639957431885"
              className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition duration-150 hover:text-accent hover:shadow-[inset_0_0_0_1px_theme(colors.accent)]"
            >
              <Icon icon="solar:phone-calling-linear" size={18} />
              +63 995 743 1885
            </a>
            <a
              href="mailto:alipatosolutions@gmail.com"
              className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium text-fg shadow-[inset_0_0_0_1px_theme(colors.line)] transition duration-150 hover:text-accent hover:shadow-[inset_0_0_0_1px_theme(colors.accent)]"
            >
              <Icon icon="solar:letter-linear" size={18} />
              alipatosolutions@gmail.com
            </a>
          </div>

          <div className="w-full max-w-md lg:col-span-5 lg:justify-self-end">
            <label htmlFor="audit-email" className="mb-4 block text-sm font-light text-muted">
              Or leave your email for a 30-minute audit of your site and operations:
            </label>

            {status === "success" ? (
              <div
                role="status"
                className="flex animate-[fadeIn_0.3s_ease-in-out] items-center justify-between gap-3 rounded-[14px] bg-accent/10 p-4 text-sm text-fg shadow-[inset_0_0_0_1px_rgb(255_94_26/0.4)]"
              >
                <div className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-linear" size={20} className="shrink-0 text-accent" />
                  <span>Thank you! We received your email and will reach out within 24 hours.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="shrink-0 cursor-pointer text-xs text-muted underline hover:text-accent"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="relative flex items-center border-b border-line pb-3 transition-colors duration-300 focus-within:border-accent">
                  <input
                    id="audit-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    placeholder="Email address or business website"
                    aria-invalid={status === "error" || undefined}
                    aria-describedby={status === "error" ? "audit-error" : undefined}
                    className="w-full bg-transparent pr-12 text-base font-light text-fg outline-none placeholder:text-muted/80 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    aria-label="Submit audit request"
                    className="absolute right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-accent text-canvas transition duration-150 hover:brightness-110 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Icon icon="solar:refresh-linear" size={18} className="animate-spin" />
                    ) : (
                      <Icon icon="solar:arrow-right-linear" size={18} />
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p
                    id="audit-error"
                    role="alert"
                    className="mt-2 animate-[fadeIn_0.3s_ease-in-out] text-xs text-flame"
                  >
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-t border-line pt-12 md:grid-cols-4 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="group mb-4 inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.svg"
              alt="Alipato"
              className="h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 md:h-12"
            />
            <span className="sr-only">Alipato</span>
          </a>
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted">
            Alipato is a digital growth and IT solutions partner building web,
            SEO/AEO, AI agents and automation for SMBs.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">
            Direct Contact
          </span>
          <a
            href="mailto:alipatosolutions@gmail.com"
            className="flex items-center gap-2 break-all text-sm font-light text-fg/85 transition-colors hover:text-accent"
          >
            <Icon icon="solar:letter-linear" size={16} className="shrink-0 text-accent" />
            alipatosolutions@gmail.com
          </a>
          <a
            href="tel:+639634644192"
            className="flex items-center gap-2 text-sm font-light text-fg/85 transition-colors hover:text-accent"
          >
            <Icon icon="solar:phone-linear" size={16} className="shrink-0 text-accent" />
            +63 963 464 4192
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">
            Instant Messaging
          </span>
          <a
            href="https://wa.me/09634644192"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-light text-fg/85 transition-colors hover:text-accent"
          >
            <Icon icon="solar:chat-round-dots-linear" size={16} className="shrink-0 text-accent" />
            WhatsApp (+63 963 464 4192)
          </a>
        </div>

        <div className="col-span-1 mt-6 flex flex-col items-start justify-between gap-4 text-xs font-light text-muted md:col-span-4 md:flex-row md:items-center">
          <p>© 2026 Alipato. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-fg">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-fg">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
