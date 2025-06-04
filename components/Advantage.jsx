import React from 'react'
import Image from "next/image";
export default function Advantage() {
  return (
    <div>
           <div className="hero  min-h-screen sm:py-[64px] py-[32px] lg:px-[64px] px-[16px] md:px-[32px]">
                <div className="hero-content flex-col lg:flex-row-reverse gap-[64px] items-start px-0">
                    <div className=" w-full lg:w-[55%]  max-w-3xl mx-auto order-2 lg:order-1 ">

                        <h2 className="text-[#2E343E] text-[36px] sm:text-[48px] font-extrabold  mb-[40px] leading-tight ">
                            The MovingPlace <br />
                            Advantage
                        </h2>


                        <p className="text-[#2E343E] text-[16px] mb-6">
                            At MovingPlace, we’ve reimagined the way people move—combining technology,
                            trusted professionals, and a customer-first approach to deliver a seamless
                            experience from start to finish.
                        </p>

                        <div className="space-y-5 text-[#2E343E]">
                            <div className="flex items-start gap-3">
                            <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <p>
                                Our advanced <strong>platform provides personalized move plans</strong>
                                and access to the most competitive rates in your area—backed by our
                                <strong>Best Price Guarantee</strong>.
                            </p>
                            </div>
                            <div className="flex items-start gap-3 text-[#2E343E]">
                            <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <p>
                                We partner exclusively with
                                <strong>top-rated moving companies</strong> that are
                                <strong>fully licensed, insured</strong>, and committed to handling
                                your belongings with expertise and care.
                            </p>
                            </div>
                            <div className="flex items-start gap-3 text-[#2E343E]">
                           <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <p>
                                Every move is covered by our
                                <strong>$1,000 Service Guarantee</strong> and supported by a dedicated
                                team available <strong>7 days a week</strong>—online or by phone.
                            </p>
                            </div>
                        </div>


                        <p className="mt-6 text-[#2E343E]">
                            No matter what you need, we have you covered. Labor, Packing, Trucks,
                            Long-Distance. We have it all.
                        </p>


                        <div className="mt-4">
                            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#2E343E] font-semibold px-6 py-3 rounded-full shadow-md transition">
                            Get a Moving Quote
                           <img src="../assets/blackarrow.svg" alt="arrow" className='w-[24px] h-[24px]' />
                            </button>
                        </div>


                        <div className="mt-[32px]">
                            <a
                            href="#"
                            className="text-blue-600 hover:underline font-semibold text-sm flex items-center gap-1"
                            >
                            Need Help? Contact Support
                           <img src="../assets/blue-arrow.svg" alt="arrow-icon" className="w-[10.5px] h-[10.5px]"/>
                            </a>
                        </div>
                    </div>

                    <div className='w-full lg:w-[45%] order-1  flex lg:items-start justify-end'>
                         <img src="/assets/Advantageimage.png" alt="Stock photo" className="lg:w-[90%]  sm:w-[60%] w-full h-auto object-cover rounded-lg"  /> 
                    </div>
                                
                    
                </div>
            </div>
    </div>
  )
}
