import { constructMetadata } from "@/components/seo/Meta";
import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import TourContent from "@/components/features/TourContent";

export async function generateMetadata({ params }: { params: Promise<{ slug: string; packageId: string }> }) {
  const { slug, packageId } = await params;
  const tour = tours.find((t) => t.id === slug);
  if (!tour) return constructMetadata({ title: "Tour Not Found" });
  
  const pkg = tour.packages?.find(p => p.id === packageId);
  const title = pkg ? `${pkg.name} - ${tour.title}` : tour.title;

  return constructMetadata({
    title: title,
    description: tour.description,
    image: tour.image,
  });
}

export default async function TourPackageDetail({ params }: { params: Promise<{ slug: string; packageId: string }> }) {
  const { slug, packageId } = await params;
  const tour = tours.find((t) => t.id === slug);

  if (!tour) {
    notFound();
  }

  // Verify package exists if provided
  const pkg = tour.packages?.find(p => p.id === packageId);
  if (!pkg) {
      notFound();
  }

  return <TourContent tour={tour} initialPackageId={packageId} />;
}
