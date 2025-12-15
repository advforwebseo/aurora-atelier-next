import { About } from "@/components/site/sections/About";
import { Consciously } from "@/components/site/sections/Consciously";
import { Design } from "@/components/site/sections/Design";
import { Hero } from "@/components/site/sections/Hero";
import { Latest } from "@/components/site/sections/Latest";
import { Love } from "@/components/site/sections/Love";
import { Sustainability } from "@/components/site/sections/Sustainability";
import { Wedding } from "@/components/site/sections/Wedding";
import { homeJsonLd } from "@/lib/seo/jsonld/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Wedding />
      <Sustainability />
      <About />
      <Consciously />
      <Design />
      <Love />
      <Latest />

      <script
        id="jsonld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />
    </>
  );
}
