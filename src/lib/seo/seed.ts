import type { Metadata } from "next";

import { BASE_URL } from "../config";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "AuroraAtelier — Fine Jewelry NYC",
    template: "%s | AuroraAtelier",
  },

  description:
    "AuroraAtelier Fine Jewelry NYC. 14k/18k gold rings, necklaces, bracelets, and earrings.",

  openGraph: {
    type: "website",
    siteName: "AuroraAtelier",
    title: "AuroraAtelier — Fine Jewelry NYC",
    description:
      "Fine jewelry handcrafted in New York. 14k/18k gold rings, necklaces, bracelets, and earrings.",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/logo.svg`,
        width: 1200,
        height: 630,
        alt: "AuroraAtelier Fine Jewelry NYC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AuroraAtelier — Fine Jewelry NYC",
    description:
      "Fine jewelry handcrafted in New York. 14k/18k gold rings, necklaces, bracelets, and earrings.",
    images: [`${BASE_URL}/logo.svg`],
  },

  alternates: {
    canonical: BASE_URL,
  },
};
