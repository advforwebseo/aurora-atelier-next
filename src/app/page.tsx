import { Header } from "./components/header/Header";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
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
    </>
  );
}
