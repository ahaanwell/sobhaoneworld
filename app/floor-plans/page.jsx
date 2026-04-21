import BlogSection from "@/components/BlogsSection";
import FloorPlanPage from "./FloorPlanPage";

export const metadata = {
  title:
    "Sobha One World Floor Plans | 1, 2, 3 & 4 BHK Layouts in Hoskote Bangalore",
  description:
    "Explore Sobha One World floor plans with detailed 1, 2, 3 & 4 BHK apartment layouts ranging from 740 to 2,500 sq ft. View smart designs, Vaastu-compliant homes, and download floor plan PDFs.",
  
  keywords: [
    "Sobha One World floor plans",
    "Sobha One World 1 BHK layout",
    "Sobha One World 2 BHK floor plan",
    "Sobha One World 3 BHK apartment plan",
    "Sobha One World 4 BHK layout",
    "Sobha One World Hoskote floor plan",
    "Sobha One World apartment sizes",
    "Sobha One World layout PDF"
  ],

  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/floor-plans/",
  },

  openGraph: {
    title:
      "Sobha One World Floor Plans | Apartment Layouts & Sizes",
    description:
      "Check detailed floor plans of Sobha One World including 1, 2, 3 & 4 BHK apartment layouts with size, design, and space planning.",
    url: "https://www.sobhaoneworld.gen.in/floor-plans/",
    siteName: "Sobha One World",
    images: [
      {
        url: "https://www.sobhaoneworld.gen.in/images/about-sobhaoneworld.webp",
        width: 1200,
        height: 630,
        alt: "Sobha One World Floor Plan Layouts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha One World Floor Plans Bangalore",
    description:
      "Explore apartment layouts, sizes, and smart space planning for Sobha One World homes.",
    images: [
      "https://www.sobhaoneworld.gen.in/images/about-sobhaoneworld.webp",
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
        "@type": "WebPage",
        "@id": "https://www.sobhaoneworld.gen.in/floor-plans/#webpage",
        "url": "https://www.sobhaoneworld.gen.in/floor-plans/",
        "name": "Sobha One World Floor Plans",
        "headline": "Sobha One World Apartment Floor Plan Layouts",
        "description":
          "Detailed apartment layouts and configurations of Sobha One World including 1, 2, 3, and 4 BHK units with size and design details.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.sobhaoneworld.gen.in/floor-plans/#breadcrumb",
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
            "name": "Floor Plans",
            "item": "https://www.sobhaoneworld.gen.in/floor-plans/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.sobhaoneworld.gen.in/floor-plans/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What apartment types are available in Sobha One World?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sobha One World offers 1, 2, 3, and 4 BHK apartments designed for different family sizes with modern layouts."
            }
          },
          {
            "@type": "Question",
            "name": "What is the size range of apartments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The apartment sizes range approximately from 740 sq ft to 2,500 sq ft depending on the configuration."
            }
          },
          {
            "@type": "Question",
            "name": "Are the homes Vaastu compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the homes are designed with Vaastu principles in mind, ensuring better natural light and airflow."
            }
          },
          {
            "@type": "Question",
            "name": "How can I check detailed layouts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can request the official floor plan PDF which shows room sizes, layout flow, and unit design."
            }
          },
          {
            "@type": "Question",
            "name": "Do the floor plans ensure ventilation and privacy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the layouts are planned to provide good ventilation, natural lighting, and privacy between units."
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

      <FloorPlanPage />
      <BlogSection />
    </>
  );
}