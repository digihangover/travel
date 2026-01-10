import { Metadata } from "next";

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
}

export function constructMetadata({
  title,
  description = "Experience the world's most breathtaking destinations with Jaya Travels. Luxury travel reimagined.",
  image = "/images/og-default.jpg",
}: SeoProps): Metadata {
  return {
    title: `${title} | Jaya Travels`,
    description,
    openGraph: {
      title: `${title} | Jaya Travels`,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Jaya Travels`,
      description,
      images: [image],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
