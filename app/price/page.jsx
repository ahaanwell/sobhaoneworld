import BlogSection from "@/components/BlogsSection";
import PricePage from "./PricePage";

export const metadata = {
  title: "Sobha One World Price 2026 | Latest Cost Sheet & Payment Plans",
  description:
    "Discover updated Sobha One World price in Hoskote, East Bangalore. Get detailed 2026 cost sheet, pre-launch offers, and flexible payment plans for 1, 2, 3 & 4 BHK apartments.",

  keywords: [
    "Sobha One World price",
    "Sobha One World Hoskote price",
    "Sobha One World Bangalore cost",
    "Sobha One World cost sheet 2026",
    "Sobha One World pre launch offers",
    "Sobha One World payment plan",
    "Sobha One World apartment price"
  ],

  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/price/",
  },

  openGraph: {
    title: "Sobha One World Price 2026 | Cost Sheet & Offers",
    description:
      "Check latest pricing, cost sheet, and payment plans for Sobha One World apartments in East Bangalore.",
    url: "https://www.sobhaoneworld.gen.in/price/",
    siteName: "Sobha One World",
    images: [
      {
        url: "https://www.sobhaoneworld.gen.in/images/sobhaoneworld-price.webp",
        width: 1200,
        height: 630,
        alt: "Sobha One World Price Details",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha One World Price 2026",
    description:
      "Explore updated pricing, payment plans, and offers for Sobha One World apartments.",
    images: [
      "https://www.sobhaoneworld.gen.in/images/sobhaoneworld-price.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.sobhaoneworld.gen.in/#website",
        "url": "https://www.sobhaoneworld.gen.in/",
        "name": "Sobha One World"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.sobhaoneworld.gen.in/price/#webpage",
        "url": "https://www.sobhaoneworld.gen.in/price/",
        "name": "Sobha One World Price 2026",
        "headline": "Sobha One World Apartment Price Details",
        "description":
          "Latest price details, cost sheet, payment plans, and pre-launch offers for Sobha One World apartments in Hoskote, Bangalore.",
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://www.sobhaoneworld.gen.in/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sobhaoneworld.gen.in/price/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.sobhaoneworld.gen.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Price",
            "item": "https://www.sobhaoneworld.gen.in/price/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sobhaoneworld.gen.in/price/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the starting price at Sobha One World?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The starting price of apartments at Sobha One World is approximately ₹1.09 crore, depending on the configuration and unit size."
            }
          },
          {
            "@type": "Question",
            "name": "Does the price include additional charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the base price does not include GST, registration, stamp duty, or other statutory charges."
            }
          },
          {
            "@type": "Question",
            "name": "Are there benefits for early buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, early buyers during the pre-launch phase can take advantage of lower pricing and better unit selection."
            }
          },
          {
            "@type": "Question",
            "name": "What is the EOI amount for booking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Expression of Interest (EOI) amount varies by unit type and is shared by the sales team during booking."
            }
          },
          {
            "@type": "Question",
            "name": "Do prices vary based on unit preferences?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, apartment pricing may differ depending on floor level, tower position, and view."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PricePage />
      <BlogSection />
    </>
  );
}