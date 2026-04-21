/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";


const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31091.814875024134!2d77.79682104999999!3d13.068936599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0578b64bda1b%3A0x1724b6485a5f2f88!2sHoskote%2C%20Karnataka%20562114!5e0!3m2!1sen!2sin!4v1776447698006!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white pt-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location & Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="mb-5 space-y-6 text-gray-700 leading-relaxed">
          <p>
            The <b>Sobha One World</b> is in <b>Hoskuru, Hoskote, close to the Hoskote</b> Bus Stand in East Bangalore. It is in an area of the
city that is growing quickly. <b>Whitefield, KR Puram, and Old Madras Road</b> are all close to the project. It is also close to
important business and manufacturing places, like the Aerospace SEZ and ITPL.
          </p>

          
        </div>

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

        <div className="text-gray-800 flex justify-between mt-4">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Address</h2>

            <p className="leading-7">
              <strong>Sobha One World</strong>
              <br />
              Sarakariguttahalli Village, Hoskote, <br /> Bengaluru Rural District,<br /> 
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
                <strong>Google Plus Code:</strong> 3Q4F+V9, Bengaluru, Karnataka 562114
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 text-gray-700 leading-relaxed">

  <h2 className="text-2xl font-bold mb-6">
    Hoskote-Whitefield (East Bangalore growing corridor) micro-market
  </h2>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Whitefield, ITPL, and Yeshwanthpur are all close to work.</li>
    <li>Key roads: Direct connection with NH-75 (Old Madras Road) and Satellite Town Ring Road (STRR).</li>
    <li>Easy access to the metro: Kadugudi Whitefield Station (Purple Line) is close by, and a new double-decker metro is on the way.</li>
  </ul>

  <h2 className="text-2xl font-bold mb-4">
    Location Advantages of Sobha One World
  </h2>

  <p className="mb-4">
    The best thing about this project is where it is being built. Hoskote is in "East" Bangalore, which means it is away
    from the noise of the city and in the middle of nature. It is also easily accessible to major job centers. It is close to the
    533–567 km-long NH-75 road, which makes sure that you can drive through the city without any problems.
  </p>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>5 to 10 minutes from NH 75 and the Satellite Town Ring Road</li>
    <li>Whitefield and Hoskote Industrial Areas are easy to get to.</li>
    <li>
      The new Double Decker Metro and Tavarakere Data Centre Park are close by. Narayana Olympiad School, Prerana
      International School, and Paripoorana Prajna International School are nearby schools. Kempanna Hospital, Ashwini
      Multispeciality Hospital, and Siliconcity Hospitals in Hoskote are nearby hospitals. Orion Uptown Mall, Prestige
      Forum Mall, and Nexus Whitefield are nearby shopping malls.
    </li>
  </ul>

  <h2 className="text-2xl font-bold mb-4">
    Connecting to Sobha One World
  </h2>

  <p className="mb-4">
    Key parts of East Bangalore are easy to get to from the Hoskote project by car. Roadworks that are still going on and
    ideas for the future may make it easier for people who move a lot or head to work every day.
  </p>

  <p className="mb-4">
    Many people think this area is a good place to live or invest for the long run because it is well connected, but it
    depends on approvals and market conditions.
  </p>

  <h3 className="text-xl font-semibold mb-4">Connectivity Snapshot:</h3>

  <div className="overflow-x-auto mb-6">
    <table className="w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Key Infrastructure</th>
          <th className="border border-gray-300 px-4 py-2">Distance | Travel Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Kempegowda International Airport (KIAL)</td>
          <td className="border border-gray-300 px-4 py-2">39 km | 45 min</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Whitefield Railway Station</td>
          <td className="border border-gray-300 px-4 py-2">10.5 km | 18 min</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Kadugudi Metro Station</td>
          <td className="border border-gray-300 px-4 py-2">11.9 km | 17 min</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Whitefield (ITPL Zone)</td>
          <td className="border border-gray-300 px-4 py-2">12.3 km | 25 min</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-xl font-semibold mb-4">Airport Connectivity</h3>

  <p className="mb-4">
    It takes about 28 km to get to Kempegowda International Airport. It takes 45 minutes to get there on NH 648
    (Hoskote-Devanahalli Road) and NH 75 (Old Madras Road).
  </p>

  <p className="mb-2">How far away? About 28 km</p>
  <p className="mb-2">It takes about 45 minutes to drive there.</p>

  <p className="mb-6">
    You can take the BMTC Vayu Vajra airport bus KIAS-5G, which goes straight from Gottigere, or a taxi from Hoskote or
    a nearby town like Whitefield.
  </p>

  <h3 className="text-xl font-semibold mb-4">Connections to the Metro</h3>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Kadugodi-Whitefield (near Police Rural Quarters) is the Bengaluru Metro stop that is currently open.</li>
    <li>Current metro point: Kadugudi-Whitefield</li>
    <li>About 8.4 km away from Hoskote.</li>
    <li>A plan is being made to extend the Purple Line Double-Decker Metro Phase 2 (pending official changes).</li>
    <li>It might be easier to get to IT hubs and other important parts of the city if the project grows in the future.</li>
  </ul>

  <h3 className="text-xl font-semibold mb-4">Bus and public transport</h3>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>There are daily BMTC buses that go from Hoskote to important parts of Bangalore.</li>
    <li>The ways to get to KR Puram, Whitefield, Sarjapur Road, and other close IT routes</li>
    <li>
      About 15 to 25 minutes (depending on traffic) is how long it usually takes to get to the ITPL Zone or Brigade Tech
      Park.
    </li>
    <li>Services run all the way through</li>
  </ul>

  <h3 className="text-xl font-semibold mb-4">Road Connectivity</h3>

  <p className="mb-4">
    One of the best things about the Hoskote-Whitefield belt is that it is easy to get to by road. The ORR connects East
    Bangalore, making the journey easier.
  </p>

  <h4 className="text-lg font-semibold mb-2">Important Road Links</h4>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Road connecting Hoskote, Whitefield, and Sarjapur (a straight route to the IT sector)</li>
    <li>
      You can get to the airport and important areas like Whitefield, Shivajinagar, and KR Puram from National Highway 75
      (NH-75) and SH 35.
    </li>
    <li>
      Access to the ITPL Zone (a developing business and IT area; effects will depend on how things develop in the future)
    </li>
  </ul>

  <h4 className="text-lg font-semibold mb-2">Upcoming improvements</h4>

  <ul className="list-disc pl-6 space-y-2">
    <li> Purple Line Phase 2 Extension Plan</li>
    <li> Making the Peripheral Ring Road (PRR) longer</li>
  </ul>

  <p className="mt-6">
    Overall, the area is very easy to get to by car, and things may get even better as more roads and transportation are
    built.
  </p>


  <h2 className="text-2xl font-bold my-6">
    Market Comparison of Hoskote with Whitefield
  </h2>

  <div className="overflow-x-auto mb-8">
    <table className="w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">Whitefield</th>
          <th className="border border-gray-300 px-4 py-2">Hoskote</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Market Phase</td>
          <td className="border border-gray-300 px-4 py-2">Mature</td>
          <td className="border border-gray-300 px-4 py-2">High-Growth</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Avg. Price (2026)</td>
          <td className="border border-gray-300 px-4 py-2">₹ 16,000</td>
          <td className="border border-gray-300 px-4 py-2">₹10,400 - ₹14,500</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Open Space</td>
          <td className="border border-gray-300 px-4 py-2">lt'20 %</td>
          <td className="border border-gray-300 px-4 py-2">lt'70%</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Best for</td>
          <td className="border border-gray-300 px-4 py-2">High Rental Income</td>
          <td className="border border-gray-300 px-4 py-2">High Capital Gains</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold mb-6">
    Reasons to choose Hoskote for real estate investment
  </h2>

  <p className="mb-4 font-semibold">1. "Neo-Whitefield Movement."</p>

  <p className="mb-6">
    The rise of the <b>Whitefield</b> IT and business areas is good for Hoskote. Many workers with a lot of money are drawn to these places. Since most of the homes in Whitefield are business or very expensive (₹13,800+ per sq. ft.), Hoskote is a nearby private area with high-end homes that are more affordable.
  </p>

  <p className="mb-4 font-semibold">2. High Capital Appreciation (22-30% YoY)</p>

  <p className="mb-4">
    Whitefield is already a busy and built-up area, but Hoskote is still growing and changing.
  </p>

  <p className="mb-2">
    Price Rise: In 2021, the average price of a home was about ₹4,500 per square foot. By 2026, it was between ₹7,400 and ₹12,000.
  </p>

  <p className="mb-6">
    Upside for investors: Prices are expected to rise by about 22–30% a year as the area becomes a well planned center for high-end homes.
  </p>

  <p className="mb-4 font-semibold">3. Better public facilities and CBSE schools</p>

  <p className="mb-4">
    Hoskote is now known as a "School Hub," which means that lots of families like to live there.
  </p>

  <p className="mb-2">
    Narayana Olympiad School, Prerana International School, and Chanakya Public School are just a short walk away.
  </p>

  <p className="mb-6">
    A lot of well known hospitals are close by, like Siliconcity Hospitals (12 minutes away) and MVJ Hospitals (15 minutes away).
  </p>

  <p className="mb-4 font-semibold">4. Smart connections (the "30-Minute City")</p>

  <p className="mb-4">
    With fewer traffic lights, NH-75 and STRR make it easy to get to important places from Hoskote.
  </p>

  <p className="mb-2">
    Work: It takes around 15 to 20 minutes to get to Brigade Tech Park or the ITPL area.
  </p>

  <p className="mb-2">
    Travel: NH-75 makes it easy to get to Kempegowda International Airport, which is about 45 minutes away.
  </p>

  <p className="mb-6">
    Rail: The close Whitefield Railway Station is being improved, which will make it easy to get around the city.
  </p>

  <p className="mb-4 font-semibold">5. High rental yields (3.5% to 5%)</p>

  <p className="mb-4">
    The need for renting houses has grown because more IT workers are moving to the area.
  </p>

  <p className="mb-2">
    Prices: A three-bedroom house in a good gated neighbourhood costs about ₹35,000 to ₹45,000 a month to rent.
  </p>

  <p className="mb-6">
    Demand: There are still a lot of people looking to rent in Whitefield because many people work there and want to live close to their jobs.
  </p>

  <p className="mb-4 font-semibold">6. Plans for "green" city growth</p>

  <p className="mb-6">
    According to the BMDA master plan, Hoskote is one of the few places in East Bangalore that will not become too crowded and will not have too many big buildings.
  </p>

  <p className="mb-2">
    Open Spaces: Up to 65% of the land in new cities like Sobha One World is used for parks and other open spaces.
  </p>

  <p className="mb-6">
    Lifestyle: The air is cleaner, and there is less traffic here than in busy places like Whitefield or KR Puram.
  </p>

  <h2 className="text-2xl font-bold mb-4">Hoskuru</h2>
  <Image
  src="/images/hoskuru.webp"
  alt="Hoskuru"
  className="w-full h-auto mb-6"
  priority
  width={800}
  height={500}
  />
  <p className="mb-6">
    Along with Budigere, <a href="https://en.wikipedia.org/wiki/Huskur,_Bengaluru_East" rel="nofollow" target="_blank"><b>Hoskuru</b></a> has become an important place for both homes and companies in East Bengaluru. It will have grown into a rising "Neo-Whitefield" route by 2026, from a small town on the edge of town. It's now a high-potential.
  </p>

  <p className="mb-6">
    "Golden Triangle," which includes Whitefield as a tech hub and the big aircraft and industrial SEZs in the northeast.
  </p>

  <p className="mb-6">
    Both the Satellite Town Ring Road (STRR) and the Bengaluru–Chennai Motorway have helped Hoskote grow. These roads make it easy for rich people and top IT workers who want to live a modern life away from the busy city to get there.
  </p>

  <h2 className="text-2xl font-bold mb-4">Hoskote</h2>
  <Image
  src="/images/hoskote.webp"
  alt="Hoskote"
  className="w-full h-auto mb-6"
  priority
  width={800}
  height={500}
  />
  <p className="mb-6">
    <a href="https://en.wikipedia.org/wiki/Hoskote" rel="nofollow" target="_blank"><b>Hoskote</b></a> isn't just a "developing area" anymore. People with a lot of money and IT workers who want to live away from the busy Whitefield area like to live there. The three main job hubs that are helping this growth are the Whitefield IT area, which has been around for a while, the Narasapura–Hoskote industrial zone, which is home to big companies like Volvo and Honda, and the new 300-acre Tavarekere Data Centre Park. By 2026, the area will be a good choice for people who want to buy a home or sell.
  </p>

  <p className="mb-6">
    The Bangalore Rural Planning Authority is in charge of Hoskote, which is one of the East Bangalore places that is growing the fastest. There are now homes and businesses in the area, which used to be a small, quiet town.
  </p>

  <p className="mb-6">
    Industrial places, IT parks, and the soon-to-be-built Metro network all help it grow. In the last ten years, more homes have been built here thanks to better roads and high demand from nearby IT hubs.
  </p>

  <h3 className="text-xl font-semibold mb-4">Highlights close by</h3>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>The Whitefield railway is about 8.2 km long.</li>
    <li>Around 11 km is the ITPL zone.</li>
    <li>8 to 9 km away is KR Puram.</li>
  </ul>

  <h3 className="text-xl font-semibold mb-4">Why Hoskote is good for living in a high-rise</h3>

  <p className="mb-6">
    There are plans to widen the streets and join the roads in this area, which makes it perfect for modern township projects.
  </p>

  <h3 className="text-xl font-semibold mb-4">The history of Hoskote</h3>

  <p className="mb-6">
    Hoskote started out as a small town on the edge of East Bangalore. More homes could be built over time thanks to new roads and lots of land, especially after the city's IT industry grew. It is now becoming a modern place with businesses, homes, and good roads.
  </p>

  <h3 className="text-xl font-semibold mb-4">Advantages of Location:</h3>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>NH-75 and STRR make it easy to get to the important places.</li>
    <li>Not far from the Whitefield–KR Puram route</li>
    <li>The southern parts of the city can be reached from SH 35.</li>
    <li>Transport and roads are going to be upgraded in the future to make connections better.</li>
    <li>IT hubs close to Hoskote</li>
    <li>15 km to the ITPL Zone</li>
    <li>Brigade Tech Gardens is 20 km away.</li>
    <li>GR Tech Park is 14 km away.</li>
    <li>18 km away is Prestige Tech Zone.</li>
    <li>Bagmane Tech Park is 21 km away.</li>
  </ul>

  <h3 className="text-xl font-semibold mb-4">Why do people like Hoskote better?</h3>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>From place to place and project to project, prices may be lower than in older IT areas.</li>
    <li>Easy access to hospitals, schools, and other things you need every day</li>
    <li>Nearby are shops and places to hang out.</li>
    <li>More open land lets people live in bigger towns and makes planning easier.</li>
    <li>If the market is right, there are good chances for long-term growth.</li>
  </ul>

  <p className="mb-6">
    A Sobha building close to Hoskote called Sobha Dream Acres The Royal Pavilion at Sobha Sobha Neopolis, Sobha Lake Garden, Sobha Crest
  </p>

  <p className="mb-6">
    Overall, Hoskote is growing quickly, with better services and roads, and people want to buy houses. As it's close to Whitefield and KR Puram, it's one of the best places to buy in Bangalore.
  </p>

  <h2 className="text-2xl font-bold mb-4">Bangalore</h2>
  <Image
  src="/images/bangalore.webp"
  alt="Bangalore"
  className="w-full h-auto mb-6"
  priority
  width={800}
  height={500}
  />
  <p className="mb-6">
    <a href="https://www.incredibleindia.gov.in/en/karnataka/bengaluru" rel="nofollow" target="_blank"><b>Bangalore</b></a> is still one of the real estate markets in India that is growing the fastest. East Bangalore is now a famous place to put your money. Better roads, good connections, and being close to big tech parks are all things that are making property values rise. The area is a top choice for renters and investors looking for good returns and long-term value because there are many jobs available, and living there is easy.
  </p>

  <p className="mb-4">
    <b>Good Roads</b>: Bangalore is easier to get to than many other Indian towns thanks to its new 74 km Peripheral Ring Road (PRR), the 60.3 km to 567 km National Highway-75 (NH-75), and the smooth 60 km Outer Ring Road (ORR).
  </p>

  <p className="mb-4">
    <b>The "Neo Whitefield" Effect:</b> Whitefield is becoming a bigger business district, which makes more people want to buy homes in Hoskote, which is close by.
  </p>

  <p className="mb-4">
    <b>More Value for Money:</b> Luxury townships in Bangalore are cheaper (around ₹6,000 to ₹15,000 per sq. ft.) than those in places like Mumbai or Chennai. For the same price, you get more room and a better quality of life.
  </p>

  <p>
    High-income renters are drawn to areas near big tech companies, which makes them a popular choice for people who want to buy homes to rent out.
  </p>



</div>
        
      </div>
    </section>
  );
}
