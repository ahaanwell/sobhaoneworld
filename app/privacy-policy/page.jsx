import PrivacyPolicyPage from "./PrivacyPolicyPage";

export const metadata = {
  title: "Privacy Policy | Sobha One World Hoskote Bangalore",
  description:
    "Read the Privacy Policy of Sobha One World to understand how your personal information is collected, used, and protected when you interact with our website and services.",
  keywords: [
    "Sobha One World Privacy Policy",
    "Sobha One World Hoskote Privacy",
    "Sobha One World Data Policy",
    "Sobha One World Bangalore Legal",
    "Real Estate Privacy Policy India",
  ],
  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Sobha One World",
    description:
      "Learn how Sobha One World handles your personal data, ensures privacy protection, and maintains transparency in all digital interactions.",
    url: "https://www.sobhaoneworld.gen.in/privacy-policy/",
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
                  "https://www.sobhaoneworld.gen.in/privacy-policy/#webpage",
                url: "https://www.sobhaoneworld.gen.in/privacy-policy/",
                name: "Privacy Policy - Sobha One World",
                headline: "Privacy Policy",
                description:
                  "This page explains how user data is collected, stored, and protected while accessing Sobha One World website.",
                inLanguage: "en",
                isPartOf: {
                  "@id": "https://www.sobhaoneworld.gen.in/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sobhaoneworld.gen.in/privacy-policy/#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sobhaoneworld.gen.in/privacy-policy/#breadcrumb",
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
                    name: "Privacy Policy",
                    item:
                      "https://www.sobhaoneworld.gen.in/privacy-policy/",
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

      <PrivacyPolicyPage />
    </>
  );
}