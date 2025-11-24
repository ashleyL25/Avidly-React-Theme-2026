import React from 'react';
import {
  GroupField,
  TextField,
  ChoiceField,
  ColorField,
} from '@hubspot/cms-components/fields';

interface HeadingFieldsProps {
  name: string;
  label: string;
  default?: any;
  helpText?: string;
}

/**
 * Heading Fields Component
 * 
 * Matches RK - Expertise Banner heading structure:
 * - Heading text
 * - HTML heading size (H1-H6)
 * - Display size (visual size)
 * - Color with presets (auto, primary, secondary, tertiary, quaternary, white, black, custom)
 * - Animation type selection
 * - Animation delay
 */
export const HeadingFields = ({ name, label, default: defaultValues, helpText }: HeadingFieldsProps) => (
  <GroupField 
    name={name} 
    label={label}
    default={defaultValues}
  >
    <TextField 
      name="text" 
      label="Heading Text" 
      default="Your Heading Here"
      help_text={helpText}
    />
    
    <ChoiceField
      name="size"
      label="HTML Size"
      help_text="Semantic heading level for SEO"
      default="2"
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
      default="auto"
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
        ['slideInUp', 'Slide In Up'],
        ['slideInDown', 'Slide In Down'],
        ['slideInLeft', 'Slide In Left'],
        ['slideInRight', 'Slide In Right'],
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
        ['0.4', '0.4s'],
        ['0.5', '0.5s'],
        ['0.6', '0.6s'],
        ['0.7', '0.7s'],
        ['0.8', '0.8s'],
        ['0.9', '0.9s'],
        ['1', '1s'],
        ['1.5', '1.5s'],
        ['2', '2s'],
      ]}
      display="select"
      help_text="Delay before animation starts"
    />
  </GroupField>
);

