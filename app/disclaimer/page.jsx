import DisclaimerPage from "./DisclaimerPage";

export const metadata = {
  title: "Disclaimer | Sobha One World Hoskote Bangalore",
  description:
    "Read the Disclaimer of Sobha One World to understand the limitations of information, project details, pricing, and usage of content on this website.",
  keywords: [
    "Sobha One World Disclaimer",
    "Sobha One World Legal Disclaimer",
    "Sobha One World Hoskote Disclaimer",
    "Real Estate Disclaimer India",
    "Sobha One World Bangalore Legal",
  ],
  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/disclaimer/",
  },
  openGraph: {
    title: "Disclaimer | Sobha One World",
    description:
      "This disclaimer outlines the limitations and accuracy of information related to Sobha One World project, including pricing, specifications, and website content.",
    url: "https://www.sobhaoneworld.gen.in/disclaimer/",
    siteName: "Sobha One World",
    type: "website",
  },
};

export default function Page() {
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
                  "https://www.sobhaoneworld.gen.in/disclaimer/#webpage",
                url: "https://www.sobhaoneworld.gen.in/disclaimer/",
                name: "Disclaimer - Sobha One World",
                headline: "Disclaimer",
                description:
                  "This page provides important legal information regarding the accuracy and usage of content on the Sobha One World website.",
                inLanguage: "en",
                isPartOf: {
                  "@id": "https://www.sobhaoneworld.gen.in/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/disclaimer/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sobhaoneworld.gen.in/disclaimer/#breadcrumb",
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
                    name: "Disclaimer",
                    item:
                      "https://www.sobhaoneworld.gen.in/disclaimer/",
                  },
                ],
              },
              {
                "@type": "Organization",
                name: "Sobha One World",
                url: "https://www.sobhaoneworld.gen.in/",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  areaServed: "IN",
                  availableLanguage: "English",
                },
              },
            ],
          }),
        }}
      />

      <DisclaimerPage />
    </>
  );
}