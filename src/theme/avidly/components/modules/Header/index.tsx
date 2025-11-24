import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
  BooleanField,
} from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import HeaderIsland from '../../islands/HeaderIsland.tsx?island';

export function Component({ fieldValues }) {
  // Create menu items from individual fields
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Projects', url: '/projects' },
    { label: 'Blog', url: '/blog' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <div className="fadeIn" data-delay="0">
      <Island
        module={HeaderIsland}
        logo={fieldValues.logo}
        email={fieldValues.email}
        phone={fieldValues.phone}
        address={fieldValues.address}
        showTopBar={fieldValues.showTopBar}
        facebookUrl={fieldValues.facebookUrl}
        twitterUrl={fieldValues.twitterUrl}
        linkedinUrl={fieldValues.linkedinUrl}
        instagramUrl={fieldValues.instagramUrl}
        ctaText={fieldValues.ctaText}
        ctaUrl={fieldValues.ctaUrl}
        menuItems={menuItems}
      />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{
        src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg',
        alt: 'Startix Logo',
        width: 150,
      }}
      resizable={true}
    />
    <BooleanField
      name="showTopBar"
      label="Show Top Bar"
      default={true}
      help_text="Show or hide the top contact information bar"
    />
    <TextField
      name="email"
      label="Email Address"
      default="info@example.com"
    />
    <TextField name="phone" label="Phone Number" default="(888).123.456.7894" />
    <TextField
      name="address"
      label="Address"
      default="629 Elgin St.Celina,2202"
    />
    <TextField name="facebookUrl" label="Facebook URL" default="#" />
    <TextField name="twitterUrl" label="Twitter/X URL" default="#" />
    <TextField name="linkedinUrl" label="LinkedIn URL" default="#" />
    <TextField name="instagramUrl" label="Instagram URL" default="#" />
    <TextField name="ctaText" label="CTA Button Text" default="Get Started" />
    <TextField name="ctaUrl" label="CTA Button URL" default="/contact" />
  </ModuleFields>
);

export const meta = {
  label: 'Avidly Header',
  icon: 'menu',
};
