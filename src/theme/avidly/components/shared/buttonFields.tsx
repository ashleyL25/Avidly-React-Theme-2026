import React from 'react';
import {
  TextField,
  BooleanField,
  ChoiceField,
} from '@hubspot/cms-components/fields';

/**
 * Reusable button field configuration
 * Use this in any module that needs a customizable button
 */
export const ButtonFields = ({ 
  prefix = 'button',
  defaultText = 'Learn More',
  defaultUrl = '#',
  defaultStyle = 'primary'
}) => (
  <>
    <BooleanField 
      name={`${prefix}Show`} 
      label="Show Button" 
      default={true} 
    />
    <TextField 
      name={`${prefix}Text`} 
      label="Button Text" 
      default={defaultText} 
    />
    <BooleanField
      name={`${prefix}EnableHoverText`}
      label="Enable Custom Hover Text"
      default={false}
      help_text="Show different text on button hover for enhanced animation effect"
    />
    <TextField
      name={`${prefix}HoverText`}
      label="Button Hover Text"
      default={defaultText}
      help_text="Text shown when hovering over the button (only if enabled above)"
    />
    <TextField 
      name={`${prefix}Url`} 
      label="Button URL" 
      default={defaultUrl} 
    />
    <ChoiceField
      name={`${prefix}Style`}
      label="Button Style"
      default={defaultStyle}
      choices={[
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
        ['light', 'Light'],
        ['dark', 'Dark'],
        ['outline-primary', 'Outline Primary'],
        ['outline-light', 'Outline Light'],
      ]}
    />
    <ChoiceField
      name={`${prefix}Size`}
      label="Button Size"
      default="md"
      choices={[
        ['sm', 'Small'],
        ['md', 'Medium'],
        ['lg', 'Large'],
      ]}
    />
    <ChoiceField
      name={`${prefix}Icon`}
      label="Button Icon"
      default="ti-arrow-up-right"
      choices={[
        ['none', 'No Icon'],
        ['ti-arrow-up-right', 'Arrow Up Right'],
        ['ti-arrow-right', 'Arrow Right'],
        ['ti-chevron-right', 'Chevron Right'],
        ['ti-external-link', 'External Link'],
        ['ti-download', 'Download'],
        ['ti-play', 'Play'],
      ]}
    />
    <BooleanField
      name={`${prefix}OpenInNewTab`}
      label="Open in New Tab"
      default={false}
    />
  </>
);

