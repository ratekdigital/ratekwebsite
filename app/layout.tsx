import type { Metadata } from "next";
import "./services/services.css";
import "./globals.css";

const siteUrl = "https://ratekdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ratek | Rapid Access Technology",
    template: "%s | Ratek",
  },
  description:
    "Ratek is a technology services and solutions company providing responsive technical support, software development, data solutions, and technology infrastructure for growing and established organizations.",
  keywords: [
    "IT support services",
    "technology solutions",
    "software development",
    "business technology services",
    "IT consulting",
    "data solutions",
    "technology partner",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Technology that keeps your business moving. | Ratek",
    description:
      "Responsive technical support, software development, data solutions, and technology infrastructure from one technical partner.",
    url: siteUrl,
    siteName: "Ratek — Rapid Access Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology that keeps your business moving. | Ratek",
    description:
      "End-to-end technology services and solutions for reliable digital operations.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ratek",
  legalName: "Ratek, LLC",
  url: siteUrl,
  email: "hello@ratekdigital.com",
  description:
    "Technology services and solutions company providing technical support, software development, data solutions, and technology infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
