import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BrochureWrapper from "@/components/BrochureWrapper";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.sobhaoneworld.gen.in"),

  title: {
    default:
      "Sobha One World Hoskote Bangalore | Price, Floor Plans & Project Review",
    template: "%s | Sobha One World",
  },

  description:
    "Sobha One World is a large-scale integrated township located at Hoskote in East Bangalore. Spread across expansive land, it offers thoughtfully designed 1, 2, 3 & 4 BHK apartments with modern amenities, strong connectivity, and high investment potential.",

  keywords: [
    "Sobha One World Hoskote",
    "Sobha One World Bangalore price",
    "Sobha One World apartments",
    "Sobha township Hoskote",
    "Sobha One World floor plans",
    "Sobha One World brochure",
    "flats in Hoskote Bangalore",
    "new apartments East Bangalore",
    "luxury flats near Old Madras Road",
    "Sobha pre launch projects Bangalore",
  ],

  alternates: {
    canonical: "https://www.sobhaoneworld.gen.in/",
  },

  openGraph: {
    title:
      "Sobha One World Hoskote | Premium Township in East Bangalore",
    description:
      "Discover Sobha One World, a landmark residential township in Hoskote offering modern apartments, excellent road connectivity, and future growth potential in East Bangalore.",
    url: "https://www.sobhaoneworld.gen.in/",
    siteName: "Sobha One World",
    images: [
      {
        url: "https://www.sobhaoneworld.gen.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Sobha One World Township Hoskote",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha One World Hoskote Bangalore | Price & Project Details",
    description:
      "Explore Sobha One World township in East Bangalore featuring modern homes, lifestyle amenities, and excellent connectivity.",
    images: [
      "https://www.sobhaoneworld.gen.in/images/banner.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  authors: [
    {
      name: "Sobha One World Project",
      url: "https://www.sobhaoneworld.gen.in/",
    },
  ],

  creator: "Sobha One World",
  publisher: "Sobha One World",

  category: "Real Estate",

  verification: {
    google: "ADD_YOUR_CODE",
  },
};

export default function RootLayout({ children }) {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Sobha One World",
      url: "https://www.sobhaoneworld.gen.in/",
      logo: "https://www.sobhaoneworld.gen.in/images/logo.webp",
    },
    {
      "@type": "ApartmentComplex",
      name: "Sobha One World",
      description:
        "Sobha One World is an upcoming residential township in Hoskote, East Bangalore, offering premium apartments with modern architecture, lifestyle amenities, and seamless connectivity to major IT hubs.",
      url: "https://www.sobhaoneworld.gen.in/",
      image:
        "https://www.sobhaoneworld.gen.in/images/banner.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Near Hoskote Toll Plaza, Old Madras Road (NH 75)",
        addressLocality: "Hoskote",
        addressRegion: "Karnataka",
        postalCode: "562114",
        addressCountry: "IN",
      },
      numberOfAccommodationUnits: "5400",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Clubhouse",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Swimming Pool",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Fitness Center",
          value: true,
        },
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "10900000",
        highPrice: "39000000",
        offerCount: "5400",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Sobha One World located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sobha One World is located in Hoskote along Old Madras Road in East Bangalore, offering good connectivity to Whitefield and major IT corridors.",
          },
        },
        {
          "@type": "Question",
          name: "What types of apartments are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project offers 1, 2, 3 and 4 BHK apartments with modern layouts and premium specifications.",
          },
        },
        {
          "@type": "Question",
          name: "Is Sobha One World a good investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, due to its large township development, connectivity, and growth of East Bangalore, it has strong investment potential.",
          },
        },
      ],
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "ApartmentComplex",
    "name": "Sobha One World",
    "image": "https://www.sobhaoneworld.gen.in/images/banner.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hoskote",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  },
  "author": {
    "@type": "Organization",
    "name": "Sobha One World Review Team"
  },
  "reviewBody":
    "Sobha One World is a large township project in East Bangalore offering modern apartments, strong connectivity, and good long-term investment potential.",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.6",
    "bestRating": "5"
  }
};

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
         <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
  />
      </head>

      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        <BrochureWrapper />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}