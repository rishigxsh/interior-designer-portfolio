"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import LightboxModal from "@/components/ui/LightboxModal";

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

const ArrowRightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const ArrowLeftIcon = (
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

interface ProjectDetailProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectDetail({ project, prevProject, nextProject }: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine all images (technical drawings + visuals) for lightbox
  const allImages = useMemo(() => {
    return [...project.technicalDrawings, ...project.images];
  }, [project]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    if (currentImageIndex < allImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="pb-20">
      {/* Back Navigation */}
      <Container className="pt-8 pb-6">
        <Button href="/work" variant="ghost" icon={BackIcon}>
          Back to Work
        </Button>
      </Container>

      {/* Full-Bleed Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] mb-16 lg:mb-20 cursor-pointer overflow-hidden"
        onClick={() => openLightbox(project.technicalDrawings.length)}
      >
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        
        {/* Click to view indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm px-4 py-2 text-xs text-muted font-light"
        >
          Click to view full size
        </motion.div>
      </motion.div>

      {/* Content Block */}
      <Container size="narrow" className="mb-20 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category Badge */}
          <Badge className="mb-6">{project.category}</Badge>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed mb-12">
            {project.description}
          </p>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border/60">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted/70 mb-2 font-medium">
                Location
              </div>
              <div className="font-medium">{project.location}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted/70 mb-2 font-medium">
                Role
              </div>
              <div className="font-medium">{project.role}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted/70 mb-2 font-medium">
                Tools
              </div>
              <div className="font-medium text-sm">AutoCAD • SketchUp • 3ds Max</div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Technical Drawings Section */}
      {project.technicalDrawings.length > 0 && (
        <Container className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-3">
              Technical Drawings
            </h2>
            <p className="text-muted font-light text-sm">
              Plans and elevations for execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {project.technicalDrawings.map((drawing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/3] bg-background border border-border/60 overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={drawing.src}
                  alt={drawing.alt}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-border/60"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      )}

      {/* Visuals Section */}
      {project.images.length > 0 && (
        <Container className="mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
              Visuals
            </h2>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[16/10] bg-foreground/5 overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(project.technicalDrawings.length + index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      )}

      {/* Bottom Navigation */}
      <Container className="pt-16 lg:pt-20 border-t border-border/60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Navigation */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Previous Project */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs uppercase tracking-wider text-muted/70 mb-3 font-medium flex items-center gap-2">
                  {ArrowLeftIcon}
                  <span>Previous Project</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-foreground/5">
                  <Image
                    src={prevProject.images[0].src}
                    alt={prevProject.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium tracking-tight group-hover:text-muted transition-colors">
                  {prevProject.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted/70 mt-1">
                  {prevProject.category}
                </p>
              </motion.div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
            >
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-xs uppercase tracking-wider text-muted/70 mb-3 font-medium flex items-center justify-end gap-2">
                  <span>Next Project</span>
                  {ArrowRightIcon}
                </div>
                <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-foreground/5">
                  <Image
                    src={nextProject.images[0].src}
                    alt={nextProject.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium tracking-tight text-right group-hover:text-muted transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted/70 mt-1 text-right">
                  {nextProject.category}
                </p>
              </motion.div>
            </Link>
          </div>

          {/* Back to Work Button */}
          <div className="text-center">
            <Button href="/work" variant="ghost" icon={BackIcon}>
              Back to All Work
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Lightbox Modal - All Images Combined */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={allImages[currentImageIndex]?.src || ""}
        imageAlt={allImages[currentImageIndex]?.alt || ""}
        currentIndex={currentImageIndex}
        totalImages={allImages.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
