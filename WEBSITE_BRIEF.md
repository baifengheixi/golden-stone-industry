# Golden Stone Industry - Company Website Brief

## Project Overview
Build a professional, formal company website for **Golden Stone Industry Co., Ltd.** (บริษัท โกลเด้น สโตน อินดัสทรี จำกัด), a Thai procurement and sourcing company serving government and private sectors.

## Tech Stack
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript**
- Static site (no backend needed except contact form)
- Images from reference/images/ folder

## Pages Required

### 1. Home Page (/)
- **Hero Section**: Full-width banner with company name in Thai + English, tagline about being a trusted procurement partner
- **About Preview**: Brief intro (2-3 sentences) with link to About page
- **Services Overview**: 5 service cards with icons → link to Services page
- **Vision & Mission**: Highlight key vision/mission statements
- **Target Clients**: Logos/names of client types (Government, State Enterprises, Local Admin, Private)
- **CTA Section**: Contact information and call-to-action

### 2. About Page (/about)
- Company history (founded 2018)
- Company details: registered capital 41M THB, location
- CEO message from Kriangkrai Chuethanachotpaisan: "service from the heart" philosophy
- Vision statement
- Mission statements (4 items)
- Company values

### 3. Services Page (/services)
Detailed cards/sections for each of 5 services:
1. **Firefighting and Rescue Services** (งานดับเพลิงและงานกู้ภัย)
   - Fire trucks, rescue vehicles, equipment procurement and maintenance
   - Sub-services: Air compressor trucks & breathing apparatus, Ladder trucks (≥13m)
2. **UAV/Drones Solutions** (โซลูชันด้านอากาศยานไร้คนขับ)
   - Surveillance, inspection, aerial photography, specialized missions
   - Accessories and after-sales support
3. **Automotive Solutions** (ยานยนต์และอุปกรณ์ขนส่ง)
   - Official vehicles, special-purpose vehicles, transport units
   - Custom-modified vehicles, maintenance services
4. **Robotics & Automation** (หุ่นยนต์และระบบอัตโนมัติ)
   - Surveillance robots, rescue robots, tactical operation robots
   - Custom automation solutions
5. **Anti-Drone Systems** (ระบบต่อต้านอากาศยานไร้คนขับ)
   - Detection, signal tracking, signal jamming
   - Critical area security, national security support

### 4. Contact Page (/contact)
- Contact form (name, email, phone, message)
- Company address: 4/2 Moo 6, Bang Kruai-Sai Noi Road, Bang Bua Thong, Nonthaburi 11110
- Email: goldenstoneindustry@gmail.com
- Phone: (+66) 063-212-5055
- Embedded Google Map of company location
- Business hours (Mon-Fri, 8:30-17:30)

## Design Requirements

### Style
- **FORMAL, PROFESSIONAL, CORPORATE**
- Clean, modern layout with ample white space
- Reference: https://www.rosenbauer.com/en (professional equipment/industrial feel)
- Thai language PRIMARY, with English subtitles/translations
- Bilingual navigation and content

### Color Scheme
- Primary: Deep Navy Blue (#1a2a3a or similar corporate blue)
- Secondary: Gold/Amber (#c8962e or similar — "Golden Stone" branding)
- Accent: White and light gray backgrounds
- Text: Dark gray on light backgrounds, white on dark backgrounds

### Typography
- Thai font: IBM Plex Sans Thai or Noto Sans Thai (Google Fonts)
- English font: Inter or system sans-serif
- Clean, readable, professional

### Components
- Sticky navigation with smooth scroll
- Responsive design (mobile-first)
- Card-based layouts for services
- Icon + text for features/values
- Footer with company info, quick links, contact

## Images
All images are in the `reference/images/` folder (58 images extracted from company profile document).
Use these for:
- Hero background (architectural photos)
- Service illustrations (fire trucks, drones, vehicles, robots, anti-drone equipment)
- About page (CEO photo if available, office/team photos)
- Any section that needs visual content
- Use appropriate images as reference; reference the images folder path in your code

Use images from `reference/images/` directory. Copy relevant ones to `public/images/` for the website.

## Navigation Structure
- Home (หน้าหลัก)
- About (เกี่ยวกับเรา)
- Services (บริการของเรา)
- Contact (ติดต่อเรา)

## SEO Requirements
- Proper meta tags in Thai and English
- Semantic HTML structure
- Open Graph tags for social sharing
- Sitemap generation
- robots.txt

## Footer
- Company name + logo area
- Quick links
- Contact info with icons
- Copyright © 2024 Golden Stone Industry Co., Ltd.
- Social media links (placeholder)

## Contact Form
- Client-side validation
- Show success/error states
- Use a server action or API route to handle form submission
- For now, log submissions to console (can integrate with email service later)

## Output
- Fully functional Next.js project in `/Users/anonymous/Desktop/golden-stone-industry/website/`
- All pages populated with real content from the company profile
- Images used appropriately across pages
- Project should run with `npm run dev`
