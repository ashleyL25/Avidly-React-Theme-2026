# HubSpot CMS React - Shared Field Components Guide

## ✅ Yes, You CAN Share Field Logic!

According to the [official HubSpot documentation](https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/modules), you **can** create reusable field components:

> By writing module fields using JSX, you'll benefit from improved readability, along with the **ability to dynamically generate fields, share field logic between modules**, and create custom abstractions around field definitions.

## 🎯 How It Works

### **Best Practice: Define Shared Components in the SAME File**

Based on testing, the most reliable approach is to define your shared field components **within the same module file** where you use them, similar to the documentation's `FullNameField` example.

### **Example: Hero Module with RK-Style Fields**

```tsx
import React from 'react';
import {
  ModuleFields,
  GroupField,
  TextField,
  ChoiceField,
  ColorField,
  SpacingField,
  BackgroundImageField,
  GradientField,
  NumberField,
  ImageField,
  BooleanField,
} from '@hubspot/cms-components/fields';

// ============================================
// SHARED FIELD COMPONENTS (Inline)
// These match RK - Expertise Banner structure
// ============================================

/**
 * Reusable Heading Group
 * Provides: text, HTML size, display size, color with presets, animation
 */
const HeadingGroup = ({ 
  name = "heading", 
  label = "Heading",
  defaultText = "Your Heading",
  defaultSize = "2",
  defaultColor = "auto"
}) => (
  <GroupField name={name} label={label}>
    <TextField 
      name="text" 
      label="Heading Text" 
      default={defaultText} 
    />
    
    <ChoiceField
      name="size"
      label="HTML Size"
      help_text="Semantic heading level for SEO"
      default={defaultSize}
      choices={[
        ['1', 'H1'],
        ['2', 'H2'],
        ['3', 'H3'],
        ['4', 'H4'],
        ['5', 'H5'],
        ['6', 'H6'],
      ]}
      display="select"
    />
    
    <ChoiceField
      name="display_size"
      label="Display Size"
      help_text="Visual size (can differ from HTML size)"
      default="auto"
      choices={[
        ['auto', 'Auto'],
        ['1', 'H1'],
        ['2', 'H2'],
        ['3', 'H3'],
        ['4', 'H4'],
        ['5', 'H5'],
        ['6', 'H6'],
      ]}
      display="select"
    />
    
    <ChoiceField
      name="color"
      label="Color"
      default={defaultColor}
      choices={[
        ['auto', 'Auto'],
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
        ['tertiary', 'Tertiary'],
        ['quaternary', 'Quaternary'],
        ['white', 'White'],
        ['black', 'Black'],
        ['custom', 'Custom'],
      ]}
      display="select"
    />
    
    <ColorField
      name="custom_color"
      label="Custom Color"
      default={{ color: '#000000', opacity: 100 }}
      visibility={{
        controlling_field_path: `${name}.color`,
        controlling_value_regex: 'custom',
      }}
    />
    
    <ChoiceField
      name="animation_type"
      label="Animation Type"
      default="fadeInUp"
      choices={[
        ['none', 'None'],
        ['fadeIn', 'Fade In'],
        ['fadeInUp', 'Fade In Up'],
        ['fadeInDown', 'Fade In Down'],
        ['fadeInLeft', 'Fade In Left'],
        ['fadeInRight', 'Fade In Right'],
        ['zoomIn', 'Zoom In'],
      ]}
      display="select"
      help_text="GSAP animation on scroll"
    />
    
    <ChoiceField
      name="animation_delay"
      label="Animation Delay"
      default="0"
      choices={[
        ['0', 'No Delay'],
        ['0.1', '0.1s'],
        ['0.2', '0.2s'],
        ['0.3', '0.3s'],
        ['0.5', '0.5s'],
        ['0.7', '0.7s'],
        ['1', '1s'],
      ]}
      display="select"
    />
  </GroupField>
);

/**
 * Reusable Style Group
 * Provides: container width, responsive spacing, background options, custom CSS/ID
 */
const StyleGroup = ({ name = "style", label = "Style" }) => (
  <GroupField name={name} label={label}>
    {/* Container Width */}
    <ChoiceField
      name="container_width"
      label="Container Width"
      default="container"
      choices={[
        ['container', 'Container (Boxed)'],
        ['container-fluid', 'Full Width'],
        ['custom', 'Custom Width'],
      ]}
      display="select"
      help_text="Section container width"
    />
    
    <NumberField
      name="custom_container_width"
      label="Custom Width"
      default={1120}
      min={320}
      max={1920}
      step={10}
      suffix="px"
      help_text="Custom width in pixels"
      visibility={{
        controlling_field_path: `${name}.container_width`,
        controlling_value_regex: 'custom',
      }}
    />

    {/* Responsive Spacing */}
    <GroupField name="spacing" label="Spacing">
      <SpacingField
        name="desktop"
        label="Desktop Spacing"
        default={{
          padding: {
            top: { value: 80, units: 'px' },
            bottom: { value: 80, units: 'px' },
            left: { value: 0, units: 'px' },
            right: { value: 0, units: 'px' }
          }
        }}
      />
      
      <SpacingField
        name="tablet"
        label="Tablet Spacing"
        default={{
          padding: {
            top: { value: 60, units: 'px' },
            bottom: { value: 60, units: 'px' },
            left: { value: 0, units: 'px' },
            right: { value: 0, units: 'px' }
          }
        }}
      />
      
      <SpacingField
        name="mobile"
        label="Mobile Spacing"
        default={{
          padding: {
            top: { value: 40, units: 'px' },
            bottom: { value: 40, units: 'px' },
            left: { value: 0, units: 'px' },
            right: { value: 0, units: 'px' }
          }
        }}
      />
    </GroupField>

    {/* Background Options */}
    <ChoiceField
      name="background_option"
      label="Background Option"
      default="color"
      choices={[
        ['image', 'Background Image'],
        ['color', 'Solid Color'],
        ['gradient', 'Gradient'],
        ['none', 'None'],
      ]}
      display="select"
      help_text="Choose background type"
    />
    
    <BackgroundImageField
      name="background_image"
      label="Background Image"
      default={{
        src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
        background_position: 'MIDDLE_CENTER',
        background_size: 'cover'
      }}
      visibility={{
        controlling_field_path: `${name}.background_option`,
        controlling_value_regex: 'image',
      }}
    />
    
    <ColorField
      name="overlay_color"
      label="Image Overlay Color"
      default={{ color: '#000000', opacity: 0 }}
      help_text="Add overlay to background image"
      visibility={{
        controlling_field_path: `${name}.background_option`,
        controlling_value_regex: 'image',
      }}
    />
    
    <ColorField
      name="background_color"
      label="Background Color"
      default={{ color: '#ffffff', opacity: 100 }}
      visibility={{
        controlling_field_path: `${name}.background_option`,
        controlling_value_regex: 'color',
      }}
    />
    
    <GradientField
      name="background_gradient"
      label="Background Gradient"
      visibility={{
        controlling_field_path: `${name}.background_option`,
        controlling_value_regex: 'gradient',
      }}
    />

    {/* Custom CSS & ID */}
    <TextField
      name="custom_css_class"
      label="Custom CSS Class"
      default=""
      help_text="Add custom CSS classes (space-separated)"
    />
    
    <TextField
      name="custom_id"
      label="Custom Element ID"
      default=""
      help_text="Add custom HTML ID for anchor links"
    />
  </GroupField>
);

// ============================================
// MODULE COMPONENT
// ============================================

export function Component({ fieldValues }) {
  const { heading, content, style, animation } = fieldValues;
  
  // Component logic here...
  
  return (
    <section>
      {/* Your component JSX */}
    </section>
  );
}

// ============================================
// MODULE FIELDS - Using shared components
// ============================================

export const fields = (
  <ModuleFields>
    {/* Using HeadingGroup - just pass props! */}
    <HeadingGroup 
      name="heading"
      label="Section Heading"
      defaultText="My Amazing Heading"
      defaultSize="2"
      defaultColor="primary"
    />

    {/* Your other content fields */}
    <GroupField name="content" label="Content">
      <TextField name="description" label="Description" default="Your content here" />
      <ImageField name="image" label="Image" default={{ src: 'https://...', alt: 'Image' }} />
    </GroupField>

    {/* Using StyleGroup - just reference it! */}
    <StyleGroup name="style" label="Style" />

    {/* Animation controls */}
    <GroupField name="animation" label="Animations">
      <BooleanField name="enable" label="Enable Animations" default={true} />
    </GroupField>
  </ModuleFields>
);

export const meta = {
  label: 'My Module',
  icon: 'star',
};
```

## 🔑 Key Takeaways

1. **✅ DO:** Define shared field components in the same file as your module
2. **✅ DO:** Copy/paste these components to other modules that need them
3. **✅ DO:** Use props to customize the shared components per module
4. **✅ DO:** Follow the RK - Expertise Banner pattern for consistency

5. **❌ DON'T:** Try to import shared components from external files (may cause build issues)
6. **❌ DON'T:** Overcomplicate - inline components work great!

## 📦 What We Created

I've created **reusable field component templates** in `/components/shared/`:

- `HeadingGroup.tsx` - Full RK-style heading with animation
- `StyleGroup.tsx` - Complete RK-style style tab
- `SimpleHeading.jsx` - Minimal heading example

**How to use them:**
1. Open the template file
2. Copy the component code
3. Paste it into your module file
4. Use it in your `fields` export
5. Customize with props as needed

This gives you the **reusability** you want while working within HubSpot's build constraints!

## 🎨 Benefits of This Approach

- **Consistent UI**: All modules have the same field structure (matches RK theme)
- **Easy to maintain**: Update the template, then copy to modules that need it
- **Type-safe**: Full TypeScript support
- **Flexible**: Customize each module's defaults via props
- **Reliable**: Works perfectly with HubSpot's build system

## 📚 Reference

- [HubSpot CMS React Modules Documentation](https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/modules)
- [Module Fields Reference](https://developers.hubspot.com/docs/cms/reference/fields/module-theme-fields)
- RK - Expertise Banner module (rhea-kaiser-theme) - your reference theme

---

**Next Steps:** Copy the `HeadingGroup` and `StyleGroup` components into each module that needs them, and you'll have consistent, RK-style fields across your entire theme! 🚀

