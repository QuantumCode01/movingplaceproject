import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm justify-between">
  <div className="navbar-start">
  
    <a className="btn btn-ghost text-xl">
      <img src="../assets/Logo.png" alt="logo" className='w-[201px] h-[38px]' />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="font-mulish font-bold text-[16px] leading-[125%] text-center">Services</a></li>
      <li>  
         <a href="" className="font-mulish font-bold text-[16px] leading-[125%] text-center">Location</a>
      </li>
      <li><a className="font-mulish font-bold text-[16px] leading-[125%] text-center">Moving Tips</a></li>
      <li><a className="font-mulish font-bold text-[16px] leading-[125%] text-center">FAQS</a></li>
    </ul>
  </div>
 <div className="navbar-end hidden sm:flex justify-end">
  <a href="tel:8666059518" className="btn rounded-3xl border-none">
    <img src="../assets/phoneicon.svg" alt="phoneicon" />
    866-605-9518
  </a>
</div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0">
        <li><a>Services</a></li>
        <li>
          <a>Location</a>
         
        </li>
        <li><a>Moving Tips</a></li>
        <li><a>FAQS</a></li>
      </ul>
    </div>
</div>
    </div>
  )
}
