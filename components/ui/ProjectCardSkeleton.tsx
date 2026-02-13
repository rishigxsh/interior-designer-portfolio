export default function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="relative aspect-[4/5] bg-foreground/5 mb-6" />
      <div className="space-y-3">
        <div className="h-6 bg-foreground/5 rounded w-3/4" />
        <div className="h-4 bg-foreground/5 rounded w-1/2" />
      </div>
    </div>
  );
}
