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

      <div className="space-y-10 text-gray-800 mb-5">

</div>


        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sattav Aaranya"
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

      </div>
    </section>
  );
}