import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for interior design projects in Canada. Available for hire and open to opportunities.",
  openGraph: {
    title: "Contact — Interior Designer",
    description: "Available for hire in Canada. Open to residential interior design opportunities.",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
