import Image from "next/image";

export default function Card({  image="", title="", subtitle="", description="", buttonText="", bgColor="", titleColor="",subtitleColor="",descriptionColor="" ,iconImage=""}) {
  return (

    <div className=" rounded-[24px]  shadow-md p-[32px] w-full max-w-md "  style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} className="rounded-xl mb-4 w-full h-44 object-cover" />
  
      <h3 className="text-2xl font-semibold mb-1 " style={{ color: titleColor }}>{title}</h3>

      <p className="font-semibold text-sm mb-3 flex items-center gap-2"  style={{ color: subtitleColor }}>
        {iconImage && (
          <img src={iconImage} alt="icon" className="w-[12px] h-[12px]" />
        )}
        {subtitle}
      </p>

      <p className=" mb-4" style={{ color: descriptionColor }}>{description}</p>
      
      {buttonText && (
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md">
          {buttonText}   
      </button>
        )} 
    </div>
  );
}
