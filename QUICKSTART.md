# Startix Theme - Quick Start Guide

Get your Startix HubSpot theme up and running in minutes!

## Prerequisites

Before you begin, ensure you have:

- **Node.js** version 20.0.0 or higher
- **HubSpot CLI** installed globally
- **HubSpot CMS Hub** account

## Step 1: Install HubSpot CLI

If you haven't already, install the HubSpot CLI:

```bash
npm install -g @hubspot/cli
```

## Step 2: Authenticate with HubSpot

Connect your local environment to your HubSpot account:

```bash
hs auth
```

Follow the prompts to:
1. Enter your HubSpot account ID
2. Authorize the connection via your browser
3. Name your connection (e.g., "production")

## Step 3: Install Dependencies

### Root Level Dependencies

From the project root:

```bash
npm install
```

### Theme Level Dependencies

Navigate to the theme folder and install:

```bash
cd src/theme/startix
npm install
```

## Step 4: Start Development Server

Start the local development server:

```bash
npm start
```

This will:
- Start the HubSpot CMS dev server
- Watch for file changes
- Hot-reload your changes

## Step 5: Upload Theme to HubSpot

From the project root, upload the theme:

```bash
npm run upload
```

Or use:

```bash
hs project upload
```

## Step 6: Create a Page in HubSpot

1. Log into your HubSpot account
2. Go to **Marketing > Website > Website Pages**
3. Click **Create > Website page**
4. Choose **"Startix - SaaS Landing Page Theme"** template
5. Start building your page!

## Project Structure Overview

```
startix-hubspot-react-theme/
├── src/theme/startix/
│   ├── components/
│   │   ├── modules/        # Drag-and-drop modules
│   │   └── islands/        # Interactive components
│   ├── templates/          # Page templates
│   ├── styles/             # CSS files
│   └── package.json
├── package.json
└── hsproject.json
```

## Available Modules

After uploading, these modules will be available in your page editor:

- **Header** - Navigation with top bar and social links
- **Hero** - Eye-catching hero section with customer count
- **About** - About section with image and features
- **Features** - Feature blocks with alternating layouts
- **Testimonial** - Client testimonials with slider
- **Footer** - Multi-column footer with social links

## Customizing Your Theme

### Theme-Level Customization

Access theme settings in HubSpot:

1. Go to **Design Manager**
2. Find your theme
3. Click **Edit theme settings**
4. Customize colors, fonts, and more

### Module-Level Customization

Customize individual modules:

1. Click on any module in the page editor
2. Edit fields in the right sidebar
3. Preview changes in real-time

## Common Commands

```bash
# Start development
npm start

# Upload to HubSpot
npm run upload

# Deploy (same as upload)
npm run deploy

# Format code
npm run prettier
```

## Troubleshooting

### Issue: CLI not authenticated

**Solution**: Run `hs auth` and follow the authentication steps

### Issue: Module not appearing in editor

**Solution**: Ensure the theme is uploaded and the page template includes the module path

### Issue: Styles not loading

**Solution**: Clear browser cache and ensure `main.css` is properly linked in base layout

### Issue: Island not hydrating

**Solution**: Check that the island file has the `?island` suffix in the import

## Next Steps

1. **Explore Modules**: Try adding different modules to your page
2. **Customize Colors**: Update theme colors to match your brand
3. **Add Content**: Fill in your content using the page editor
4. **Create More Pages**: Use the template to create additional pages
5. **Test Responsiveness**: Preview on different devices

## Development Workflow

1. Make changes to your local files
2. Save and watch the dev server hot-reload
3. When ready, run `npm run upload`
4. Refresh your HubSpot page to see changes

## Resources

- [Full Documentation](./README.md)
- [HubSpot CMS React Docs](https://github.hubspot.com/cms-react/)
- [HubSpot Developer Community](https://community.hubspot.com/t5/Developer-Community/ct-p/developer)

## Support

Need help? Check out:
- The full [README.md](./README.md) for detailed information
- HubSpot's [Developer Documentation](https://developers.hubspot.com/)
- HubSpot [Community Forums](https://community.hubspot.com/)

---

**Happy Building! 🚀**

