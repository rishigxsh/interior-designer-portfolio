# Work Page - Implementation Guide

## Overview

The Work page (`/app/work/page.tsx`) is a clean Behance-style gallery featuring:
- Real portfolio images from `/public/portfolio/`
- Category filtering with smooth animations
- Responsive 4-column grid (mobile → desktop)
- Luxury hover effects and transitions

---

## Projects Data Structure

### Location
`/content/projects.ts`

### Structure
```typescript
export interface Project {
  slug: string;              // URL-friendly identifier
  title: string;             // Project name
  category: string;          // One of: Living Room, Bedroom, Wardrobe, Kitchen, Dining, Kids Room
  location: string;          // "Canada"
  role: string;              // "Residential Interior Designer"
  description: string;       // 1-2 lines max
  images: {
    src: string;            // "/portfolio/portfolio-XX.jpg"
    alt: string;            // High-quality descriptive alt text
  }[];
}
```

### Current Projects (6 Total)

1. **Modern Living Elegance** (Living Room)
   - Images: portfolio-01.jpg, portfolio-02.jpg
   
2. **Serene Bedroom Sanctuary** (Bedroom)
   - Images: portfolio-03.jpg, portfolio-04.jpg
   
3. **Bespoke Wardrobe Design** (Wardrobe)
   - Images: portfolio-05.jpg, portfolio-06.jpg
   
4. **Contemporary Kitchen Haven** (Kitchen)
   - Images: portfolio-07.jpg, portfolio-08.jpg
   
5. **Elegant Dining Experience** (Dining)
   - Images: portfolio-09.jpg, portfolio-10.jpg
   
6. **Playful Kids Retreat** (Kids Room)
   - Images: portfolio-11.jpg, portfolio-12.jpg

---

## Page Structure

### 1. Header Section
```tsx
<h1>Work</h1>
<p>A selection of residential interiors and visualizations.</p>
```

**To edit:**
- Title: Change "Work" text in the `<h1>` tag
- Subtitle: Change the description text in the `<p>` tag

---

### 2. Filter Chips

**Categories:**
- All (shows all projects)
- Living Room
- Bedroom
- Wardrobe
- Kitchen
- Dining
- Kids Room

**How it works:**
- Categories are automatically extracted from projects
- Active filter is highlighted with black background
- Clicking a filter shows/hides relevant projects
- Smooth fade animation between filter changes

**Accessibility:**
- Keyboard navigable (Tab key)
- Gold focus ring on keyboard focus
- ARIA `pressed` state
- Screen reader friendly

---

### 3. Projects Grid

**Responsive Layout:**
```
Mobile:    1 column
Tablet:    2 columns  (768px+)
Desktop:   3 columns  (1024px+)
Large:     4 columns  (1280px+)
```

**Card Features:**
- Cover image (first image of each project)
- Project title (serif font)
- Category label (uppercase, small)
- Hover effects:
  - Card lifts up 4px
  - Image zooms in (scale 1.05)
  - Subtle border appears
  - Dark overlay (5% opacity)
  - Title shifts up 2px
  - Title color fades to muted

**Performance:**
- Uses `next/image` for optimization
- Priority loading for first 4 cards
- Responsive image sizes
- Lazy loading for below-fold images

---

### 4. Project Count

Shows at bottom:
- "Showing X projects"
- "Showing X projects in [Category]" (when filtered)

---

## Editing Content

### To Change the Page Description

File: `app/work/page.tsx` (line ~23)

```tsx
<p className="text-lg md:text-xl text-muted font-light max-w-2xl">
  A selection of residential interiors and visualizations.  {/* ← EDIT THIS */}
</p>
```

**Examples:**
- "Curated interior design projects and spatial visualizations."
- "Residential design work spanning modern living spaces."
- "Selected projects from our portfolio of luxury interiors."

---

### To Add a New Project

1. Add 2 new images to `/public/portfolio/` (e.g., portfolio-13.jpg, portfolio-14.jpg)

2. Add project to `/content/projects.ts`:

```typescript
{
  slug: "your-project-url",
  title: "Your Project Name",
  category: "Living Room", // Must match existing category
  location: "Canada",
  role: "Residential Interior Designer",
  description: "One to two lines describing the project essence.",
  images: [
    {
      src: "/portfolio/portfolio-13.jpg",
      alt: "Detailed description of first image for accessibility",
    },
    {
      src: "/portfolio/portfolio-14.jpg",
      alt: "Detailed description of second image for accessibility",
    },
  ],
},
```

---

### To Add a New Category

1. Add project with new category name in `/content/projects.ts`
2. Filter chip will automatically appear (no code changes needed!)

**Example:**
```typescript
category: "Home Office", // New category
```

The filter system automatically extracts unique categories.

---

### To Change Category Order

Categories appear in the order they first appear in the projects array, after "All".

To reorder:
1. Rearrange projects in `/content/projects.ts`
2. First project of each category determines category position

---

## Image Requirements

### Format
- JPEG or PNG
- Recommended: JPEG for smaller file size

### Dimensions
- Minimum width: 1200px
- Aspect ratio: 4:5 (portrait) for best results
- Example: 1200x1500px, 1600x2000px

### Optimization
- Next.js automatically optimizes images
- Serves WebP when supported
- Creates responsive sizes
- Lazy loads below-fold images

### File Naming
- Pattern: `portfolio-##.jpg`
- Numbers: 01, 02, 03... (with leading zero)
- Location: `/public/portfolio/`

---

## Animation Details

### Filter Change
- **Duration:** 400ms
- **Effect:** Fade out old grid → Fade in new grid
- **Stagger:** 50ms delay per card

### Card Hover
- **Image zoom:** Scale 1.05, 700ms duration
- **Card lift:** -4px translateY, 300ms
- **Title shift:** -2px translateY, 300ms
- **Overlay:** 5% opacity, 300ms

### Initial Load
- **Cards:** Fade in with scale 0.95→1
- **Stagger:** 50ms per card
- **Total:** Smooth cascade effect

---

## Keyboard Navigation

**Tab:** Move between filter chips and cards
**Enter/Space:** Activate filter chip or project link
**Shift+Tab:** Move backwards

**Focus indicators:**
- Gold ring (2px)
- 2px offset for clarity
- Only visible with keyboard (not mouse)

---

## Component Files

### New Components
- `/components/ui/FilterChip.tsx` - Category filter buttons
- `/components/ui/ProjectCardSkeleton.tsx` - Loading state (future use)

### Updated Components
- `/components/ui/ProjectCard.tsx` - Enhanced hover effects
- `/app/work/page.tsx` - Complete rebuild with filtering
- `/content/projects.ts` - New project structure

---

## Features

✅ **Category Filtering**
- Smooth animations
- URL-friendly (future: can add query params)
- Automatic category detection

✅ **Responsive Grid**
- 1→2→3→4 columns
- Generous spacing
- Mobile-first design

✅ **Premium Hover Effects**
- Behance-style card lift
- Image zoom + overlay
- Title animation
- Subtle border

✅ **Performance**
- Next.js Image optimization
- Priority loading
- Lazy loading
- Efficient re-renders

✅ **Accessibility**
- Keyboard navigation
- Focus indicators
- ARIA labels
- Screen reader support

---

## Testing Checklist

- [ ] All 6 projects display correctly
- [ ] All 12 images load properly
- [ ] Filters switch smoothly between categories
- [ ] "All" shows all 6 projects
- [ ] Each category filter shows correct projects
- [ ] Hover effects work on all cards
- [ ] Grid is responsive at all breakpoints
- [ ] Images are optimized (check Network tab)
- [ ] Keyboard navigation works
- [ ] Focus rings appear with keyboard
- [ ] Cards link to correct project detail pages

---

## Tips for Best Results

### Project Descriptions
- Keep to 1-2 lines (15-20 words max)
- Focus on feeling/atmosphere, not features
- Use descriptive, evocative language
- Match luxury aesthetic

**Good examples:**
- "A sophisticated living space combining neutral tones with refined textures."
- "Custom storage solution with elegant finishes and meticulous attention."

**Avoid:**
- Bullet points or lists
- Technical specifications
- Overly long descriptions

### Alt Text
- Be descriptive and specific
- Include room type, style, key features
- 10-15 words ideal
- Help visually impaired users understand the image

**Good example:**
- "Modern living room featuring neutral palette, plush seating, and architectural lighting"

**Avoid:**
- Generic text like "Living room image"
- Just room type with no details

### Category Names
- Keep consistent (use title case)
- Be specific but not too narrow
- Use industry-standard terms
- 1-2 words ideal

---

## Current Categories

1. **Living Room** - Main living/family spaces
2. **Bedroom** - All bedroom designs
3. **Wardrobe** - Closets, walk-ins, storage
4. **Kitchen** - Kitchen design & renovation
5. **Dining** - Dining rooms & eating areas
6. **Kids Room** - Children's bedrooms & play spaces

---

## Future Enhancements

Potential additions:
- Load more / pagination for many projects
- Search functionality
- Sort options (newest, popular, etc.)
- URL query params for shareable filtered views
- Lightbox preview on card hover
- Project count per category
- Related projects on detail pages

---

## Need Help?

**Adding Projects:** See "To Add a New Project" section above
**Changing Filters:** Categories auto-generate from projects
**Styling Changes:** Modify Tailwind classes in components
**Layout Changes:** Adjust grid columns in page component

Refer to `DESIGN_SYSTEM.md` for component documentation and design guidelines.
