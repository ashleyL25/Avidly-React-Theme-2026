import React from 'react';
import { GroupField, TextField, ChoiceField } from '@hubspot/cms-components/fields';

/**
 * Simple Heading Group - Test if shared components work
 */
export function SimpleHeading({ name, label }) {
  return (
    <GroupField name={name ||"heading"} label={label || "Heading"}>
      <TextField name="text" label="Heading Text" default="Default Heading" />
      <ChoiceField
        name="size"
        label="Size"
        default="2"
        choices={[
          ['1', 'H1'],
          ['2', 'H2'],
          ['3', 'H3'],
        ]}
        display="select"
      />
    </GroupField>
  );
}

