import Image from "next/image";
import Marquee from "react-fast-marquee";

import { CustomLink } from "../../shared/CustomLink";

export const Sustainability = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-142.5 w-full">
          <Image
            src="/pages/home/sections/sustainability/sustainability.webp"
            alt="Sustainability"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between gap-15 bg-[#98B7A4] px-4 py-15 md:px-15">
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm">Sustainability</p>
            <p className="text-center text-5xl font-semibold">An Ethical Approach</p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <p className="max-w-112.5 text-center">
              Making jewelry requires responsibility to the earth that creates our materials and
              respect for the people who inhabit it. From day one, we committed to creating designs
              of ethical origins from mine to market. Today, we’re a proud leader in sustainable
              sourcing and mindful production.
            </p>
            <CustomLink href="/" text="Learn more" />
          </div>
        </div>
      </div>
      <Marquee>
        <div className="flex items-center gap-15 md:gap-85">
          <p>Traceable Gems</p>
          <p>Reclaimed Metals</p>
          <p>Fairmined Gold</p>
          <p>Love in All Ways</p>
          <p className="mr-15 md:mr-65">Small Footprint</p>
        </div>
      </Marquee>
    </section>
  );
};
