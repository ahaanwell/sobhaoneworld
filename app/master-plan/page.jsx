import BlogSection from "@/components/BlogsSection";
import MasterPlanPage from "./MasterPlanPage";

export const metadata = {
  title: "Sobha One World Master Plan | 300 Acre Township Layout in Hoskote",
  description:
    "Explore the Sobha One World Master Plan featuring a vast 300-acre township in Hoskote, East Bangalore. Discover tower placement, open spaces, amenities, and future infrastructure growth.",
  keywords: [
    "Sobha One World Master Plan",
    "Sobha One World Hoskote",
    "Sobha One World Township",
    "Sobha One World Floor Plan",
    "Sobha One World Amenities",
    "Sobha One World Bangalore",
    "Sobha One World Price",
    "Sobha One World Layout",
    "Sobha One World Prelaunch",
  ],
  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/master-plan/",
  },
  openGraph: {
    title: "Sobha One World Master Plan | Township Layout & Amenities",
    description:
      "View the detailed master plan of Sobha One World, a premium township in Hoskote with modern amenities, green spaces, and well-planned residential towers.",
    url: "https://www.sobhaoneworld.gen.in/master-plan/",
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
                  "https://www.sobhaoneworld.gen.in/master-plan/#webpage",
                url: "https://www.sobhaoneworld.gen.in/master-plan/",
                name: "Sobha One World Master Plan",
                headline: "Sobha One World Master Plan in Hoskote",
                description:
                  "The Sobha One World master plan highlights the complete township layout, including residential towers, green landscapes, clubhouse zones, and internal road networks.",
                inLanguage: "en",
                isPartOf: {
                  "@id": "https://www.sobhaoneworld.gen.in/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/master-plan/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sobhaoneworld.gen.in/master-plan/#breadcrumb",
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
                    name: "Master Plan",
                    item:
                      "https://www.sobhaoneworld.gen.in/master-plan/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.sobhaoneworld.gen.in/master-plan/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is included in the Sobha One World master plan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The master plan of Sobha One World includes the positioning of residential towers, landscaped gardens, internal roads, clubhouse areas, and open recreational zones designed for a modern lifestyle.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the total land area of Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Sobha One World is part of a large-scale 300-acre township development in Hoskote, making it one of the most expansive residential communities in East Bangalore.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does the project offer open and green spaces?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, a significant portion of the project is dedicated to open spaces, landscaped gardens, and green zones, ensuring a peaceful and eco-friendly living environment.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are amenities included in the master plan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The master plan includes a wide range of amenities such as a clubhouse, swimming pool, fitness center, children’s play areas, and walking tracks for residents.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why is Hoskote a good location for investment?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Hoskote is rapidly developing with improved connectivity, proximity to major highways, and upcoming infrastructure projects, making it a strong investment destination in East Bangalore.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <MasterPlanPage />
      <BlogSection />
    </>
  );
}