import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-gray-600 text-sm font-mulish my-[64px]">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
    
        <div className="flex flex-col md:flex-row  justify-between gap-4 mb-6">
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

      
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 text-[#2E343E] font-medium">
          <div>
            Contact us:{' '}
            <a href="tel:8666059518" className="font-semibold">
              866-605-9518
            </a>
          </div>

        
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-2 sm:gap-4  sm:text-left">
            <a href="#" className="hover:underline">
              Customer Log in
            </a>
            <a href="#" className="hover:underline">
              Provider Log in
            </a>
            <a href="#" className="hover:underline">
              License & Insurance
            </a>
            <a href="#" className="hover:underline">
              Cancellation Policy
            </a>
            <a href="#" className="hover:underline">
              Service Guarantee
            </a>
            <a href="#" className="hover:underline">
              Do not sell my info
            </a>
          </div>
        </div>

        <hr className="border-gray-200 mb-4" />

      
        <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-[#2E343E] gap-2">
          <p>Copyright 2024 MovingPlace LLC. All Rights Reserved.</p>
          <p>License #MC807665. 2200 1st Ave S, Seattle, WA 98134</p>
          <div className="flex gap-4 text-blue-600">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
