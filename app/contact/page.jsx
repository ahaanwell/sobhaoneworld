import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact Sobha One World | Book Site Visit & Get Price Details",
  description:
    "Contact Sobha One World Hoskote for latest price, brochure download, and site visit booking. Get in touch with our sales team for complete project details.",
  keywords: [
    "Sobha One World Contact",
    "Sobha One World Phone Number",
    "Sobha One World Hoskote Contact",
    "Sobha One World Site Visit",
    "Sobha One World Sales Office",
    "Sobha One World Bangalore Contact",
  ],
  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/contact/",
  },
  openGraph: {
    title: "Contact Sobha One World | Book Site Visit",
    description:
      "Get in touch with Sobha One World sales team for pricing, brochure, and site visit scheduling in Hoskote, East Bangalore.",
    url: "https://www.sobhaoneworld.gen.in/contact/",
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
                "@type": "Organization",
                "@id": "https://www.sobhaoneworld.gen.in/#organization",
                name: "Sobha One World",
                url: "https://www.sobhaoneworld.gen.in/",
                logo: "https://www.sobhaoneworld.gen.in/images/banner/sobha-one-world-logo.webp",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91-1800-102-5602",
                  contactType: "sales",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.sobhaoneworld.gen.in/#website",
                url: "https://www.sobhaoneworld.gen.in/",
                name: "Sobha One World",
              },
              {
                "@type": "ContactPage",
                "@id":
                  "https://www.sobhaoneworld.gen.in/contact/#webpage",
                url: "https://www.sobhaoneworld.gen.in/contact/",
                name: "Contact Sobha One World",
                description:
                  "Reach out to Sobha One World for project details, pricing, brochure, and site visit booking in Hoskote, Bangalore.",
                isPartOf: {
                  "@id": "https://www.sobhaoneworld.gen.in/#website",
                },
                about: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/#organization",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/contact/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sobhaoneworld.gen.in/contact/#breadcrumb",
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
                    name: "Contact",
                    item:
                      "https://www.sobhaoneworld.gen.in/contact/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://www.sobhaoneworld.gen.in/contact/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How can I contact Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "You can contact Sobha One World through phone, enquiry form, or by visiting the project site in Hoskote, Bangalore.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the contact number for Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "You can reach the sales team via the official contact number provided on the website.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I book a site visit for Sobha One World?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, you can easily schedule a site visit by filling out the contact form or calling the sales team directly.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      <ContactPage />
    </>
  );
}