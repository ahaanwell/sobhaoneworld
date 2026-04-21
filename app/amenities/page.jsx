import BlogSection from "@/components/BlogsSection";
import AmenitiesPage from "./AmenitiesPage";

export const metadata = {
  title:
    "Sobha One World Amenities | Clubhouse, Pool & Lifestyle Features in Hoskote",
  description:
    "Explore Sobha One World amenities including a massive clubhouse, swimming pool, sports courts, green landscapes, and modern lifestyle facilities in Hoskote, East Bangalore.",
  keywords: [
    "Sobha One World Amenities",
    "Sobha One World Clubhouse",
    "Sobha One World Facilities",
    "Sobha One World Bangalore Amenities",
    "Sobha One World Hoskote Amenities",
    "Sobha One World Swimming Pool",
    "Sobha One World Gym",
    "Sobha One World Lifestyle",
    "Sobha One World Features",
  ],
  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/amenities/",
  },
  openGraph: {
    title:
      "Sobha One World Amenities | Premium Lifestyle & Clubhouse Facilities",
    description:
      "Discover world-class amenities at Sobha One World including clubhouse spaces, fitness zones, sports courts, and landscaped open areas for a modern lifestyle.",
    url: "https://www.sobhaoneworld.gen.in/amenities/",
    siteName: "Sobha One World",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.sobhaoneworld.gen.in/#website",
                url: "https://www.sobhaoneworld.gen.in/",
                name: "Sobha One World",
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://www.sobhaoneworld.gen.in/amenities/#webpage",
                url: "https://www.sobhaoneworld.gen.in/amenities/",
                name: "Sobha One World Amenities",
                headline:
                  "Sobha One World Amenities & Lifestyle Features",
                description:
                  "Sobha One World offers premium lifestyle amenities including clubhouses, swimming pools, sports facilities, landscaped gardens, and wellness spaces designed for modern living.",
                inLanguage: "en",
                isPartOf: {
                  "@id": "https://www.sobhaoneworld.gen.in/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/amenities/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sobhaoneworld.gen.in/amenities/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.sobhaoneworld.gen.in/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Amenities",
                    item:
                      "https://www.sobhaoneworld.gen.in/amenities/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.sobhaoneworld.gen.in/amenities/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What amenities are available at Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sobha One World offers a wide range of premium amenities including a grand clubhouse, swimming pool, fitness center, landscaped gardens, sports courts, and dedicated recreation zones.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Sobha One World provide fitness and sports facilities?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, the project includes modern fitness and sports facilities such as a gym, jogging tracks, cycling paths, multi-purpose courts, and outdoor activity areas for residents.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Are there amenities for children at Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Children have access to safe and engaging play areas, parks, activity zones, and interactive spaces designed for recreation and development.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Is Sobha One World a secure and eco-friendly project?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, the project includes advanced security systems, CCTV surveillance, and eco-friendly features such as rainwater harvesting, solar lighting, and waste management systems.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "What makes Sobha One World amenities unique?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The project stands out with its large clubhouse spaces, thoughtfully designed open areas, and a wide range of lifestyle amenities that cater to all age groups.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <AmenitiesPage />
      <BlogSection />
    </>
  );
}