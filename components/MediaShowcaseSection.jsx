const MediaShowcaseSection = () => {
  return (
    <section className="w-full bg-white pt-14 px-4 md:px-0">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Discover Sobha One World
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

          <p className="max-w-3xl mx-auto text-gray-600">
            Explore world-inspired experiences, iconic architecture, premium
            amenities, and the lifestyle that awaits at Sobha One World.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-1.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-2.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-3.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-4.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-5.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-6.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/mediashowcase/showcase-7.webp"
              alt="Sobha One World"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcaseSection;