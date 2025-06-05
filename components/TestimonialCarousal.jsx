"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { PrevArrow, NextArrow } from "./CarouselArrows";
export default function TestimonialCarousal({ testimonials }) {
    const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 1,
    arrows: false,
    autoplay:true,
   appendDots: (dots) => (
      <div className="flex items-center justify-center space-x-4 mt-6">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <ul className="flex items-center space-x-2">{dots}</ul>
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden bg-[#F8F8F8] rounded-[32px]">
    <div className="max-w-5xl mx-auto py-[64px] px-4 text-center  ">
      <h2 className="text-[36px] sm:text-[48px] font-extrabold  text-[#2E343E] mb-[20px]">Customers Trust MovingPlace</h2>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="rounded-3xl bg-white">
            <div className="bg-white   p-8 max-w-xl mx-auto lg:h-[350px] h-[500px] flex flex-col justify-center gap-[32px] rounded-3xl">
              <div className="flex justify-start">
                {Array(t.stars).fill().map((_, i) => (
                  <Image
                    key={i}
                    src="/assets/star.svg"
                    width={50}
                    height={50}
                    alt="star"
                  />
                ))}
              </div>
              <p className="text-[#3B3C3E] text-[24px]  leading-relaxed mb-4 text-left">"{t.text}"</p>
              <div>
                  <p className="font-semibold text-[20px] text-left">— {t.name}</p>
              <p className="text-sm text-[#8696AA] text-left  text-[20px]">
                in {t.city}, on {t.date}
              </p>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}
