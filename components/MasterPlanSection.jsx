/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import LeadModal from "./LeadModal";
import MasterPlanClient from "./MasterPlanClient";

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

</div>
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}