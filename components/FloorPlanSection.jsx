/* eslint-disable react/no-unescaped-entities */
import LeadModal from "./LeadModal";
import FloorPlanClientSection from "./FloorPlanClientSection";

const floorPlans = [
  {
    id: 1,
    label: "1 BHK Floor Plan",
    image: "./images/1bhk-large-floor-plan.webp",
    alt: "2 BHK Apartment Layout",
  },
  {
    id: 2,
    label: "2 BHK Floor Plan",
    image: "./images/2bhk-large-floor-plan.webp",
    alt: "3 BHK Apartment Layout",
  },
  {
    id: 3,
    label: "3 BHK Floor Plan",
    image: "./images/3bhk-large-floor-plan.webp",
    alt: "4 BHK Apartment Layout",
  },
  {
    id: 4,
    label: "4 BHK Floor Plan",
    image: "./images/4bhk-large-floor-plan.webp",
    alt: "4 BHK Apartment Layout",
  },
];

export default function FloorPlanSection() {

  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plans & Layout Designs
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="text-gray-700 pb-5 leading-relaxed">
          <p>
            <b>Sobha One World</b> offers <b>1BHK, 2BHK, 3BHK, and 4BHK</b> homes that are designed to meet the needs of families of all
kinds. The apartment sizes range from <b>740 to 2425 square feet</b>, so buyers can choose from small, cosy homes to big,
roomy luxury flats.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100">

                {/* ✅ IMAGE (SERVER SIDE) */}
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* ✅ CLIENT OVERLAY */}
                <FloorPlanClientSection plan={plan} />

              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>

        <div className="py-8 text-gray-700 leading-relaxed">

  {/* Title */}
  <h2 className="text-2xl font-bold mb-4">
    1, 2,3, and 4 BHK Apartment in Hoskuru, Hoskote, East Bangalore
  </h2>

  <p className="mb-4">
    A typical type of housing in big cities is the flat, which is a home in a block with more than one floor and shared
    services. In the Whitefield area, Sobha One World has high-end <b>1, 2, 3, and 4 BHK flats</b> close to IT hubs and everyday
    conveniences.
  </p>

  {/* Design */}
  <h3 className="text-2xl font-semibold mb-3">
    Design Ideas: Vastu and Smart Use of Space
  </h3>

  <p className="mb-4">
    The 300-acre <b>Sobha One World township's</b> Vaastu-based plan is one of its most important parts. The main doors,
    kitchens, and master bedrooms are all placed in the best places in each home, so that they create unity and good
    energy.
  </p>

  <p className="mb-4">
    Sobha also cares about making good use of the room. The plans get rid of empty spaces and passageways that aren't
    needed in many high-rise buildings. This makes the Super Built-up Area more useful.
  </p>

  {/* Best Places */}
  <h3 className="text-2xl font-semibold mb-3">
    The best places to live
  </h3>

  <p className="mb-6">
    Families and workers who want to move between 2030 and 2031 should look for units on higher floors (up to 54
    stories). These "Sky Residences" are quiet places to live that are away from the noise of the city. They have views of
    Hoskote's lakes and forests, as well as natural light and good air flow.
  </p>

  {/* 1 BHK */}
  <h3 className="text-xl font-semibold mb-3">1 BHK Floor Plan</h3>
  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>740 square feet for SBA.</li>
    <li>
      The floor plan is smart, with a hallway for privacy, a living and eating room, and a big master bedroom with a
      bathroom right next to it.
    </li>
    <li>There is one wide patio that is linked to the living room.</li>
    <li>
      Young workers in the Whitefield/ITPL area, single owners looking to make money from rentals, or couples
      looking to buy their first good house.
    </li>
  </ul>

  {/* 2 BHK */}
  <h3 className="text-xl font-semibold mb-3">2 BHK Floor Plan</h3>
  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>
      According to the SBA, the Lux and Grande versions need between 1,070 and 1,200 square feet.
    </li>
    <li>
      Layout: Bedrooms are separate from living areas, there is a big lobby, a living-dining hall, and two bedrooms
      that have air flow.
    </li>
    <li>
      Two balconies, one small one in the kitchen and one bigger one off the living room.
    </li>
    <li>
      Perfect for single-parent families or workers who need a home office. This plan is also good for selling.
    </li>
  </ul>

  {/* 3 BHK */}
  <h3 className="text-xl font-semibold mb-3">3 BHK Floor Plan</h3>
  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>
      From 1,525 to 1,825 square feet (Lux and Grande models), according to SBA.
    </li>
    <li>
      The layout is Vastu-compliant and has two bedrooms and a big master suite. The Grande version has a utility
      or staff room with its own entrance.
    </li>
    <li>
      There is a large patio off the sitting room, a private balcony off the master bedroom, and a separate utility
      room for the kitchen tools.
    </li>
    <li>
      For: Families that are growing or have more than one family. Two or three sides of the units are open so that
      air can flow freely.
    </li>
  </ul>

  {/* 4 BHK */}
  <h3 className="text-xl font-semibold mb-3">4 BHK Floor Plan</h3>
  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>SBA: 2,100 to 2,425 square feet (Lux and Grande forms)</li>
    <li>
      Plan: large entryway, living room that's too big, and four large bedrooms. For the Grande version, there is a
      study or maid's room and walk-in closets added.
    </li>
    <li>
      Among the balconies on floors 3–4 are a big Sky-Deck, private bedroom porches, and a service area.
    </li>
    <li>
      These apartments are perfect for famous people, business leaders, and big families. Sobha's "Zero Dead
      Corner" design makes the most of the room you have.
    </li>
  </ul>

  {/* Model Apartments */}
  <h3 className="text-2xl font-semibold mb-3">
    Model Apartments: See Where You Will Live One Day
  </h3>

  <p className="mb-4">
    At the official launch in May 2026, model homes will be on display at the Hoskote project site. It's close to the STRR
    and Old Madras Road (NH-75). These models, which come in 1BHK, 2BHK, 3BHK, and 4BHK plans, show how well
    Sobha builds and pays attention to detail for people who want to move in between 2030 and 2031.
  </p>

  <p className="mb-4">
    With no empty spaces and plans designed in accordance with Vaastu principles, the model homes show clever use of
    space. People can look around the living areas, check out the high-end vitrified floors, and see how well the space is
    utilised. Some important features are:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li><b>Efficient Space Use:</b> smart plans that don't waste any space by following Vastu rules.</li>
    <li>
      <b>Interiors:</b> Here are some ideas for how to arrange furniture in a 1 BHK flat or a 4 BHK "Grande" without
      taking up too much room.
    </li>
    <li>
      <b>Quality Standards:</b> fixtures made in-house, modern kitchen fittings, main doors that are 8 feet tall and meet
      Vastu rules, and designer baths.
    </li>
    <li>
      <b>Light and Airflow:</b> Towers with up to 54 floors (175 meters) have a lot of natural light and good air flow.
    </li>
  </ul>

</div>

      </div>

      
    </section>
  );
}