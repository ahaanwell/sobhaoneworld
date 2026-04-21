/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "./images/gym.svg",    alt: "Gymnasium" },
  { id: 2,  name: "Swimming Pool",       image: "./images/swm.svg",    alt: "Swimming Pool" },
  { id: 3,  name: "Yoga Pavilion",       image: "./images/yoga.svg",   alt: "Yoga Pavilion" },
  { id: 4,  name: "Video Door Phone",    image: "./images/videos.svg", alt: "Video Door Phone" },
  { id: 5,  name: "Kids Activity Zone",  image: "./images/kids.svg",   alt: "Kids Activity Zone" },
  { id: 6,  name: "Mini Theater",        image: "./images/mine.svg",   alt: "Mini Theater" },
  { id: 7,  name: "Aerobics Room",       image: "./images/tennis.svg", alt: "Aerobics Room" },
  { id: 8,  name: "Indoor Games Room",   image: "./images/chess.svg",  alt: "Indoor Games Room" },
  { id: 9,  name: "Club House",          image: "./images/disco-ball.svg", alt: "Club House" },
  { id: 10, name: "Dance/Music",         image: "./images/dance.svg",  alt: "Dance/Music" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "./images/cctv.svg",   alt: "24/7 CCTV Monitoring" },
  { id: 12, name: "Jogging Track",       image: "./images/jog.svg",    alt: "Jogging Track" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities at Sobha One World
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

      <div className="space-y-4 text-gray-700 mb-5 leading-relaxed">
        <p>
          <b>Sobha One World</b> has great facilities for people of all ages, with a focus on sports, exercise, family time, and
everyday comfort. Some of the facilities are outside in the grass, but most of them are inside the building.
        </p>
        <p>
          It's planned that everything in the city is close by, making it a great place to walk, play, and unwind.
        </p>
        <p>
          People who live in <a href="https://www.sobhaoneworld.gen.in/"><b>Sobha One World Hoskote</b></a>, Hoskote, want more than just a room. Not just a house, it feels like a
full living place, with green, safe places that are designed to bring people together. It gives you a good mix between
work, play, and family life. The people who live there can enjoy warmth, ease, and a sense of togetherness.
        </p>
</div>


        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sobha One World"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
        <div className="py-8 text-gray-700 leading-relaxed">

  <h2 className="text-2xl font-bold mb-6">
    Some of the most-loved features at Sobha One World are listed below:
  </h2>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Children's Play Area</li>
    <li>Sports Facility</li>
    <li>Swimming Pool</li>
    <li>Maintenance Staff</li>
    <li>Waste Disposal</li>
    <li>Car Parking</li>
    <li>Power Backup</li>
    <li>Water Storage</li>
    <li>Lifts</li>
    <li>Wi-Fi Connectivity</li>
  </ul>

  <p className="mb-6">
    These things make everyday life easier and more pleasant.
  </p>

  <p className="mb-6">
    In general, <b>Sobha One World</b> is a good mix of fun, safety, and ease of use. It's designed for people who want a high-
    class life where everything is close by.
  </p>

  <h2 className="text-2xl md:text-3xl font-bold mb-6">
    Lifestyle & Wellness Zone
  </h2>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Clubhouse</li>
    <li>Gymnasium</li>
    <li>Yoga Deck</li>
    <li>Jogging Track</li>
    <li>Swimming Pool</li>
    <li>Indoor Games</li>
    <li>Active Zone</li>
    <li>Sports Facilities</li>
    <li>Badminton Court</li>
    <li>Basketball Court</li>
    <li>Table Tennis</li>
    <li>Cricket Practice</li>
    <li>Cycling Track</li>
    <li>Kids & Family Areas</li>
    <li>Kids Play Area</li>
    <li>Multipurpose Hall</li>
    <li>Amphitheatre</li>
    <li>Landscaped Gardens</li>
    <li>Senior Citizen Zone</li>
    <li>Convenience & Utilities</li>
    <li>Car Parking</li>
    <li>High-Speed Lifts</li>
    <li>Power Backup</li>
    <li>Water Storage</li>
    <li>Waste Disposal</li>
    <li>Maintenance Staff</li>
    <li>Safety & Security</li>
    <li>Smart home features</li>
    <li>High-speed internet</li>
    <li>24x7 CCTV surveillance</li>
    <li>Multi-layer security system</li>
    <li>State-of-the-Art Lifestyle</li>
  </ul>

  <p className="mb-6">
    The facilities are made for daily ease, exercise, and getting together with other people.
  </p>

  <h2 className="text-2xl md:text-3xl font-bold mb-6">
    Lifestyle Amenities
  </h2>

  <p className="mb-4">
    75,000 ft² There is a big, fancy center with dance rooms, a spa, party rooms, a café, and more.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>Cycling and jogging paths away from traffic</li>
    <li>Indoor games area for all ages</li>
    <li>Multipurpose hall for parties and events</li>
    <li>Outdoor BBQ areas for weekend fun</li>
    <li>Fully equipped gym with modern equipment</li>
    <li>Heated pool and kiddie pool</li>
    <li>Garden themes, a butterfly park, and green areas</li>
    <li>A play place for kids that looks like a treehouse</li>
    <li>24-hour CCTV protection with high-tech tools</li>
    <li>Facilities for collecting rainwater and treating it</li>
  </ul>

</div>
      </div>
    </section>
  );
}