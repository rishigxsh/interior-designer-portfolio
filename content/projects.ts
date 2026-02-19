export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  role: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  technicalDrawings: {
    src: string;
    alt: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "modern-living-elegance",
    title: "Modern Living Elegance",
    category: "Living Room",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A sophisticated living space combining neutral tones with refined textures for timeless comfort and contemporary style.",
    images: [
      {
        src: "/portfolio/portfolio-01.png",
        alt: "Modern living room featuring neutral palette, plush seating, and architectural lighting",
      },
      {
        src: "/portfolio/portfolio-02.png",
        alt: "Living room detail showcasing luxurious textures and carefully curated decor elements",
      },
    ],
    technicalDrawings: [
      {
        src: "/portfolio/tech-01-02.png",
        alt: "Technical drawings including floor plans and elevations for modern living room design",
      },
    ],
  },
  {
    slug: "rustic-living",
    title: "Rustic Living",
    category: "Living Room",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A warm and inviting living space featuring rustic elements, natural materials, and refined furniture arrangements that create a cozy yet sophisticated atmosphere.",
    images: [
      {
        src: "/portfolio/portfolio-03.jpg",
        alt: "Rustic living space with refined furniture arrangement and ambient lighting",
      },
      {
        src: "/portfolio/portfolio-04.jpg",
        alt: "Rustic living area highlighting natural material palette and warm design details",
      },
    ],
    technicalDrawings: [
      {
        src: "/portfolio/tech-03-04.png",
        alt: "Detailed section views and construction drawings for rustic living room layout",
      },
    ],
  },
  {
    slug: "serene-bedroom-sanctuary",
    title: "Serene Bedroom Sanctuary",
    category: "Bedroom",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A calming retreat designed for rest, featuring soft layers, warm natural materials, and custom storage solutions with elegant finishes.",
    images: [
      {
        src: "/portfolio/portfolio-05.jpg",
        alt: "Tranquil bedroom with organic textures, layered linens, and ambient lighting",
      },
      {
        src: "/portfolio/portfolio-06.jpg",
        alt: "Custom walk-in wardrobe with sophisticated shelving and luxury materials",
      },
      {
        src: "/portfolio/portfolio-07.jpg",
        alt: "Wardrobe detail showcasing elegant organization and premium finishes",
      },
    ],
    technicalDrawings: [
      {
        src: "/portfolio/tech-05.png",
        alt: "Bedroom technical drawings with detailed plans and section views",
      },
      {
        src: "/portfolio/tech-06.png",
        alt: "Wardrobe construction drawings with detailed joinery and material specifications",
      },
      {
        src: "/portfolio/tech-07.png",
        alt: "Wardrobe elevation drawings showing custom built-in details and dimensions",
      },
    ],
  },
  {
    slug: "contemporary-kitchen-dining",
    title: "Contemporary Kitchen & Dining",
    category: "Kitchen",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A refined culinary and dining space balancing clean lines with warmth, everyday functionality, and elegant gathering moments.",
    images: [
      {
        src: "/portfolio/portfolio-08.png",
        alt: "Contemporary kitchen with minimalist cabinetry, premium appliances, and natural stone countertops",
      },
      {
        src: "/portfolio/portfolio-09.jpg",
        alt: "Elegant dining room with statement lighting, refined table setting, and luxury seating",
      },
    ],
    technicalDrawings: [
      {
        src: "/portfolio/tech-08.png",
        alt: "Kitchen technical plans with detailed cabinetry layouts and appliance specifications",
      },
      {
        src: "/portfolio/tech-09.png",
        alt: "Dining room technical drawings showing furniture placement and lighting plans",
      },
    ],
  },
  {
    slug: "playful-kids-retreat",
    title: "Playful Kids Retreat",
    category: "Kids Room",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A vibrant yet sophisticated space designed to inspire creativity while maintaining timeless appeal.",
    images: [
      {
        src: "/portfolio/portfolio-10.jpg",
        alt: "Kids bedroom featuring playful design elements balanced with refined interior details",
      },
      {
        src: "/portfolio/portfolio-11.jpg",
        alt: "Children's room showcasing thoughtful storage solutions and engaging design features",
      },
      {
        src: "/portfolio/portfolio-12.jpg",
        alt: "Kids space detail highlighting creative design and functional organization",
      },
    ],
    technicalDrawings: [
      {
        src: "/portfolio/tech-10.png",
        alt: "Kids room floor plan with furniture layout and play area zoning",
      },
      {
        src: "/portfolio/tech-11.png",
        alt: "Storage elevation drawings showing custom built-in solutions",
      },
      {
        src: "/portfolio/tech-12.png",
        alt: "Detailed section views and material specifications for kids room",
      },
    ],
  },
  {
    slug: "powder-room",
    title: "Powder Room",
    category: "Powder Room",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "An intimate powder room design combining refined finishes with functional elegance for a sophisticated guest experience.",
    images: [
      {
        src: "/portfolio/portfolio-13.jpg",
        alt: "Elegant powder room featuring refined fixtures and sophisticated material palette",
      },
      {
        src: "/portfolio/portfolio-14.jpg",
        alt: "Powder room detail showcasing luxury finishes and thoughtful design elements",
      },
    ],
    technicalDrawings: [
      {
        src: "/portfolio/tech-13.png",
        alt: "Powder room technical drawings with fixture placement and plumbing specifications",
      },
      {
        src: "/portfolio/tech-14.png",
        alt: "Detailed elevation drawings showing vanity design and material specifications",
      },
    ],
  },
];
