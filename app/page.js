"use client"; 
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Advantage from "@/components/Advantage";
import Card from "@/components/Card";
import cardData from "@/data/carddata";
import smallcarddata from "@/data/smallcarddata";
import Smallcard from "@/components/Smallcard";
import servicescardData from "@/data/servicescarddata";
import facilitiesdata from "@/data/facilitiesdata";
import Licensed from "@/components/Licensed";
import Faqsection from "@/components/Faqsection";
import Form from "@/components/Form";
import Image from "next/image";
import Footer from "@/components/Footer";
import TestimonialCarousal from "@/components/TestimonialCarousal";
import testimonials from "@/data/testimonialdata";
import { useState, useEffect } from 'react';

export default function Home() {
   const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const getImageByWidth = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        return '/assets/Frame2.png'; // md and above
      } else if (width >= 576) {
        return '/assets/black-mobile-tab.png'; // sm to md
      } else {
        return '/assets/black-mobile.png'; // below sm
      }
    };

    // Set image initially
    setImageSrc(getImageByWidth());

    // Optional: Update on window resize
    const handleResize = () => setImageSrc(getImageByWidth());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!imageSrc) return null; // or loading skeleton

  return (
    <main>
        <Navbar/>
        <Hero/>

        <div className="flex flex-col justify-center sm:pt-[64px] pt-[32px] sm:pb-[40px]  px-[16px] lg:px-[0px] md:px-[32px]">
            <h2 className="text-[#2E343E] text-[30px] leading-[38px] font-bold font-mulish text-center w-[361px] sm:text-[36px] sm:leading-[100%]  sm:w-auto sm:max-w-[1072px] mx-auto ">
              Personalized Moving, Made Simple
            </h2>
            <p className="font-mulish font-normal text-[16px] leading-[150%] tracking-[0] text-center   max-w-[930px] mx-auto my-[24px] text-[#2E343E]">Skip the hassle of phone calls—our Smart Match Technology instantly connects you with the right movers for your needs. Whether you’re moving locally or long distance, MovingPlace offers a range of services to fit your unique move.</p>

        </div>
        <div className="flex flex-col md:flex-row gap-[24px] justify-center items-center  sm:pb-[40px] pb-[32px] max-w-[1400px] mx-auto lg:px-[64px] px-[16px] md:px-[32px]">
              {cardData.map((card, index) => (
                <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                image={card.image}
                buttonText={card.buttonText}
                bgColor={card.bgColor}
                titleColor={card.titleColor}
                subtitleColor={card.subtitleColor}
                descriptionColor={card.descriptionColor}
                iconImage={card.iconImage}
                />
                
              ))}
        </div>
        <p className=" mb-4 text-center sm:pb-[40px] pb-[32px]">Packing Help is also available for all our products. <a href="#" className="text-[#2B73DE]">Learn more.</a></p>
        <Advantage/>
      
        <div className="shadow-[0px_10px_18px_0px_rgba(18,18,23,0.10)] bg-white rounded-[24px] sm:py-[24px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px] px-[16px] max-w-[1272px] lg:mx-auto mb-[64px]">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] justify-center items-center ">
              {smallcarddata.map((card, index) => (
                <Smallcard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                 titleSize={card.titleSize}
                />  
              ))}
            </div>
        </div>


         <div className="flex flex-col justify-center sm:pt-[0px] pt-[32px] sm:pb-[40px]  px-[16px] lg:px-[0px] md:px-[32px]">
            <h2 class="text-[#2E343E] text-[30px] leading-[38px] font-bold font-mulish text-center w-[361px] sm:text-[36px] sm:leading-[100%]  sm:w-auto sm:max-w-[1072px] mx-auto">
  Move Confidently with All-Inclusive Services
</h2>

            <p className="font-mulish font-normal text-[16px] leading-[150%] tracking-[0] text-center   max-w-[930px] mx-auto my-[24px] text-[#2E343E]">Everything you need for a smooth, stress-free move is included—no hidden fees, no surprises.</p>

        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-center items-center sm:py-[0px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px] max-w-[1400px] lg:mx-auto mb-[0px]">
        {servicescardData.map((card, index) => {
          const isLastInThree = index === 1;
        const isMobileSpecial = index === 1;

      let orderClass = isMobileSpecial ? 'order-3 lg:order-none' : '';
      let colSpanClass = isMobileSpecial ? 'md:col-span-2 lg:col-span-1' : '';

          return (
            <div
              key={index}
              className={`
              w-full
            ${orderClass}
            ${colSpanClass}
              `}
            >
        <Card
          title={card.title}
          description={card.description}
          image={card.image}
          buttonText={card.buttonText}
          bgColor={card.bgColor}
          titleColor={card.titleColor}
          descriptionColor={card.descriptionColor}
        />
      </div>
    );
  })}
</div>




         <div className="shadow-[0px_10px_18px_0px_rgba(18,18,23,0.10)] bg-white rounded-[24px] sm:py-[24px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px] lg:mx-[64px] xl:mx-auto max-w-[1144px] my-[64px] p-[24px]  ">
           <div className="grid grid-cols-1 sm:grid-cols-1 md:[grid-template-columns:repeat(3,1fr)] lg:[grid-template-columns:repeat(5,1fr)] gap-6 justify-center items-center">
              {facilitiesdata.map((card, index) => (
                <Smallcard
                key={index}
                title={card.title}
                // description={card.description}
                image={card.image}
                 titleSize={card.titleSize}
                />  
              ))}
            </div>
        </div>
        

        <Licensed/>
       <TestimonialCarousal testimonials={testimonials} />

   <div className="hero ">
      <div className="hero-content flex-col lg:flex-row lg:items-center w-full max-w-[1400px] sm:py-[64px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px]  mx-auto px-4 gap-[32px]">
        
       
        <div className="relative w-full lg:w-1/2 h-[555px] lg:h-[500px]">
          <Image
            src="/assets/Frame1.png" 
            alt="Left Image"
            fill
            className="rounded-[23px]  md:object-cover object-fill"
          />
        </div>

        
 <div className="relative w-full lg:w-1/2 h-[464px] lg:h-[500px]">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <Image
      src={imageSrc}
      alt="Responsive"
      fill
      className="lg:object-cotain object-fill rounded-[23px]"
      priority
    />
  </a>
</div>

      </div>
    </div>

            <div className="flex flex-col justify-center py-[64px]">
               <h2 className="font-mulish font-bold text-center mx-auto w-[90%] max-w-[361px] text-[30px] leading-[38px] sm:text-[36px] sm:leading-[100%] sm:max-w-[1072px] sm:align-bottom">
  Frequently Asked Questions
</h2>

                      <Faqsection/>
            </div>
       
       <Form/>
       <Footer/>
    </main>
  );
}
