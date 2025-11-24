import React from 'react';
import {
  GroupField,
  BooleanField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

interface AnimationFieldsProps {
  name: string;
  label: string;
  default?: any;
  includeEnable?: boolean;
}

/**
 * Animation Fields Component
 * 
 * Provides GSAP animation options for any element:
 * - Enable/disable toggle (optional)
 * - Animation type selection (fadeIn, fadeInUp, etc.)
 * - Animation delay
 * 
 * Works with AnimationProviderIsland for scroll-triggered animations
 */
export const AnimationFields = ({ 
  name, 
  label, 
  default: defaultValues,
  includeEnable = true 
}: AnimationFieldsProps) => (
  <GroupField name={name} label={label} default={defaultValues}>
    {includeEnable && (
      <BooleanField 
        name="enable" 
        label="Enable Animations" 
        default={true}
        help_text="Enable GSAP scroll-triggered animations"
      />
    )}
    
    <ChoiceField
      name="type"
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
        ['bounceIn', 'Bounce In'],
        ['rotateIn', 'Rotate In'],
      ]}
      display="select"
      help_text="Choose animation effect"
      visibility={includeEnable ? {
        controlling_field_path: `${name}.enable`,
        controlling_value_regex: 'true',
      } : undefined}
    />
    
    <ChoiceField
      name="delay"
      label="Animation Delay"
      default="0"
      choices={[
        ['0', 'No Delay'],
        ['0.1', '0.1 seconds'],
        ['0.2', '0.2 seconds'],
        ['0.3', '0.3 seconds'],
        ['0.4', '0.4 seconds'],
        ['0.5', '0.5 seconds'],
        ['0.6', '0.6 seconds'],
        ['0.7', '0.7 seconds'],
        ['0.8', '0.8 seconds'],
        ['0.9', '0.9 seconds'],
        ['1', '1 second'],
        ['1.5', '1.5 seconds'],
        ['2', '2 seconds'],
      ]}
      display="select"
      help_text="Delay before animation starts"
      visibility={includeEnable ? {
        controlling_field_path: `${name}.enable`,
        controlling_value_regex: 'true',
      } : undefined}
    />
    
    <ChoiceField
      name="duration"
      label="Animation Duration"
      default="0.8"
      choices={[
        ['0.3', '0.3 seconds (Fast)'],
        ['0.5', '0.5 seconds'],
        ['0.8', '0.8 seconds (Default)'],
        ['1', '1 second'],
        ['1.2', '1.2 seconds'],
        ['1.5', '1.5 seconds'],
        ['2', '2 seconds (Slow)'],
      ]}
      display="select"
      help_text="How long the animation takes"
      visibility={includeEnable ? {
        controlling_field_path: `${name}.enable`,
        controlling_value_regex: 'true',
      } : undefined}
    />
  </GroupField>
);
