// components/CarouselArrows.jsx
import React from "react";

export function PrevArrow({ onClick }) {
  return (
    <button
      className="text-2xl font-bold px-2 py-1 bg-white hover:bg-gray-200"
      onClick={onClick}
      aria-label="Previous"
    >
      <img src="/assets/Previous.svg" alt="previous" className="w-[10px] h-[20px]" />
    </button>
  );
}

export function NextArrow({ onClick }) {
  return (
    <button
      className="text-2xl font-bold px-2 py-1 bg-white hover:bg-gray-200"
      onClick={onClick}
      aria-label="Next"
    >
    <img src="/assets/Next.svg" alt="previous" className="w-[10px] h-[20px]" />
    </button>
  );
}
