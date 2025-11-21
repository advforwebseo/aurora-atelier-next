import Image from "next/image";

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
      <div className="absolute inset-0 container flex flex-col justify-end">
        <div className="grid grid-cols-1 justify-between gap-10 py-20 md:grid-cols-2 md:px-15">
          <div>
            <p>We Find Always in All Ways</p>
            <p>Our design ethos is gender-neutral and size-inclusive.</p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
