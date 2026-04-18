import SattvaProjects from "./SattvaProjects";

/* eslint-disable react/no-unescaped-entities */
export default function MoreAboutProjectSection() {
  return (
    <section id="seo-content" className="w-full bg-white pt-6 px-3 md:px-0">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Investment Section */}
        <div className="text-gray-800">
          <h2 className="text-2xl font-semibold mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, numquam!
          </h2>

          <img
            className="w-full mb-6"
            src="/images/investment.jpeg"
            alt="Budigere Cross Real Estate Investment"
            loading="lazy"
          />

          <p className="pb-6 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatem quis incidunt culpa tempore temporibus nemo beatae, sequi maxime exercitationem.
          </p>

          
        </div>

      </div>
    </section>
  );
}