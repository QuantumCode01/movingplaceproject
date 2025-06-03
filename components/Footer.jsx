import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-white border-t border-gray-200 py-6 text-gray-600 text-sm font-mulish my-[64px]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
 
      <div class="flex items-center gap-2">
        <img src="../assets/Logo.png" alt="Logo" class="w-[220px] h-[30px]" />
       
      </div>

    
      <a href="#" class="bg-yellow-400 text-[#2E343E] font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
        Get a Moving Quote
      </a>
    </div>


    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 text-[#2E343E] font-medium">
      <div>Contact us: <a href="tel:8666059518" class="font-semibold">866-605-9518</a></div>
      <div class="flex flex-wrap justify-center sm:justify-start gap-4">
        <a href="#" class="hover:underline">Customer Log in</a>
        <a href="#" class="hover:underline">Provider Log in</a>
        <a href="#" class="hover:underline">License & Insurance</a>
        <a href="#" class="hover:underline">Cancellation Policy</a>
        <a href="#" class="hover:underline">Service Guarantee</a>
        <a href="#" class="hover:underline">Do not sell my info</a>
      </div>
    </div>

 
    <hr class="border-gray-200 mb-4" />

    <div class="flex flex-col sm:flex-row sm:justify-between text-xs text-[#2E343E] gap-2">
      <p>Copyright 2024 MovingPlace LLC. All Rights Reserved.</p>
      <p>License #MC807665. 2200 1st Ave S, Seattle, WA 98134</p>
      <div class="flex gap-4 text-blue-600">
        <a href="#" class="hover:underline">Terms</a>
        <a href="#" class="hover:underline">Privacy</a>
        <a href="#" class="hover:underline">Sitemap</a>
      </div>
    </div>
  </div>
</footer>

  )
}
