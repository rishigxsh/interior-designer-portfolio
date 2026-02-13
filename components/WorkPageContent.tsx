"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/content/projects";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import FilterChip from "@/components/ui/FilterChip";

// Extract unique categories from projects
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return;
    setActiveFilter(category);
  };

  return (
    <Container className="py-10 lg:py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-10"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
          Work
        </h1>
        <p className="text-lg md:text-xl text-muted font-light max-w-2xl">
          A selection of residential interiors and visualizations.
        </p>
      </motion.div>

      {/* Filter Chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 lg:mb-10"
      >
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => handleFilterChange(category)}
            />
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProjectCard project={project} priority={index < 4} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-20"
        >
          <p className="text-muted font-light text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}

      {/* Project Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-muted font-light">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          {activeFilter !== "All" && ` in ${activeFilter}`}
        </p>
      </motion.div>
    </Container>
  );
}
