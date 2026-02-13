# Design System Documentation

## Overview

A premium, luxury aesthetic design system for a residential interior designer portfolio featuring refined typography, subtle animations, and accessible components.

## Typography

### Font Stack

**Serif (Headlines)**
- Font: Playfair Display
- Usage: Headings, hero titles, section titles
- Weights: 400, 500, 600, 700
- Class: `font-serif`

**Sans-serif (Body)**
- Font: Inter
- Usage: Body text, navigation, UI elements
- Weights: 300 (light), 400, 500, 600
- Class: `font-sans` (default)

### Typography Scale

```tsx
// Hero titles
className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight"

// Section headings
className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"

// Card titles
className="font-serif text-xl md:text-2xl font-medium tracking-tight"

// Body large
className="text-lg md:text-xl text-muted font-light leading-relaxed"

// Body regular
className="text-muted font-light leading-relaxed"
```

## Color Palette

### Primary Colors

```typescript
{
  background: "#FAFAF8",  // Off-white, warm undertone
  foreground: "#1A1A1A",  // Near-black
  muted: "#6B6B6B",       // Muted gray for secondary text
  border: "#E8E6E3",      // Subtle border
  gold: "#C9A05C",        // Accent (use sparingly!)
}
```

### Usage Guidelines

- **Gold accent**: Use only for special highlights (badges, focus states, accents). Never overuse.
- **Muted**: Use for secondary text, labels, and subtle UI elements
- **Foreground**: Primary text and important UI elements
- **Border**: Subtle separators, use with 60% opacity for ultra-subtle divisions

## Components

### Container

Responsive container with consistent padding and max-width.

```tsx
import Container from "@/components/ui/Container";

// Default (1400px max-width)
<Container>...</Container>

// Narrow (1024px max-width)
<Container size="narrow">...</Container>

// Wide (1600px max-width)
<Container size="wide">...</Container>
```

### SectionHeading

Animated heading component with optional subtitle.

```tsx
import SectionHeading from "@/components/ui/SectionHeading";

<SectionHeading 
  subtitle="Optional descriptive text"
  align="left" // or "center"
>
  Heading Text
</SectionHeading>
```

**Features:**
- Fade-in animation on scroll
- Consistent typography
- Optional subtitle
- Left or center alignment

### Badge

Small, elegant badge for labels and categories.

```tsx
import Badge from "@/components/ui/Badge";

// Default (subtle)
<Badge>Available for hire</Badge>

// Gold accent
<Badge variant="gold">Featured</Badge>
```

### Button

Accessible button component with hover animations.

```tsx
import Button from "@/components/ui/Button";

// Primary (filled)
<Button href="/contact" icon={<ArrowIcon />}>
  Get in Touch
</Button>

// Ghost (outlined)
<Button variant="ghost" onClick={handleClick}>
  Learn More
</Button>

// Form submit
<Button type="submit" disabled={isSubmitting}>
  Send Message
</Button>
```

**Features:**
- Focus-visible ring (gold)
- Scale animation on hover (1.01)
- Optional icon
- Link or button mode
- Disabled state

### ProjectCard

Project preview card with image and metadata.

```tsx
import ProjectCard from "@/components/ui/ProjectCard";

<ProjectCard 
  project={projectData} 
  priority={index === 0} // For above-fold images
/>
```

**Features:**
- Hover scale animation on image
- Fade overlay on hover
- Responsive image optimization
- Smooth transitions

### ResponsiveGrid

Responsive grid layout for projects or content.

```tsx
import ResponsiveGrid from "@/components/ui/ResponsiveGrid";

<ResponsiveGrid 
  columns={3}        // 2 or 3
  gap="medium"       // "small" | "medium" | "large"
>
  {items.map(item => <Item key={item.id} {...item} />)}
</ResponsiveGrid>
```

### LightboxModal

Full-screen image viewer with keyboard navigation.

```tsx
import LightboxModal from "@/components/ui/LightboxModal";

<LightboxModal
  isOpen={isOpen}
  onClose={() => setOpen(false)}
  imageSrc={currentImage.src}
  imageAlt={currentImage.alt}
  currentIndex={index}
  totalImages={images.length}
  onNext={handleNext}
  onPrev={handlePrev}
/>
```

**Features:**
- Full accessibility (ARIA, keyboard nav)
- Escape to close
- Arrow keys for navigation
- Image counter
- Backdrop blur
- Body scroll lock when open

**Keyboard shortcuts:**
- `Escape`: Close lightbox
- `Arrow Right`: Next image
- `Arrow Left`: Previous image

## Animations

### Framer Motion

All animations use Framer Motion for smooth, performant transitions.

**Fade In:**
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

**Slide Up:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Hover Scale:**
```tsx
<motion.div
  whileHover={{ scale: 1.01 }}
  transition={{ duration: 0.3 }}
>
```

### Animation Principles

1. **Subtle & Tasteful**: No flashy or distracting animations
2. **Performance**: Use `transform` and `opacity` only
3. **Duration**: 0.3-0.6s for most animations
4. **Once**: Use `viewport={{ once: true }}` for scroll animations
5. **Easing**: Default ease-out for natural feel

## Accessibility

### Focus States

All interactive elements have visible focus indicators:
- Gold ring (`ring-2 ring-gold`)
- Offset for clarity (`ring-offset-2`)
- Applied via `focus-visible:` (only keyboard focus)

### ARIA Labels

```tsx
// Navigation
<nav role="navigation" aria-label="Main navigation">

// Modal
<div role="dialog" aria-modal="true" aria-label="Image lightbox">

// Buttons
<button aria-label="Close lightbox">
```

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order follows visual hierarchy
- Modal traps focus when open
- Clear focus indicators on all elements

### Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Semantic `<nav>`, `<main>`, `<footer>`
- Alt text on all images
- Form labels properly associated

## Spacing Scale

Following a consistent 4px base unit:

```
gap-2  = 0.5rem (8px)
gap-4  = 1rem (16px)
gap-6  = 1.5rem (24px)
gap-8  = 2rem (32px)
gap-12 = 3rem (48px)
gap-16 = 4rem (64px)
gap-20 = 5rem (80px)
gap-32 = 8rem (128px)
```

### Section Spacing

```tsx
// Between major sections
className="mb-32 lg:mb-40"

// Padding for pages
className="py-20 lg:py-28"

// Element spacing
className="space-y-6"
className="space-y-8"
```

## Responsive Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Approach

```tsx
// Mobile default, larger screens override
className="text-4xl md:text-6xl lg:text-7xl"
className="px-6 md:px-8 lg:px-12"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Best Practices

### Images

1. Use `next/image` everywhere
2. Provide appropriate `sizes` attribute
3. Use `priority` for above-fold images
4. Aspect ratios: `aspect-[4/5]` for projects, `aspect-[16/10]` for detail

### Performance

1. Animations use GPU-accelerated properties only
2. Images are automatically optimized by Next.js
3. Static generation for all project pages
4. Components are code-split automatically

### Consistency

1. Always use design system components
2. Follow typography scale
3. Use spacing utilities consistently
4. Apply hover states to all interactive elements

## Example Page Structure

```tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ExamplePage() {
  return (
    <Container className="py-20 lg:py-28">
      <SectionHeading 
        subtitle="Supporting text"
        className="mb-20"
      >
        Page Title
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <p className="text-lg text-muted font-light leading-relaxed">
          Content goes here...
        </p>
        
        <Button href="/next">
          Continue
        </Button>
      </motion.div>
    </Container>
  );
}
```

## File Organization

```
components/
├── ui/                    # Reusable UI components
│   ├── Container.tsx
│   ├── SectionHeading.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── ProjectCard.tsx
│   ├── ResponsiveGrid.tsx
│   └── LightboxModal.tsx
├── Header.tsx            # Layout components
├── Footer.tsx
└── ProjectDetail.tsx     # Page-specific components

app/                      # Pages
├── layout.tsx
├── page.tsx             # Home
├── work/
├── about/
└── contact/

content/
└── projects.ts          # Content data
```

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
