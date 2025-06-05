import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white  max-w-[1400px] mx-auto border-t border-gray-200  text-gray-600 text-sm font-mulish my-[64px] sm:pt-[64px] pt-[48px]">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
 
        <div className="flex flex-col md:flex-row  justify-between gap-[32px]   mb-[64px]">
          <div className="flex items-center gap-2">
            <img src="../assets/Logo.png" alt="Logo" className="w-[195px] h-[35px]" />
          </div>
          <a
            href="#"
            className="bg-yellow-400 text-[#2E343E] font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition w-fit"
          >
            Get a Moving Quote
          </a>
        </div>

     
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  items-start gap-[32px] mb-6  text-[#2E343E] font-normal text-[16px]">
          <div>
            Contact us:{' '}
            <a href="tel:8666059518" className="font-normal">
              866-605-9518
            </a>
          </div>

          {/* Stack vertically on mobile */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center sm:justify-start gap-[32px] sm:gap-4  sm:text-left text-[#5B5E5F] text-[16px]">
            <a href="#" className="hover:underline font-bold font-mulish">
              Customer Log in
            </a>
            <a href="#" className="hover:underline font-bold font-mulish">
              Provider Log in
            </a>
            <a href="#" className="hover:underline font-bold font-mulish">
              License & Insurance
            </a>
            <a href="#" className="hover:underline font-bold font-mulish">
              Cancellation Policy
            </a>
            <a href="#" className="hover:underline font-bold font-mulish">
              Service Guarantee
            </a>
            <a href="#" className="hover:underline font-bold font-mulish">
              Do not sell my info
            </a>
          </div>
        </div>

     
        <hr className="border-gray-200 mb-4" />

   
        <div className="flex flex-col lg:flex-row sm:justify-between text-[14px] text-[#84878A] gap-[16px] h-[29px]">
          <p className='mr-auto'>Copyright 2024 MovingPlace LLC. All Rights Reserved.</p>
          <p>License #MC807665. 2200 1st Ave S, Seattle, WA 98134</p>
          <div className="flex gap-4 text-blue-600 lg:mt-[0px] mt-[10px]">
             <span className='text-[#CFD1D2] w-px h-5  inline-block'>|</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
             <span className='text-[#CFD1D2]'>|</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
             <span className='text-[#CFD1D2]'>|</span>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
