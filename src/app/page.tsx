import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { About } from "./components/sections/About";
import { Consciously } from "./components/sections/Consciously";
import { Design } from "./components/sections/Design";
import { Hero } from "./components/sections/Hero";
import { Latest } from "./components/sections/Latest";
import { Love } from "./components/sections/Love";
import { Sustainability } from "./components/sections/Sustainability";
import { Wedding } from "./components/sections/Wedding";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Wedding />
      <Sustainability />
      <About />
      <Consciously />
      <Design />
      <Love />
      <Latest />
      <Footer />
    </>
  );
}
