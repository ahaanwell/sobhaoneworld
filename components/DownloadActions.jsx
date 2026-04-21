"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import LeadModal from "@/components/LeadModal";

export default function DownloadActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, setModelHeading] = useState("");

  return (
    <>
      <div className="flex justify-center items-center gap-6 mt-3">
        <button
          onClick={() => {
            setModelHeading("Download Brochure");
            setIsModalOpen(true);
          }}
          className="border border-[#ca9c20] cursor-pointer px-5 py-2 rounded flex items-center gap-2"
        >
          <FaDownload /> Brochure
        </button>

        <button
          onClick={() => {
            setModelHeading("Download Cost Sheet");
            setIsModalOpen(true);
          }}
          className="border border-[#ca9c20] px-5 py-2 cursor-pointer rounded flex items-center gap-2"
        >
          <IoPricetagsOutline /> Cost Sheet
        </button>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </>
  );
}