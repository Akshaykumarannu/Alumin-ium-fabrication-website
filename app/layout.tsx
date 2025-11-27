import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "National Aluminium Fabrication | Premium Aluminium & Glass Works in Kasargod",
  description: "Leading aluminium fabrication company in Kasargod, Kerala. Expert in aluminium windows, doors, ACP cladding, glass partitions, office cabins, steel railing & structural fabrication. Serving Kerala & Karnataka.",
  keywords: [
    "aluminium fabrication",
    "ACP works",
    "glass partition",
    "aluminium windows Kasargod",
    "aluminium doors Kerala",
    "ACP cladding Kerala",
    "glass work Karnataka",
    "steel railing",
    "office cabin",
    "structural fabrication",
    "Vidhyanagar Kasargod",
    "aluminium fabrication Kerala"
  ],
  authors: [{ name: "National Aluminium Fabrication" }],
  openGraph: {
    title: "National Aluminium Fabrication | Premium Aluminium & Glass Works",
    description: "Expert aluminium fabrication services for homes and businesses in Kerala & Karnataka. Windows, Doors, ACP Cladding, Glass Works & More.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
