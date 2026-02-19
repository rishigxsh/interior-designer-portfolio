"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function TestimonialsPageContent() {
  return (
    <Container className="py-10 lg:py-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 lg:mb-16 text-center max-w-3xl mx-auto"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
          Client Testimonials
        </h1>
        <p className="text-lg md:text-xl text-muted font-light">
          Hear what our clients have to say about working with us.
        </p>
      </motion.div>

      {/* Video Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20 lg:mb-24"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="gold" className="mb-4">
              Featured Testimonial
            </Badge>
            <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-2">
              Client Experience
            </h2>
            <p className="text-sm text-muted font-light">
              Watch our client share their project experience
            </p>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video bg-foreground/5 border border-border/60 overflow-hidden">
            <video
              controls
              className="w-full h-full"
              preload="metadata"
              poster="/portfolio/portfolio-01.png"
            >
              <source src="/testimonials/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center py-12 border-t border-border/60">
          <h3 className="font-serif text-xl md:text-2xl font-medium tracking-tight mb-4">
            More Testimonials Coming Soon
          </h3>
          
          <p className="text-muted font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Additional client reviews and project stories will be added here. 
            We regularly update this section with feedback from our satisfied clients.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            <div className="text-center p-6 border border-border/60">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Written Reviews</h4>
              <p className="text-sm text-muted font-light">
                Detailed feedback from clients
              </p>
            </div>

            <div className="text-center p-6 border border-border/60">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>
              </div>
              <h4 className="font-medium mb-2">More Videos</h4>
              <p className="text-sm text-muted font-light">
                Additional video testimonials
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
