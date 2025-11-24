# Startix - HubSpot CMS React Theme

A modern, multi-purpose SaaS landing page theme built with HubSpot CMS React, featuring islands architecture for progressive hydration and optimal performance.

## Features

- ✨ **Modern React Architecture**: Built with HubSpot CMS React 2025.2
- 🏝️ **Islands Architecture**: Progressive hydration for interactive components
- 🎨 **Modular Design**: Reusable modules for flexible page building
- 📱 **Fully Responsive**: Mobile-first design approach using Bootstrap 5
- ⚡ **Performance Optimized**: Lazy loading and code splitting
- 🎯 **SEO Friendly**: Semantic HTML and optimized structure
- 🔧 **Customizable**: Theme fields for easy color and typography changes
- 💼 **SaaS Focused**: Perfect for landing pages, product sites, and startups

## Project Structure

```
startix-hubspot-react-theme/
├── hsproject.json                     # HubSpot project configuration
├── package.json                       # Root package configuration
└── src/
    └── theme/
        ├── theme-hsmeta.json          # Theme metadata
        └── startix/
            ├── components/
            │   ├── islands/           # Interactive components with client-side JS
            │   │   ├── HeaderIsland.tsx
            │   │   └── TestimonialIsland.tsx
            │   └── modules/           # HubSpot modules (server-rendered)
            │       ├── Header/
            │       ├── Footer/
            │       ├── Hero/
            │       ├── About/
            │       ├── Features/
            │       └── Testimonial/
            ├── templates/
            │   ├── layouts/
            │   │   └── base.hubl.html  # Base layout
            │   └── home.hubl.html      # Home page template
            ├── styles/
            │   └── main.css            # Main stylesheet
            ├── fields.json             # Theme customization fields
            ├── theme.json              # Theme configuration
            ├── package.json            # Theme dependencies
            ├── tsconfig.json           # TypeScript configuration
            └── Globals.d.ts            # TypeScript declarations
```

## Modules

### Core Modules

#### Header
- Sticky navigation with smooth animations
- Mobile-responsive menu
- Top bar with contact information
- Social media links
- Customizable logo and action button
- Dynamic menu items via repeater fields

#### Footer
- Multi-column layout
- Social media links
- Customizable footer columns
- Copyright and policy links

#### Hero
- Animated hero section
- Background image support
- Customer count display
- Customizable heading and description

#### About
- Image and content layout
- Feature list with icons
- Call-to-action button
- Rich text support

#### Features
- Flexible feature blocks
- Left/right image positioning
- Feature lists with checkmarks
- Customizable button links

#### Testimonial
- Interactive testimonial slider
- Star ratings
- Author information
- Client-side interactivity via islands

## Islands Architecture

The theme utilizes HubSpot's Islands Architecture for progressive hydration:

### What are Islands?

Islands are interactive components that are hydrated on the client-side only when needed. This approach:
- Reduces initial JavaScript bundle size
- Improves page load performance
- Enables interactivity where needed
- Maintains server-rendered content for SEO

### Islands in This Theme

1. **HeaderIsland**: Sticky header behavior, mobile menu toggle, search functionality
2. **TestimonialIsland**: Testimonial slider with navigation and interactive controls

## Setup Instructions

### Prerequisites

- Node.js >= 20.0.0
- HubSpot CLI installed (`npm install -g @hubspot/cli`)
- HubSpot account with CMS Hub

### Installation

1. **Clone or download the theme**
   ```bash
   cd startix-hubspot-react-theme
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install theme dependencies**
   ```bash
   cd src/theme/startix
   npm install
   ```

4. **Authenticate with HubSpot**
   ```bash
   hs auth
   ```

5. **Start development server**
   ```bash
   npm run start
   ```
   This will start the HubSpot CMS dev server at the theme level.

### Deployment

1. **Upload to HubSpot**
   ```bash
   npm run upload
   ```
   Or from the root:
   ```bash
   npm run deploy
   ```

2. **Create a new page** in HubSpot using the "Home Page - SaaS Landing" template
3. **Customize** using the drag-and-drop editor

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

The theme will appear in HubSpot as **"Startix - SaaS Landing Page Theme"** in the Design Manager.

## Module Usage

### Adding Header

```html
{% dnd_module
  path="../components/modules/Header"
%}
{% end_dnd_module %}
```

### Adding Hero Section

```html
{% dnd_module
  path="../components/modules/Hero"
%}
{% end_dnd_module %}
```

### Adding Features Section

```html
{% dnd_module
  path="../components/modules/Features"
%}
{% end_dnd_module %}
```

## Development

### Local Development

```bash
npm run start
```

Access your local development server and make changes. The dev server will hot-reload changes.

### Code Structure

- **Modules**: Server-rendered components with fields
- **Islands**: Client-side interactive components
- **Templates**: HubL templates for pages
- **Styles**: Global CSS with custom properties

### Adding New Modules

1. Create a new folder in `components/modules/`
2. Add `index.tsx` with Component, fields, and meta exports
3. Create associated styles if needed
4. If interactivity is needed, create an island in `components/islands/`

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

- **HubSpot CMS React**: Server-side rendering with React
- **TypeScript**: Type-safe development
- **Bootstrap 5**: Responsive grid system
- **Tabler Icons**: Icon font library
- **Islands Architecture**: Progressive hydration

## Resources

- [HubSpot CMS React Documentation](https://github.hubspot.com/cms-react/)
- [HubSpot Developer Docs](https://developers.hubspot.com/)
- [Islands Architecture](https://jasonformat.com/islands-architecture/)
- [React Documentation](https://react.dev/)

## Conversion Notes

This theme was converted from a Next.js template to HubSpot CMS React. The conversion includes:

- Converting Next.js components to HubSpot modules
- Implementing Islands architecture for interactive components
- Adapting Next.js routing to HubSpot templates
- Converting Next.js Image components to standard img tags
- Adapting SCSS styles to standard CSS with custom properties
- Converting Next.js Link components to standard anchor tags

## Credits

- Original Template: Startix - Multipurpose SaaS Landing Next.js Template
- Converted to HubSpot CMS React with Islands Architecture
- Built with modern React and TypeScript

## Support

For support or questions about this theme:
- Check HubSpot Developer Documentation
- Visit HubSpot Community Forums
- Contact your HubSpot account manager

---

**Theme Name in HubSpot**: Startix - SaaS Landing Page Theme

**Note**: This theme requires HubSpot CMS Hub and utilizes the latest CMS React features (platform version 2025.2).

