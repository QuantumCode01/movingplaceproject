import React from 'react'
import Image from "next/image";
export default function Hero() {
  return (
    <div className='sm:py-[64px] py-[32px] relative'>
           <div className="hero  min-h-screen max-w-[1400px] mx-auto lg:px-[64px] px-[16px] md:px-[32px]">
                <div className="hero-content flex-col lg:flex-row w-full px-0 py-0 items-start ">
                  <div className='w-[103%] lg:w-[57%] order-2 sm:order-1   py-6 lg:py-[0px]'>
                   <img
                    src="/assets/HeroImage.png"
                    alt="Stock photo"
                   
                    className=" w-full xl:w-[42%] lg:w-[46%] h-auto object-cover rounded-lg lg:absolute right-[0px]
"
                    /> 
                  </div>
                  <div className="w-full  lg:w-[57%] px-0 py-0  ">     
                    <div className='order-1 sm:order-2'>
                         <h2 className="font-extrabold text-[36px] xl:text-[64px] md:text-[48px] leading-[38px]  md:leading-[48px] xl:leading-[75px] text-[#2E343E] mb-6">
                           The Modern Way <br/>to Move, Stress-Free
                        </h2>


                        <p className="font-mulish font-normal text-[16px] md:text-[22px] leading-[150%] text-[#2E343E] mb-6">
                           Access trusted providers, smart tools, and guaranteed pricing—all designed to simplify your move from start to finish.
                        </p>

                        
                           <div class="max-w-[864px] mx-auto bg-white rounded-2xl  p-6 px-0 space-y-5">
                                <div class="relative">
                                  <input type="text" placeholder="Enter Loading Address (123 Main St, City, State)"
                                    class="w-full border  border-[#D1D1DB] rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                  <div class="absolute inset-y-0 left-3 flex items-center text-yellow-600">
                                    <img src="../assets/grey-location.svg" alt="location" className='w-[24px] h-[24px]'/>
                                  </div>
                                </div>
                              <div class="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1">
                                    <img src="../assets/grey-location.svg" alt="location" className='w-[24px] h-[24px]'/>
                                  <input type="text" placeholder="Enter Unloading Address (123 Main St, City, State)"
                                    class="flex-1 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                                </div>





                              <div class="relative">
                                <input
                                  type="date"
                                  placeholder="Select a date for your move"
                                  class="w-full appearance-none border border-[#D1D1DB] rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                  id="customDateInput"
                                />
                                <div
                                  class="absolute inset-y-0 left-3 flex items-center text-yellow-600 cursor-pointer"
                                  onclick="document.getElementById('customDateInput').showPicker()"
                                >
                                  <img src="../assets/greycalendar.png" alt="calendar" class="w-[24px] h-[24px]" />
                                </div>
                              </div>


                              </div>

                       

                        <div>
                            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#2E343E] font-semibold px-6 py-3 rounded-full  hover:shadow-md transition text-[18px]">
                           Start a Moving Quote
                          <img src="../assets/blackarrow.svg" alt="arrow" className='w-[24px] h-[24px]' />
                            </button>
                        </div>


                      
                    </div>
                  </div>
                </div>
            </div>
    </div>
  )
}
