/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import Image from "next/image";

function FloorPlanPage() {
  return (
    <>
      <main className="w-full bg-white">
        <div>
          <PageHero title={"Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            Sobha One World Floor Plan
          </h1>
          <DownloadActions />
          <div className="py-8 text-gray-700 leading-relaxed">
            <p className="mb-4">
              The{" "}
              <b>
                <a href="https://www.sobhaoneworld.gen.in/">Sobha One World</a>{" "}
                floor plan
              </b>{" "}
              is thoughtfully crafted to offer a perfect blend of space,
              comfort, and modern living. This premium township in Hoskote, East
              Bangalore, features a wide selection of{" "}
              <b>1, 2, 3, and 4 BHK luxury apartments</b>, designed to suit the
              needs of working professionals, growing families, and high-end
              homebuyers.
            </p>
            <p className="mb-4">
              The project spans a massive <b>300-acre</b> development and
              includes approximately{" "}
              <b>5,406 apartments across 18 high-rise residential towers.</b>{" "}
              Each tower follows a modern structure of 3 basements + ground
              floor + 53 upper floors (3B+G+53), ensuring elevated living
              experiences along with panoramic views of the surrounding
              cityscape.
            </p>
            <p className="mb-4">
              Apartment sizes range from{" "}
              <b>740 sq. ft. to around 2,500 sq. ft.</b>, offering multiple
              layout options that cater to different budgets, family sizes, and
              lifestyle preferences. Whether you are looking for a compact home
              or a spacious luxury residence, Sobha One World provides
              well-planned configurations for every requirement.
            </p>
            <Image
              src="/images/about-sobhaoneworld.webp"
              alt="Sobha One World Floor Plan"
              className="w-full h-auto mb-6"
              priority
              width={800}
              height={500}
            />
            <h2 className="text-2xl font-bold mb-4">
              Types of Apartment Floor Plans at Sobha One World
            </h2>

            <p className="mb-4">
              <b>Sobha One World</b> offers a wide variety of thoughtfully
              designed apartment layouts to suit different lifestyles, family
              sizes, and budget preferences. Buyers can choose from 1 BHK, 2
              BHK, 3 BHK, and 4 BHK apartments, each crafted with a strong focus
              on functionality, ventilation, and modern living comfort.
            </p>

            <p className="mb-4">
              All residences are designed following Vaastu principles, ensuring
              positive energy flow. The main entrances are typically aligned
              towards the North or East direction, while kitchens are
              strategically placed in the Southeast or Northwest, making these
              homes ideal for buyers who value traditional design harmony along
              with contemporary features.
            </p>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              Pre-Launch Availability Status
            </h3>

            <p className="mb-4">
              Currently, Sobha One World is in its pre-launch phase, and
              interested buyers can register through EOI (Expression of
              Interest) or submit enquiries to secure early access.
            </p>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              Available Unit Sizes and Status
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-3 py-2 text-left">Unit Type</th>
                    <th className="border px-3 py-2 text-left">Size Range</th>
                    <th className="border px-3 py-2 text-left">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">1 BHK Apartments</td>
                    <td className="border px-3 py-2">740 sq. ft.</td>
                    <td className="border px-3 py-2">EOI / Enquiry Open</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">2 BHK Apartments</td>
                    <td className="border px-3 py-2">1,070 – 1,200 sq. ft.</td>
                    <td className="border px-3 py-2">EOI / Enquiry Open</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">3 BHK Apartments</td>
                    <td className="border px-3 py-2">1,525 – 1,825 sq. ft.</td>
                    <td className="border px-3 py-2">EOI / Enquiry Open</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2">4 BHK Apartments</td>
                    <td className="border px-3 py-2">2,100 – 2,500 sq. ft.</td>
                    <td className="border px-3 py-2">EOI / Enquiry Open</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              1 BHK Apartment Floor Plan
            </h3>
            <Image
              src="/images/1bhk-large-floor-plan.webp"
              alt="1 BHK Apartment Floor Plan"
              className="w-1/2 h-auto mb-6"
              priority
              width={800}
              height={500}
            />
            <p className="mb-2">
              The <b>1 BHK apartments at Sobha One World</b> are designed to maximize
              space efficiency while maintaining comfort. These units are
              perfect for young professionals, first-time homebuyers, and
              investors looking for compact yet premium homes.
            </p>

            <p className="mb-2">Size starts from approximately 740 sq. ft.</p>
            <p className="mb-2">Smart and space-saving layout</p>

            <p className="font-medium mt-3">Key Features:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Private foyer entrance</li>
              <li>1 spacious bedroom</li>
              <li>1 well-designed bathroom</li>
              <li>Living and dining area</li>
              <li>Functional kitchen</li>
              <li>Balcony with outdoor view</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              2 BHK Apartment Floor Plan
            </h3>
            <Image
              src="/images/2bhk-large-floor-plan.webp"
              alt="2 BHK Apartment Floor Plan"
              className="w-1/2 h-auto mb-6"
              priority
              width={800}
              height={500}
            />
            <p className="mb-2">
              The 2 BHK units provide an excellent balance between space and
              affordability, making them suitable for small families and working
              couples.
            </p>

            <p className="mb-2">Size range: 1,070 sq. ft. to 1,200 sq. ft.</p>

            <p className="font-medium mt-3">Layout Options:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>2 BHK Standard – 1,070 sq. ft.</li>
              <li>2 BHK Premium – 1,200 sq. ft.</li>
            </ul>

            <p className="font-medium mt-3">Key Features:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Entry foyer for privacy</li>
              <li>2 bedrooms with good ventilation</li>
              <li>2 bathrooms</li>
              <li>Spacious living and dining area</li>
              <li>Modern kitchen</li>
              <li>Dedicated maid’s room</li>
              <li>2 balconies for natural light and airflow</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              3 BHK Apartment Floor Plan
            </h3>
            <Image
              src="/images/3bhk-large-floor-plan.webp"
              alt="3 BHK Apartment Floor Plan"
              className="w-1/2 h-auto mb-6"
              priority
              width={800}
              height={500}
            />

            <p className="mb-2">
              The 3 BHK apartments are designed for growing families who require
              more space and privacy. These layouts emphasize open living areas
              and efficient room placement.
            </p>

            <p className="mb-2">Size range: 1,525 sq. ft. to 1,825 sq. ft.</p>

            <p className="font-medium mt-3">Layout Options:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>3 BHK Standard – 1,525 sq. ft.</li>
              <li>3 BHK Premium – 1,825 sq. ft.</li>
            </ul>

            <p className="font-medium mt-3">Key Features:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Entrance foyer</li>
              <li>3 spacious bedrooms</li>
              <li>3 bathrooms</li>
              <li>Large living and dining area</li>
              <li>Kitchen with attached utility space</li>
              <li>2 balconies</li>
              <li>Additional maid’s room or study area</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              4 BHK Apartment Floor Plan
            </h3>
            <Image
              src="/images/3bhk-large-floor-plan.webp"
              alt="3 BHK Apartment Floor Plan"
              className="w-1/2 h-auto mb-6"
              priority
              width={800}
              height={500}
            />
            <p className="mb-2">
              The 4 BHK residences are built for luxury living, offering
              expansive interiors and high-end comfort. These homes are ideal
              for large families and premium buyers.
            </p>

            <p className="mb-2">Size range: 2,100 sq. ft. to 2,500 sq. ft.</p>

            <p className="font-medium mt-3">Layout Options:</p>
            <ul className="list-disc ml-6 mb-2">
              <li>4 BHK Standard – 2,100 sq. ft.</li>
              <li>4 BHK Luxury – 2,500 sq. ft.</li>
            </ul>

            <p className="font-medium mt-3">Key Features:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Grand foyer entrance</li>
              <li>4 large bedrooms</li>
              <li>4 modern bathrooms</li>
              <li>Spacious living area</li>
              <li>Kitchen with utility space</li>
              <li>3 balconies with open views</li>
              <li>Maid’s room or study room</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              Sobha One World Floor Plan PDF
            </h3>

            <p className="mb-4">
              The official floor plan PDF provides a detailed 2D layout of each
              apartment type. It allows buyers to clearly understand:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Room dimensions</li>
              <li>Space distribution</li>
              <li>Layout flow</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              Price Range of Apartments
            </h3>

            <ul className="list-disc ml-6 mb-4">
              <li>1 BHK – From ₹1.09 Crore onwards</li>
              <li>2 BHK – From ₹1.5 Crore onwards</li>
              <li>2 BHK Premium – From ₹1.73 Crore onwards</li>
              <li>3 BHK Standard – From ₹2.25 Crore onwards</li>
              <li>3 BHK Premium – From ₹2.7 Crore onwards</li>
              <li>4 BHK Standard – From ₹3.1 Crore onwards</li>
              <li>4 BHK Luxury – From ₹3.6 Crore onwards</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              Floor Plan Design & Architecture Highlights
            </h3>

            <p className="mb-2">
              The floor plan designs focus on maximum usability, ventilation,
              and privacy. Every apartment is carefully planned to avoid wasted
              space while ensuring a premium living experience.
            </p>

            <p className="font-medium mt-3">Key Design Advantages:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>All balconies face open external views</li>
              <li>Towers are positioned to prevent direct overlooking</li>
              <li>Hidden AC outdoor units for a clean exterior look</li>
              <li>Enhanced airflow for better ventilation</li>
              <li>Natural lighting across all rooms</li>
              <li>Wide corridors and smart layouts for daily convenience</li>
            </ul>

            <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
              Floor Plan Photos and Visual Understanding
            </h3>

            <p>
              High-quality floor plan images provide a clear visual
              understanding of each unit layout. These HD floor plan visuals
              help buyers:
            </p>

            <ul className="list-disc ml-6">
              <li>Understand room sizes accurately</li>
              <li>Visualize furniture placement</li>
              <li>Compare different configurations easily</li>
            </ul>
          </div>

          <div className="py-6 text-gray-700 leading-relaxed">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              FAQ
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              1. What apartment configurations are available in Sobha One World?
            </h2>

            <p className="mb-4">
              Sobha One World presents a wide range of thoughtfully designed
              residences, including 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments.
              These layouts are crafted to suit different lifestyle
              needs—whether you're a working professional, a nuclear family, or
              a larger household seeking spacious living.
            </p>

            <h2 className="text-xl font-semibold mb-4">
              2. What is the size range of Sobha One World apartments?
            </h2>

            <p className="mb-4">
              The project offers homes with sizes starting from approximately
              740 sq. ft. and going up to 2,500 sq. ft. This broad size range
              ensures that buyers can select a home that aligns with both their
              space preferences and investment budget.
            </p>

            <h2 className="text-xl font-semibold mb-4">
              3. Are the floor plans designed according to Vaastu principles?
            </h2>

            <p className="mb-4">
              Yes, all residences at Sobha One World are Vaastu-compliant, which
              is a key consideration for many homebuyers. The main entrances are
              positioned towards the North or East, while the kitchen areas are
              strategically located in the Southeast or Northwest directions,
              promoting positive energy flow and harmonious living.
            </p>

            <h2 className="text-xl font-semibold mb-4">
              4. How can buyers view and understand the floor plan layouts in
              detail?
            </h2>

            <p className="mb-4">
              To get a clear understanding of the apartment layouts, buyers can
              access the Sobha One World Floor Plan PDF. This document provides
              detailed 2D representations of each unit, including room
              dimensions, layout structure, and space utilization, helping
              buyers make informed decisions.
            </p>

            <h2 className="text-xl font-semibold mb-4">
              5. Do the apartments offer proper ventilation, natural light, and
              privacy?
            </h2>

            <p className="mb-2">
              Absolutely. The floor plans are intelligently designed to ensure
              maximum ventilation, ample natural light, and enhanced privacy.
              Key highlights include:
            </p>

            <ul className="list-disc ml-6">
              <li>Balconies facing open external views</li>
              <li>No direct unit-to-unit overlooking</li>
              <li>
                Strategically placed AC outdoor units to maintain a clean
                exterior look
              </li>
              <li>
                Efficient layouts that promote cross-ventilation and airflow
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default FloorPlanPage;
