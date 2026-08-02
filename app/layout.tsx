import type { Metadata, Viewport } from "next";
import "./globals.css";

const deploymentBase = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(`${deploymentBase}/`),
  title: {
    default: "Neuromancer Atlas — A field guide to the Sprawl",
    template: "%s · Neuromancer Atlas",
  },
  description: "A researched, spoiler-aware reader’s wiki for William Gibson’s Neuromancer: 260 articles on characters, places, small details, the matrix, themes, chapters, and cultural influence.",
  applicationName: "Neuromancer Atlas",
  authors: [{ name: "Neuromancer Atlas editors" }],
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
  openGraph: {
    type: "website",
    siteName: "Neuromancer Atlas",
    title: "Neuromancer Atlas",
    description: "A field guide to the Sprawl — 260 researched, interconnected articles.",
    images: [{ url: `${deploymentBase}/og.png`, width: 1200, height: 630, alt: "Neuromancer Atlas — A field guide to the Sprawl" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuromancer Atlas",
    description: "A field guide to the Sprawl — 260 researched, interconnected articles.",
    images: [`${deploymentBase}/og.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#efeee8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
