# Interior Designer Portfolio

A premium, minimal portfolio website for a residential interior designer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Clean, minimal aesthetic with luxury feel
- **Responsive**: Mobile-first design with perfect gallery experience
- **Fast**: Built with Next.js App Router for optimal performance
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Accessible**: WCAG 2.1 Level AA compliant with keyboard navigation
- **Animated**: Smooth, tasteful animations with Framer Motion
- **Type-Safe**: Fully typed with TypeScript

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Add Your Portfolio Images

**Location:** `/public/portfolio/`

1. Export your project images as high-quality JPEGs
2. Name them sequentially: `portfolio-01.jpg`, `portfolio-02.jpg`, etc.
3. Replace the existing placeholder images
4. Recommended specs:
   - Format: JPEG or PNG
   - Width: 1600px minimum
   - Aspect ratio: 4:5 (portrait) works best
   - Optimize for web (compress without losing quality)

### 2. Update Project Data

**File:** `/content/projects.ts`

Each project has this structure:

```typescript
{
  slug: "project-url-name",           // Used in URL
  title: "Project Title",
  category: "Living Room",            // Or: Bedroom, Wardrobe, Kitchen, Dining, Kids Room
  location: "Canada",
  role: "Residential Interior Designer",
  description: "One to two lines describing the project.",
  images: [
    {
      src: "/portfolio/portfolio-01.jpg",
      alt: "Detailed description for accessibility",
    },
    // Add more images as needed
  ],
}
```

**To add a new project:**
1. Add images to `/public/portfolio/`
2. Add project object to the `projects` array in `content/projects.ts`
3. Pages automatically update!

### 3. Change Site Text

#### Header Logo
**File:** `components/Header.tsx` (line ~27)
```tsx
Interior Designer  // Change this text
```

#### Home Page Hero
**File:** `app/page.tsx`
- Line ~46: Main headline
- Line ~51: Subheadline
- Line ~67: Location
- Line ~69: Status

#### Contact Information
Update in these files:
- `components/Footer.tsx` (lines 3-4)
- `components/ContactPageContent.tsx` (lines 47-48)
- `app/page.tsx` (lines 137, 144)

#### About Page Bio
**File:** `components/AboutPageContent.tsx` (line ~60)

### 4. Add Resume PDF

1. Export your resume as PDF
2. Name it: `resume.pdf`
3. Place in: `/public/resume.pdf`
4. The download button on `/about` will automatically enable!

### 5. Set Up Contact Form Email

The contact form sends emails directly from the website using Resend.

**Quick Setup:**
1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Create an API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Add the same to Vercel environment variables

**Detailed Guide:** See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for complete instructions.

### 6. Update SEO & Social Cards

**File:** `app/layout.tsx` (lines 25-55)

Change:
- `title`: Site title
- `description`: Site description  
- `openGraph.url`: Your actual domain
- `openGraph.images`: Social card image
- `keywords`: SEO keywords

**File:** `app/sitemap.ts` (line 5)
```typescript
const baseUrl = "https://yoursite.com"; // Change to your domain
```

## 🌐 Deploy to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes.

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### After Deployment

1. Update `baseUrl` in `app/sitemap.ts` with your live domain
2. Update `openGraph.url` in `app/layout.tsx`
3. Add custom domain (optional) in Vercel dashboard

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── not-found.tsx        # Custom 404 page
│   ├── work/
│   │   ├── page.tsx         # Work gallery with filters
│   │   ├── loading.tsx      # Loading skeleton
│   │   └── [slug]/page.tsx  # Project detail pages
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Container.tsx
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── FilterChip.tsx
│   │   ├── LightboxModal.tsx
│   │   └── ...
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectDetail.tsx
│   ├── WorkPageContent.tsx
│   ├── AboutPageContent.tsx
│   └── ContactPageContent.tsx
├── content/
│   └── projects.ts          # Project data (EDIT THIS!)
├── public/
│   ├── portfolio/           # Your images (REPLACE THESE!)
│   │   ├── portfolio-01.jpg
│   │   └── ...
│   ├── resume.pdf           # Add your resume here
│   └── robots.txt
└── Documentation files
```

## 🎨 Design System

### Typography
- **Headlines**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Scale**: Responsive text sizing

### Colors
```
Background: #FAFAF8 (off-white)
Foreground: #1A1A1A (near-black)
Muted: #6B6B6B (gray)
Border: #E8E6E3
Gold: #C9A05C (accents)
```

### Components
All reusable components in `/components/ui/` with:
- Consistent styling
- Built-in accessibility
- Smooth animations
- TypeScript types

See `DESIGN_SYSTEM.md` for detailed documentation.

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Playfair Display + Inter (Google Fonts)
- **Images**: Next.js Image optimization

## ⚡ Performance Features

- **Image Optimization**: Automatic WebP conversion, responsive sizes
- **Code Splitting**: Automatic by Next.js
- **Static Generation**: Project pages pre-rendered
- **Loading States**: Skeleton loaders for smooth UX
- **Font Optimization**: Variable fonts with swap display

## ♿ Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus states with gold ring indicators
- Alt text on all images
- Color contrast compliance

## 📊 SEO Features

- ✅ Meta titles and descriptions
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card support
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Structured data ready
- ✅ Mobile-friendly design

## 🛠️ Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📖 Documentation

- **README.md** - This file (setup & deployment)
- **DESIGN_SYSTEM.md** - Complete design system guide
- **CUSTOMIZATION.md** - Detailed customization instructions
- **HOME_PAGE_CONTENT.md** - Home page editing guide
- **WORK_PAGE_GUIDE.md** - Work page documentation
- **PROJECT_DETAIL_IMPLEMENTATION.md** - Project detail guide
- **ABOUT_CONTACT_IMPLEMENTATION.md** - About & contact guide

## 🔧 Common Tasks

### Change Logo Text
1. Open `components/Header.tsx`
2. Find line ~27
3. Change "Interior Designer" to your text

### Update Contact Info
Update in 3 places:
1. `components/Footer.tsx` (lines 3-4)
2. `components/ContactPageContent.tsx` (lines 47-48)
3. `app/page.tsx` (contact section)

### Add New Category
1. Add project with new category to `content/projects.ts`
2. Filter chips automatically update!

### Change Hero Text
Open `app/page.tsx` and edit:
- Headline (line ~46)
- Subheadline (line ~51)

## 🐛 Troubleshooting

### Images Not Loading
- Check image paths start with `/portfolio/`
- Verify files exist in `/public/portfolio/`
- Check file names match exactly (case-sensitive)

### Build Errors
```bash
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

## 📄 License

All rights reserved.

## 💡 Support

For Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)  
For Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)  
For Framer Motion: [framer.com/motion](https://www.framer.com/motion/)

---

**Built with ❤️ using Next.js**
