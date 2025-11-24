import React from 'react';
import {
  ChoiceField,
  ColorField,
} from '@hubspot/cms-components/fields';

interface ColorFieldsProps {
  name: string;
  label: string;
  default?: string;
  helpText?: string;
  includeAuto?: boolean;
}

/**
 * Universal Color Fields Component
 * 
 * Matches RK theme color structure:
 * - Preset colors (primary, secondary, tertiary, quaternary, white, black)
 * - Optional auto setting
 * - Custom color picker
 * 
 * Can be used for any element (text, backgrounds, borders, etc.)
 */
export const ColorFields = ({ 
  name, 
  label, 
  default: defaultValue = 'primary', 
  helpText,
  includeAuto = false 
}: ColorFieldsProps) => {
  const colorParentName = name.replace(/_color$/, ''); // Remove _color suffix if present
  
  const choices: [string, string][] = includeAuto 
    ? [
        ['auto', 'Auto'],
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
        ['tertiary', 'Tertiary'],
        ['quaternary', 'Quaternary'],
        ['white', 'White'],
        ['black', 'Black'],
        ['custom', 'Custom'],
      ]
    : [
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
        ['tertiary', 'Tertiary'],
        ['quaternary', 'Quaternary'],
        ['white', 'White'],
        ['black', 'Black'],
        ['custom', 'Custom'],
      ];

  return (
    <>
      <ChoiceField
        name={name}
        label={label}
        default={defaultValue}
        choices={choices}
        display="select"
        help_text={helpText}
      />
      
      <ColorField
        name={`${name}_custom`}
        label="Custom Color"
        default={{ color: '#000000', opacity: 100 }}
        visibility={{
          controlling_field_path: name,
          controlling_value_regex: 'custom',
        }}
      />
    </>
  );
};

