import React from 'react'
import Image from "next/image";
export default function Licensed() {
  return (
    <div>
           <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <div className=" w-full sm:w-[55%] px-4 py-10 max-w-3xl mx-auto">

                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                           Licensed and Vetted  <br />
                          Moving Partners
                        </h2>


                        <p className="text-gray-600 text-base mb-6">
                            MovingPlace works exclusively with licensed and insured movers who meet our high standards for quality and reliability, each undergoing a full background check. You can move with confidence, knowing your belongings are in trusted hands.
                        </p>

                        <div className="space-y-5 text-gray-600">
                            <div className="flex items-start gap-3">
                            <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <div>
                                <strong className='text-[#E0B138]'>Licensed & Insured</strong>
                                <p>
                                    Our movers are fully licensed and insured, meeting rigorous standards to protect your belongings every step of the way.
                                </p>
                            </div>
                            
                            </div>
                            <div className="flex items-start gap-3">
                            <img src="../assets/arrow-right-circle-fill.svg" alt="arrow-icon" className="w-[24px] h-[24px]"/>
                            <div>
                                <strong className='text-[#E0B138]'>Checked and Tested!</strong>
                               <p>
                                    Each provider is thoroughly background-checked and tested for quality, ensuring you receive reliable service from trusted professionals.
                               </p>
                            </div>
  
                            </div>
                            
                        </div>


                        <p className="mt-6 text-gray-600">
                            No matter what you need, we have you covered. Labor, Packing, Trucks,
                            Long-Distance. We have it all.
                        </p>

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

                    <div className='w-full sm:w-[45%] order-2 sm:order-1'>
                         <img src="/assets/licensedimage.png" alt="Stock photo" className="w-full h-auto object-cover rounded-lg"  /> 
                    </div>
                                
                    
                </div>
            </div>
    </div>
  )
}
