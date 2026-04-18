"use client";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function LocationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683256338268!2d77.7662908!3d13.0558224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ff2939d2fdb%3A0x53dac1d0b117326b!2sNH%2075%20%26%20Old%20Madras%20Rd%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1773561216072!5m2!1sen!2sin";

  return (
    <>
      <main className="w-full bg-white">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha One World Location
          </h1>
          <div className="flex justify-center items-center gap-6 mt-3">
            <button
              onClick={() => {
                SetModelHeading("Download Broucher");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <FaDownload /> Broucher
            </button>
            <button
              onClick={() => {
                SetModelHeading("Download Cost Sheet");
                setIsModalOpen(true);
              }}
              className="border border-blue-900 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <IoPricetagsOutline /> Cost Sheet
            </button>
          </div>
          
        </div>
      </main>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </>
  );
}

export default LocationPage;
