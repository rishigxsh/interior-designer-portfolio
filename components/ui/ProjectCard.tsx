"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link 
        href={`/work/${project.slug}`} 
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-[4/5] overflow-hidden mb-5 bg-foreground/5 border border-transparent group-hover:border-border transition-all duration-300"
        >
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </motion.div>
        
        <motion.div 
          className="space-y-1.5"
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-serif text-lg md:text-xl font-medium tracking-tight text-foreground group-hover:text-muted transition-colors">
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-wider text-muted/70 font-medium">
            {project.category}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
