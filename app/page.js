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
export default function Home() {
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
      
        <div className="shadow-[0px_10px_18px_0px_rgba(18,18,23,0.10)] bg-white rounded-[24px] sm:py-[64px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px] px-[16px] max-w-[1272px] lg:mx-auto my-[64px]">
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


         <div className="flex flex-col justify-center sm:pt-[64px] pt-[32px] sm:pb-[40px]  px-[16px] lg:px-[0px] md:px-[32px]">
            <h2 class="text-[#2E343E] text-[30px] leading-[38px] font-bold font-mulish text-center w-[361px] sm:text-[36px] sm:leading-[100%]  sm:w-auto sm:max-w-[1072px] mx-auto">
  Move Confidently with All-Inclusive Services
</h2>

            <p className="font-mulish font-normal text-[16px] leading-[150%] tracking-[0] text-center   max-w-[930px] mx-auto my-[24px] text-[#2E343E]">Everything you need for a smooth, stress-free move is included—no hidden fees, no surprises.</p>

        </div>
        <div className="flex flex-col md:flex-row gap-[32] justify-center items-center sm:py-[64px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px] max-w-[1400px] lg:mx-auto my-[64px]">
              {servicescardData.map((card, index) => (
                <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                buttonText={card.buttonText}
                bgColor={card.bgColor}
                titleColor={card.titleColor}
                descriptionColor={card.descriptionColor}
               
                />
                
              ))}
        </div>



         <div className="shadow-[0px_10px_18px_0px_rgba(18,18,23,0.10)] bg-white rounded-[24px] sm:py-[64px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px] lg:mx-[64px] xl:mx-auto max-w-[1144px] my-[64px]  ">
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center ">
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

   <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row lg:items-center w-full max-w-[1400px] sm:py-[64px] py-[32px] lg:px-[64px] mx-[16px] md:mx-[32px]  mx-auto px-4 gap-[32px]">
        
       
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px]">
          <Image
            src="/assets/Frame1.png" 
            alt="Left Image"
            fill
            className="rounded-[23px]  object-cover"
          />
        </div>

        
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px]">
          <Image
            src="/assets/Frame2.png" 
            alt="Right Image"
            fill
            className="rounded-[23px] object-cover"
          />
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
