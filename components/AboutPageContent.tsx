"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const DownloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const capabilities = [
  "Residential Interiors",
  "Space Planning",
  "3D Visualization",
  "Furniture & Finishes",
  "Concept Development",
  "Technical Drawings",
];

const software = ["AutoCAD", "SketchUp", "3ds Max"];

export default function AboutPageContent() {
  const [resumeExists, setResumeExists] = useState(false);

  // Check if resume file exists
  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => setResumeExists(res.ok))
      .catch(() => setResumeExists(false));
  }, []);

  return (
    <Container className="py-10 lg:py-12" size="narrow">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-10"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
          About
        </h1>
      </motion.div>

      {/* Background Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-6">
          Background
        </h2>
        
        <div className="space-y-4 text-base md:text-lg text-muted font-light leading-relaxed">
          <p>
            I&apos;m a Design consultant with over three years of experience shaping residential spaces from concept to on-site execution. My work is grounded in thoughtful space planning, clear technical documentation, and designs that translate seamlessly from drawings to real spaces.
          </p>
          <p>
            Having contributed to more than 60 residential projects, I focus on creating functional, well-resolved interiors through strong AutoCAD detailing, coordination with project teams, and an execution-first approach. Currently based in Toronto, I&apos;m building my career within the Canadian design industry and looking to collaborate with studios that value clarity, practicality, and well-designed spaces.
          </p>
        </div>
      </motion.div>

      {/* Capabilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-8">
          Capabilities
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <Badge variant="default" className="w-full justify-center py-3">
                {capability}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Software Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 lg:mb-10"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-6">
          Software
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {software.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <span className="text-muted font-light">
                {tool}
                {index < software.length - 1 && <span className="mx-2">•</span>}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        {resumeExists ? (
          <Button
            href="/resume.pdf"
            variant="primary"
            icon={DownloadIcon}
            className="inline-flex"
          >
            Download Resume
          </Button>
        ) : (
          <div className="space-y-3">
            <Button
              variant="ghost"
              disabled
              icon={DownloadIcon}
              className="inline-flex"
            >
              Resume Not Available
            </Button>
            <p className="text-xs text-muted font-light">
              {/* To enable: Add resume.pdf to /public/ folder */}
            </p>
          </div>
        )}
      </motion.div>
    </Container>
  );
}
