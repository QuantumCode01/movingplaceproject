import React from 'react'

export default function Smallcard({title="",description="",image=""}) {
  return (
    <div className="card bg-base-100 px-[16] py-[24]">
        <figure className=" ">
            <img
            src={image}
            alt="icon-image"
            className="rounded-xl w-[80] h-[80]" />
        </figure>
        <div className="card-body items-center text-center px-0 ">
            <h6 className="card-title">{title}</h6>
            <p>{description}</p>
           
        </div>
    </div>
  )
}
