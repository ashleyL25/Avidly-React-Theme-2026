import React from 'react';
import {
  GroupField,
  ChoiceField,
  NumberField,
  SpacingField,
  BackgroundImageField,
  ColorField,
  GradientField,
  TextField,
} from '@hubspot/cms-components/fields';

/**
 * Reusable Style Group Component
 * Matches RK - Expertise Banner style structure
 */
export const StyleGroup = ({ name = "style", label = "Style" }) => (
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
    
    {/* Background Image */}
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
    
    {/* Background Color */}
    <ColorField
      name="background_color"
      label="Background Color"
      default={{ color: '#ffffff', opacity: 100 }}
      visibility={{
        controlling_field_path: `${name}.background_option`,
        controlling_value_regex: 'color',
      }}
    />
    
    {/* Background Gradient */}
    <GradientField
      name="background_gradient"
      label="Background Gradient"
      default={{
        colors: [
          { color: { r: 99, g: 102, b: 241, a: 1 } },
          { color: { r: 245, g: 158, b: 11, a: 1 } }
        ],
        side_or_corner: { horizontalSide: 'RIGHT', verticalSide: null }
      }}
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

