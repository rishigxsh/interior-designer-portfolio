# Deployment Guide

Complete guide to deploying your Interior Designer Portfolio to production.

## Pre-Deployment Checklist

Before deploying, ensure you've customized:

- [ ] Portfolio images in `/public/portfolio/`
- [ ] Project data in `/content/projects.ts`
- [ ] Contact information (email, phone)
- [ ] Site metadata in `app/layout.tsx`
- [ ] Base URL in `app/sitemap.ts`
- [ ] Logo text in `components/Header.tsx`
- [ ] About page bio
- [ ] Resume PDF (optional) in `/public/resume.pdf`

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is built by the creators of Next.js and offers the best performance and developer experience.

#### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create main branch
git branch -M main

# Add remote (create repo on GitHub first)
git remote add origin https://github.com/yourusername/your-repo.git

# Push
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click **"Add New Project"**
4. **Import** your GitHub repository
5. Vercel will automatically:
   - Detect Next.js
   - Set build command: `next build`
   - Set output directory: `.next`
   - Install dependencies
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. Your site is live! 🎉

#### Step 3: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL certificate

#### Step 4: Update Site URLs

After deployment, update these files with your live domain:

**File: `app/sitemap.ts` (line 5)**
```typescript
const baseUrl = "https://your-actual-domain.com";
```

**File: `app/layout.tsx` (line 35)**
```typescript
openGraph: {
  url: "https://your-actual-domain.com",
  // ...
},
```

Then commit and push:
```bash
git add .
git commit -m "Update site URLs"
git push
```

Vercel automatically redeploys on every push to `main`.

### Option 2: Vercel CLI

Quick deployment from terminal:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 3: Other Platforms

#### Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```

2. Build your site:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=.next
   ```

#### AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Connect your repository
4. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy

#### Docker (Self-Hosted)

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... rest of config
};
```

Build and run:
```bash
docker build -t interior-portfolio .
docker run -p 3000:3000 interior-portfolio
```

## Environment Variables

If you need environment variables (e.g., for analytics):

### Vercel
1. Go to project settings
2. Navigate to **Environment Variables**
3. Add variables (e.g., `NEXT_PUBLIC_GA_ID`)
4. Redeploy

### Local Development
Create `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=your-analytics-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Add to `.gitignore`:
```
.env*.local
```

## Performance Optimization

### 1. Image Optimization

Ensure images are optimized before uploading:

```bash
# Install optimization tools
npm install -g sharp-cli

# Optimize images
sharp -i public/portfolio/*.jpg -o public/portfolio/ --webp --quality 85
```

### 2. Analyze Bundle Size

```bash
# Install analyzer
npm install @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

### 3. Enable Caching

Vercel automatically handles caching. For other platforms, configure CDN:

- Cache static assets (images, fonts): 1 year
- Cache HTML: 1 hour
- Cache API routes: As needed

## Monitoring & Analytics

### Add Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)

2. Get Measurement ID (e.g., `G-XXXXXXXXXX`)

3. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

4. Add environment variable in Vercel

### Vercel Analytics

Enable in Vercel dashboard:
1. Go to **Analytics** tab
2. Click **Enable**
3. Install package:
   ```bash
   npm install @vercel/analytics
   ```

4. Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## Post-Deployment

### 1. Test Your Site

- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Forms function (contact form opens email)
- [ ] Mobile responsive
- [ ] Resume downloads (if added)
- [ ] Lighthouse score > 90

### 2. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify
4. Submit sitemap

### 3. Set Up Monitoring

**Vercel (Built-in):**
- Automatic uptime monitoring
- Performance metrics
- Error tracking

**External Options:**
- [UptimeRobot](https://uptimerobot.com) - Free uptime monitoring
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay

## Continuous Deployment

### Automatic Deployments (Vercel)

Every push to `main` automatically deploys:

```bash
git add .
git commit -m "Update project images"
git push
# Vercel automatically builds and deploys
```

### Preview Deployments

Vercel creates preview URLs for pull requests:

1. Create a branch:
   ```bash
   git checkout -b feature/new-project
   ```

2. Make changes and push:
   ```bash
   git push origin feature/new-project
   ```

3. Create pull request on GitHub

4. Vercel comments with preview URL

5. Test, then merge to `main` for production

## Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18.x or higher
```

**Clear cache and rebuild:**
```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `/public/portfolio/`
- Check paths start with `/portfolio/` (not `./public/portfolio/`)
- Verify file names match exactly (case-sensitive)

### 404 on Refresh

This shouldn't happen with Next.js. If it does:
- Ensure you're using Next.js App Router (not Pages Router)
- Verify `app/` directory structure
- Check deployment platform configuration

### Slow Performance

1. **Optimize images:**
   - Use WebP format
   - Compress to < 200KB each
   - Proper aspect ratios

2. **Check bundle size:**
   ```bash
   ANALYZE=true npm run build
   ```

3. **Enable caching** (usually automatic on Vercel)

## Updating Your Site

### Adding New Projects

1. Add images to `/public/portfolio/`
2. Update `/content/projects.ts`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new project"
   git push
   ```
4. Vercel auto-deploys (or run `vercel --prod`)

### Changing Content

1. Edit relevant files (see README.md)
2. Test locally: `npm run dev`
3. Commit and push
4. Auto-deploys

## Backup Strategy

### Recommended Approach

1. **Code**: Backed up on GitHub
2. **Images**: Keep originals in cloud storage (Google Drive, Dropbox)
3. **Content**: Version controlled in `content/projects.ts`

### Database (If Added Later)

If you add a CMS or database:
- Use managed services (Vercel Postgres, PlanetScale)
- Enable automatic backups
- Regular exports

## Cost Estimate

### Vercel (Hobby Plan - FREE)

- **Hosting**: Free
- **Bandwidth**: 100GB/month free
- **Builds**: Unlimited
- **Custom domain**: ✅ Free
- **SSL**: ✅ Free

Perfect for portfolio sites.

### Custom Domain

- **.com domain**: $10-15/year (from Namecheap, Google Domains)

### Total Cost

**$0-15/year** for a professional portfolio site! 🎉

## Support & Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Vercel Community**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

**Ready to deploy?** Start with Vercel for the easiest experience!

```bash
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
# Then deploy on vercel.com
```