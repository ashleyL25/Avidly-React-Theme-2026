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
  ColorField,
} from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import AnimatedButtonIsland from '../../islands/AnimatedButtonIsland.tsx?island';

export function Component({ fieldValues }) {
  const features = fieldValues.features || [];
  const animationClass = fieldValues.animationEnabled ? 'fadeInUp' : '';
  
  // Style settings
  const containerClass = fieldValues.containerWidth === 'full-width' ? 'container-fluid' : 'container';
  const textAlign = fieldValues.textAlignment || 'center';
  
  // Background styling
  let backgroundStyle: any = {};
  if (fieldValues.backgroundOption === 'color') {
    backgroundStyle.backgroundColor = fieldValues.backgroundColor?.color || '#ffffff';
  } else if (fieldValues.backgroundOption === 'image' && fieldValues.backgroundImage?.src) {
    backgroundStyle.backgroundImage = `url(${fieldValues.backgroundImage.src})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
    if (fieldValues.overlayColor?.color) {
      backgroundStyle.position = 'relative';
    }
  }
  
  // Spacing
  const paddingStyle = {
    paddingTop: fieldValues.paddingTop || 80,
    paddingBottom: fieldValues.paddingBottom || 80,
  };

  return (
    <section 
      className={`features-section ${animationClass}`} 
      style={{ ...backgroundStyle, ...paddingStyle }}
      data-delay={fieldValues.animationDelay || 0}
    >
      {fieldValues.backgroundOption === 'image' && fieldValues.overlayColor?.color && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: fieldValues.overlayColor.color,
          opacity: (fieldValues.overlayColor.opacity || 50) / 100,
          pointerEvents: 'none'
        }}></div>
      )}
      
      <div className="divider"></div>
      <div className={containerClass} style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        {(fieldValues.subtitle || fieldValues.heading) && (
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
              <div className={`section-heading text-${textAlign}`}>
                {fieldValues.subtitle && <span className="subtitle">{fieldValues.subtitle}</span>}
                {fieldValues.heading && (
                  <h2 
                    className="mb-4" 
                    dangerouslySetInnerHTML={{ __html: fieldValues.heading }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        <div className="divider-sm"></div>

        {/* Features List */}
        {features.map((feature, index) => {
          const imagePosition = feature.imagePosition || 'left';
          const isEven = index % 2 === 0;
          const shouldReverse = imagePosition === 'right' || (!imagePosition && !isEven);
          
          return (
            <React.Fragment key={index}>
              <div className={`row g-5 align-items-center ${shouldReverse ? 'flex-row-reverse' : ''}`}>
                {/* Feature Image */}
                <div className="col-12 col-md-6">
                  <div className={`featured-img translateY10 ${shouldReverse ? 'ms-xl-4' : 'me-xl-4'} fadeInLeft`} data-delay={(index * 0.2)}>
                    {feature.image?.src && (
                      <img
                        className="tilt-image w-100"
                        src={feature.image.src}
                        alt={feature.image.alt || feature.title || 'Feature Image'}
                      />
                    )}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="col-12 col-md-6">
                  <div className="featured-content fadeInRight" data-delay={(index * 0.2) + 0.1}>
                    {feature.title && <h2 className="mb-3">{feature.title}</h2>}
                    {feature.description && (
                      <div 
                        className="mb-4" 
                        dangerouslySetInnerHTML={{ __html: feature.description }}
                      />
                    )}
                    {feature.featureList && feature.featureList.length > 0 && (
                      <ul className="list-unstyled mb-5 featured-list">
                        {feature.featureList.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <svg width="28" height="28">
                              <use href="#checkIcon2"></use>
                            </svg> {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                    {feature.showButton && (
                      <Island
                        module={AnimatedButtonIsland}
                        text={feature.buttonText}
                        hoverText={feature.buttonEnableHoverText ? feature.buttonHoverText : undefined}
                        url={feature.buttonUrl}
                        className={`btn btn-${feature.buttonStyle || 'primary'} btn-${feature.buttonSize || 'md'}`}
                        icon={feature.buttonIcon !== 'none' ? feature.buttonIcon : ''}
                        target={feature.buttonOpenInNewTab ? '_blank' : '_self'}
                      />
                    )}
                  </div>
                </div>
              </div>
              {index < features.length - 1 && <div className="divider"></div>}
            </React.Fragment>
          );
        })}
      </div>
      <div className="divider"></div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Content Settings */}
    <TextField name="subtitle" label="Subtitle" default="Featured Works" />
    <RichTextField
      name="heading"
      label="Heading"
      default="<h2>Master Your <span class='text-primary'>Project Success</span></h2>"
    />

    {/* Features Repeater */}
    <RepeatedFieldGroup
      name="features"
      label="Features"
      occurrence={{
        min: 1,
        max: 10,
        default: 3,
      }}
      default={[
        {
          title: 'Marketing Teams',
          description: '<p>Saas products are accessible via web browsers, eliminating the need for users to install or maintain software locally.</p>',
          image: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Marketing' 
          },
          imagePosition: 'left',
          featureList: [
            { text: 'Social Media Design' },
            { text: 'Social Media Management' },
            { text: 'Custom ad strategy' },
          ],
          showButton: true,
          buttonText: 'Read More',
          buttonEnableHoverText: true,
          buttonHoverText: 'Learn More',
          buttonUrl: '/services',
          buttonStyle: 'primary',
          buttonSize: 'md',
          buttonIcon: 'ti-arrow-up-right',
          buttonOpenInNewTab: false,
        },
      ]}
    >
      <TextField name="title" label="Feature Title" default="Feature Title" required={true} />
      <RichTextField
        name="description"
        label="Feature Description"
        default="<p>Feature description goes here.</p>"
      />
      <ImageField
        name="image"
        label="Feature Image"
        default={{
          src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg',
          alt: 'Feature Image'
        }}
        resizable={true}
        required={true}
      />
      <ChoiceField
        name="imagePosition"
        label="Image Position"
        default="left"
        choices={[
          ['left', 'Left'],
          ['right', 'Right'],
        ]}
      />

      {/* Feature List Items */}
      <RepeatedFieldGroup
        name="featureList"
        label="Feature List Items"
        occurrence={{
          min: 0,
          max: 10,
          default: 3,
        }}
        default={[
          { text: 'Feature item 1' },
          { text: 'Feature item 2' },
          { text: 'Feature item 3' },
        ]}
      >
        <TextField name="text" label="List Item" default="Feature item" required={true} />
      </RepeatedFieldGroup>

      {/* Button Settings for Each Feature */}
      <BooleanField name="showButton" label="Show Button" default={true} />
      <TextField name="buttonText" label="Button Text" default="Read More" />
      <BooleanField
        name="buttonEnableHoverText"
        label="Enable Custom Hover Text"
        default={true}
      />
      <TextField
        name="buttonHoverText"
        label="Button Hover Text"
        default="Learn More"
      />
      <TextField name="buttonUrl" label="Button URL" default="/services" />
      <ChoiceField
        name="buttonStyle"
        label="Button Style"
        default="primary"
        choices={[
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['light', 'Light'],
          ['dark', 'Dark'],
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
        ]}
      />
      <BooleanField name="buttonOpenInNewTab" label="Open in New Tab" default={false} />
    </RepeatedFieldGroup>

    {/* Style Tab Settings */}
    <ChoiceField
      name="containerWidth"
      label="Container Width"
      default="container"
      choices={[
        ['container', 'Container (Boxed)'],
        ['full-width', 'Full Width'],
      ]}
      help_text="Choose container width for the section"
    />

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
        color: '#ffffff',
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

    <ColorField
      name="overlayColor"
      label="Image Overlay Color"
      default={{
        color: '#000000',
        opacity: 30
      }}
      help_text="Overlay color for background image (optional)"
    />

    <ChoiceField
      name="textAlignment"
      label="Text Alignment"
      default="center"
      choices={[
        ['left', 'Left'],
        ['center', 'Center'],
        ['right', 'Right'],
      ]}
    />

    <NumberField
      name="paddingTop"
      label="Section Padding Top (px)"
      default={80}
      min={0}
      max={200}
      step={10}
    />

    <NumberField
      name="paddingBottom"
      label="Section Padding Bottom (px)"
      default={80}
      min={0}
      max={200}
      step={10}
    />

    {/* Animation Settings */}
    <BooleanField 
      name="animationEnabled" 
      label="Enable Animations" 
      default={true}
    />
    <NumberField
      name="animationDelay"
      label="Animation Delay"
      default={0}
      min={0}
      max={2}
      step={0.1}
    />

    {/* Advanced */}
    <TextField 
      name="customClass" 
      label="Custom CSS Class" 
      default=""
      help_text="Add custom CSS classes for additional styling"
    />
    <TextField 
      name="customId" 
      label="Custom ID" 
      default=""
      help_text="Add a custom ID for anchor links"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Features Section',
  icon: 'grid',
  categories: ['content'],
};
