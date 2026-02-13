"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const BackIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export default function ProjectNotFound() {
  return (
    <Container className="py-32" size="narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
          Project Not Found
        </h1>
        <p className="text-lg text-muted font-light mb-8 max-w-md mx-auto">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button href="/work" variant="ghost" icon={BackIcon}>
          Back to Work
        </Button>
      </motion.div>
    </Container>
  );
}
