import { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description: "Residential interior designer specializing in thoughtful, livable spaces. Based in Canada, available for hire.",
  openGraph: {
    title: "About — Interior Designer",
    description: "Residential interior designer based in Canada, specializing in modern, minimal design solutions.",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
