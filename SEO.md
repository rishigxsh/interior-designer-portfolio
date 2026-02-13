# SEO Guide

Complete guide to optimizing your Interior Designer Portfolio for search engines.

## What's Already Implemented

Your site includes production-ready SEO out of the box:

✅ **Meta Tags** - Title, description, keywords on every page  
✅ **Open Graph** - Social media preview cards  
✅ **Twitter Cards** - Twitter-specific previews  
✅ **Sitemap** - Dynamic XML sitemap  
✅ **Robots.txt** - Search engine instructions  
✅ **Semantic HTML** - Proper heading hierarchy  
✅ **Alt Text** - Descriptive image alt attributes  
✅ **Mobile-Friendly** - Responsive design  
✅ **Fast Loading** - Optimized images and code splitting  

## Customizing SEO Metadata

### 1. Site-Wide Metadata

**File: `app/layout.tsx` (lines 18-55)**

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name — Residential Interior Design Portfolio",
    template: "%s — Your Name",
  },
  description: "Update this to describe your services and expertise.",
  keywords: [
    "interior design",
    "residential design", 
    "your city interior designer",
    "modern interiors",
    // Add more relevant keywords
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    url: "https://your-actual-domain.com", // UPDATE THIS!
    siteName: "Your Name Portfolio",
    title: "Your Name — Residential Interior Design Portfolio",
    description: "Brief description for social sharing",
    images: [
      {
        url: "/portfolio/portfolio-01.jpg", // Use your best image
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Residential Interior Design Portfolio",
    description: "Brief description for Twitter",
    images: ["/portfolio/portfolio-01.jpg"],
  },
};
```

### 2. Page-Specific Metadata

Each page has its own metadata that you can customize:

#### Home Page
**File: `app/page.tsx`**

Currently inherits from root. To customize:
```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Your unique home page description",
};
```

#### Work Page
**File: `app/work/page.tsx` (lines 4-10)**

#### About Page
**File: `app/about/page.tsx` (lines 4-10)**

#### Contact Page
**File: `app/contact/page.tsx` (lines 4-10)**

#### Project Detail Pages
**File: `app/work/[slug]/page.tsx`**

Dynamic metadata already implemented! Updates automatically based on project data.

### 3. Sitemap Configuration

**File: `app/sitemap.ts` (line 5)**

```typescript
const baseUrl = "https://your-actual-domain.com"; // UPDATE THIS!
```

The sitemap automatically includes:
- Home page
- Work page
- About page
- Contact page
- All project detail pages

**Test your sitemap:** `https://yoursite.com/sitemap.xml`

### 4. Robots.txt

**File: `public/robots.txt`**

```txt
User-agent: *
Allow: /

Sitemap: https://your-actual-domain.com/sitemap.xml
```

Update the sitemap URL after deployment.

## Optimizing Project Descriptions

### Write SEO-Friendly Alt Text

**File: `content/projects.ts`**

Good alt text is:
- Descriptive (what's in the image?)
- Specific (mention style, materials, features)
- Natural (not keyword-stuffed)

**Bad Example:**
```typescript
alt: "interior design living room"
```

**Good Example:**
```typescript
alt: "Modern living room featuring neutral palette, plush seating, and architectural lighting"
```

### Optimize Project Descriptions

Include relevant keywords naturally:

```typescript
{
  title: "Modern Living Elegance",
  description: "A sophisticated living space combining neutral tones with refined textures for timeless comfort and contemporary style in downtown Toronto.",
  // Location-specific if possible
  location: "Toronto, Canada",
}
```

## Local SEO

### Add Location Information

1. **Update Contact Page**
   - Mention your city/region
   - Use schema markup (optional, see below)

2. **Google Business Profile**
   - Create/claim at [google.com/business](https://www.google.com/business)
   - Add your website URL
   - Upload portfolio images
   - Get reviews

3. **Location Keywords**
   Add to metadata:
   ```typescript
   keywords: [
     "interior design",
     "Toronto interior designer",
     "residential design Toronto",
     "modern interior design Canada",
   ]
   ```

## Structured Data (Optional)

Add JSON-LD schema for rich results.

### Person/Professional Schema

**File: `app/about/page.tsx`**

Add after imports:
```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Residential Interior Designer",
  "description": "Brief bio",
  "url": "https://yoursite.com",
  "image": "https://yoursite.com/portfolio/portfolio-01.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Canada",
    "addressRegion": "Ontario",
    "addressLocality": "Your City"
  },
  "sameAs": [
    "https://www.linkedin.com/in/yourprofile",
    "https://www.instagram.com/yourhandle",
  ]
};
```

Then in the component:
```tsx
export default function AboutPageContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Rest of component */}
    </>
  );
}
```

### Portfolio/Creative Work Schema

For individual projects:

```typescript
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Modern Living Elegance",
  "description": "Project description",
  "image": "/portfolio/portfolio-01.jpg",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  }
};
```

## Content Strategy

### 1. Write Compelling Descriptions

Each page should have unique, descriptive content:

- **Home**: Who you are, what you do, where you're based
- **Work**: Brief intro to your style/approach
- **About**: Your experience, capabilities, unique value
- **Contact**: Location, availability, services offered
- **Projects**: Detailed descriptions of each project

### 2. Use Proper Headings

Already implemented! Hierarchy:
- `<h1>` - Page title (one per page)
- `<h2>` - Section headings
- `<h3>` - Subsections

### 3. Internal Linking

Link between pages naturally:
- Home → Work (featured projects)
- Work → Project details
- Project details → Next/Previous projects
- Footer → All main pages

Already implemented! ✅

## Image Optimization

### 1. File Names

Use descriptive file names:
```
❌ IMG_1234.jpg
✅ modern-living-room-neutral-palette.jpg
```

### 2. File Size

Aim for:
- **Desktop**: < 200KB per image
- **Mobile**: < 100KB per image

Use tools:
- [Squoosh](https://squoosh.app)
- [TinyPNG](https://tinypng.com)
- Sharp CLI: `sharp -i input.jpg -o output.jpg --quality 85`

### 3. Format

Next.js automatically converts to WebP, but upload as:
- **JPEG** for photos
- **PNG** for graphics with transparency

### 4. Dimensions

Recommended:
- **Project cards**: 800×1000px (4:5 aspect ratio)
- **Gallery images**: 1600×1000px (16:10 aspect ratio)
- **Hero images**: 1920×1200px

## Performance & SEO

Fast sites rank better. Your site already includes:

✅ **Image optimization** via Next.js Image  
✅ **Code splitting** automatic  
✅ **Font optimization** via next/font  
✅ **Lazy loading** for images below fold  
✅ **Static generation** for fast initial load  

### Test Performance

1. **Lighthouse** (Chrome DevTools)
   - Open DevTools (F12)
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ in all categories

2. **PageSpeed Insights**
   - [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL after deployment
   - Get mobile and desktop scores

3. **GTmetrix**
   - [gtmetrix.com](https://gtmetrix.com)
   - Detailed performance analysis

## Post-Launch SEO Checklist

After deploying:

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Create Google Business Profile
- [ ] Add site to industry directories (Houzz, Behance, etc.)
- [ ] Share on social media (LinkedIn, Instagram)
- [ ] Add social share buttons (optional)
- [ ] Set up Google Analytics
- [ ] Monitor search rankings

## Google Search Console Setup

1. **Verify Ownership**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property
   - Verify via DNS or HTML tag

2. **Submit Sitemap**
   - Go to Sitemaps section
   - Enter: `sitemap.xml`
   - Submit

3. **Request Indexing**
   - Go to URL Inspection
   - Enter your homepage URL
   - Click "Request Indexing"

4. **Monitor**
   - Check weekly for:
     - Indexing status
     - Search performance
     - Mobile usability
     - Core Web Vitals

## Content Updates for Better SEO

### Regular Updates

1. **Add New Projects**
   - Fresh content signals active site
   - Update every 1-2 months if possible

2. **Blog (Optional)**
   - Add `/blog` for articles
   - Topics: design tips, project stories, trends
   - Great for SEO, but optional

3. **Keep Content Current**
   - Update "Available for hire" status
   - Refresh project descriptions
   - Update software/tools list

### Social Proof

Add to About page:
- Awards/certifications
- Notable clients (with permission)
- Years of experience
- Education/credentials

## Link Building

Get quality backlinks:

1. **Professional Directories**
   - Houzz
   - Behance
   - Dribble
   - Architizer

2. **Social Media**
   - LinkedIn (portfolio section)
   - Instagram (link in bio)
   - Pinterest (project pins)

3. **Local Citations**
   - Local business directories
   - Chamber of Commerce
   - Industry associations

4. **PR & Features**
   - Reach out to design blogs
   - Submit to award programs
   - Local press releases

## Mobile SEO

Already optimized! Your site includes:

✅ Responsive design  
✅ Mobile-friendly navigation  
✅ Touch-friendly buttons (44×44px minimum)  
✅ Fast mobile loading  
✅ No intrusive interstitials  

Test on:
- Google Mobile-Friendly Test
- Real devices (iPhone, Android)

## Accessibility = Better SEO

Google considers accessibility:

✅ Alt text on images  
✅ Proper heading hierarchy  
✅ Keyboard navigation  
✅ Focus indicators  
✅ Sufficient color contrast  
✅ Semantic HTML  

All implemented! ✅

## Monitoring & Tracking

### Set Up Analytics

**Google Analytics 4:**
```bash
# Add to environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Track:
- Page views
- Popular projects
- Traffic sources
- User behavior

### Track Rankings

Free tools:
- Google Search Console (built-in)
- Ubersuggest (free tier)

Paid tools:
- Ahrefs
- SEMrush
- Moz

### Key Metrics

Monitor:
1. **Organic traffic** - Visitors from Google
2. **Rankings** - Position for target keywords
3. **Click-through rate** - From search results
4. **Bounce rate** - Visitors leaving quickly
5. **Conversions** - Contact form opens

## Target Keywords

Recommended:
- `[your city] interior designer`
- `residential interior design [your city]`
- `modern interior designer Canada`
- `[specific service] interior design`

Track rankings for 10-20 relevant keywords.

## Advanced: Meta Pixel (Optional)

If you run ads:

**Facebook/Instagram Pixel:**
```tsx
// app/layout.tsx
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## Quick Wins

Do these first for immediate impact:

1. ✅ Update site URL in `app/sitemap.ts` after deployment
2. ✅ Write descriptive alt text for all images
3. ✅ Submit sitemap to Google Search Console
4. ✅ Create Google Business Profile
5. ✅ Share portfolio on LinkedIn/Instagram
6. ✅ Test site on Lighthouse (aim for 90+ score)
7. ✅ Add location-specific keywords to metadata

## Resources

- **Google Search Central**: [developers.google.com/search](https://developers.google.com/search)
- **Next.js SEO Guide**: [nextjs.org/learn/seo/introduction-to-seo](https://nextjs.org/learn/seo/introduction-to-seo)
- **Schema.org**: [schema.org](https://schema.org)
- **Web.dev**: [web.dev](https://web.dev)

---

**Your site is already SEO-optimized!** Just update the URLs and submit to search engines.