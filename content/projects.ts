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
        src: "/portfolio/portfolio-01.jpg",
        alt: "Modern living room featuring neutral palette, plush seating, and architectural lighting",
      },
      {
        src: "/portfolio/portfolio-02.jpg",
        alt: "Living room detail showcasing luxurious textures and carefully curated decor elements",
      },
      {
        src: "/portfolio/portfolio-03.jpg",
        alt: "Contemporary living space with refined furniture arrangement and ambient lighting",
      },
      {
        src: "/portfolio/portfolio-04.jpg",
        alt: "Living area highlighting elegant material palette and sophisticated design details",
      },
    ],
  },
  {
    slug: "serene-bedroom-sanctuary",
    title: "Serene Bedroom Sanctuary",
    category: "Bedroom",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A calming retreat designed for rest, featuring soft layers and warm natural materials.",
    images: [
      {
        src: "/portfolio/portfolio-05.jpg",
        alt: "Tranquil bedroom with organic textures, layered linens, and ambient lighting",
      },
    ],
  },
  {
    slug: "bespoke-wardrobe-design",
    title: "Bespoke Wardrobe Design",
    category: "Wardrobe",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "Custom storage solution with elegant finishes and meticulous attention to functional luxury.",
    images: [
      {
        src: "/portfolio/portfolio-06.jpg",
        alt: "Custom walk-in wardrobe with sophisticated shelving and luxury materials",
      },
      {
        src: "/portfolio/portfolio-07.jpg",
        alt: "Wardrobe detail showcasing elegant organization and premium finishes",
      },
    ],
  },
  {
    slug: "contemporary-kitchen-haven",
    title: "Contemporary Kitchen Haven",
    category: "Kitchen",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A refined culinary space balancing clean lines with warmth and everyday functionality.",
    images: [
      {
        src: "/portfolio/portfolio-08.jpg",
        alt: "Contemporary kitchen with minimalist cabinetry, premium appliances, and natural stone countertops",
      },
    ],
  },
  {
    slug: "elegant-dining-experience",
    title: "Elegant Dining Experience",
    category: "Dining",
    location: "Canada",
    role: "Residential Interior Designer",
    description: "A gathering space that balances formality with comfort through refined materials and lighting.",
    images: [
      {
        src: "/portfolio/portfolio-09.jpg",
        alt: "Elegant dining room with statement lighting, refined table setting, and luxury seating",
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
  },
];
