import React from 'react';
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
  RepeatedFieldGroup,
  BooleanField,
  NumberField,
  ChoiceField,
  ColorField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const animationClass = fieldValues.animationEnabled ? 'stagger-item' : '';
  
  // Background styling
  let backgroundStyle: any = {};
  if (fieldValues.backgroundOption === 'color') {
    backgroundStyle.backgroundColor = fieldValues.backgroundColor?.color || '#ffffff';
  } else if (fieldValues.backgroundOption === 'image' && fieldValues.backgroundImage?.src) {
    backgroundStyle.backgroundImage = `url(${fieldValues.backgroundImage.src})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  }
  
  const paddingStyle = {
    paddingTop: fieldValues.paddingTop || 80,
    paddingBottom: fieldValues.paddingBottom || 80,
  };

  return (
    <section className="brand-section" style={{ ...backgroundStyle, ...paddingStyle }}>
      <div className="divider"></div>
      <div className="container">
        {(fieldValues.subtitle || fieldValues.heading) && (
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
              <div className={`section-heading text-center ${fieldValues.animationEnabled ? 'fadeInUp' : ''}`} data-delay={fieldValues.animationDelay || 0}>
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
      </div>
      <div className="divider-sm"></div>
      <div className="container">
        <div 
          className={`row g-4 justify-content-center ${animationClass}`}
          data-stagger-delay={fieldValues.staggerDelay || 0.1}
        >
          {fieldValues.brands?.map((brand, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 stagger-child">
              <div className="brand-logo text-center">
                {brand.url ? (
                  <a href={brand.url} target="_blank" rel="noopener noreferrer">
                    {brand.logo?.src && (
                      <img
                        src={brand.logo.src}
                        alt={brand.logo.alt || brand.brandName || 'Brand Logo'}
                        style={{ maxHeight: '60px', opacity: 0.7 }}
                      />
                    )}
                  </a>
                ) : (
                  brand.logo?.src && (
                    <img
                      src={brand.logo.src}
                      alt={brand.logo.alt || brand.brandName || 'Brand Logo'}
                      style={{ maxHeight: '60px', opacity: 0.7 }}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Content Settings */}
    <TextField name="subtitle" label="Subtitle" default="Our Partners" />
    <RichTextField
      name="heading"
      label="Heading"
      default="<h2>Trusted by the <span class='text-primary'>Best Companies</span></h2>"
    />

    {/* Brands Repeater */}
    <RepeatedFieldGroup
      name="brands"
      label="Brand Logos"
      occurrence={{
        min: 1,
        max: 20,
        default: 6,
      }}
      default={[
        { 
          brandName: 'Brand 1', 
          logo: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Brand 1' 
          }, 
          url: '#' 
        },
        { 
          brandName: 'Brand 2', 
          logo: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Brand 2' 
          }, 
          url: '#' 
        },
        { 
          brandName: 'Brand 3', 
          logo: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Brand 3' 
          }, 
          url: '#' 
        },
        { 
          brandName: 'Brand 4', 
          logo: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Brand 4' 
          }, 
          url: '#' 
        },
        { 
          brandName: 'Brand 5', 
          logo: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Brand 5' 
          }, 
          url: '#' 
        },
        { 
          brandName: 'Brand 6', 
          logo: { 
            src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
            alt: 'Brand 6' 
          }, 
          url: '#' 
        },
      ]}
    >
      <TextField name="brandName" label="Brand Name" default="Brand" required={true} />
      <ImageField 
        name="logo" 
        label="Brand Logo" 
        default={{ 
          src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
          alt: 'Brand' 
        }} 
        required={true}
        help_text="Upload brand logo (recommended: transparent PNG, max height 60px)"
      />
      <TextField name="url" label="Brand URL (Optional)" default="#" />
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
      label="Enable Stagger Animations" 
      default={true}
      help_text="Animate logos one by one with stagger effect"
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
    <NumberField
      name="staggerDelay"
      label="Stagger Delay Between Logos"
      default={0.1}
      min={0}
      max={0.5}
      step={0.05}
      help_text="Time between each logo animation (seconds)"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Brand Logos Section',
  icon: 'building',
  categories: ['content'],
};
