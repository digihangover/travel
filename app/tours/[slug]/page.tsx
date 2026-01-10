import Image from "next/image";
import { constructMetadata } from "@/components/seo/Meta";
import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import TourContent from "@/components/features/TourContent";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((t) => t.id === slug);
  if (!tour) return constructMetadata({ title: "Tour Not Found" });
  
  return constructMetadata({
    title: tour.title,
    description: tour.description,
    image: tour.image,
  });
}

export default async function TourDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = tours.find((t) => t.id === slug);

  if (!tour) {
    notFound();
  }

  return <TourContent tour={tour} />;
}
