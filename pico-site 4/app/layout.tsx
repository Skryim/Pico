import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://pico.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pico — the AI coworker who stays with you",
    template: "%s | Pico",
  },
  description:
    "Pico is a physical AI coworker for the lonely digital workplace. He automates repetitive tasks while providing emotional support, right from under your hand.",
  keywords: [
    "Pico",
    "AI coworker",
    "AI companion",
    "workplace wellbeing",
    "physical AI",
  ],
  openGraph: {
    title: "Pico — the AI coworker who stays with you",
    description:
      "The first physical AI coworker designed for the lonely digital workplace.",
    url: siteUrl,
    siteName: "Pico",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pico, a tiny AI coworker shaped like a mouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pico — the AI coworker who stays with you",
    description:
      "The first physical AI coworker designed for the lonely digital workplace.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pico",
  url: siteUrl,
  description:
    "Pico creates portable AI workplace companions that automate repetitive tasks while providing emotional support.",
  slogan: "You're not working alone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-blue focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
