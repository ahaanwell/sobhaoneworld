/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-[#ca9c20]" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-[#ca9c20]" />,
    label: "Starting Price",
    value: "₹1.09 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-[#ca9c20]" />,
    label: "Unit Type",
    value: "1, 2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-[#ca9c20]" />,
    label: "Unit Sizes",
    value: "740 to 2425 sq. ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-[#ca9c20]" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-[#ca9c20]" />,
    label: "Land Area",
    value: "300 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-[#ca9c20]" />,
    label: "Total Units",
    value: "5400 Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-[#ca9c20]" />,
    label: "Total No. of Floors",
    value: "G + 54 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-[#ca9c20]" />,
    label: "No Of Towers",
    value: "18 Towers",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-[#ca9c20]" />,
    label: "Builder",
    value: "Sobha Limited",
  },
  {
    icon: <FaCertificate className="text-3xl text-[#ca9c20]" />,
    label: "Rera No",
    value: "On Request",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-[#ca9c20]" />,
    label: "Possession",
    value: "2031 Onwards",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="highlights-heading"
          className="text-3xl font-semibold text-gray-900 text-center mb-5"
        >
          About Sobha One World
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sobha One World project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-gray-700 mt-6 leading-relaxed">
  
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 my-4">
    Lorem ipsum dolor sit amet consectetur
  </h2>

  <p className="pb-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ratione culpa veniam vitae sit, reiciendis necessitatibus. Quas, animi. Amet, doloribus?
  </p>

</div>

      </div>
    </section>
  );
}
