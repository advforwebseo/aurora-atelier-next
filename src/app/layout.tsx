import "./globals.css";

import { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { jsonLdSeed } from "@/lib/seo/jsonld/seed";
import { baseMetadata } from "@/lib/seo/seed";

export const metadata: Metadata = baseMetadata;

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-roboto",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>

        <Toaster />

        <script
          id="jsonld-seed"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSeed) }}
        />
      </body>
    </html>
  );
}
