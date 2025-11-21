import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import { siteMetadata } from "./meta/site-metadata";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-roboto",
});

export const metadata: Metadata = siteMetadata;

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Aurora Atelier" />
      <body className={`${roboto.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
