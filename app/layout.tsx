import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alipato | Digital Growth & IT Solutions",
  description:
    "Alipato is a digital growth and IT solutions partner building web, SEO/AEO, AI agents and automation for SMBs.",
  icons: {
    icon: "/images/logo/alipato_logo.svg",
    shortcut: "/images/logo/alipato_logo.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
