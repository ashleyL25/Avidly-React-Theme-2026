import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
  RichTextField,
  BooleanField,
  ChoiceField,
  NumberField,
} from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import AnimatedButtonIsland from '../../islands/AnimatedButtonIsland.tsx?island';

export function Component({ fieldValues }) {
  // Animation classes based on settings
  const animationClass = fieldValues.animationEnabled ? fieldValues.animationType || 'fadeInUp' : '';
  const animationDelay = fieldValues.animationDelay || 0;

  // Button configuration
  const buttonClassName = `btn btn-${fieldValues.buttonStyle || 'light'} btn-${fieldValues.buttonSize || 'lg'}`;
  const buttonHoverText = fieldValues.buttonEnableHoverText ? fieldValues.buttonHoverText : undefined;
  const buttonIcon = fieldValues.buttonIcon !== 'none' ? fieldValues.buttonIcon : '';

  return (
    <section
      className="cta-section"
      style={{
        backgroundImage: fieldValues.backgroundImage?.src
          ? `url(${fieldValues.backgroundImage.src})`
          : 'none',
        backgroundColor: fieldValues.backgroundColor || 'var(--Primary)',
      }}
    >
      <div className="divider"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className={`cta-content text-center ${animationClass}`} data-delay={animationDelay}>
              <h2
                className="text-white mb-4"
                dangerouslySetInnerHTML={{ __html: fieldValues.heading || '' }}
              />
              <div
                className="text-white mb-5"
                dangerouslySetInnerHTML={{
                  __html: fieldValues.description || '',
                }}
              />
              {fieldValues.buttonShow && (
                <Island
                  module={AnimatedButtonIsland}
                  text={fieldValues.buttonText}
                  hoverText={buttonHoverText}
                  url={fieldValues.buttonUrl}
                  className={buttonClassName}
                  icon={buttonIcon}
                  target={fieldValues.buttonOpenInNewTab ? '_blank' : '_self'}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Content Settings */}
    <RichTextField
      name="heading"
      label="Heading"
      default="<h2>Ready to Get Started?</h2>"
    />
    <RichTextField
      name="description"
      label="Description"
      default="<p>Join thousands of companies already using our platform to grow their business.</p>"
    />
    
    {/* Button Settings Group */}
    <BooleanField name="buttonShow" label="Show Button" default={true} />
    <TextField name="buttonText" label="Button Text" default="Get Started Now" />
    <BooleanField
      name="buttonEnableHoverText"
      label="Enable Custom Hover Text"
      default={true}
      help_text="Show different text on button hover for animated effect"
    />
    <TextField
      name="buttonHoverText"
      label="Button Hover Text"
      default="Let's Get Started"
      help_text="Text shown when hovering over the button"
    />
    <TextField name="buttonUrl" label="Button URL" default="/contact" />
    <ChoiceField
      name="buttonStyle"
      label="Button Style"
      default="light"
      choices={[
        ['primary', 'Primary (Brand Color)'],
        ['secondary', 'Secondary'],
        ['light', 'Light (White)'],
        ['dark', 'Dark'],
        ['outline-primary', 'Outline Primary'],
        ['outline-light', 'Outline Light'],
      ]}
    />
    <ChoiceField
      name="buttonSize"
      label="Button Size"
      default="lg"
      choices={[
        ['sm', 'Small'],
        ['md', 'Medium'],
        ['lg', 'Large'],
      ]}
    />
    <ChoiceField
      name="buttonIcon"
      label="Button Icon"
      default="ti-arrow-up-right"
      choices={[
        ['none', 'No Icon'],
        ['ti-arrow-up-right', 'Arrow Up Right'],
        ['ti-arrow-right', 'Arrow Right'],
        ['ti-chevron-right', 'Chevron Right'],
        ['ti-external-link', 'External Link'],
      ]}
    />
    <BooleanField name="buttonOpenInNewTab" label="Open in New Tab" default={false} />

    {/* Background Settings */}
    <TextField
      name="backgroundColor"
      label="Background Color"
      default="#6366f1"
      help_text="CSS color value (e.g., #6366f1 or var(--Primary))"
    />
    <ImageField
      name="backgroundImage"
      label="Background Image"
      default={{
        src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
        alt: 'CTA Background'
      }}
      help_text="Background image for the section"
    />

    {/* Animation Settings */}
    <BooleanField 
      name="animationEnabled" 
      label="Enable Animations" 
      default={true}
      help_text="Enable scroll-triggered animations for this section"
    />
    <ChoiceField
      name="animationType"
      label="Animation Type"
      default="fadeInUp"
      choices={[
        ['fadeIn', 'Fade In'],
        ['fadeInUp', 'Fade In Up'],
        ['fadeInDown', 'Fade In Down'],
        ['fadeInLeft', 'Fade In Left'],
        ['fadeInRight', 'Fade In Right'],
        ['zoomIn', 'Zoom In'],
      ]}
      help_text="Choose the animation effect"
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
  label: 'CTA Section',
  icon: 'bullhorn',
  categories: ['content'],
};
