"use client";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PRODUCT_CARD_SIZES } from "@/constants/constants";

import { latestSection } from "./mocks/mocks";

export const Latest = () => {
  return (
    <section>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="latestSectionSwiper"
        spaceBetween={0}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1800: { slidesPerView: 8 },
        }}
      >
        {latestSection.map(product => (
          <SwiperSlide key={product.id}>
            <div className="relative h-[550px] w-full sm:h-[300px]">
              <Image
                src={product.image}
                alt="Latest"
                fill
                sizes={PRODUCT_CARD_SIZES}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
