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
      className="pt-32 pb-12 px-6 md:px-12 flex flex-col justify-between flex-grow relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full mb-24 text-center md:text-left relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-8 leading-tight">
          Ready to automate?
          <br />
          <a
            href="mailto:michaelbuensalido15@gmail.com"
            className="text-accent hover:opacity-80 transition-opacity duration-300 underline decoration-accent/50 underline-offset-8"
          >
            Book a free audit.
          </a>
        </h2>

        {/* Direct Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
          <a
            href="https://wa.me/639957431885"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-canvas text-sm font-medium hover:bg-fg transition-colors duration-300"
          >
            <Icon icon="solar:chat-round-dots-linear" size={18} />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+639957431885"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <Icon icon="solar:phone-calling-linear" size={18} />
            0995 743 1885
          </a>
          <a
            href="mailto:michaelbuensalido15@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <Icon icon="solar:letter-linear" size={18} />
            michaelbuensalido15@gmail.com
          </a>
        </div>

        <div className="mt-8 max-w-md mx-auto md:mx-0">
          <p className="text-sm font-light text-muted mb-4">
            Or leave your email for a 30-minute audit of your site and operations:
          </p>

          {status === "success" ? (
            <div className="p-4 rounded border border-accent/40 bg-accent/10 text-fg text-sm flex items-center justify-between gap-3 animate-[fadeIn_0.3s_ease-in-out]">
              <div className="flex items-center gap-2">
                <Icon icon="solar:check-circle-linear" size={20} className="text-accent shrink-0" />
                <span>Thank you! We received your email and will reach out within 24 hours.</span>
              </div>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-xs text-muted hover:text-accent underline shrink-0 cursor-pointer"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative flex items-center border-b border-line pb-2 focus-within:border-accent transition-colors duration-300">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  placeholder="Email address or business website"
                  className="w-full bg-transparent outline-none text-sm font-light placeholder:text-muted/70 text-fg pr-8 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  aria-label="Submit audit request"
                  className="absolute right-0 text-muted hover:text-accent transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <Icon icon="solar:refresh-linear" size={20} className="animate-spin text-accent" />
                  ) : (
                    <Icon icon="solar:arrow-right-linear" size={20} />
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="text-xs text-flame mt-2 animate-[fadeIn_0.3s_ease-in-out]">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      <footer className="max-w-7xl mx-auto w-full pt-12 border-t border-line/50 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <a
            href="/"
            className="inline-block mb-4 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo.svg"
              alt="Alipato"
              className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
            <span className="sr-only">Alipato</span>
          </a>
          <p className="text-xs font-light text-muted max-w-xs leading-relaxed">
            Alipato is a digital growth and IT solutions partner building web,
            SEO/AEO, AI agents and automation for SMBs.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium text-muted tracking-wider uppercase mb-2">
            Direct Contact
          </span>
          <a
            href="mailto:michaelbuensalido15@gmail.com"
            className="text-sm font-light text-fg/80 hover:text-accent transition-colors flex items-center gap-2 break-all"
          >
            <Icon icon="solar:letter-linear" size={16} className="text-accent shrink-0" />
            michaelbuensalido15@gmail.com
          </a>
          <a
            href="tel:+639957431885"
            className="text-sm font-light text-fg/80 hover:text-accent transition-colors flex items-center gap-2"
          >
            <Icon icon="solar:phone-linear" size={16} className="text-accent shrink-0" />
            +63 995 743 1885
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium text-muted tracking-wider uppercase mb-2">
            Instant Messaging
          </span>
          <a
            href="https://wa.me/639957431885"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-fg/80 hover:text-accent transition-colors flex items-center gap-2"
          >
            <Icon icon="solar:chat-round-dots-linear" size={16} className="text-accent shrink-0" />
            WhatsApp (+63 995 743 1885)
          </a>
        </div>

        <div className="col-span-1 md:col-span-4 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-light text-muted/70 gap-4">
          <p>© 2026 Alipato. All rights reserved.</p>
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
