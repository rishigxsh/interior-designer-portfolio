# Customization Guide

## Quick Start Checklist

### 1. Branding & Contact Info

**Header Logo** (`components/Header.tsx`)
- Line 18: Change "Studio Name" to your business name

**Footer Contact** (`components/Footer.tsx`)
- Line 13: Update email address
- Line 19: Update phone number
- Line 29: Update business name in copyright

**Contact Page** (`app/contact/page.tsx`)
- Line 50: Update email
- Line 57: Update phone
- Lines 82-96: Update or remove social media links

### 2. Project Content

Edit `content/projects.ts` to add your own projects:

```typescript
{
  slug: "your-project-url",           // URL-friendly name
  title: "Your Project Name",
  category: "Living Room",             // or Bedroom, Kitchen, Kids Room, Wardrobe
  year: 2024,                          // Optional
  location: "Canada",
  role: "Residential Interior Designer",
  description: "1-2 line description",
  images: [
    {
      src: "/images/project-1.jpg",   // Place images in public/images/
      alt: "Descriptive alt text",
    },
  ],
}
```

### 3. Images

**Replace Placeholder Images:**
1. Create folder: `public/images/`
2. Add your high-quality project images
3. Update image paths in `content/projects.ts`
4. Recommended: Use WebP or JPEG format, 1600px+ width

**About Page Image** (`app/about/page.tsx`)
- Line 15: Replace portrait image

**Home Page Image** (`app/page.tsx`)
- Line 77: Replace design philosophy image

### 4. Colors & Styling

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#FAFAF9",    // Main background color
  foreground: "#0A0A0A",    // Text color
  border: "#E7E5E4",        // Border color
}
```

### 5. Copy/Text Content

**Home Page** (`app/page.tsx`)
- Lines 11-13: Hero headline
- Lines 14-17: Hero subheading
- Lines 97-99: Design philosophy text

**About Page** (`app/about/page.tsx`)
- Lines 26-36: About paragraphs
- Lines 41-47: Services list
- Lines 56-75: Recognition/Awards

**Contact Page** (`app/contact/page.tsx`)
- Lines 12-15: Page description

### 6. SEO & Metadata

**Site Title** (`app/layout.tsx`)
- Line 17: Update site title
- Line 18: Update description

**Favicon & Icons**
- Add `favicon.ico` to `app/` folder
- Add `apple-icon.png` for iOS (180x180px)
- Add `icon.png` for other devices (512x512px)

## Color Palette

The default palette uses:
- **Background**: Off-white (#FAFAF9) - warm, inviting
- **Text**: Near-black (#0A0A0A) - high contrast
- **Borders**: Light stone (#E7E5E4) - subtle separation
- **Accents**: Uses foreground color for consistency

## Typography

- **Font**: Inter (Google Fonts)
- **Headlines**: Bold, tight tracking
- **Body**: Regular weight, relaxed line-height

## Layout Spacing

- **Container max-width**: 1400px
- **Section spacing**: 32 (8rem) between sections
- **Element spacing**: 6-12 (1.5-3rem) between elements

## Design Principles

1. **Whitespace**: Generous spacing throughout
2. **Typography-first**: Strong, clear hierarchy
3. **Image-focused**: Large, high-quality photography
4. **Minimal UI**: Subtle interactions, refined details
5. **Luxury feel**: Soft shadows, elegant borders

## Advanced Customization

### Adding a New Category

1. Add projects with new category in `content/projects.ts`
2. Optionally add category filter to work page

### Changing Fonts

1. Import font in `app/layout.tsx`
2. Add font variable to `tailwind.config.ts`
3. Update CSS variables in `app/globals.css`

### Adding Animation

Use Tailwind's transition utilities:
- `transition-all duration-300`
- `hover:scale-105`
- `group-hover:opacity-70`

## Support

For Next.js documentation: https://nextjs.org/docs
For Tailwind CSS: https://tailwindcss.com/docs
