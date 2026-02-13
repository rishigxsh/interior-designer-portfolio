import Container from "@/components/ui/Container";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";

export default function Loading() {
  return (
    <Container className="py-10 lg:py-12">
      <div className="mb-8 lg:mb-10">
        <div className="h-16 bg-foreground/5 rounded w-48 mb-6 animate-pulse" />
        <div className="h-6 bg-foreground/5 rounded w-96 animate-pulse" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
        {[...Array(6)].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </Container>
  );
}
