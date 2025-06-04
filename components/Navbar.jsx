import React from 'react'

export default function Navbar() {
  return (
    <div className='border-b [border-bottom-color:#B4B9C980]'>
      <div className="navbar bg-base-100 justify-between max-w-[1400px] mx-auto py-[16px] gap-8">
  <div className="navbar-start w-[416px] md:pl-[64px]">

    <a className="btn btn-ghost text-xl px-0">
      <img src="../assets/Logo.png" alt="logo" className='w-[201px] h-[38px]' />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='border-b-4 border-transparent hover:border-yellow-400 transition-all duration-200'>
        <a className="font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px] text-[#2E343E]">Services</a>
      </li>
      <li className='border-b-4 border-transparent hover:border-yellow-400 transition-all duration-200'>  
         <a href="" className="font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px] text-[#2E343E]">Location</a>
      </li>
      <li className='border-b-4 border-transparent hover:border-yellow-400 transition-all duration-200'>
        <a className="font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px] text-[#2E343E]">Moving Tips</a>
      </li>
      <li className='border-b-4 border-transparent hover:border-yellow-400 transition-all duration-200'>
        <a className="font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px] text-[#2E343E]">FAQS</a>
      </li>
    </ul>
  </div>
 <div className="navbar-end hidden sm:flex justify-end w-[416px] md:pr-[64px]">
  <a href="tel:8666059518" className="btn rounded-3xl border-none px-5 py-3 text-[16px] flex gap-3 h-[48px]">
    <img src="../assets/phoneicon.svg" alt="phoneicon" />
    866-605-9518
  </a>
</div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.916992 1.58337H25.0837M0.916992 22.4167H25.0837M0.916992 12H25.0837" stroke="#2E343E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
        <li><a className='font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px]'>Services</a></li>
        <li>
          <a className='font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px]'>Location</a>
        </li>
        <li><a className='font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px]'>Moving Tips</a></li>
        <li><a className='font-mulish font-bold text-[16px] leading-[125%] text-center hover:bg-transparent px-[14px] py-[10px]'>FAQS</a></li>
      </ul>
    </div>
</div>
    </div>
  )
}
