import { BASE_URL } from "@/lib/config";

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "@id": `${BASE_URL}#jewelrystore`,
  name: "Aurora Atelier",
  image: [`${BASE_URL}/logo.svg`],
  url: BASE_URL,
  telephone: "+1 000 000 000",
  priceRange: "$$$",

  address: {
    "@type": "PostalAddress",
    streetAddress: "streetAddress",
    addressLocality: "addressLocality",
    addressCountry: "addressCountry",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.0105,
    longitude: 28.8638,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "17:00",
    },
  ],
};
