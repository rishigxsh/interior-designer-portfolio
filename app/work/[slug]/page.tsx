import { projects } from "@/content/projects";
import ProjectDetail from "@/components/ProjectDetail";
import ProjectNotFound from "@/components/ProjectNotFound";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found | Interior Designer Portfolio",
    };
  }

  return {
    title: `${project.title} | Interior Designer Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const currentIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);

  // If project not found, show not found component
  if (currentIndex === -1) {
    return <ProjectNotFound />;
  }

  const project = projects[currentIndex];
  
  // Get previous and next projects (cycle through array)
  const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
  
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  return <ProjectDetail project={project} prevProject={prevProject} nextProject={nextProject} />;
}
