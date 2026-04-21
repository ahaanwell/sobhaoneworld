import FaqClient from "./FaqClient";

const faqs = [
  {
    question: "1. Where is Sobha One World located?",
    answer:
      "Sobha One World is located in Hoskuru, Hoskote, East Bangalore, with convenient access to Whitefield, KR Puram, and Old Madras Road.",
  },
  {
    question: "When will this project be launched?",
    answer: "The launch date is May 20, 2026.",
  },
  {
    question: "What number of units and sizes are available?",
    answer:
      "There are 5,406 apartments in sizes ranging from 740 to 2500 square feet.",
  },
  {
    question: "How many buildings and flats are planned for Sobha One World?",
    answer:
      "The township will include 18 high rise buildings, each with 54 storeys, totalling around 5,400 units. Every property is created with exquisite architecture and high quality construction.",
  },
  {
    question: "5.What is the project's beginning price?",
    answer: "The project's pricing begins at Rs 1.09 crore.",
  },
  {
    question: "6.Has Sobha One World obtained RERA approval?",
    answer:
      "RERA registration has been requested for and is pending clearance from Karnataka RERA. Once the approval process is complete, the official RERA number will be supplied.",
  },
  {
    question: "7. What payment arrangements are provided for this project?",
    answer:
      "Payment schemes are milestone based. Bookings include final payment plans.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-gray-700 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-700 text-sm md:text-base mb-10">
          Everything you need to know about Sobha One World, Hoskote, Bangalore.
        </p>

        {/* Client component handles toggle */}
        <FaqClient faqs={faqs} />
      </div>
    </section>
  );
}