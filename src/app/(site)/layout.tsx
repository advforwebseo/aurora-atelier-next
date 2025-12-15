import { Metadata } from "next";

import { Footer } from "@/components/site/footer/Footer";
import { Header } from "@/components/site/header/Header";
import { homePageSeo } from "@/lib/seo/home";

export const metadata: Metadata = homePageSeo;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
