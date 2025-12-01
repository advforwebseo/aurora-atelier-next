import Image from "next/image";

import { PRODUCT_CARD_SIZES } from "@/constants/constants";

import { CustomLink } from "../ui/CustomLink";

export const Design = () => {
  return (
    <section className="w-full bg-[#98B7A4] py-12">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-28">
        <div className="flex w-full flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm">Tradition in the Making</p>
            <h2 className="text-5xl font-semibold">Custom Design</h2>
          </div>
          <p className="leading-6">
            Whether you want to create a future heirloom that can be passed down or re-envision a
            current heirloom while maintaining its sentiment, our Custom process brings meaningful
            designs to life.
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row">
            <CustomLink className="w-full max-w-[200px] md:w-fit" href="/" text="Get Inspired" />
            <CustomLink className="w-full max-w-[200px] md:w-fit" href="/" text="Get an Estimate" />
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <Image
            src="/pages/home/sections/design/design.webp"
            alt="Design"
            fill
            sizes={PRODUCT_CARD_SIZES}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
