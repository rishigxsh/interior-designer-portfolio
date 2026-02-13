# Home Page Content Guide

This document explains how to edit the content on the Home page.

## Editing the Home Page

File location: `app/page.tsx`

---

## 1. Hero Section

### Headline
```tsx
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.1]">
  Residential Interior Design  {/* ← EDIT THIS */}
</h1>
```

**Current text:** "Residential Interior Design"  
**How to edit:** Replace the text between the `<h1>` tags

---

### Subheadline
```tsx
<p className="text-2xl md:text-3xl lg:text-4xl text-muted font-light mb-12 tracking-tight">
  Clean. Bold. Livable luxury.  {/* ← EDIT THIS */}
</p>
```

**Current text:** "Clean. Bold. Livable luxury."  
**How to edit:** Replace the text between the `<p>` tags

---

### Location Line
```tsx
<div className="flex items-center gap-3 text-sm text-muted font-light">
  <span>Based in Canada</span>  {/* ← EDIT LOCATION */}
  <span className="w-1 h-1 rounded-full bg-muted" />
  <span>Available for hire</span>  {/* ← EDIT STATUS */}
</div>
```

**Current text:** "Based in Canada • Available for hire"  
**How to edit:**
- Change "Based in Canada" to your location
- Change "Available for hire" to your current status

---

## 2. Featured Work Grid

### Number of Projects
```tsx
const featuredProjects = projects.slice(0, 6);  // Shows first 6 projects
```

**Current:** Shows 6 projects  
**How to edit:** Change the number `6` to show more or fewer projects
- Example: `projects.slice(0, 3)` shows 3 projects
- Example: `projects.slice(0, 9)` shows 9 projects

### Project Content
Projects are pulled from `content/projects.ts`  
The home page automatically displays the first N projects in order.

**To reorder:** Rearrange projects in `content/projects.ts`  
**To change images:** Update the project images in `content/projects.ts`

---

## 3. Services Strip

### Services List
```tsx
const services = [
  "Space Planning",           // Service 1
  "3D Visualization",         // Service 2
  "Furniture & Finishes",     // Service 3
  "Residential Interiors",    // Service 4
];
```

**Current services:** Space Planning, 3D Visualization, Furniture & Finishes, Residential Interiors  
**How to edit:** Replace the text in the array

**Example:**
```tsx
const services = [
  "Interior Design",
  "Kitchen & Bath",
  "Color Consulting",
  "Project Management",
];
```

**Note:** The layout works best with 4 items. You can add more, but they may wrap on mobile.

---

## 4. Contact Callout

### Heading
```tsx
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
  Let's talk  {/* ← EDIT THIS */}
</h2>
```

**Current text:** "Let's talk"  
**How to edit:** Replace the text between the `<h2>` tags

---

### Email
```tsx
<a href="mailto:hello@studioname.com"  /* ← EDIT EMAIL ADDRESS */
   className="text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm">
  hello@studioname.com  {/* ← EDIT DISPLAY TEXT */}
</a>
```

**How to edit:**
1. Change `mailto:hello@studioname.com` to your email
2. Change the display text `hello@studioname.com`

**Example:**
```tsx
<a href="mailto:contact@yourname.com">
  contact@yourname.com
</a>
```

---

### Phone
```tsx
<a href="tel:+1234567890"  /* ← EDIT PHONE (no spaces) */
   className="text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm">
  +1 (234) 567-890  {/* ← EDIT DISPLAY TEXT */}
</a>
```

**How to edit:**
1. Change `tel:+1234567890` to your phone (no spaces or special characters)
2. Change the display text `+1 (234) 567-890` (can include formatting)

**Example:**
```tsx
<a href="tel:+16475551234">
  +1 (647) 555-1234
</a>
```

---

### CTA Button
```tsx
<Button href="/contact" icon={ArrowIcon}>
  Start a Project  {/* ← EDIT THIS */}
</Button>
```

**Current text:** "Start a Project"  
**How to edit:** Replace the text between the `<Button>` tags

**Examples:**
- "Get in Touch"
- "Schedule a Consultation"
- "Contact Me"

---

## Quick Edit Checklist

Use this checklist to customize your home page:

- [ ] Update hero headline
- [ ] Update hero subheadline
- [ ] Change location (e.g., "Based in Toronto")
- [ ] Update availability status
- [ ] Set number of featured projects (3, 6, or 9 work well)
- [ ] Customize services list
- [ ] Update contact callout heading
- [ ] Change email address (2 places)
- [ ] Change phone number (2 places)
- [ ] Update CTA button text

---

## Tips for Best Results

### Headlines
- Keep it short and impactful
- Use title case or sentence case consistently
- Avoid overly long phrases (3-5 words ideal)

### Services
- Keep service names short (1-3 words)
- Be specific and clear
- Maintain parallel structure

### Contact Info
- Use a professional email address
- Format phone consistently with your region
- Ensure links work (test `mailto:` and `tel:` links)

### Featured Projects
- Showcase your best work first
- Ensure images are high quality
- Consider variety (different room types)

---

## Current Home Page Structure

```
┌─────────────────────────────────┐
│          HERO SECTION           │
│  • Headline                     │
│  • Subheadline                  │
│  • View Work + Contact buttons  │
│  • Location • Status            │
└─────────────────────────────────┘
            ↓
┌─────────────────────────────────┐
│      FEATURED WORK GRID         │
│   [6 project cards in 3 cols]   │
└─────────────────────────────────┘
            ↓
┌─────────────────────────────────┐
│       SERVICES STRIP            │
│  [4 services in horizontal row] │
└─────────────────────────────────┘
            ↓
┌─────────────────────────────────┐
│      CONTACT CALLOUT            │
│  • "Let's talk" heading         │
│  • Email • Phone                │
│  • CTA button                   │
└─────────────────────────────────┘
```

---

## Need Help?

If you need to make changes beyond simple text edits:

1. **Adding new sections:** Consider creating a new component in `/components`
2. **Changing layout:** Modify the grid columns or spacing
3. **Adding animations:** Use Framer Motion (see existing examples)
4. **Styling changes:** Update Tailwind classes or `tailwind.config.ts`

Refer to `DESIGN_SYSTEM.md` for component documentation.
