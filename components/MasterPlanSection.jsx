/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";
import MasterPlanClient from "./MasterPlanClient";

const pricingData = [
  {
    slNo: 1,
    unitNumber: "1021",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "2",
    classification: "SELECT",
    carpetArea: "1,098.36",
    sba: "1,820.24",
    rate: "13,555",
    basicValue: "24,673,353",
    developmentValue: "786,344",
    totalValueExGST: "25,459,697",
    gst: "1,272,985",
    basicValueWithGST: "26,732,682",
    maintenanceDeposit: "546,072",
    totalValue: "27,278,754",
  },
  {
    slNo: 2,
    unitNumber: "1022",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "2",
    classification: "PRIME",
    carpetArea: "1,098.36",
    sba: "1,820.24",
    rate: "13,777",
    basicValue: "25,077,446",
    developmentValue: "786,344",
    totalValueExGST: "25,863,790",
    gst: "1,293,190",
    basicValueWithGST: "27,156,980",
    maintenanceDeposit: "546,072",
    totalValue: "27,703,052",
  },
  {
    slNo: 3,
    unitNumber: "1023",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "2",
    classification: "ELITE",
    carpetArea: "1,110.74",
    sba: "1,833.67",
    rate: "13,999",
    basicValue: "25,669,546",
    developmentValue: "792,145",
    totalValueExGST: "26,461,692",
    gst: "1,323,085",
    basicValueWithGST: "27,784,776",
    maintenanceDeposit: "550,101",
    totalValue: "28,334,877",
  },
  {
    slNo: 4,
    unitNumber: "1024",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "2",
    classification: "ELITE",
    carpetArea: "1,110.74",
    sba: "1,833.67",
    rate: "13,999",
    basicValue: "25,669,546",
    developmentValue: "792,145",
    totalValueExGST: "26,461,692",
    gst: "1,323,085",
    basicValueWithGST: "27,784,776",
    maintenanceDeposit: "550,101",
    totalValue: "28,334,877",
  },
  {
    slNo: 5,
    unitNumber: "1025",
    unitType: "4BHK - Grande",
    wing: "1",
    floor: "2",
    classification: "GRANDE+",
    carpetArea: "1,485.54",
    sba: "2,415.77",
    rate: "14,443",
    basicValue: "34,890,966",
    developmentValue: "1,043,613",
    totalValueExGST: "35,934,579",
    gst: "1,796,729",
    basicValueWithGST: "37,731,308",
    maintenanceDeposit: "724,731",
    totalValue: "38,456,039",
  },
  {
    slNo: 6,
    unitNumber: "1026",
    unitType: "4BHK - Grande",
    wing: "1",
    floor: "2",
    classification: "PRIME+",
    carpetArea: "1,488.02",
    sba: "2,415.77",
    rate: "13,999",
    basicValue: "33,818,364",
    developmentValue: "1,043,613",
    totalValueExGST: "34,861,977",
    gst: "1,743,099",
    basicValueWithGST: "36,605,076",
    maintenanceDeposit: "724,731",
    totalValue: "37,329,807",
  },
  {
    slNo: 7,
    unitNumber: "1031",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "3",
    classification: "SELECT",
    carpetArea: "1,098.36",
    sba: "1,820.24",
    rate: "13,555",
    basicValue: "24,673,353",
    developmentValue: "786,344",
    totalValueExGST: "25,459,697",
    gst: "1,272,985",
    basicValueWithGST: "26,732,682",
    maintenanceDeposit: "546,072",
    totalValue: "27,278,754",
  },
  {
    slNo: 8,
    unitNumber: "1032",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "3",
    classification: "PRIME",
    carpetArea: "1,098.36",
    sba: "1,820.24",
    rate: "13,777",
    basicValue: "25,077,446",
    developmentValue: "786,344",
    totalValueExGST: "25,863,790",
    gst: "1,293,190",
    basicValueWithGST: "27,156,980",
    maintenanceDeposit: "546,072",
    totalValue: "27,703,052",
  },
  {
    slNo: 9,
    unitNumber: "1033",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "3",
    classification: "ELITE",
    carpetArea: "1,110.74",
    sba: "1,833.67",
    rate: "13,999",
    basicValue: "25,669,546",
    developmentValue: "792,145",
    totalValueExGST: "26,461,692",
    gst: "1,323,085",
    basicValueWithGST: "27,784,776",
    maintenanceDeposit: "550,101",
    totalValue: "28,334,877",
  },
  {
    slNo: 10,
    unitNumber: "1034",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "3",
    classification: "ELITE",
    carpetArea: "1,110.74",
    sba: "1,833.67",
    rate: "13,999",
    basicValue: "25,669,546",
    developmentValue: "792,145",
    totalValueExGST: "26,461,692",
    gst: "1,323,085",
    basicValueWithGST: "27,784,776",
    maintenanceDeposit: "550,101",
    totalValue: "28,334,877",
  },
  {
    slNo: 11,
    unitNumber: "1035",
    unitType: "4BHK - Grande",
    wing: "1",
    floor: "3",
    classification: "GRANDE+",
    carpetArea: "1,485.54",
    sba: "2,415.77",
    rate: "14,443",
    basicValue: "34,890,966",
    developmentValue: "1,043,613",
    totalValueExGST: "35,934,579",
    gst: "1,796,729",
    basicValueWithGST: "37,731,308",
    maintenanceDeposit: "724,731",
    totalValue: "38,456,039",
  },
  {
    slNo: 12,
    unitNumber: "1036",
    unitType: "4BHK - Grande",
    wing: "1",
    floor: "3",
    classification: "PRIME+",
    carpetArea: "1,488.02",
    sba: "2,415.77",
    rate: "13,999",
    basicValue: "33,818,364",
    developmentValue: "1,043,613",
    totalValueExGST: "34,861,977",
    gst: "1,743,099",
    basicValueWithGST: "36,605,076",
    maintenanceDeposit: "724,731",
    totalValue: "37,329,807",
  },
  {
    slNo: 19,
    unitNumber: "1051",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "5",
    classification: "SELECT",
    carpetArea: "1,098.36",
    sba: "1,820.24",
    rate: "13,615",
    basicValue: "24,782,568",
    developmentValue: "786,344",
    totalValueExGST: "25,568,911",
    gst: "1,278,446",
    basicValueWithGST: "26,847,357",
    maintenanceDeposit: "546,072",
    totalValue: "27,393,429",
  },
  {
    slNo: 23,
    unitNumber: "1055",
    unitType: "4BHK - Grande",
    wing: "1",
    floor: "5",
    classification: "GRANDE+",
    carpetArea: "1,485.54",
    sba: "2,415.77",
    rate: "14,503",
    basicValue: "35,035,912",
    developmentValue: "1,043,613",
    totalValueExGST: "36,079,525",
    gst: "1,803,976",
    basicValueWithGST: "37,883,501",
    maintenanceDeposit: "724,731",
    totalValue: "38,608,232",
  },
  {
    slNo: 53,
    unitNumber: "1105",
    unitType: "4BHK - Grande",
    wing: "1",
    floor: "10",
    classification: "ELITE+",
    carpetArea: "1,485.54",
    sba: "2,415.77",
    rate: "14,341",
    basicValue: "34,644,558",
    developmentValue: "1,043,613",
    totalValueExGST: "35,688,170",
    gst: "1,784,409",
    basicValueWithGST: "37,472,579",
    maintenanceDeposit: "724,731",
    totalValue: "38,197,310",
  },
  {
    slNo: 195,
    unitNumber: "1351",
    unitType: "3BHK - Grande",
    wing: "1",
    floor: "35",
    classification: "SELECT",
    carpetArea: "1,098.36",
    sba: "1,820.24",
    rate: "14,035",
    basicValue: "25,547,068",
    developmentValue: "786,344",
    totalValueExGST: "26,333,412",
    gst: "1,316,671",
    basicValueWithGST: "27,650,083",
    maintenanceDeposit: "546,072",
    totalValue: "28,196,155",
  }
];

export default function MasterPlanSection() {
  const [isHover, setIsHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <div className="text-gray-700 mb-5 space-y-6 leading-relaxed">
            <p>
              The huge <b>300-acre</b> <a href="https://www.sobhaoneworld.gen.in/master-plan"><b>Sobha One Worldmaster plan</b> </a> is spread out all over the land. It will be the largest city in East
Bangalore with its <b>18 beautiful high-rise buildings</b>. It has more than <b>5,400 high-end units</b> that are designed to be
private and have views of the city from 270 degrees. In the middle, there is a building that serves as a playground for
the locals. About 70% of this Sobha township's land is set aside for open green spaces.
            </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Master Plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>

        </div>
        <div className="py-8 text-gray-700 leading-relaxed">

  {/* Title */}
  <h2 className="text-2xl font-bold mb-6">
    Master Plan Layout with Zone Identification
  </h2>

  {/* Table */}
  <div className="overflow-x-auto mb-8">
    <table className="w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Zone Number</th>
          <th className="border border-gray-300 px-4 py-2">Feature / Amenity</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">01</td>
          <td className="border border-gray-300 px-4 py-2">Main Entry / Exit</td>
          <td className="border border-gray-300 px-4 py-2">
            An entrance gate with RFID security at many levels. There is a security cabin near the entrance door. There are wide internal roads for smooth traffic flow.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">02</td>
          <td className="border border-gray-300 px-4 py-2">Residential Towers</td>
          <td className="border border-gray-300 px-4 py-2">
            There are 18 high towers. Each tower has 3 basement floors for vehicle parking, a ground floor with lobby, and 53 floors above.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">03</td>
          <td className="border border-gray-300 px-4 py-2">Clubhouse</td>
          <td className="border border-gray-300 px-4 py-2">
            A massive clubhouse with an entrance hall, and double floor. It has spa, gym, a heated indoor swimming pool, party halls, meeting rooms, library, and more indoor fun features.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">04</td>
          <td className="border border-gray-300 px-4 py-2">Central Green Space</td>
          <td className="border border-gray-300 px-4 py-2">
            It takes up a big part of the 70% open space. It has gardens, farming areas, and trees with less maintenance.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">05</td>
          <td className="border border-gray-300 px-4 py-2">Sports Zone</td>
          <td className="border border-gray-300 px-4 py-2">
            There are outdoor sports features that include a tennis court, basketball courts, volleyball court, cricket practice nets, and skating rink.
          </td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">06</td>
          <td className="border border-gray-300 px-4 py-2">Fitness Zone</td>
          <td className="border border-gray-300 px-4 py-2">
            There are yoga decks, outdoor gym. There is a big jogging track and cycling track over 1 km.
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold mb-4">
    Towers and Blocks: Important features of the Sobha One World Bangalore plan are:
  </h2>

  <p className="mb-2 font-semibold">Entry and exit gates:</p>

  <p className="mb-4">
    <b>Access from NH-75:</b> The project is right on National Highway 75 (Old Madras Road), across from the Hoskote Toll
    Plaza. This makes it quick and easy to get to the city.
  </p>

  <p className="mb-4">
    <b>Township Entry:</b> There is a large, locked entry. There are different lanes for homes, shops, and offices, so cars can get
    through easily even when it's busy.
  </p>

  <p className="mb-2 font-semibold">Cliffs</p>

  <p className="mb-4">
    <b>High-Rise Buildings:</b> On 300 acres of land, there are 18 tall apartment towers set up in different groups.
  </p>

  <p className="mb-4">
    <b>Great Views:</b> The towers are set up so that you can see Hoskote Lake and the green grounds below.
  </p>

  <p className="mb-4">
    <b>Structure:</b> Each tower is about 175 meters tall and has 54 floors above (3B+G+54). It has 3 basement floors, a ground
    floor, and 54 stories above.
  </p>

  <p className="mb-2 font-semibold">Clubhouse</p>

  <p className="mb-4">
    <b>Big Play Areas:</b> The main building is big, and there is also a secondary hub that is big, so there is a lot of indoor play
    area.
  </p>

  <p className="mb-4">
    <b>Easy Access:</b> The main building is in the middle and is linked to all 18 towers by green paths that are safe for people
    to walk on.
  </p>

  <p className="mb-2 font-semibold">Open Area %</p>

  <p className="mb-4">
    <b>Lots of Green:</b> About 65% of the 300 acres are open space with fields, ponds, small woods, and places to grow fresh
    food. Only 20% of the land is built up.
  </p>

  <p className="mb-2 font-semibold">Parking</p>

  <p className="mb-4">
    <b>Parking in the Basement:</b> All three towers have three levels of parking in the basement, so that the ground level is
    always clear of cars.
  </p>

  <p className="mb-4">
    <b>EV Ready:</b> There are charge stations for electric vehicles.
  </p>

  <p className="mb-4">
    <b>Guest Parking:</b> People who come to visit can park near the shops (G+1) and business blocks (G+4), which keeps the
    living areas private.
  </p>

  <p className="mb-2 font-semibold">Internal roads and paths</p>

  <p className="mb-4">
    For emergency cars and drop-offs near the towers, there is a wide road that goes around the building.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <b>Fitness Track:</b> Just off the main road, there is a path for running and riding that goes through the green
      spaces.
    </li>
    <li>
      <b>Pedestrian Zones:</b> The middle area is only for walking, which keeps kids and older people safe.
    </li>
  </ul>

  <div className="overflow-x-auto mt-5">
  <table className="min-w-full border border-gray-300 text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border p-2">Sl No</th>
        <th className="border p-2">Unit Number</th>
        <th className="border p-2">Type of Unit</th>
        <th className="border p-2">Wing</th>
        <th className="border p-2">Floor</th>
        <th className="border p-2">Classification</th>
        <th className="border p-2">Carpet Area in sft (C)</th>
        <th className="border p-2">SBA (S) in sft</th>
        <th className="border p-2">Rate in ₹/sft (R)</th>
        <th className="border p-2">Basic Value (BV)</th>
        <th className="border p-2">Development & Infrastructure Works</th>
        <th className="border p-2">Total Value Excl GST (V)</th>
        <th className="border p-2">GST @ 5%</th>
        <th className="border p-2">Basic Value With GST (A)</th>
        <th className="border p-2">Maintenance Deposit</th>
        <th className="border p-2">Total Value (D=A+B)</th>
      </tr>
    </thead>

    <tbody>
      {pricingData.map((item, index) => (
        <tr key={index}>
          <td className="border p-2">{item.slNo}</td>
          <td className="border p-2">{item.unitNumber}</td>
          <td className="border p-2">{item.unitType}</td>
          <td className="border p-2">{item.wing}</td>
          <td className="border p-2">{item.floor}</td>
          <td className="border p-2">{item.classification}</td>
          <td className="border p-2">{item.carpetArea}</td>
          <td className="border p-2">{item.sba}</td>
          <td className="border p-2">{item.rate}</td>
          <td className="border p-2">{item.basicValue}</td>
          <td className="border p-2">{item.developmentValue}</td>
          <td className="border p-2">{item.totalValueExGST}</td>
          <td className="border p-2">{item.gst}</td>
          <td className="border p-2">{item.basicValueWithGST}</td>
          <td className="border p-2">{item.maintenanceDeposit}</td>
          <td className="border p-2">{item.totalValue}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}