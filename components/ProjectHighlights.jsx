/* eslint-disable react/no-unescaped-entities */
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
        <h1
          id="highlights-heading"
          className="text-2xl font-bold text-gray-700 text-center mb-5"
        >
          About Sobha One World
        </h1>
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
          <h2 className="text-2xl font-bold mb-4">
            Sobha One World- How Hoskote, Bangalore, Gone From 300 Acres to One
          </h2>

          <p className="mb-4">
            <a href="https://www.sobha.com/" rel="nofollow" target="_blank"><b>Sobha Limited</b></a> built the premium private estate project{" "}
            <a href="https://www.sobhaoneworld.gen.in/">
              <b>Sobha One World</b>
            </a>{" "}
            in Hoskuru, Hoskote, East Bangalore. The main area of the project is
            over <b>300 acres</b>, and the first part of Sobha One Residences
            takes up <b>48 acres</b>. The huge project has 18 beautiful towers,
            each with <b>54 floors</b>. It has <b>5,400 high-end flats</b> that
            are Vaastu-compliant and designed for city life. These big flats
            come in different sizes, from 740 to 2425 square feet and are called{" "}
            <b>1BHK, 2BHK, 3BHK, and 4BHK.</b> This project costs ₹14,720 per
            square foot. The price for a 1 BHK will likely start at ₹ 1.09 Cr
            before the launch. The project is set to begin in earnest in May
            2026.
          </p>

          <p className="mb-4">
            Elite builders are very interested in doing big projects in Hoskuru
            because it is one of the most sought-after places to live in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Bangalore_East"
              rel="nofollow"
              target="_blank"
            >
              <b>East Bangalore</b>
            </a>
            . <a href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport" rel="nofollow"
              target="_blank"><b>Kempegowda International Airport (KIAL)</b></a> is only a few
            minutes away from this spot via SH- 104.
          </p>

          <p className="mb-4">
            It is on{" "}
            <b>
              Raghuvanahalli - Hosakote Road, KHB Layout, close to Hoskote Toll
              Gate, Hoskuru, Hoskote, Bengaluru, Karnataka 560049
            </b>
            . It's in a great spot in <b>East Bangalore</b>, close to
            everything, and the area is growing quickly. It's only a 10-minute
            walk to Orion Uptown Mall and well known places like{" "}
            <b>MVJ Medical College</b>.
          </p>

          <p className="mb-4">
            The apartments near <b>Budigere Cross</b> are in a great spot
            because they are right in the middle of East Bengaluru's growing
            area. <b>Hoskote</b> is a good choice for people looking for upscale
            flats near <b>Whitefield and ITPL</b> because it is close to big IT
            parks, office spaces, and social spots.
          </p>

          <p className="mb-4">
            This planned township is conveniently located near the{" "}
            <b>Hoskote Toll Plaza</b>, making it easy to get to major employment
            hubs in{" "}
            <b>East Bengaluru, including Whitefield/ITPL (11 km, 20–25 mins)</b>{" "}
            and the Budigere Cross/ Aerospace Park corridor (15 km, 25 mins).
            It's also close to the KR Puram/Outer Ring Road tech belt (18 km, 30
            mins). The Satellite Town Ring Road (STRR) and the Bengaluru–Chennai
            Motorway make it easy to get to and from locations in the
            "Neo-Bangalore" area. This makes it the city's fastest-growing
            living and transportation neighbourhood.
          </p>

          <p className="mb-4">
            The{" "}
            <b>
              <a href="https://www.bmrc.co.in/" rel="nofollow" target="_blank">
                Metro Purple Line
              </a>
            </b>
            , especially the Kadugudi Whitefield Metro Station, is a big plus
            because it will make the journey much better without traffic. By
            taking the <b>Old Madras Road</b>, you can get to the station in
            about 11 km. It has connections to important places like{" "}
            <b>MG Road, Indiranagar, KR Puram</b>, and Majestic. You won't have
            to wait in traffic to get to important parts of the city.
          </p>

          {/* Schools Section */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">
            Nearby Schools include:
          </h2>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>VIBGYOR High School (5 mins)</li>
            <li>Narayana Olympiad School (7 mins)</li>
            <li>Prerana International School (7 mins)</li>
            <li>Paripoorana Prajna International School (15 mins)</li>
          </ul>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-4">
            Quick Facts about Sobha One World Bangalore
          </h2>

          {/* Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">
                    Fact Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Specific Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Project Type
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Luxury themed apartments
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Total Land Area
                  </td>
                  <td className="border border-gray-300 px-4 py-2">300 acre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Location</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Off Hoskote, East Bangalore
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Key Landmark
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Opposite Hoskote Toll Plaza
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Metro Access
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Kadugudi-Whitefield Metro Station
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Unit Variants
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    1, 2, 3 & 4 BHK Apartments
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Starting Price
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹ 1.09 Cr onwards
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Total Units
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    5400 Vaastu-aligned units
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    RERA Numbers
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Awaiting Approval (Pre-launch Phase)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Towers & Floors
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    3B + GF + 54
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Possession
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    2031 onwards (Tentative)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Highlights Title */}
          <h2 className="text-2xl font-semibold mb-4">
            Key Highlights and Unique Selling Points: Sobha One World Hoskote
          </h2>

          {/* Points */}
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <b>Township Spread Out Over 300 Acres:</b> This is one of the
              largest and most luxurious neighbourhoods in East Bangalore
              (Hoskote), and it covers <b>300 acres</b>.
            </li>
            <li>
              <b>63% Open Space for Greens and Tall Buildings:</b> About 63% of
              the land is left open for greens. The <b>18 towers</b> in the building rise up to 54 stories and have great views of <b>East Bangalore</b>.
            </li>
            <li>
              <b>Luxury Clubhouse:</b> The big clubhouse has a lobby that is
              twice as high, swimming pools that are kept at the right
              temperature, a small theatre, and more than 55 lifestyle
              facilities, such as parks and co-working spaces.
            </li>
            <li>
              <b>Great Connections (NH-75 and STRR):</b> It is near STRR on Old
              Madras Road (NH-75), so it's easy to get to Kempegowda
              International Airport (45 minutes) and Whitefield/ITPL (20
              minutes).
            </li>
            <li>
              <b>Good Quality and a Trusted Brand:</b> Sobha handles building
              from start to finish, so you can be sure of good quality. Most
              homes here are worth 15–20% more when they are sold again.
            </li>
            <li>
              <b>Rapidly growing place:</b> Hoskote is a commercial and
              residential place that is growing quickly. As more motorways and
              roads are built, home prices could go up by 15–20% by 2031.
            </li>
            <li>
              <b>High Rental Demand:</b> The project draws working professionals
              because it is close to the Whitefield IT Hub and the Hoskote
              Industrial Area, which is home to more than 200 companies such as
              Volvo and Honda. The rental income is about 3–4%, which is more
              than the average in Bangalore.
            </li>
          </ul>

          <p className="mt-4">
            The new luxury township near STRR (Satellite Town Ring Road) is
            being created by Sobha Limited, a famous business.
          </p>

          <h2 className="text-2xl font-bold mt-4">
            Sobha One World provides 1 to 4 BHK homes.
          </h2>

          <ul className="list-disc pl-6 space-y-2 mb-6 mt-4">
            <li>
              1 BHK is a wonderful option for single working professionals.
            </li>
            <li>
              2 BHK houses are compact and comfortable for small households.
            </li>
            <li>
              3 BHK provides more room and seclusion for expanding families.
            </li>
            <li>4 BHK Luxury flats for large families.</li>
          </ul>

          {/* Key Distance */}
          <h2 className="text-2xl font-bold mb-4">Key Distance</h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">
                    Destination
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Distance</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Travel Time (Peak)
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Route</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    The OM Shree Public School
                  </td>
                  <td className="border border-gray-300 px-4 py-2">350 M</td>
                  <td className="border border-gray-300 px-4 py-2">2 Mins</td>
                  <td className="border border-gray-300 px-4 py-2">NH 648</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Whitefield
                  </td>
                  <td className="border border-gray-300 px-4 py-2">11.6 KM</td>
                  <td className="border border-gray-300 px-4 py-2">20 Mins</td>
                  <td className="border border-gray-300 px-4 py-2">NH 648</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Varthur Road
                  </td>
                  <td className="border border-gray-300 px-4 py-2">19.5 KM</td>
                  <td className="border border-gray-300 px-4 py-2">30 Mins</td>
                  <td className="border border-gray-300 px-4 py-2">NH 648</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Bangalore Airport
                  </td>
                  <td className="border border-gray-300 px-4 py-2">39 KM</td>
                  <td className="border border-gray-300 px-4 py-2">45 Mins</td>
                  <td className="border border-gray-300 px-4 py-2">NH 44</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Reviews */}
          <h2 className="text-2xl font-bold mb-4">
            Customer Ratings and Reviews
          </h2>

          <p className="mb-4">
            One important thing about <b>Sobha One World</b> is how big it is
            and how much focus there is on open areas. Real estate professionals
            are very excited about this planned <b>300-acre</b> project in
            Hoskote. People think it's one of the best- planned Sobha projects
            near <b>Whitefield/ITPL</b>, and it's a great choice for people who
            want high-quality buildings and tall, luxurious homes.
          </p>

          <p className="mb-4">
            <b>
              <a href="https://www.sobhaoneworld.gen.in/">
                Sobha One World Hoskote
              </a>
            </b>{" "}
            is quickly becoming one of the best places to live in{" "}
            <b>East Bangalore</b>. It has homes in towers with up to{" "}
            <b>54 floors</b> and a lot of room for property values to rise in an
            area that is growing quickly. It was named one of the top two
            private projects in East Bangalore by <b>Sobha One World Review</b>.
          </p>

          <p className="mb-4">
            There is a lot of information about this "city within a city" in the{" "}
            <b>Sobha One World brochure</b>. It has the master plan, smart floor
            plans, and details about the big center. The brochure makes it very
            clear why this project is a good way to invest in East Bangalore's
            real estate market, which is growing.
          </p>

          {/* RERA */}
          <h2 className="text-2xl font-bold mb-4">Approval by RERA</h2>

          <p className="mb-4">
            <b>Sobha One World</b> is currently being registered with the{" "}
            <a
              href="https://rera.karnataka.gov.in/viewAllProjects"
              rel="nofollow"
              target="_blank"
            >
              <b>Real Estate Regulatory Authority</b>
            </a> . Soon, you'll be able to get a <b>Sobha One World RERA number</b>.
            The Karnataka RERA Authority will give you the legal registration
            number once it has been accepted. The Real Estate Regulatory
            Authority of Karnataka needs to do the following:
          </p>

          <p className="mb-2">
            To follow all the rules and laws set by the government.
          </p>
          <p className="mb-2">
            The{" "}
            <b>Bangalore Metropolitan Region Development Authority (BMRDA)</b>{" "}
            needs to accept the structure in order to make sure that the
            community is planned and follows the law.
          </p>
          <p className="mb-4">
            The KA-bPASS system will be used by the local municipality to handle
            building permits and planning decisions.
          </p>

          {/* EOI */}
          <h2 className="text-2xl font-bold mb-4">
            Sobha One World: Expression of Interest (EOI) Process
          </h2>

          <p className="mb-4">
            When it starts, EOI will be on May 10, 2026. Early birds can get
            units at huge savings during the prelaunch phase, which lasts until
            the public start on May 10, 2026.
          </p>

          <p className="mb-4">EOI Booking Amounts (by Flat Type)</p>

          <p className="mb-2">
            First choice will be given to buyers who pay online or send a
            Post-Dated Cheque (PDC).
          </p>

          <p className="mb-4">The EOI amount for every size unit is</p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>2 BHK Units – Rs 5 Lakhs</li>
            <li>3 BHK Units – Rs 8 Lakhs</li>
            <li>4 BHK Units – Rs 10 Lakhs</li>
          </ul>

          {/* Allotment */}
          <h2 className="text-2xl font-bold mb-4">
            The Allotment Process: 3 Steps
          </h2>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <b>EOI Submission (April 2026) </b>: through{" "}
              <b>Sobha Limited's</b> online application form, choosing the unit,
              floor, and facade that you want.
            </li>
            <li>
              <b>Priority Allotment (May 10-20, 2026) </b>: EOI purchasers get
              the first opportunity to pick units before the general debut.
              Homes are given out based on the ranking number that was given at
              the time of the EOI application.
            </li>
            <li>
              <b>Booking Confirmation</b>: The EOI token amount (₹4 Lakhs to ₹15
              Lakhs) will be applied to the 10% booking deposit to secure the
              unit.
            </li>
          </ul>

          {/* Payment */}
          <h2 className="text-2xl font-bold mb-4">Payment Structure</h2>

          <p className="mb-4">
            The <b>Sobha One World Payment Plan</b> is easy on the wallet. When
            you book, you pay a small deposit. The rest is paid in steps as the
            building goes up. The last payment is due when the item is picked
            up. People who buy things can pay more easily, clearly, and in more
            ways. Here is the plan for payment.
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>10% for Booking</li>
            <li>10% during structure completion</li>
            <li>80% for Construction-Linked Instalments</li>
          </ul>

          <p className="mb-4">
            This plan makes it easy for customers to buy things and gives them
            financial freedom.
          </p>

          {/* Update */}
          <h2 className="text-2xl font-bold mb-4">
            Most recent update: January 2026
          </h2>

          <p className="mb-4">
            One of the most popular real estate companies in India is{" "}
            <a href="https://www.sobha.com/" rel="nofollow" target="_blank">
              <b>Sobha Limited</b>
            </a>
            , which had its best sales in early 2026. It has been around for
            more than 30 years and has finished more than 500 projects since
            1995. It is now in 27 towns in 14 states. Sobha is known for its
            unique in-house approach to planning and building. It guarantees
            high quality and on- time delivery, setting the bar for success in
            the Indian real estate market.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Hoskote and East Bengaluru's Historical Growth: The Change to
            Neo-Whitefield
          </h2>

          {/* Paragraphs */}
          <p className="mb-4">
            The area around Hoskote, Budigere, and Whitefield has changed a
            great deal as <b>Bengaluru</b> has grown. The area around the old
            "New Fort" (Hosa Kote) and Hoskote Lake used to be a quiet town.
            Now, it is an important part of the city's eastern edge and is often
            called Neo-Whitefield.
          </p>

          <p className="mb-4">
            In the early 2000s, trade and farming were important. <b>Hoskote</b>{" "}
            was a stop on the Old Madras Road (NH-75), which was a trade path.
            People went to Hoskote Lake to watch birds and the area was mostly
            farms and shops. Whitefield began to grow as an IT hub, but Hoskote
            stayed quiet and rural.
          </p>

          <p className="mb-4">
            <b>Whitefield and ITPL population:</b> A lot of people moved into{" "}
            <b>Whitefield and ITPL</b>, which caused land prices rises up. As a
            result, big companies like Volvo, Honda and Scania built big plants
            in the Hoskote Narsapura area. This meant that leaders and
            professionals needed places to live, which is how Hoskote came to be
            a mix of work and peaceful living.
          </p>

          <p className="mb-4">
            <b>Institutional and social growth:</b> The area has important
            places like National Public School (ITPL), MVJ Medical College, and
            Orion Uptown Mall. These things helped Hoskote change from an
            industrial town to a top place for tech executives and rich families
            to live.
          </p>

          <p className="mb-4">
            <b>Neo-Whitefield in 2026 and Infrastructure:</b> Hoskote will be a
            modern town that can take care of itself by 2026. With Hoskote as
            its center, new roads like the Satellite Town Ring Road (STRR) and
            the Bengaluru–Chennai Motorway (NE- 7) have made a "Wealth Corridor"
            that has helped both business and private growth.
          </p>

          <p>
            The Purple Line Metro at Kadugodi (15 minutes away) and plans for a
            Double-Decker Metro from KR Puram to Hoskote have made it easier to
            get around. The 300-acre Tavarekere Data Centre Park has attracted
            tech companies from around the World, making the Hoskote-Budigere
            area one of the best places to invest in East Bengaluru.
          </p>
        </div>
      </div>
    </section>
  );
}
