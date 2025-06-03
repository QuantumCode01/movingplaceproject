'use client';

import React from 'react';
import faqs from '@/data/faqdata';

export default function Faqsection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
       
      <div className="join join-vertical bg-base-100  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border-b border-gray-300 py-[40px]"
          >
            <input type="radio" name="faq-accordion" defaultChecked={index === 0}  />
            <div className="collapse-title font-semibold text-lg p-0 ">
              {faq.question}
            </div>
            <div className="collapse-content text-sm text-gray-600 p-0 pb-0 ">
              {faq.answer || (
                <span className="italic text-gray-400">Answer coming soon...</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
