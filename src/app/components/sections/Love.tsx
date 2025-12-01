import Image from "next/image";
import Marquee from "react-fast-marquee";

import { PRODUCT_CARD_SIZES } from "@/constants/constants";

import { CustomLink } from "../ui/CustomLink";

export const Love = () => {
  return (
    <section className="w-full">
      <Marquee>
        <div className="flex items-center gap-15 py-1 md:gap-85">
          <p>Check Out Our Blog</p>
          <p>Check Out Our Blog</p>
          <p>Check Out Our Blog</p>
          <p>Check Out Our Blog</p>
          <p className="mr-15 md:mr-65">Check Out Our Blog</p>
        </div>
      </Marquee>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full min-h-[400px] w-full">
          <Image
            src="/pages/home/sections/love/love.webp"
            alt="Love"
            fill
            sizes={PRODUCT_CARD_SIZES}
            className="object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center bg-[#CFE1E6]">
          <div className="container flex max-w-[650px] flex-col items-center gap-10 py-10 text-center">
            <div className="flex flex-col gap-5">
              <p className="text-sm">The Heart of It</p>
              <h2 className="text-5xl font-semibold">Love in All Ways</h2>
            </div>
            <div className="flex flex-col items-center gap-5">
              <p>
                We embrace love in all forms, and our jewelry is made to celebrate any milestone. We
                strive for inclusivity at every step, from a non-gendered design ethos and
                comprehensive sizing to our founding belief in marriage equality and the right to
                love who you choose. In an industry that perpetuates heteronormative ideals, we
                eliminate presumptions and create jewelry that celebrates every experience and
                identity.
              </p>
              <CustomLink className="w-fit" href="/" text="Learn more" />
            </div>
          </div>
        </div>
      </div>
      <Marquee direction="right">
        <div className="flex items-center gap-15 py-1 md:gap-85">
          <p>Check Out Our Blog</p>
          <p>Check Out Our Blog</p>
          <p>Check Out Our Blog</p>
          <p>Check Out Our Blog</p>
          <p className="mr-15 md:mr-65">Check Out Our Blog</p>
        </div>
      </Marquee>
    </section>
  );
};
