import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
  RichTextField,
  RepeatedFieldGroup,
  BooleanField,
  ChoiceField,
  NumberField,
} from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import AnimatedButtonIsland from '../../islands/AnimatedButtonIsland.tsx?island';

export function Component({ fieldValues }) {
  // Animation configuration
  const imageAnimationClass = fieldValues.animationEnabled ? 'fadeInLeft' : '';
  const contentAnimationClass = fieldValues.animationEnabled ? 'fadeInRight' : '';
  const animationDelay = fieldValues.animationDelay || 0;

  // Button configuration
  const buttonClassName = `btn btn-${fieldValues.buttonStyle || 'primary'} btn-${fieldValues.buttonSize || 'md'}`;
  const buttonHoverText = fieldValues.buttonEnableHoverText ? fieldValues.buttonHoverText : undefined;
  const buttonIcon = fieldValues.buttonIcon !== 'none' ? fieldValues.buttonIcon : '';

  return (
    <section
      className="about-section style-one"
      style={{
        backgroundImage: fieldValues.backgroundImage?.src
          ? `url(${fieldValues.backgroundImage.src})`
          : 'none',
      }}
    >
      <div className="divider"></div>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <div className={`about-img pe-xxl-5 ${imageAnimationClass}`} data-delay={animationDelay}>
              {fieldValues.aboutImage?.src && (
                <img
                  className="tilt-image w-100"
                  src={fieldValues.aboutImage.src}
                  alt={fieldValues.aboutImage.alt || 'About'}
                />
              )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`section-heading ${contentAnimationClass}`} data-delay={animationDelay + 0.2}>
              <span className="subtitle">{fieldValues.subtitle}</span>
              <h2
                className="mb-4 color-change"
                dangerouslySetInnerHTML={{ __html: fieldValues.heading || '' }}
              />
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: fieldValues.description || '',
                }}
              />
              {fieldValues.features && fieldValues.features.length > 0 && (
                <ul className="list-unstyled about-list mb-5">
                  {fieldValues.features.map((feature, index) => (
                    <li key={index}>
                      <svg width="28" height="28">
                        <use href="#checkIcon"></use>
                      </svg>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              )}
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
    <TextField name="subtitle" label="Subtitle" default="About Us" />
    <RichTextField
      name="heading"
      label="Heading"
      default="<h2>Robust, Easy-to-Use SaaS for <span class='text-primary'>Builders</span></h2>"
    />
    <RichTextField
      name="description"
      label="Description"
      default="<p>Scale your software operations through a custom engineering team. Meet the demand of your company's operations with a high-performing nearshore team skilled in modern technologies.</p>"
    />

    {/* Features List */}
    <RepeatedFieldGroup
      name="features"
      label="Features List"
      occurrence={{
        min: 1,
        max: 10,
        default: 3,
      }}
      default={[
        { text: 'Integrate a diverse range of ideas' },
        { text: 'Deliver the highest quality outcomes' },
        { text: 'Believe in power of implication' },
      ]}
    >
      <TextField name="text" label="Feature Text" default="Feature item" required={true} />
    </RepeatedFieldGroup>

    {/* Images */}
    <ImageField
      name="backgroundImage"
      label="Background Pattern Image"
      default={{
        src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
        alt: 'Background Pattern'
      }}
      help_text="Optional background pattern or texture"
    />
    <ImageField
      name="aboutImage"
      label="Main About Image"
      default={{
        src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg',
        alt: 'About Us'
      }}
      resizable={true}
      help_text="Main image showcasing your company or product"
    />

    {/* Button Settings */}
    <BooleanField name="buttonShow" label="Show Button" default={true} />
    <TextField name="buttonText" label="Button Text" default="More About Us" />
    <BooleanField
      name="buttonEnableHoverText"
      label="Enable Custom Hover Text"
      default={true}
      help_text="Show different text on button hover"
    />
    <TextField
      name="buttonHoverText"
      label="Button Hover Text"
      default="Learn Our Story"
      help_text="Text shown when hovering over button"
    />
    <TextField name="buttonUrl" label="Button URL" default="/about-us" />
    <ChoiceField
      name="buttonStyle"
      label="Button Style"
      default="primary"
      choices={[
        ['primary', 'Primary (Brand Color)'],
        ['secondary', 'Secondary'],
        ['light', 'Light'],
        ['dark', 'Dark'],
        ['outline-primary', 'Outline Primary'],
      ]}
    />
    <ChoiceField
      name="buttonSize"
      label="Button Size"
      default="md"
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
      ]}
    />
    <BooleanField name="buttonOpenInNewTab" label="Open in New Tab" default={false} />

    {/* Animation Settings */}
    <BooleanField 
      name="animationEnabled" 
      label="Enable Animations" 
      default={true}
      help_text="Enable scroll-triggered animations"
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
  label: 'About Section',
  icon: 'info',
  categories: ['content'],
};
