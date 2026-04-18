"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";
import EMICalculator from "./Emicalculator";

const priceData = [
  { type: "1 BHK", size: "740 sq ft", price: "₹ 1.09 Cr* Onwards" },
  { type: "2 BHK Lux", size: "1070 sq ft", price: "₹ 1.58 Cr* Onwards" },
  { type: "2 BHK Grande", size: "1200 sq ft", price: "₹ 1.77 Cr* Onwards" },
  { type: "3 BHK Lux", size: "1525 sq ft", price: "₹ 2.25 Cr* Onwards" },
  { type: "3 BHK Grande (2 Car Park)", size: "1825 sq ft", price: "₹ 2.73 Cr* Onwards" },
  { type: "4 BHK Lux (2 Car Park)", size: "2100 sq ft", price: "₹ 3.14 Cr* Onwards" },
  { type: "4 BHK Grande (2 Car Park)", size: "2425 sq ft", price: "₹ 3.63 Cr* Onwards" },
];

export default function PriceListSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Apartment Configurations & Pricing
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="flex flex-col lg:flex-row gap-0">

          {/* Desktop Table */}
          <div className="flex-1 overflow-x-auto hidden md:block">
            <table
              className="w-full text-sm md:text-base"
              role="table"
              aria-label="Apartment types and pricing"
            >
              <thead>
                <tr className="border bg-primary text-white border-gray-200">
                  <th className="py-1 px-2 font-bold text-center w-1/4">Unit Type</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Size</th>
                  <th className="py-1 px-2 font-bold text-center w-1/4">Price</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-2 text-center text-black">{row.type}</td>
                    <td className="py-2 px-2 text-center text-black">{row.size}</td>
                    <td className="py-2 px-2 text-center font-medium text-primary">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-5 px-2">
            {priceData.map((row, i) => (
              <div
                key={i}
                className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {row.type}
                </h3>

                <p className="text-sm text-gray-700 mb-2">
                  {row.size}
                </p>

                <p className="text-lg font-bold text-black mb-4">
                  {row.price}
                </p>

                <button
                  onClick={() => {
                    SetModelHeading(`${row.type} - Price Details`);
                    setIsModalOpen(true);
                  }}
                  className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2 rounded-sm font-medium hover:opacity-90 transition"
                >
                  <FaDownload />
                  Download Price
                </button>
              </div>
            ))}
          </div>

          {/* Costing Image */}
          <div className="px-4 md:px-0">
            <img
              className="w-full"
              loading="lazy"
              src="/images/costing-details.webp"
              alt="Sobha One World Price Sheet and Costing Details"
            />
            <button
              onClick={() => {
                SetModelHeading("Download Complete Price List");
                setIsModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 px-3 py-3 bg-primary text-white w-full font-medium cursor-pointer"
            >
              <FaDownload />
              Download Full Cost Sheet
            </button>
          </div>

        </div>

        {/* Content Section */}
        <div className="pt-10 text-gray-800">

          <h2 className="text-2xl font-semibold mb-6">
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate autem sed, quae reiciendis eveniet ratione explicabo vero repellat ab.
          </p>
          <EMICalculator />

        </div>

      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </section>
  );
}