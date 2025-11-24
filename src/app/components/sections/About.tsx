import Image from "next/image";

export const About = () => {
  return (
    <section className="w-full bg-[#E5DFD3] py-12">
      <div className="container flex flex-col gap-15 md:gap-20">
        <p className="text-center">About Us</p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Image
            src="/pages/home/sections/about/about_result.webp"
            alt="About"
            width={64}
            height={64}
            className="mx-auto"
          />
          <Image
            src="/pages/home/sections/about/about_result.webp"
            alt="About"
            width={64}
            height={64}
            className="mx-auto"
          />
        </div>
        <p className="mx-auto max-w-[950px] text-center text-2xl sm:text-5xl">
          Each Bario Neal piece is crafted with ethically sourced precious metals to reflect our
          commitment to human rights and environmental sustainability.
        </p>
      </div>
    </section>
  );
};
