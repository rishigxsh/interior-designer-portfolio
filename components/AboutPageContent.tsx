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
          
          {/* LinkedIn Link */}
          <div className="pt-4">
            <a
              href="https://www.linkedin.com/in/mrudula-dhondalay/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Connect on LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
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
