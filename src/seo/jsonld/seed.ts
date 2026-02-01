import { BASE_URL } from "@/lib/config";

export const jsonLdSeed = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}#organization`,
  name: "Aurora Atelier",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  sameAs: ["https://instagram.com/auroraatelier"],
};
