import { About } from "@/app/(site)/ui/sections/About";
import { Consciously } from "@/app/(site)/ui/sections/Consciously";
import { Design } from "@/app/(site)/ui/sections/Design";
import { Hero } from "@/app/(site)/ui/sections/Hero";
import { Latest } from "@/app/(site)/ui/sections/Latest";
import { Love } from "@/app/(site)/ui/sections/Love";
import { Sustainability } from "@/app/(site)/ui/sections/Sustainability";
import { Wedding } from "@/app/(site)/ui/sections/Wedding";
import { homeJsonLd } from "@/seo/jsonld/home";

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
