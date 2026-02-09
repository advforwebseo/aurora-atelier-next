import "./globals.css";

import { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { jsonLdSeed } from "@/seo/jsonld/seed";
import { baseMetadata } from "@/seo/seed";

import ClientProviders from "./providers/ClientProviders";

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
        <ClientProviders>
          <main className="min-h-screen">{children}</main>
        </ClientProviders>

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
