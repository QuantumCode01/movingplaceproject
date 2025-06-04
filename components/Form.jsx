import React from 'react'

export default function Form() {
  return (
    <div class="max-w-[864px] mx-auto bg-white rounded-2xl sm:shadow-lg p-6 space-y-4">
  <h2 class="text-[30px] leading-[38px] font-bold text-center text-[#2E343E] font-[Mulish] align-middle">
  Enter your location(s)
</h2>



  <div class="relative">
    <input type="text" placeholder="2 Olive Walk, Pasadena, CA 91125"
      class="w-full border border-yellow-500 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
    <div class="absolute inset-y-0 left-3 flex items-center text-yellow-600">
      <img src="../assets/location.svg" alt="location" className='w-[24px] h-[24px]'/>
    </div>
  </div>



<div class="space-y-2 border border-gray-300 rounded-md p-4">
  <div class="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-2">
      <img src="../assets/grey-location.svg" alt="location" className='w-[24px] h-[24px]'/>
    <input type="text" placeholder="Enter Unloading Address (123 Main St, City, State)"
      class="flex-1 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
  </div>

  <input type="text" placeholder="Street Address Line 2 (apt #/suite)"
    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />

  <input type="text" placeholder="City"
    class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />

  <div class="flex space-x-2">
    <select
      class="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
      <option>State</option>
   
    </select>
    <input type="text" placeholder="ZIP"
      class="w-1/2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
  </div>
</div>


<div class="relative">
  <input
    type="date"
    placeholder="12/12/2025"
    class="w-full appearance-none border border-yellow-500 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    id="customDateInput"
  />
  <div
    class="absolute inset-y-0 left-3 flex items-center text-yellow-600 cursor-pointer"
    onclick="document.getElementById('customDateInput').showPicker()"
  >
    <img src="../assets/calender.svg" alt="calendar" class="w-[24px] h-[24px]" />
  </div>
</div>


  <select
    class="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400">
    <option>Do you have any flights of stairs?</option>
    <option>None</option>
    <option>1 Flight</option>
    <option>2+ Flights</option>
  </select>

 
  <div class="flex justify-between items-center text-sm text-[#8696AA]">
    <button class="flex items-center space-x-1 hover:underline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15.232 5.232l3.536 3.536M9 13h3l9-9a2.121 2.121 0 10-3-3l-9 9v3z" />
      </svg>
      <span className='sm:block hidden'>Enter Addresses Manually</span>
      <span className='sm:hidden block'>Enter Manually</span>
    </button>

<button
  class="border border-gray-300 px-[4px] py-[4px] rounded-full text-[#526077] hover:bg-gray-100 transition text-[13px] flex items-center space-x-1">
  <span>+ Add Location</span>
</button>


  </div>

 
<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">

  <label class="order-1 sm:order-none flex items-center space-x-2 text-sm text-gray-600">
    <input type="checkbox" class="form-checkbox text-yellow-500" />
    <span>Include <strong>Packing</strong> in my quote</span>
  </label>

  
  <button
  class="order-2 sm:order-none bg-yellow-400 text-gray-900 font-semibold py-3 px-5 rounded-full flex items-center justify-center space-x-2 hover:bg-yellow-500 transition text-center">
  <span>Start a Moving Quote</span>
  <img src="../assets/blackarrow.svg" alt="arrow" class="w-[24px] h-[24px]" />
</button>


</div>



</div>


  )
}
