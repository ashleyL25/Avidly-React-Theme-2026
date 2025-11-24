import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
  RichTextField,
  NumberField,
  BooleanField,
  ChoiceField,
  ColorField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const animationDelay = fieldValues.animationDelay || 0;
  const headingAnimClass = fieldValues.animationEnabled ? 'heading-chars' : '';
  const contentAnimClass = fieldValues.animationEnabled ? 'heading-line' : '';
  const imageAnimClass = fieldValues.animationEnabled ? 'fadeInUp' : '';
  const customerAnimClass = fieldValues.animationEnabled ? 'fadeInUp' : '';
  
  // Background styling
  let backgroundStyle: any = {};
  if (fieldValues.backgroundOption === 'color') {
    backgroundStyle.backgroundColor = fieldValues.backgroundColor?.color || '#0f172a';
  } else if (fieldValues.backgroundOption === 'image' && fieldValues.backgroundImage?.src) {
    backgroundStyle.backgroundImage = `url(${fieldValues.backgroundImage.src})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  }
  
  const paddingStyle = {
    paddingTop: fieldValues.paddingTop || 100,
    paddingBottom: fieldValues.paddingBottom || 100,
  };

  return (
    <section
      className="hero-section"
      style={{ ...backgroundStyle, ...paddingStyle }}
    >
      <div className="container">
        <div className="row justify-content-between g-4">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero-content">
              <h2
                className={`text-white mb-0 ${headingAnimClass}`}
                data-delay={animationDelay + 0.3}
                dangerouslySetInnerHTML={{ __html: fieldValues.heading || '' }}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="hero-content">
              {fieldValues.showCustomerCount && (
                <div
                  className={`img-group-wrap d-flex align-items-center ${customerAnimClass}`}
                  data-delay={animationDelay + 0.5}
                >
                  <div className="imgs-group">
                    {fieldValues.customerImage1?.src && (
                      <img
                        src={fieldValues.customerImage1.src}
                        alt={fieldValues.customerImage1.alt || 'Customer'}
                        width={50}
                        height={50}
                      />
                    )}
                    {fieldValues.customerImage2?.src && (
                      <img
                        src={fieldValues.customerImage2.src}
                        alt={fieldValues.customerImage2.alt || 'Customer'}
                        width={50}
                        height={50}
                      />
                    )}
                    <div>
                      {fieldValues.customerCount}
                      {fieldValues.customerCountSuffix}
                    </div>
                  </div>
                  <h5 className="mb-0 ms-3">
                    <span dangerouslySetInnerHTML={{ __html: fieldValues.customerCountText }} />
                  </h5>
                </div>
              )}
              <p
                className={`mt-5 mb-0 text-white ${contentAnimClass}`}
                data-delay={animationDelay + 0.6}
                dangerouslySetInnerHTML={{
                  __html: fieldValues.description || '',
                }}
              />
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className={`hero-image mt-0 ${imageAnimClass}`} data-delay={animationDelay + 0.7}>
          {fieldValues.heroImage?.src && (
            <img
              src={fieldValues.heroImage.src}
              alt={fieldValues.heroImage.alt || 'Hero'}
              className="w-100"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Content Settings */}
    <RichTextField
      name="heading"
      label="Hero Heading"
      default="<h2>Commitment Igniting Future Pathways</h2>"
    />
    <RichTextField
      name="description"
      label="Hero Description"
      default="<p>We transform businesses of most major sector powerful and adaptable digital solutions that satisfy Provide a brief overview of your SaaS product, explaining what it does and how it can benefit.</p>"
    />
    <ImageField
      name="heroImage"
      label="Hero Main Image"
      default={{ 
        src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
        alt: 'Hero Image' 
      }}
      resizable={true}
    />

    {/* Customer Count Section */}
    <BooleanField
      name="showCustomerCount"
      label="Show Customer Count Section"
      default={true}
    />
    <ImageField
      name="customerImage1"
      label="Customer Image 1"
      default={{ 
        src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
        alt: 'Customer' 
      }}
    />
    <ImageField
      name="customerImage2"
      label="Customer Image 2"
      default={{ 
        src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', 
        alt: 'Customer' 
      }}
    />
    <NumberField
      name="customerCount"
      label="Customer Count"
      default={10}
      min={0}
    />
    <TextField
      name="customerCountSuffix"
      label="Customer Count Suffix"
      default="k"
    />
    <TextField
      name="customerCountText"
      label="Customer Count Text"
      default="More than 10k+ <br /> trusted customers"
    />

    {/* Style Settings */}
    <ChoiceField
      name="backgroundOption"
      label="Background Option"
      default="image"
      choices={[
        ['color', 'Solid Color'],
        ['image', 'Background Image'],
      ]}
    />

    <ColorField
      name="backgroundColor"
      label="Background Color"
      default={{
        color: '#0f172a',
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
      default={100}
      min={0}
      max={300}
      step={10}
    />

    <NumberField
      name="paddingBottom"
      label="Section Padding Bottom (px)"
      default={100}
      min={0}
      max={300}
      step={10}
    />

    {/* Animation Settings */}
    <BooleanField 
      name="animationEnabled" 
      label="Enable Animations" 
      default={true}
      help_text="Enable scroll-triggered GSAP animations for hero content"
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
  label: 'Hero Section',
  icon: 'star',
  categories: ['hero'],
};
