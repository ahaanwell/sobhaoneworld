"use client";
import DownloadActions from "@/components/DownloadActions";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function LocationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31091.814875024134!2d77.79682104999999!3d13.068936599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0578b64bda1b%3A0x1724b6485a5f2f88!2sHoskote%2C%20Karnataka%20562114!5e0!3m2!1sen!2sin!4v1776447698006!5m2!1sen!2sin";

  return (
    <>
      <main className="w-full bg-white">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-0">
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            Sobha One World Location
          </h1>
          <DownloadActions />
          <div className="py-8 text-gray-700 leading-relaxed">
            <p className="mb-6">
              <a href="https://www.sobhaoneworld.gen.in/">
                <b>Sobha One World</b>
              </a>{" "}
              is ideally positioned in Hoskote, East Bangalore, right along the
              prominent <b>Old Madras Road (NH-75)</b> and directly opposite the
              Hoskote Toll Plaza. This prime address, located in
              <b>Karnataka – 562114</b>, places the project at the center of one
              of Bangalore’s fastest-growing residential corridors. Spread
              across a massive <b>300-acre</b> integrated township (with Phase 1
              covering 48 acres), the development enjoys excellent connectivity
              and is rapidly becoming a preferred destination for modern
              homebuyers.
            </p>
            <p className="mb-6">
              One of the biggest advantages of this location is its seamless
              access to major IT hubs. Key employment zones such as{" "}
              <b>
                Whitefield (approx. 11 km), ITPL (around 15 km), Bagmane Tech
                Park (17 km), RMZ Ecospace (18 km)
              </b>
              , and nearby tech offices like Laptech IT Services (10 km) are all
              within comfortable driving distance. This connectivity makes Sobha
              One World especially attractive for IT professionals looking to
              reduce commute time and maintain a better work-life balance.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Why Location Matters in Real Estate
            </h2>

            <p className="mb-6">
              The location of a property plays a crucial role in determining its
              long-term value, convenience, and demand. Homes situated close to
              essential facilities such as workplaces, schools, hospitals,
              shopping centers, and public transport tend to appreciate faster
              and attract more buyers.
            </p>

            <p className="mb-6">
              In Bangalore, <b>Hoskote in East Bangalore</b> is emerging as a
              highly promising residential destination. The area offers a
              perfect mix of strong road connectivity, improving infrastructure,
              and relatively affordable property prices compared to central city
              zones. This makes it an ideal choice for both homebuyers and real
              estate investors looking for future growth potential.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Sobha One World Address – Prime Location in Hoskote
            </h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
              <div className="w-full h-[380px] md:h-[460px]">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sobha One World location map — Bellandur, Bangalore"
                  aria-label="Google Maps showing Sobha One World location in Bellandur, Bangalore"
                />
              </div>

              <Link
                href="https://maps.app.goo.gl/Eoijt8RcFfXcMQHR9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Know more about Sobha One World location in Bellandur Bangalore"
                className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
              >
                Know More About Location
              </Link>
            </div>

            <div className="text-gray-800 flex justify-between py-4">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Project Address</h2>

                <p className="leading-7">
                  <strong>Sobha One World</strong>
                  <br />
                  Sarakariguttahalli Village, Hoskote, <br /> Bengaluru Rural
                  District,
                  <br />
                  East Bangalore, Karnataka-562114.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Landmark and Map Details
                </h3>

                <div className="space-y-2">
                  <p>
                    <strong>Landmark:</strong> Opposite Hoskote Toll Plaza
                  </p>
                  <p>
                    <strong>Coordinates:</strong> 13.0669° N, 77.7983° E
                  </p>
                  <p>
                    <strong>Google Plus Code:</strong> 3Q4F+V9, Bengaluru,
                    Karnataka 562114
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6">
              <b>Sobha One World</b> is strategically located in
              Sarakariguttahalli, Hoskote, Bangalore, Karnataka – 562114.
              Positioned in the rapidly developing East Bangalore corridor, the
              project enjoys proximity to key social infrastructure such as
              reputed schools, hospitals, retail outlets, and daily convenience
              stores.
            </p>

            <p className="mb-6">
              This well-connected address ensures residents experience a
              comfortable and convenient lifestyle, with everything they need
              located within easy reach.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Sobha One World Connectivity Overview
            </h2>

            <p className="mb-4">
              One of the strongest advantages of <b>Sobha One World</b> is its
              excellent connectivity to major parts of Bangalore. The project is
              well-linked through prominent highways and state roads, including:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>NH 75 (Old Madras Road)</li>
              <li>State Highway 35 (SH 35)</li>
              <li>SH 82 and SH 95</li>
            </ul>

            <p className="mb-6">
              Residents can easily commute using BMTC buses, metro services, and
              app-based cabs, ensuring smooth travel across the city. Key
              transport hubs such as the airport, railway stations, and bus
              terminals are all accessible without difficulty.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Air Connectivity – Easy Access to the Airport
            </h2>
            <Image
              src="/images/air-connectivity.webp"
              alt="Air Connectivity"
              className="w-full h-auto mb-6"
              priority
              width={800}
              height={500}
            />

            <p className="mb-4">
              Sobha One World offers convenient access to Kempegowda
              International Airport via NH 75 and connecting ring roads. The
              travel time is approximately 45 minutes, making it suitable for
              frequent travelers and professionals.
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Kempegowda International Airport – 39 km</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">
              Metro Connectivity – Seamless City Travel
            </h2>

            <Image
              src="/images/metro-connectivity.webp"
              alt="Metro Connectivity"
              className="w-full h-auto mb-6"
              priority
              width={800}
              height={500}
            />

            <p className="mb-4">
              The nearby Purple Line Metro enhances daily commuting by reducing
              travel time and avoiding road traffic congestion. The closest
              metro station is:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>
                Kadugodi Metro Station – approx. 11.9 km (around 15–20 minutes
                drive)
              </li>
            </ul>

            <p className="mb-6">
              This connection allows residents to travel efficiently to major
              areas like Whitefield, KR Puram, and central Bangalore.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Railway Connectivity – Convenient Train Access
            </h2>

            <Image
              src="/images/railway-connectivity.webp"
              alt="Railway Connectivity"
              className="w-full h-auto mb-6"
              priority
              width={800}
              height={500}
            />

            <p className="mb-4">
              For those who rely on rail transport, Sobha One World is well
              connected to nearby railway stations. The closest option is:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>
                Whitefield Railway Station – approx. 10.5 km (around 15–20
                minutes)
              </li>
            </ul>

            <p className="mb-6">
              This makes intercity and daily train travel easy and accessible
              for residents.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              Road Connectivity – Smooth Travel Across Bangalore
            </h2>

            <Image
              src="/images/road-connectivity.webp"
              alt="Road Connectivity"
              className="w-full h-auto mb-6"
              priority
              width={800}
              height={500}
            />

            <p className="mb-4">
              Sobha One World enjoys strong road connectivity through a network
              of highways and internal roads. Daily commuting is further
              simplified with public transport availability.
            </p>

            <ul className="list-disc ml-6">
              <li>Hoskote Bus Stop – approx. 1.1 km</li>
            </ul>

            <p className="mt-4">
              BMTC buses frequently operate in this area, providing direct
              access to different parts of Bangalore. The presence of wide roads
              and reduced congestion ensures a smooth and hassle-free driving
              experience.
            </p>
          </div>
          <div className="pb-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
              Top Places to Visit Near Sobha One World, Hoskote
            </h2>

            <p className="mb-6">
              Living at Sobha One World in Hoskote not only offers a premium
              residential lifestyle but also places you close to some of
              Bangalore’s most popular attractions. From lush gardens and
              historic landmarks to modern shopping destinations and educational
              museums, there are plenty of options for weekend outings, family
              trips, and relaxation.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              1. Lalbagh Botanical Garden – 28.2 km
            </h3>

            <p className="mb-4">
              Lalbagh Botanical Garden is one of Bangalore’s most iconic green
              spaces, known for its vast collection of rare plants, vibrant
              flowers, and centuries-old trees. Established during the 18th
              century, this garden spreads across a large area and offers scenic
              walking paths, serene lakes, and beautifully maintained
              landscapes.
            </p>

            <p className="mb-4">
              One of its main highlights is the grand flower show held twice a
              year, attracting thousands of visitors. Whether you enjoy nature
              walks or photography, Lalbagh is a peaceful retreat from the
              city’s hustle.
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Timings: 6:15 AM to 7:00 PM</li>
              <li>Entry Fee: ₹50 (Adults), ₹20 (Children)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              2. Bangalore Palace – 27.1 km
            </h3>

            <p className="mb-4">
              Bangalore Palace is a stunning architectural landmark that
              reflects royal elegance and historical charm. Built in the late
              19th century, the palace showcases Tudor-style architecture
              inspired by European castles.
            </p>

            <p className="mb-4">
              With its majestic towers, wooden interiors, vintage furniture, and
              royal artifacts, the palace offers visitors a glimpse into
              Bangalore’s regal past. It’s an excellent place for history lovers
              and tourists interested in heritage sites.
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>
                Entry Fee: ₹230 (Indian Citizens), ₹460 (Foreign Visitors)
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              3. Cubbon Park – 21.3 km
            </h3>

            <p className="mb-4">
              Located in the heart of Bangalore, Cubbon Park is a vast green
              oasis ideal for relaxation and outdoor activities. The park is
              filled with lush greenery, shaded pathways, and open lawns, making
              it perfect for morning walks, jogging, or spending quality time
              with family.
            </p>

            <p className="mb-4">
              In addition to its natural beauty, Cubbon Park houses several
              attractions such as a children’s play area, toy train, museums,
              and a public library. It’s a favorite spot for both locals and
              tourists looking to unwind.
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Timings: 6:15 AM to 6:00 PM</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              4. Phoenix Marketcity – 15.2 km
            </h3>

            <p className="mb-4">
              Phoenix Marketcity is one of the largest and most popular shopping
              malls near Sobha One World. It offers a complete lifestyle
              experience with a wide range of retail stores, restaurants, cafes,
              and entertainment options.
            </p>

            <p className="mb-4">
              From international brands and fashion outlets to multiplex cinemas
              and food courts, this mall is a perfect destination for shopping,
              dining, and weekend entertainment with friends and family.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              5. HAL Heritage Centre & Aerospace Museum – 23.9 km
            </h3>

            <p className="mb-4">
              The HAL Heritage Centre & Aerospace Museum is a fascinating
              destination, especially for those interested in aviation and
              technology. It features real aircraft, fighter jets, helicopter
              models, and interactive exhibits that explain the science behind
              aviation.
            </p>

            <p className="mb-4">
              This museum is both educational and entertaining, making it a
              great place for children, students, and enthusiasts who want to
              explore the world of aerospace.
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Entry Fee: ₹70 (Adults), ₹30 (Children)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">
              Why These Locations Add Value to Sobha One World
            </h2>

            <p className="mb-4">
              The presence of such diverse attractions near Sobha One World
              significantly enhances the overall living experience. Residents
              can enjoy:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Easy access to green spaces and parks for relaxation</li>
              <li>Educational outings for children and families</li>
              <li>Premium shopping and entertainment hubs nearby</li>
              <li>Cultural and historical landmarks within reach</li>
            </ul>

            <p>
              This combination of convenience, lifestyle, and connectivity makes
              Sobha One World an ideal choice for modern homebuyers looking for
              both comfort and accessibility in East Bangalore.
            </p>
          </div>
          <div className="pb-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">
              About Hoskote – A Rapidly Growing Residential Hub in East
              Bangalore
            </h2>

            <Image
              src="/images/hoskote.webp"
              alt="Hoskote"
              className="w-full h-auto mb-6"
              priority
              width={800}
              height={500}
            />

            <p className="mb-4">
              <a href="https://en.wikipedia.org/wiki/Hoskote" rel="nofollow" target="_blank"><b>Hoskote</b></a>, located in the eastern corridor of Bangalore, is quickly
              emerging as one of the most promising residential destinations in
              the city. Often referred to as the “next Whitefield,” this area
              has been witnessing rapid infrastructure development, including
              new residential townships, commercial spaces, and improved road
              networks.
            </p>

            <p className="mb-6">
              What makes Hoskote particularly attractive is its balance between
              affordability and future growth potential. Property prices here
              are still comparatively lower than established areas like
              Whitefield and Marathahalli, making it an excellent opportunity
              for both homebuyers and investors. With continuous development and
              increasing demand, real estate values in Hoskote are expected to
              appreciate significantly in the coming years.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Connectivity Advantages of Hoskote
            </h3>

            <p className="mb-6">
              One of the biggest strengths of Hoskote is its excellent
              connectivity to major parts of Bangalore. The region benefits from
              well-planned, wide roads that ensure smooth traffic movement,
              making daily commuting convenient for residents.
            </p>

            <p className="mb-6">
              Upcoming infrastructure projects such as the Satellite Town Ring
              Road (STRR) are set to further enhance connectivity, especially by
              reducing travel time to Kempegowda International Airport and other
              key locations. In addition, access to metro lines and nearby
              railway stations makes Hoskote a well-connected suburb for both
              work and travel.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Road Connectivity in Hoskote
            </h3>

            <p className="mb-4">
              Hoskote enjoys seamless connectivity through a network of major
              highways and state roads, making it easy to travel within and
              beyond Bangalore:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>
                State Highway 35 (SH 35) runs directly through Hoskote,
                connecting it to Whitefield and Sarjapur
              </li>
              <li>
                State Highway 82 (SH 82) links Hoskote to Chintamani and nearby
                towns
              </li>
              <li>
                State Highway 95 (SH 95) provides access to Malur and
                surrounding areas
              </li>
              <li>
                The Bangalore–Chennai Expressway (NE7) begins close to Hoskote,
                boosting long-distance connectivity
              </li>
              <li>
                National Highway 75 (NH 75 / Old Madras Road) is a major route
                passing through the area
              </li>
              <li>
                The upcoming Satellite Town Ring Road (STRR) will connect
                Hoskote to North Bangalore and other peripheral regions
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Metro Connectivity in Hoskote
            </h3>

            <p className="mb-6">
              Hoskote is currently connected to Bangalore’s metro network via
              the Purple Line, which allows residents to travel across the city
              while avoiding traffic congestion. The nearest operational metro
              stations are located in the Whitefield area.
            </p>

            <p className="mb-6">
              Additionally, a proposed metro extension from KR Puram to Hoskote
              is expected to significantly improve connectivity in the near
              future, making public transport even more convenient for daily
              commuters.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Airport Connectivity from Hoskote
            </h3>

            <p className="mb-6">
              Kempegowda International Airport is easily accessible from Hoskote
              via NH 648 and other connecting roads. The travel time is
              relatively short compared to many other parts of the city.
            </p>

            <p className="mb-6">
              Regular BMTC airport bus services operate in this region, offering
              a reliable and affordable mode of transport for frequent
              travelers.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Educational Institutions Near Sobha One World
            </h3>

            <p className="mb-4">
              Hoskote offers access to several reputed schools, making it a
              suitable location for families with children:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>OM Shree Public School – 350 meters</li>
              <li>Uzma English School – 350 meters</li>
              <li>Sri Vivekananda Vidya Kendra – 850 meters</li>
              <li>Sri Gnana Gangothri School – 4.1 km</li>
              <li>Montreal English School – 3.1 km</li>
              <li>Capstone High School – 4.9 km</li>
              <li>Citizens’ English School – 5.4 km</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              IT Hubs Near Sobha One World
            </h3>

            <p className="mb-4">
              For working professionals, especially in the IT sector, Hoskote
              offers convenient access to major tech parks and employment zones:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>ITPL (International Tech Park Bangalore) – 12.4 km</li>
              <li>EPIP Zone, Whitefield – 17.5 km</li>
              <li>Bagmane Tech Park – 18.9 km</li>
              <li>Embassy TechVillage – 20.5 km</li>
              <li>RMZ Ecospace – 22.3 km</li>
              <li>Laptech IT Services – 12.2 km</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Healthcare Facilities Near Sobha One World
            </h3>

            <p className="mb-4">
              Residents have access to several well-equipped hospitals and
              healthcare centers nearby:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Ashwini Hospital – 1.9 km</li>
              <li>Shivapriya Maternity Home – 1.8 km</li>
              <li>Taluk Government Hospital, Hoskote – 2.2 km</li>
              <li>Marthoma Mission Hospital – 2.2 km</li>
              <li>MVJ Medical College & Research Hospital – 5.1 km</li>
              <li>Sri Narayana Eye Care Hospital – 5.5 km</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Shopping and Entertainment Near Sobha One World
            </h3>

            <p className="mb-4">
              Hoskote residents can enjoy a variety of shopping and
              entertainment options within a short drive:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Phoenix Marketcity – 16.2 km</li>
              <li>Park Square Mall – 13.4 km</li>
              <li>VR Bengaluru – 17.3 km</li>
              <li>Nexus Whitefield – 15.3 km</li>
              <li>Dress Circle Mall – 13.5 km</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Key Distances from Sobha One World
            </h3>

            <p className="mb-4">
              Sobha One World enjoys a strategic location with easy access to
              important areas in Bangalore:
            </p>

            <ul className="list-disc ml-6 mb-6">
              <li>Whitefield – 11.6 km</li>
              <li>Varthur – 19.5 km</li>
              <li>Marathahalli – 20.6 km</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Why Hoskote is a Smart Investment Choice
            </h3>

            <p>
              Hoskote is steadily transforming into a modern residential hotspot
              with strong infrastructure growth, excellent connectivity, and
              increasing demand. Its affordability compared to central Bangalore
              locations, combined with proximity to IT hubs and upcoming
              projects, makes it an ideal destination for both end-users and
              investors.
            </p>

            <p className="mt-4">
              With planned developments and rising real estate value, investing
              in Hoskote today offers the potential for significant long-term
              returns while ensuring a comfortable lifestyle.
            </p>
          </div>
          <div className="py-6 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions – Sobha One World Location &
              Connectivity
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">
                1. Where is Sobha One World situated in Bangalore?
              </h3>
              <p>
                Sobha One World is strategically located in Hoskote, a
                fast-developing area in East Bangalore. The project lies close
                to Old Madras Road (NH 75), offering excellent access to key
                residential zones and commercial hubs across the city.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">
                2. What makes Hoskote a preferred residential location?
              </h3>
              <p>
                Hoskote is gaining popularity due to its well-planned
                infrastructure, wide roads, and relatively low traffic
                congestion compared to central Bangalore. The area also offers a
                peaceful environment while maintaining strong connectivity to
                major employment zones, making it ideal for families and
                professionals.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">
                3. How well is Sobha One World connected to Bangalore city?
              </h3>
              <p>
                Sobha One World enjoys strong connectivity through major
                highways, BMTC bus services, nearby railway stations, and access
                to the metro network. These multiple transport options ensure
                smooth and convenient travel to different parts of Bangalore.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-2">
                4. What is the distance from Sobha One World to Kempegowda
                International Airport?
              </h3>
              <p>
                Kempegowda International Airport is easily accessible from Sobha
                One World via well-connected road networks. Residents can also
                make use of BMTC airport bus services for a convenient and
                affordable travel option.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                5. Is investing in Sobha One World a good long-term decision?
              </h3>
              <p>
                Yes, Hoskote is experiencing rapid growth with upcoming
                infrastructure developments such as the Satellite Town Ring Road
                and metro expansion. These improvements are expected to boost
                property demand and increase real estate value over time, making
                Sobha One World a strong investment opportunity.
              </p>
            </div>
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
