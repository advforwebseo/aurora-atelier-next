import { Metadata } from "next";

import { Footer } from "@/app/(site)/ui/footer/Footer";
import { Header } from "@/app/(site)/ui/header/Header";
import { homePageSeo } from "@/seo/home";

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
