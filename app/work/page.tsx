import { Metadata } from "next";
import WorkPageContent from "@/components/WorkPageContent";

export const metadata: Metadata = {
  title: "Work",
  description: "Portfolio of residential interior design projects including living rooms, bedrooms, kitchens, and custom spaces across Canada.",
  openGraph: {
    title: "Work — Interior Designer",
    description: "Portfolio of residential interior design projects across Canada.",
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
