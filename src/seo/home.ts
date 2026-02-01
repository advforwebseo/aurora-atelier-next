import type { Metadata } from "next";

import { BASE_URL } from "@/lib/config";

import { baseMetadata } from "./seed";

export const homePageSeo: Metadata = {
  ...baseMetadata,

  title: "AuroraAtelier — Fine Jewelry NYC",
  description:
    "AuroraAtelier fine jewelry handcrafted in New York. 14k and 18k gold rings, necklaces, bracelets, and earrings.",

  openGraph: {
    ...baseMetadata.openGraph,
    title: "AuroraAtelier — Fine Jewelry Handcrafted in NYC",
    description:
      "Discover AuroraAtelier fine jewelry. Handcrafted in New York using 14k and 18k gold. Timeless rings, necklaces, bracelets, and earrings.",
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
    ...baseMetadata.twitter,
    title: "AuroraAtelier — Fine Jewelry NYC",
    description:
      "Fine jewelry handcrafted in New York. 14k & 18k gold rings, necklaces, bracelets, and earrings.",
    images: [`${BASE_URL}/logo.svg`],
  },

  alternates: {
    canonical: BASE_URL,
  },
};
