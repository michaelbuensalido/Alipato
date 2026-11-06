import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = { title: "Cendralis | Digital Agency" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-canvas text-fg font-sans antialiased selection:bg-accent selection:text-canvas flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
