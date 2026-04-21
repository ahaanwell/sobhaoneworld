import BlogSection from "@/components/BlogsSection";
import LocationPage from "./LocationPage";

export const metadata = {
  title:
    "Sobha One World Location | Hoskote Bangalore | Map, Connectivity & Address",
  description:
    "Discover Sobha One World location in Hoskote, East Bangalore near Old Madras Road (NH-75). Excellent connectivity to Whitefield, ITPL, STRR, and Bengaluru-Chennai Expressway.",
  keywords: [
    "Sobha One World Location",
    "Sobha One World Hoskote",
    "Sobha One World Bangalore Location",
    "Sobha One World Connectivity",
    "Sobha One World Address",
    "Sobha One World Near Whitefield",
    "Hoskote Real Estate",
    "Sobha One World Map",
    "Sobha One World NH 75",
  ],
  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/location/",
  },
  openGraph: {
    title:
      "Sobha One World Location | Prime Connectivity in Hoskote Bangalore",
    description:
      "Explore Sobha One World’s strategic location in Hoskote with seamless access to NH-75, Whitefield IT hub, STRR, and upcoming infrastructure developments.",
    url: "https://www.sobhaoneworld.gen.in/location/",
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
                  "https://www.sobhaoneworld.gen.in/location/#webpage",
                url: "https://www.sobhaoneworld.gen.in/location/",
                name: "Sobha One World Location",
                headline:
                  "Sobha One World Location in Hoskote, East Bangalore",
                description:
                  "Sobha One World is strategically located in Sarakariguttahalli, Hoskote near Old Madras Road (NH-75) offering excellent connectivity to Whitefield, ITPL, STRR, and key business hubs.",
                inLanguage: "en",
                isPartOf: {
                  "@id": "https://www.sobhaoneworld.gen.in/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/location/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sobhaoneworld.gen.in/location/#breadcrumb",
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
                    name: "Location",
                    item:
                      "https://www.sobhaoneworld.gen.in/location/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.sobhaoneworld.gen.in/location/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Where is Sobha One World located in Bangalore?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sobha One World is located in Sarakariguttahalli Village, Hoskote, East Bangalore, close to Old Madras Road (NH-75) and near the Hoskote Toll Plaza.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How is the connectivity from Sobha One World to Whitefield?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The project offers smooth connectivity to Whitefield and ITPL via Old Madras Road and upcoming infrastructure developments, making daily commuting convenient.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are the key infrastructure developments near Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Major infrastructure projects like the Satellite Town Ring Road (STRR) and the Bengaluru–Chennai Expressway are expected to improve connectivity and boost property value in the area.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Is Sobha One World well connected to the airport?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, Kempegowda International Airport is easily accessible from the project via highways and road networks, ensuring convenient travel for residents.",
                    },
                  },
                  {
                    "@type": "Question",
                    "name": "Why invest in property at Hoskote location?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Hoskote is emerging as a high-growth real estate destination due to its strategic location, infrastructure expansion, and proximity to major IT hubs in East Bangalore.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <LocationPage />
      <BlogSection />
    </>
  );
}