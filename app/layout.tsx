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
    icon: [
      {
        url: "/images/logo/alipato_logo.svg?v=3",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        url: "/images/logo/alipato_logo_32.png?v=3",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/logo/alipato_logo_192.png?v=3",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo/alipato_logo.svg?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N7V92XVG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} bg-canvas text-fg font-sans antialiased selection:bg-accent selection:text-canvas flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
