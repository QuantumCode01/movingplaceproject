import React from 'react'
import Image from "next/image";
export default function Advantage() {
  return (
    <div>
           <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16 items-start">
                    <div className=" w-full sm:w-[55%] px-4 py-5 max-w-3xl mx-auto">

                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                            The MovingPlace <br />
                            Advantage
                        </h2>


                        <p className="text-gray-600 text-base mb-6">
                            At MovingPlace, we’ve reimagined the way people move—combining technology,
                            trusted professionals, and a customer-first approach to deliver a seamless
                            experience from start to finish.
                        </p>

                        <div className="space-y-5 text-gray-600">
                            <div className="flex items-start gap-3">
                            <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <p>
                                Our advanced <strong>platform provides personalized move plans</strong>
                                and access to the most competitive rates in your area—backed by our
                                <strong>Best Price Guarantee</strong>.
                            </p>
                            </div>
                            <div className="flex items-start gap-3">
                            <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <p>
                                We partner exclusively with
                                <strong>top-rated moving companies</strong> that are
                                <strong>fully licensed, insured</strong>, and committed to handling
                                your belongings with expertise and care.
                            </p>
                            </div>
                            <div className="flex items-start gap-3">
                           <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <p>
                                Every move is covered by our
                                <strong>$1,000 Service Guarantee</strong> and supported by a dedicated
                                team available <strong>7 days a week</strong>—online or by phone.
                            </p>
                            </div>
                        </div>


                        <p className="mt-6 text-gray-600">
                            No matter what you need, we have you covered. Labor, Packing, Trucks,
                            Long-Distance. We have it all.
                        </p>


                        <div className="mt-8">
                            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md transition">
                            Get a Moving Quote
                           <img src="../assets/blackarrow.svg" alt="arrow" className='w-[24px] h-[24px]' />
                            </button>
                        </div>


                        <div className="mt-4">
                            <a
                            href="#"
                            className="text-blue-600 hover:underline font-semibold text-sm flex items-center gap-1"
                            >
                            Need Help? Contact Support
                           <img src="../assets/blue-arrow.svg" alt="arrow-icon" className="w-[10.5px] h-[10.5px]"/>
                            </a>
                        </div>
                    </div>

                    <div className='w-full sm:w-[45%] order-2 sm:order-1 flex items-start'>
                         <img src="/assets/Advantageimage.png" alt="Stock photo" className="w-[90%] h-auto object-cover rounded-lg"  /> 
                    </div>
                                
                    
                </div>
            </div>
    </div>
  )
}
