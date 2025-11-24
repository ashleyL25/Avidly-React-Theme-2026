import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  RepeatedFieldGroup,
  NumberField,
  BooleanField,
  ChoiceField,
  ColorField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import TestimonialIsland from '../../islands/TestimonialIsland.tsx?island';

export function Component({ fieldValues }) {
  const animationClass = fieldValues.animationEnabled ? 'fadeInUp' : '';
  
  // Background styling
  let backgroundStyle: any = {};
  if (fieldValues.backgroundOption === 'color') {
    backgroundStyle.backgroundColor = fieldValues.backgroundColor?.color || '#f9fafb';
  } else if (fieldValues.backgroundOption === 'image' && fieldValues.backgroundImage?.src) {
    backgroundStyle.backgroundImage = `url(${fieldValues.backgroundImage.src})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  }
  
  return (
    <section 
      className={`testimonial-section ${animationClass}`} 
      style={backgroundStyle}
      data-delay={fieldValues.animationDelay || 0}
    >
      <div className="divider"></div>
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-sm-7">
            <div className="section-heading fadeInLeft" data-delay={(fieldValues.animationDelay || 0) + 0.1}>
              <span className="subtitle">{fieldValues.subtitle}</span>
              <h2 className="mb-0">{fieldValues.heading}</h2>
            </div>
          </div>
          <div className="col-12 col-sm-5">
            <div className="d-flex align-items-center justify-content-sm-end gap-4 fadeInRight" data-delay={(fieldValues.animationDelay || 0) + 0.2}>
              <div className="testimonial-four-button-prev">
                <i className="ti ti-chevron-left"></i>
              </div>
              <div className="testimonial-four-button-next">
                <i className="ti ti-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-sm"></div>
        <div className={`testimonial-slide ${fieldValues.animationEnabled ? 'fadeInUp' : ''}`} data-delay={(fieldValues.animationDelay || 0) + 0.3}>
          <Island
            module={TestimonialIsland}
            subtitle={fieldValues.subtitle}
            heading={fieldValues.heading}
            testimonials={fieldValues.testimonials || []}
          />
        </div>
        <div className="divider-sm"></div>
        <div className="testimonial-pagination-four"></div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Content Settings */}
    <TextField name="subtitle" label="Subtitle" default="Our Client Review" />
    <TextField
      name="heading"
      label="Heading"
      default="See What Our Customers Have to Say!"
    />
    
    {/* Testimonials Repeater */}
    <RepeatedFieldGroup
      name="testimonials"
      label="Testimonials"
      occurrence={{
        min: 1,
        max: 10,
        default: 2,
      }}
      default={[
        {
          text: '<p>The process was straightforward and user-friendly. This platform has undoubtedly become an integral part of our daily operations.</p>',
          rating: 5,
          customerName: 'Sarah Johnson',
          role: 'Marketing Director',
        },
        {
          text: '<p>Exceptional service and support! The team went above and beyond to ensure our needs were met. Highly recommend!</p>',
          rating: 5,
          customerName: 'Michael Chen',
          role: 'CEO',
        },
      ]}
    >
      <RichTextField
        name="text"
        label="Testimonial Text"
        default="<p>Great service and excellent support!</p>"
        required={true}
      />
      <NumberField
        name="rating"
        label="Rating (1-5)"
        default={5}
        min={1}
        max={5}
      />
      <TextField name="customerName" label="Customer Name" default="Customer" required={true} />
      <TextField name="role" label="Customer Role" default="Customer" required={true} />
    </RepeatedFieldGroup>

    {/* Style Settings */}
    <ChoiceField
      name="backgroundOption"
      label="Background Option"
      default="color"
      choices={[
        ['color', 'Solid Color'],
        ['image', 'Background Image'],
      ]}
    />

    <ColorField
      name="backgroundColor"
      label="Background Color"
      default={{
        color: '#f9fafb',
        opacity: 100
      }}
    />

    <ImageField
      name="backgroundImage"
      label="Background Image"
      default={{
        src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
        alt: 'Background'
      }}
    />

    {/* Animation Settings */}
    <BooleanField 
      name="animationEnabled" 
      label="Enable Animations" 
      default={true}
      help_text="Enable scroll-triggered GSAP animations"
    />
    <NumberField
      name="animationDelay"
      label="Animation Delay"
      default={0}
      min={0}
      max={2}
      step={0.1}
      help_text="Delay before animation starts (seconds)"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Testimonials Section',
  icon: 'quote',
  categories: ['content'],
};
