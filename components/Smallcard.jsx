import React from 'react'

export default function Smallcard({title="",description="",image="",titleSize=""}) {
  return (
    <div className="card bg-base-100 px-[0] py-[24] flex gap-[32px]">
        <figure className=" ">
            <img
            src={image}
            alt="icon-image"
            className="rounded-xl w-[80] h-[80]" />
        </figure>
        <div className="card-body items-center text-center px-0 py-0 gap-[8px] flex flex-col">
            <h6 className={`card-title text-[#2E343E] ${titleSize}`}>{title}</h6>
            <p className='text-[#2E343E] text-[16px]'>{description}</p>
           
        </div>
    </div>
  )
}
