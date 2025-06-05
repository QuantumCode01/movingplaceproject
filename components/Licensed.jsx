import React from 'react'
import Image from "next/image";
export default function Licensed() {
  return (
    <div>
           <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-16 px-[16px] lg:px-[0px] md:px-[32px] pb-[64px]">
                    <div className=" w-full lg:w-[55%] max-w-3xl mx-auto order-2 lg:order-1">

                        <h2 className="text-[#2E343E] text-[36px] sm:text-[48px] font-extrabold  mb-[40px] leading-tight">
                           Licensed and Vetted  <br />
                          Moving Partners
                        </h2>


                        <p className="text-[#2E343E] text-[16px] mb-6">
                            MovingPlace works exclusively with licensed and insured movers who meet our high standards for quality and reliability, each undergoing a full background check. You can move with confidence, knowing your belongings are in trusted hands.
                        </p>

                        <div className="space-y-5 text-[#2E343E]">
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
                               <p className='text-[#2E343E]'>
                                    Each provider is thoroughly background-checked and tested for quality, ensuring you receive reliable service from trusted professionals.
                               </p>
                            </div>
  
                            </div>
                            
                        </div>


                       
                        <div className="mt-[32px] ml-[20px]">
                            <a
                            href="#"
                            className="text-blue-600 hover:underline font-semibold text-sm flex items-center gap-1"
                            >
                            Need Help? Contact Support
                           <img src="../assets/blue-arrow.svg" alt="arrow-icon" className="w-[10.5px] h-[10.5px]"/>
                            </a>
                        </div>
                        </div>

                    <div className='w-full lg:w-[45%] order-1 sm:order-1'>
                         <img src="/assets/licensedimage.png" alt="Stock photo" className="w-full h-auto object-cover rounded-lg"  /> 
                    </div>
                                
                    
                </div>
            </div>
    </div>
  )
}
