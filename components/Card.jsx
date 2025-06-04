import Image from "next/image";

export default function Card({  image="", title="", subtitle="", description="", buttonText="", bgColor="", titleColor="",subtitleColor="",descriptionColor="" ,iconImage=""}) {
  return (

    <div className=" rounded-[24px]  shadow-md p-[32px] w-full max-w-md "  style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} className="rounded-xl mb-4 w-full h-44 object-cover" />
  
      <h3 className="lg:text-[30px] text-[24px] font-semibold mb-1 " style={{ color: titleColor }}>{title}</h3>

      <p className="font-semibold text-[18px] md:mb-[24px] mb-[16px] flex items-start gap-2"  style={{ color: subtitleColor }}>
        {iconImage && (
          <img src={iconImage} alt="icon" className="w-[12px] h-[12px] mt-[8px]" />
        )}
        {subtitle}
      </p>

      <p className=" md:mb-[24px] mb-[16px]" style={{ color: descriptionColor }}>{description}</p>
      
      {buttonText && (
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md w-full sm:w-[227px]">
          {buttonText}   
      </button>
        )} 
    </div>
  );
}
