import React from 'react';
import { ModuleFields } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import AnimationProviderIsland from '../../islands/AnimationProviderIsland.tsx?island';

export function Component() {
  return (
    <Island module={AnimationProviderIsland} />
  );
}

export const fields = <ModuleFields></ModuleFields>;

export const meta = {
  label: 'GSAP Animation Provider',
  icon: 'sparkles',
  host_template_types: ['PAGE', 'BLOG_POST', 'BLOG_LISTING'],
  is_available_for_new_content: false, // Don't show in module picker
};

