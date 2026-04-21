"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FaqClient({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3" role="list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            role="listitem"
            className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen ? "border-blue-300 shadow-sm" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center cursor-pointer justify-between gap-4 px-5 py-4 text-left"
            >
              <span
                className={`text-sm md:text-base font-semibold leading-snug ${
                  isOpen ? "text-primary" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>

              <FaChevronDown
                className={`text-primary flex-shrink-0 text-sm transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="px-5 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}