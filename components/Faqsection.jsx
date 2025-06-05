'use client';

import React from 'react';
import faqs from '@/data/faqdata';

export default function Faqsection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-[40px]">
       
      <div className="join join-vertical bg-base-100  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border-b border-gray-300 py-[40px]"
          >
            <input type="radio" name="faq-accordion" defaultChecked={index === 0}  />
            <div className="collapse-title  text-[24px] p-0 font-mulish font-normal pr-[8%]">
              {faq.question}
            </div>
            <div className="collapse-content text-sm text-[#2E343E]  px-0  text-[16px] pr-[6%]">
              {faq.answer || (
                <span className="italic text-[#2E343E]">Answer coming soon...</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
