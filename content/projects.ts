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
  projectDetails?: {
    overview: string;
    intent: string;
    approach: string;
    execution: string;
    tools: string;
  };
}

export const projects: Project[] = [
  {
    slug: "modern-living-elegance",
    title: "Modern Living Elegance",
    category: "Living Room",
    location: "Bangalore, India",
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
    projectDetails: {
      overview: "This residential living room project was designed to create a refined, contemporary space that balances visual elegance with everyday functionality. The layout and detailing focus on clean lines, symmetry, and a calm material palette suited for long-term residential use.",
      intent: "The primary objective was to design a cohesive living space that feels open, balanced, and visually structured. Emphasis was placed on proportion, alignment, and wall articulation to create a focal point while maintaining clear circulation and functional zoning.",
      approach: "The space was planned with a strong focus on spatial hierarchy and visual continuity. Vertical elements, layered wall treatments, and integrated lighting were used to enhance depth and create a sense of understated luxury. The furniture layout was carefully coordinated to support both comfort and movement within the space.",
      execution: "Detailed drawings and coordinated layouts were developed to ensure accurate execution on site. Close attention was given to dimensions, alignment, and finishes to maintain consistency between design intent and final execution.",
      tools: "AutoCAD · SketchUp · 3ds Max",
    },
  },
  {
    slug: "rustic-living",
    title: "Rustic Living",
    category: "Living Room",
    location: "Bangalore, India",
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
    projectDetails: {
      overview: "This residential living room project explores a warm, rustic aesthetic while maintaining functional space planning and visual balance. The design focuses on creating an inviting environment through the use of texture, material contrast, and carefully coordinated furniture placement.",
      intent: "The intent was to design a comfortable and character-rich living space that feels grounded and welcoming. Emphasis was placed on creating warmth through surface textures and earthy tones while ensuring the layout supports everyday use and clear circulation.",
      approach: "The space was planned with attention to proportion and visual rhythm. Textured wall treatments, accent elements, and layered lighting were used to add depth without overwhelming the space. Furniture placement was carefully coordinated to maintain comfort, balance, and usability.",
      execution: "Detailed drawings and layouts were developed to support accurate on-site execution. Careful coordination of dimensions, finishes, and alignment ensured consistency between the design concept and the completed space.",
      tools: "AutoCAD · SketchUp · 3ds Max",
    },
  },
  {
    slug: "powder-room",
    title: "Powder Room",
    category: "Powder Room",
    location: "Bangalore, India",
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
    projectDetails: {
      overview: "This powder room project explores refined, contemporary design through two distinct design variations, each focused on creating a sophisticated yet functional guest space. The designs balance visual elegance with practical planning, ensuring comfort, clarity, and ease of use within a compact footprint.",
      intent: "The intent was to design powder rooms that feel elevated and memorable while remaining efficient and easy to maintain. Emphasis was placed on creating a strong visual identity through material contrast, lighting, and clean detailing, without compromising functionality or circulation.",
      approach: "Both variations were designed with careful attention to proportion, symmetry, and material layering. Statement mirrors, integrated lighting, and minimal vanity designs were used to enhance visual depth and spatial clarity. Storage and fixture placement were coordinated to maintain a clean, uncluttered appearance suitable for guest use.",
      execution: "Detailed layouts and drawings were developed to support accurate execution on site. Coordination of finishes, lighting placement, and vanity detailing ensured consistency between the design concept and final execution across both variations.",
      tools: "AutoCAD · SketchUp · 3ds Max",
    },
  },
  {
    slug: "serene-bedroom-sanctuary",
    title: "Serene Bedroom Sanctuary",
    category: "Bedroom",
    location: "Bangalore, India",
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
    projectDetails: {
      overview: "This bedroom project was designed as a calm and functional private retreat, combining a soft, layered aesthetic with integrated storage solutions. The design focuses on comfort, visual balance, and practical organization to support everyday living within a refined residential setting.",
      intent: "The intent was to create a bedroom that feels restful and uncluttered while efficiently accommodating storage needs. Emphasis was placed on warmth, symmetry, and subtle detailing to enhance relaxation without compromising functionality.",
      approach: "The space was planned with a strong focus on proportion and alignment. A custom-designed headboard wall establishes a visual focal point, while coordinated lighting and neutral finishes contribute to a soothing atmosphere. Integrated wardrobe systems were carefully designed to maximize storage efficiency while maintaining a clean, minimal appearance within the room.",
      execution: "Detailed drawings and layouts were developed to support accurate execution on site. Joinery detailing, lighting placement, and wardrobe configurations were coordinated to ensure consistency between the design intent and final execution.",
      tools: "AutoCAD · SketchUp · 3ds Max",
    },
  },
  {
    slug: "contemporary-kitchen-dining",
    title: "Contemporary Kitchen & Dining",
    category: "Kitchen",
    location: "Bangalore, India",
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
    projectDetails: {
      overview: "This project involved the planning and design of a combined kitchen and dining space, with a focus on functional efficiency, spatial clarity, and coordinated detailing. The layout was developed to support everyday use while maintaining visual continuity between the two zones.",
      intent: "The intent was to create a well-organized kitchen and dining environment that balances practical workflow requirements with a clean, contemporary aesthetic. Emphasis was placed on optimizing circulation, work zones, and sightlines across the connected spaces.",
      approach: "The kitchen was planned with clearly defined preparation, cooking, and storage areas to support efficient movement and usability. Cabinetry, finishes, and lighting were coordinated to establish consistency between the kitchen and dining areas. The dining space was designed as an extension of the kitchen, maintaining proportional balance and visual alignment.",
      execution: "Detailed drawings and coordinated layouts were prepared to support accurate execution on site. Careful attention was given to cabinetry detailing, lighting placement, and dimensional coordination to ensure alignment between design intent and implementation.",
      tools: "AutoCAD · SketchUp · 3ds Max",
    },
  },
  {
    slug: "playful-kids-retreat",
    title: "Playful Kids Retreat",
    category: "Kids Room",
    location: "Bangalore, India",
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
    projectDetails: {
      overview: "This project involved the design of a children's bedroom with integrated sleeping, storage, and activity zones. The space was planned to support daily use, safety, and flexibility while maintaining a cohesive and well-organized layout.",
      intent: "The intent was to create a functional and adaptable children's space that encourages creativity while remaining structured and easy to maintain. Emphasis was placed on efficient use of vertical space, clear zoning, and age-appropriate design considerations.",
      approach: "The room was designed with a loft-style sleeping arrangement to optimize floor area and allow for dedicated play and study zones below. Integrated storage solutions were carefully planned to support organization and accessibility. Color and graphic elements were introduced in a controlled manner to add visual interest without overwhelming the space.",
      execution: "Detailed drawings and layouts were prepared to support accurate execution on site. Furniture dimensions, storage detailing, and lighting placement were coordinated to ensure safety, functionality, and alignment with the overall design intent.",
      tools: "AutoCAD · SketchUp · 3ds Max",
    },
  },
];
