"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import ResponsiveGrid from "@/components/ui/ResponsiveGrid";

const ArrowIcon = (
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

const services = [
  "Space Planning",
  "3D Visualization",
  "Furniture & Finishes",
  "Residential Interiors",
];

export default function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section>
        <Container className="pt-24 pb-20 lg:pt-32 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.1]">
              Residential Interior Design
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted font-light mb-12 tracking-tight">
              Clean. Bold. Livable luxury.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="/work" icon={ArrowIcon}>
                View Work
              </Button>
              <Button href="/contact" variant="ghost" icon={ArrowIcon}>
                Contact
              </Button>
            </div>

            {/* Location line */}
            <div className="flex items-center gap-3 text-sm text-muted font-light">
              <span>Based in Canada</span>
              <span className="w-1 h-1 rounded-full bg-muted" />
              <span>Available for hire</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Work Grid */}
      <section>
        <Container className="pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-muted font-light">
              A selection of recent residential projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ResponsiveGrid columns={3} gap="medium">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} priority={index < 3} />
              ))}
            </ResponsiveGrid>
          </motion.div>

          {/* View All Work Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 lg:mt-12 text-center"
          >
            <Button href="/work" variant="ghost" icon={ArrowIcon}>
              View All Work
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Services Strip */}
      <section>
        <Container className="py-8 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-y border-border/60"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-5 lg:py-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-foreground font-medium">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Callout */}
      <section>
        <Container className="py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
              Let&apos;s work together
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg mb-8">
              <a
                href="mailto:mruduladhondalay@gmail.com"
                className="text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                mruduladhondalay@gmail.com
              </a>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <a
                href="tel:+14376676043"
                className="text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                +1 437-667-6043
              </a>
            </div>

            <Button href="/contact" icon={ArrowIcon}>
              Start a Project
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
