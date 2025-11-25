# Avidly React Theme 2026

A modern, multi-purpose SaaS landing page theme built with HubSpot CMS React, featuring islands architecture for progressive hydration, GSAP animations, and optimal performance.

## Features

- ✨ **Modern React Architecture**: Built with HubSpot CMS React 2025.2
- 🏝️ **Islands Architecture**: Progressive hydration for interactive components
- 🎨 **Modular Design**: Reusable modules for flexible page building
- 📱 **Fully Responsive**: Mobile-first design approach using Bootstrap 5
- ⚡ **Performance Optimized**: Lazy loading and code splitting
- 🎯 **SEO Friendly**: Semantic HTML and optimized structure
- 🔧 **Customizable**: Theme fields for easy color and typography changes
- 🎬 **GSAP Animations**: Smooth scroll-based animations with ScrollTrigger
- 💼 **SaaS Focused**: Perfect for landing pages, product sites, and startups
- 🎛️ **HubL Global Modules**: Header and footer with advanced field grouping and menu selection

## Project Structure

```
avidly-react-theme-2026/
├── hsproject.json                     # HubSpot project configuration
├── package.json                       # Root package configuration
└── src/
    └── theme/
        ├── theme-hsmeta.json          # Theme metadata
        └── avidly/
            ├── components/
            │   ├── islands/           # Interactive components with client-side JS
            │   │   ├── HeaderIsland.tsx
            │   │   ├── TestimonialIsland.tsx
            │   │   ├── AnimatedButtonIsland.tsx
            │   │   ├── AnimationWrapperIsland.tsx
            │   │   └── AnimationProviderIsland.tsx
            │   └── modules/           # HubSpot React modules (server-rendered)
            │       ├── Hero/
            │       ├── About/
            │       ├── Features/
            │       ├── Testimonial/
            │       ├── CTA/
            │       ├── Brands/
            │       └── AnimationProvider/
            ├── hubl-modules/          # HubL modules for header/footer
            │   ├── header.module/
            │   │   ├── fields.json    # Field definitions with groups
            │   │   ├── meta.json      # Module metadata
            │   │   └── module.hubl.htm # Header markup
            │   └── footer.module/
            │       ├── fields.json    # Field definitions with groups
            │       ├── meta.json      # Module metadata
            │       └── module.hubl.htm # Footer markup
            ├── templates/
            │   ├── layouts/
            │   │   └── base.hubl.html  # Base layout
            │   ├── partials/
            │   │   ├── header.hubl.html # Global header partial
            │   │   └── footer.hubl.html # Global footer partial
            │   ├── home.hubl.html      # Home page template
            │   ├── about.hubl.html     # About page template
            │   └── svg-icons.hubl.html # Icon sprite
            ├── styles/
            │   ├── main.css            # Main stylesheet
            │   └── buttons.css         # Button styles with animations
            ├── js/
            │   └── mobile-menu.js      # Mobile menu functionality
            ├── images/
            │   └── theme-hero.png      # Theme preview image
            ├── fields.json             # Theme customization fields
            ├── theme.json              # Theme configuration
            ├── package.json            # Theme dependencies
            ├── tsconfig.json           # TypeScript configuration
            └── Globals.d.ts            # TypeScript declarations
```

## Modules

### HubL Modules (Header & Footer)

#### Header (HubL Module)
- **Field Grouping**: Top Bar, Logo, Navigation, CTA, Social Links
- **Menu Selection**: Dropdown to select HubSpot menus for primary and mobile navigation
- **Top Bar**: Contact info with visibility control
- **Responsive**: Mobile-optimized with hamburger menu
- **Customizable**: Logo, colors, social links, and CTA button

#### Footer (HubL Module)
- **Field Grouping**: Logo & Description, Menu Columns (1-3), Social Links, Copyright & Legal
- **Menu Selection**: Each column can select a different HubSpot menu
- **Multi-Column Layout**: Up to 3 customizable menu columns
- **Social Links**: Integrated social media icons
- **Copyright**: Customizable copyright text and legal links

### React Modules

#### Hero
- GSAP scroll animations with fade-in effects
- Background image support with overlay
- Customer count display with animation
- Customizable heading, subheading, and description
- Call-to-action buttons with hover animations
- Style settings for container size and spacing

#### About
- Image and content layout with animation
- Feature list with icons
- Call-to-action button with hover effects
- GSAP animations on scroll
- Style settings for background and spacing

#### Features
- Flexible feature blocks with repeater fields
- Icon support for each feature
- GSAP stagger animations on scroll
- Style settings for background image and container
- Customizable heading and description

#### Testimonial
- Interactive testimonial slider (Swiper.js)
- Star ratings display
- Author information with images
- Client-side interactivity via islands
- GSAP animations for fade-in effects
- Repeater fields for multiple testimonials

#### CTA
- Call-to-action section with background image
- Animated heading and description
- Button with hover effects
- GSAP animations on scroll
- Style settings for spacing and colors

#### Brands
- Logo grid for partner/client logos
- Responsive layout
- GSAP fade-in animations
- Repeater fields for multiple brand logos

## Islands Architecture

The theme utilizes HubSpot's Islands Architecture for progressive hydration:

### What are Islands?

Islands are interactive components that are hydrated on the client-side only when needed. This approach:
- Reduces initial JavaScript bundle size
- Improves page load performance
- Enables interactivity where needed
- Maintains server-rendered content for SEO

### Islands in This Theme

1. **AnimationProviderIsland**: Initializes GSAP, ScrollTrigger, and SplitText for all animations
2. **HeaderIsland**: Sticky header behavior, mobile menu toggle, and navigation
3. **TestimonialIsland**: Testimonial slider with Swiper.js navigation and interactive controls
4. **AnimatedButtonIsland**: Interactive button hover effects with text transitions
5. **AnimationWrapperIsland**: Wraps elements with GSAP scroll animations (fade, slide, scale)

## Setup Instructions

### Prerequisites

- Node.js >= 20.0.0
- HubSpot CLI installed (`npm install -g @hubspot/cli`)
- HubSpot account with CMS Hub Professional or Enterprise

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashleyL25/Avidly-React-Theme-2026.git
   cd avidly-react-theme-2026
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install theme dependencies**
   ```bash
   cd src/theme/avidly
   npm install
   ```

4. **Authenticate with HubSpot**
   ```bash
   cd ../../../
   hs auth
   ```

5. **Upload to HubSpot**
   ```bash
   hs project upload
   ```

### Deployment

1. **Upload changes**
   ```bash
   hs project upload
   ```

2. **Deploy a build** (from HubSpot Design Manager)
   - Navigate to Design Manager > Projects
   - Find "avidly-react-theme-2026"
   - Select a build number
   - Click "Deploy"

3. **Create a new page** in HubSpot using the "Home Page" or "About Page" template
4. **Customize** using the drag-and-drop editor

### Development Workflow

1. Make changes locally
2. Upload to HubSpot: `hs project upload`
3. Check build status and deploy in Design Manager
4. Test changes on a page using the template

## Theme Customization

### Theme Fields

The theme includes customizable fields accessible in the HubSpot editor:

- **Primary Color**: Main brand color
- **Secondary Color**: Accent color
- **Dark Background Color**: Footer and dark section backgrounds
- **Primary Font**: Body text font family
- **Heading Font**: Heading text font family

### Customizing Modules

Each module has its own customizable fields accessible in the page editor:

1. Add a module to a page
2. Click on the module
3. Edit fields in the sidebar
4. Preview changes in real-time

### Custom Styling

- Main styles are in `styles/main.css`
- Uses CSS custom properties for easy theme customization
- Bootstrap 5 included for responsive grid system
- Tabler Icons for icon fonts

### Accessing Theme in HubSpot

The theme will appear in HubSpot as **"avidly-react-theme-2026"** in the Design Manager under Projects.

## Module Usage

### Adding Header (Global Partial)

```html
{% global_partial path="./partials/header.hubl.html" %}
```

### Adding Footer (Global Partial)

```html
{% global_partial path="./partials/footer.hubl.html" %}
```

### Adding Hero Module

```html
{% dnd_module
  path="../components/modules/Hero"
%}
{% end_dnd_module %}
```

### Adding Features Module

```html
{% dnd_module
  path="../components/modules/Features"
%}
{% end_dnd_module %}
```

### Adding Testimonial Module

```html
{% dnd_module
  path="../components/modules/Testimonial"
%}
{% end_dnd_module %}
```

## Development

### Local Development

The HubSpot CMS React theme doesn't support a traditional local dev server. Instead:

1. Make changes locally in your code editor
2. Upload to HubSpot: `hs project upload`
3. Preview changes in HubSpot's page editor
4. Deploy build when ready

### Code Structure

- **React Modules**: Server-rendered components with HubSpot fields (`components/modules/`)
- **HubL Modules**: Traditional HubL modules for header/footer (`hubl-modules/`)
- **Islands**: Client-side interactive components (`components/islands/`)
- **Templates**: HubL templates for pages (`templates/`)
- **Partials**: Global reusable template sections (`templates/partials/`)
- **Styles**: Global CSS with custom properties (`styles/`)
- **JavaScript**: Client-side scripts (`js/`)

### Adding New React Modules

1. Create a new folder in `components/modules/`
2. Add `index.tsx` with Component, fields, and meta exports:
   ```tsx
   import { Component, fields, meta } from '@hubspot/cms-components';
   
   export { Component, fields, meta };
   ```
3. Define fields using HubSpot field types (TextField, ImageField, etc.)
4. If interactivity is needed, create an island in `components/islands/`
5. Add GSAP animations using the AnimationWrapperIsland

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- **Islands Architecture**: Only hydrate interactive components
- **Server-Side Rendering**: Fast initial page loads
- **CSS Optimization**: Minimal, optimized stylesheets
- **Progressive Enhancement**: Works without JavaScript

## Best Practices

1. **Use Islands for Interactivity**: Keep server-rendered content static, use islands for interactive features
2. **Optimize Images**: Use appropriate image sizes and formats
3. **Minimize JavaScript**: Only use client-side JS when necessary
4. **Semantic HTML**: Use proper HTML5 semantic elements
5. **Accessibility**: Include ARIA labels and keyboard navigation

## Tech Stack

- **HubSpot CMS React**: Server-side rendering with React (Platform Version 2025.2)
- **TypeScript**: Type-safe development
- **Bootstrap 5**: Responsive grid system and utilities
- **GSAP 3.12**: Professional-grade animation library
  - ScrollTrigger: Scroll-based animations
  - SplitText: Text animation effects
- **Swiper.js**: Modern touch slider for testimonials
- **Tabler Icons**: Icon font library
- **Islands Architecture**: Progressive hydration for performance
- **HubL**: HubSpot's templating language for global modules

## GSAP Animation Features

This theme includes extensive GSAP animations:

- **ScrollTrigger**: Elements animate as they enter viewport
- **Fade Effects**: Fade in from different directions
- **Stagger Animations**: Sequential animation of multiple elements
- **SplitText**: Character and word-level text animations
- **Button Animations**: Smooth hover effects with text transitions
- **Performance**: Optimized with requestAnimationFrame and proper cleanup

## Resources

- [HubSpot CMS React Documentation](https://developers.hubspot.com/docs/cms/reference/react)
- [HubSpot Developer Docs](https://developers.hubspot.com/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Islands Architecture](https://jasonformat.com/islands-architecture/)
- [React Documentation](https://react.dev/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)

## Conversion Notes

This theme was converted from the Startix Next.js template to HubSpot CMS React. Key changes:

- ✅ Converted Next.js components to HubSpot React modules
- ✅ Implemented Islands architecture for interactive components
- ✅ Created HubL modules for header/footer with field grouping and menu selection
- ✅ Integrated GSAP for scroll animations (ScrollTrigger, SplitText)
- ✅ Adapted routing to HubSpot's template system
- ✅ Converted Next.js Image components to standard img tags
- ✅ Implemented repeater fields for dynamic content
- ✅ Added comprehensive style settings for each module
- ✅ Optimized for HubSpot's build system

## Key Features

### Field Grouping & Organization
- Header and footer use HubL modules with native field grouping
- React modules use logical field organization
- Menu selection dropdowns for navigation management
- Style tabs for background images, container sizing, and spacing

### Animation System
- GSAP AnimationProvider initializes globally
- Per-module animation settings (type and delay)
- Automatic cleanup and performance optimization
- ScrollTrigger integration for scroll-based effects

### Performance
- Islands architecture for minimal JavaScript
- Server-side rendering for fast initial loads
- Progressive hydration of interactive components
- Optimized GSAP usage with proper disposal

## Repository

**GitHub**: [https://github.com/ashleyL25/Avidly-React-Theme-2026.git](https://github.com/ashleyL25/Avidly-React-Theme-2026.git)

## Support

For support or questions about this theme:
- Check [HubSpot Developer Documentation](https://developers.hubspot.com/)
- Visit [HubSpot Community Forums](https://community.hubspot.com/t5/CMS-Development/ct-p/cms-development)
- Review [GSAP Forums](https://greensock.com/forums/) for animation questions

---

**Theme Name in HubSpot**: avidly-react-theme-2026  
**Platform Version**: 2025.2  
**License**: Custom (Blue Frog Development)

**Note**: This theme requires HubSpot CMS Hub Professional or Enterprise and utilizes the latest CMS React features.

