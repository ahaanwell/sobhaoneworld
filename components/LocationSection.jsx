/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const landmarks = [
  { label: "Outer Ring Road", detail: "Immediate Access" },
  { label: "Sarjapur Road", detail: "10–15 Minutes" },
  { label: "Electronic City", detail: "25–30 Minutes" },
  { label: "Koramangala", detail: "20 Minutes" },
];

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
          Location &amp; Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="mb-5 space-y-6 text-gray-800 leading-7">
          <p>
            
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

        
      </div>
    </section>
  );
}
