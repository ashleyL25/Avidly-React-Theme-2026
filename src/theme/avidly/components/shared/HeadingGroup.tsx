import React from 'react';
import {
  GroupField,
  TextField,
  ChoiceField,
  ColorField,
} from '@hubspot/cms-components/fields';

/**
 * Reusable Heading Group Component
 * Matches RK - Expertise Banner heading structure
 */
export const HeadingGroup = ({ 
  name = "heading", 
  label = "Heading",
  defaultText = "Your Heading Here",
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

