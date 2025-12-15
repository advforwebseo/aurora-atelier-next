import Image from "next/image";
import Link from "next/link";

import { CustomLink } from "../../shared/CustomLink";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/pages/home/sections/hero/woman-with-gold-jewelery.webp"
        fill
        className="object-cover"
        alt="Hero"
        priority
      />
      <Link
        href="/#"
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-[#F0C1A6] px-3 py-5 text-white uppercase"
      >
        ★
        <span className="flex flex-col items-center">
          {Array.from("REVIEWS").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </span>
      </Link>
      <div className="absolute inset-0 container flex flex-col justify-end">
        <div className="grid grid-cols-1 justify-between gap-15 pb-20 pl-10 md:grid-cols-2 md:pl-15">
          <div className="flex flex-col items-center gap-2 md:mr-auto">
            <p className="max-w-[220px] text-center text-3xl leading-10 font-semibold">
              We Find Always in All Ways
            </p>
            <p className="mb-4 max-w-[205px] text-center leading-6 font-semibold">
              Our design ethos is gender-neutral and size-inclusive.
            </p>
            <CustomLink className="w-fit" href="/#" text="Shop Rings" />
          </div>
          <div className="flex flex-col items-center gap-2 md:ml-auto">
            <p className="max-w-[220px] text-center text-3xl leading-10 font-semibold">
              Solutions for All Occasions
            </p>
            <p className="mb-4 max-w-[205px] text-center leading-6 font-semibold">
              Find the perfect engagement ring.
            </p>
            <CustomLink className="w-fit" href="/#" text="Book Appointment" />
          </div>
        </div>
      </div>
    </section>
  );
};
