import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
  RichTextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const currentYear = new Date().getFullYear();

  // Hardcoded footer columns - can be made customizable with individual fields later
  const footerColumns = [
    {
      title: 'Pages',
      links: [
        { label: 'Home', url: '/' },
        { label: 'About Us', url: '/about' },
        { label: 'Integrations', url: '/integrations' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'Contact Us', url: '/contact' },
      ],
    },
    {
      title: 'Utility Pages',
      links: [
        { label: 'Projects', url: '/projects' },
        { label: 'Blog', url: '/blog' },
        { label: 'Our Team', url: '/team' },
        { label: 'Pricing', url: '/pricing' },
        { label: 'Projects Details', url: '/project-details' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Working Process', url: '/process' },
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms & Conditions', url: '/terms' },
        { label: 'FAQs', url: '/faq' },
      ],
    },
  ];

  return (
    <footer className="footer-section">
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-md-4 g-xl-5">
          <div className="col-12 col-sm-6 col-md-4 col-xl-5">
            <div className="footer-card me-lg-5 fadeInUp" data-delay="0">
              <a href="/" className="footer-logo mb-4">
                <img
                  src={fieldValues.logo?.src || 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg'}
                  alt={fieldValues.logo?.alt || 'Logo'}
                  width={fieldValues.logo?.width || 150}
                />
              </a>
              <div
                dangerouslySetInnerHTML={{
                  __html: fieldValues.description || '',
                }}
              />
              <div className="social-nav">
                {fieldValues.facebookUrl && (
                  <a href={fieldValues.facebookUrl}>
                    <i className="ti ti-brand-facebook"></i>
                  </a>
                )}
                {fieldValues.linkedinUrl && (
                  <a href={fieldValues.linkedinUrl}>
                    <i className="ti ti-brand-linkedin"></i>
                  </a>
                )}
                {fieldValues.twitterUrl && (
                  <a href={fieldValues.twitterUrl}>
                    <i className="ti ti-brand-x"></i>
                  </a>
                )}
                {fieldValues.instagramUrl && (
                  <a href={fieldValues.instagramUrl}>
                    <i className="ti ti-brand-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          </div>

          {footerColumns.map((column, index) => (
            <div key={index} className="col-12 col-sm-6 col-md">
              <div className="footer-card fadeInUp" data-delay={0.1 + (index * 0.1)}>
                <h5 className="mb-4">{column.title}</h5>
                <ul className="list-unstyled footer-nav">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      <div className="container">
        <div className="copyright-section fadeInUp" data-delay="0.5">
          <p className="mb-0 copyright">
            Copyright © {currentYear}{' '}
            <a href={fieldValues.copyrightUrl} target="_blank">
              {fieldValues.copyrightText}
            </a>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Footer Logo"
      default={{
        src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg',
        alt: 'Startix Logo',
        width: 150,
      }}
      resizable={true}
    />
    <RichTextField
      name="description"
      label="Footer Description"
      default="<p>Each demo built with Teba will look different. You can customize almost anything appearance of your website with only a few.</p>"
    />
    <TextField name="facebookUrl" label="Facebook URL" default="#" />
    <TextField name="linkedinUrl" label="LinkedIn URL" default="#" />
    <TextField name="twitterUrl" label="Twitter/X URL" default="#" />
    <TextField name="instagramUrl" label="Instagram URL" default="#" />
    <TextField
      name="copyrightText"
      label="Copyright Text"
      default="Designing World"
    />
    <TextField
      name="copyrightUrl"
      label="Copyright URL"
      default="https://themeforest.net/user/designing-world"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Avidly Footer',
  icon: 'layout',
};
