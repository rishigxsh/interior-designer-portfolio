import { Metadata } from "next";
import TestimonialsPageContent from "@/components/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials and reviews for our residential interior design services in Canada.",
  openGraph: {
    title: "Testimonials — Design Consultant",
    description: "What our clients say about our interior design services.",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
