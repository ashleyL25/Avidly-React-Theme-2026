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
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  // Extract grouped field values
  const mainHeading = fieldValues.main_heading?.[0] || {};
  const subheading = fieldValues.subheading?.[0] || {};
  const description = fieldValues.description?.[0] || {};
  const customerCount = fieldValues.customer_count?.[0] || {};
  const heroImage = fieldValues.hero_image?.[0] || {};
  const style = fieldValues.style?.[0] || {};

  // Determine heading tag and styles
  const HeadingTag = `h${mainHeading.size || '1'}` as keyof JSX.IntrinsicElements;
  const headingDisplayClass = mainHeading.display_size !== 'auto' 
    ? `h${mainHeading.display_size}` 
    : '';
  const headingColorClass = mainHeading.color === 'custom' 
    ? '' 
    : `text-${mainHeading.color || 'white'}`;
  const headingCustomColor = mainHeading.color === 'custom' 
    ? mainHeading.custom_color?.color 
    : undefined;
  const headingAnimClass = mainHeading.animation_type || '';

  // Subheading styles
  const SubheadingTag = `h${subheading.size || '5'}` as keyof JSX.IntrinsicElements;
  const subheadingColorClass = subheading.color === 'custom' 
    ? '' 
    : `text-${subheading.color || 'white'}`;
  const subheadingCustomColor = subheading.color === 'custom' 
    ? subheading.custom_color?.color 
    : undefined;

  // Description styles
  const descriptionAnimClass = description.animation_type || '';

  // Container width
  const containerClass = style.container_width === 'custom' 
    ? '' 
    : (style.container_width || 'container');
  
  const containerStyle = style.container_width === 'custom' 
    ? { maxWidth: `${style.custom_container_width || 1200}px`, margin: '0 auto' }
    : {};

  // Background styling
  let sectionStyle: any = {};
  
  if (style.background_option === 'color') {
    sectionStyle.backgroundColor = style.background_color?.color || '#0f172a';
  } else if (style.background_option === 'image' && style.background_image?.src) {
    sectionStyle.backgroundImage = `url(${style.background_image.src})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
    sectionStyle.position = 'relative';
  }

  // Spacing
  sectionStyle.paddingTop = `${style.padding_top || 100}px`;
  sectionStyle.paddingBottom = `${style.padding_bottom || 100}px`;

  return (
    <section
      className={`hero-section ${style.custom_css_class || ''}`}
      id={style.custom_id || ''}
      style={sectionStyle}
    >
      {/* Overlay Layer */}
      {style.background_option === 'image' && style.overlay_color?.opacity > 0 && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: style.overlay_color.color,
            opacity: style.overlay_color.opacity / 100,
            pointerEvents: 'none',
          }}
        />
      )}

      <div className={containerClass} style={containerStyle}>
        <div className="row justify-content-between g-4">
          {/* Left Column - Main Heading */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
              <HeadingTag
                className={`${headingDisplayClass} ${headingColorClass} mb-0 ${headingAnimClass}`}
                data-delay={mainHeading.animation_delay || 0}
                style={headingCustomColor ? { color: headingCustomColor } : {}}
              >
                {mainHeading.text || ''}
              </HeadingTag>
            </div>
          </div>

          {/* Right Column - Customer Count & Description */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
              {/* Customer Count Section */}
              {customerCount.show && (
                <div
                  className={`img-group-wrap d-flex align-items-center ${customerCount.animation_type || ''}`}
                  data-delay={customerCount.animation_delay || 0}
                >
                  <div className="imgs-group">
                    {customerCount.image1?.src && (
                      <img
                        src={customerCount.image1.src}
                        alt={customerCount.image1.alt || 'Customer'}
                        width={50}
                        height={50}
                      />
                    )}
                    {customerCount.image2?.src && (
                      <img
                        src={customerCount.image2.src}
                        alt={customerCount.image2.alt || 'Customer'}
                        width={50}
                        height={50}
                      />
                    )}
                    <div>
                      {customerCount.count || 10}
                      {customerCount.suffix || 'k'}
                    </div>
                  </div>
                  <SubheadingTag 
                    className={`mb-0 ms-3 ${subheadingColorClass}`}
                    style={subheadingCustomColor ? { color: subheadingCustomColor } : {}}
                  >
                    <span dangerouslySetInnerHTML={{ __html: customerCount.text || '' }} />
                  </SubheadingTag>
                </div>
              )}

              {/* Description */}
              <p
                className={`mt-5 mb-0 ${headingColorClass} ${descriptionAnimClass}`}
                data-delay={description.animation_delay || 0}
                dangerouslySetInnerHTML={{
                  __html: description.text || '',
                }}
              />
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Hero Image */}
        {heroImage.show && (
          <div 
            className={`hero-image mt-0 ${heroImage.animation_type || ''}`} 
            data-delay={heroImage.animation_delay || 0}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {heroImage.image?.src && (
              <img
                src={heroImage.image.src}
                alt={heroImage.image.alt || 'Hero'}
                className="w-100"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* ========== MAIN HEADING GROUP ========== */}
    <RepeatedFieldGroup
      name="main_heading"
      label="Main Heading"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        text: 'Commitment Igniting Future Pathways',
        size: '1',
        display_size: 'auto',
        color: 'white',
        custom_color: { color: '#ffffff', opacity: 100 },
        animation_type: 'heading-chars',
        animation_delay: 0.2,
      }]}
    >
      <TextField
        name="text"
        label="Heading Text"
        default="Commitment Igniting Future Pathways"
      />
      <ChoiceField
        name="size"
        label="HTML Tag (SEO)"
        help_text="Semantic heading level for accessibility and SEO"
        choices={[
          ['1', 'H1'],
          ['2', 'H2'],
          ['3', 'H3'],
          ['4', 'H4'],
          ['5', 'H5'],
          ['6', 'H6'],
        ]}
        default="1"
        display="select"
      />
      <ChoiceField
        name="display_size"
        label="Display Size"
        help_text="Visual size (can differ from HTML tag)"
        choices={[
          ['auto', 'Auto (matches HTML tag)'],
          ['1', 'Display H1'],
          ['2', 'Display H2'],
          ['3', 'Display H3'],
          ['4', 'Display H4'],
          ['5', 'Display H5'],
          ['6', 'Display H6'],
        ]}
        default="auto"
        display="select"
      />
      <ChoiceField
        name="color"
        label="Text Color"
        choices={[
          ['auto', 'Auto (Inherits)'],
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['tertiary', 'Tertiary'],
          ['quaternary', 'Quaternary'],
          ['white', 'White'],
          ['black', 'Black'],
          ['dark', 'Dark'],
          ['custom', 'Custom Color'],
        ]}
        default="white"
        display="select"
      />
      <ColorField
        name="custom_color"
        label="Custom Text Color (if custom selected)"
        default={{ color: '#ffffff', opacity: 100 }}
        help_text="Only applies when 'Custom Color' is selected above"
      />
      <ChoiceField
        name="animation_type"
        label="Animation Type"
        choices={[
          ['', 'None'],
          ['fadeIn', 'Fade In'],
          ['fadeInUp', 'Fade In Up'],
          ['fadeInDown', 'Fade In Down'],
          ['fadeInLeft', 'Fade In Left'],
          ['fadeInRight', 'Fade In Right'],
          ['zoomIn', 'Zoom In'],
          ['heading-chars', 'Character Animation'],
          ['heading-word', 'Word Animation'],
          ['heading-line', 'Line Animation'],
        ]}
        default="heading-chars"
        display="select"
      />
      <NumberField
        name="animation_delay"
        label="Animation Delay (seconds)"
        default={0.2}
        min={0}
        max={3}
        step={0.1}
      />
    </RepeatedFieldGroup>

    {/* ========== SUBHEADING GROUP (Customer Count Text) ========== */}
    <RepeatedFieldGroup
      name="subheading"
      label="Subheading (Customer Count Text)"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        size: '5',
        color: 'white',
        custom_color: { color: '#ffffff', opacity: 100 },
      }]}
    >
      <ChoiceField
        name="size"
        label="HTML Tag"
        choices={[
          ['1', 'H1'],
          ['2', 'H2'],
          ['3', 'H3'],
          ['4', 'H4'],
          ['5', 'H5'],
          ['6', 'H6'],
        ]}
        default="5"
        display="select"
      />
      <ChoiceField
        name="color"
        label="Text Color"
        choices={[
          ['auto', 'Auto'],
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['white', 'White'],
          ['black', 'Black'],
          ['custom', 'Custom'],
        ]}
        default="white"
        display="select"
      />
      <ColorField
        name="custom_color"
        label="Custom Text Color (if custom selected)"
        default={{ color: '#ffffff', opacity: 100 }}
        help_text="Only applies when 'Custom' is selected above"
      />
    </RepeatedFieldGroup>

    {/* ========== DESCRIPTION GROUP ========== */}
    <RepeatedFieldGroup
      name="description"
      label="Description"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        text: '<p>We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of modern enterprises.</p>',
        animation_type: 'heading-line',
        animation_delay: 0.4,
      }]}
    >
      <RichTextField
        name="text"
        label="Description Text"
        default="<p>We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of modern enterprises.</p>"
      />
      <ChoiceField
        name="animation_type"
        label="Animation Type"
        choices={[
          ['', 'None'],
          ['fadeIn', 'Fade In'],
          ['fadeInUp', 'Fade In Up'],
          ['heading-line', 'Line Animation'],
        ]}
        default="heading-line"
        display="select"
      />
      <NumberField
        name="animation_delay"
        label="Animation Delay (seconds)"
        default={0.4}
        min={0}
        max={3}
        step={0.1}
      />
    </RepeatedFieldGroup>

    {/* ========== CUSTOMER COUNT GROUP ========== */}
    <RepeatedFieldGroup
      name="customer_count"
      label="Customer Count Section"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        show: true,
        image1: { src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', alt: 'Customer' },
        image2: { src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', alt: 'Customer' },
        count: 10,
        suffix: 'k',
        text: 'More than 10k+<br/>trusted customers',
        animation_type: 'fadeInUp',
        animation_delay: 0.3,
      }]}
    >
      <BooleanField
        name="show"
        label="Show Customer Count"
        default={true}
      />
      <ImageField
        name="image1"
        label="Customer Image 1"
        default={{ src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', alt: 'Customer' }}
      />
      <ImageField
        name="image2"
        label="Customer Image 2"
        default={{ src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', alt: 'Customer' }}
      />
      <NumberField
        name="count"
        label="Count Number"
        default={10}
        min={0}
      />
      <TextField
        name="suffix"
        label="Count Suffix"
        default="k"
      />
      <RichTextField
        name="text"
        label="Count Text"
        default="More than 10k+<br/>trusted customers"
      />
      <ChoiceField
        name="animation_type"
        label="Animation Type"
        choices={[
          ['', 'None'],
          ['fadeInUp', 'Fade In Up'],
          ['fadeInLeft', 'Fade In Left'],
        ]}
        default="fadeInUp"
        display="select"
      />
      <NumberField
        name="animation_delay"
        label="Animation Delay (seconds)"
        default={0.3}
        min={0}
        max={3}
        step={0.1}
      />
    </RepeatedFieldGroup>

    {/* ========== HERO IMAGE GROUP ========== */}
    <RepeatedFieldGroup
      name="hero_image"
      label="Hero Image"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        show: true,
        image: { src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', alt: 'Hero Image' },
        animation_type: 'fadeInUp',
        animation_delay: 0.6,
      }]}
    >
      <BooleanField
        name="show"
        label="Show Hero Image"
        default={true}
      />
      <ImageField
        name="image"
        label="Image"
        default={{ src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg', alt: 'Hero Image' }}
        resizable={true}
      />
      <ChoiceField
        name="animation_type"
        label="Animation Type"
        choices={[
          ['', 'None'],
          ['fadeInUp', 'Fade In Up'],
          ['zoomIn', 'Zoom In'],
        ]}
        default="fadeInUp"
        display="select"
      />
      <NumberField
        name="animation_delay"
        label="Animation Delay (seconds)"
        default={0.6}
        min={0}
        max={3}
        step={0.1}
      />
    </RepeatedFieldGroup>

    {/* ========== STYLE GROUP ========== */}
    <RepeatedFieldGroup
      name="style"
      label="Style"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        container_width: 'container',
        custom_container_width: 1200,
        padding_top: 100,
        padding_bottom: 100,
        background_option: 'image',
        background_color: { color: '#0f172a', opacity: 100 },
        background_image: { 
          src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
          alt: 'Background',
        },
        overlay_color: { color: '#000000', opacity: 0 },
        custom_css_class: '',
        custom_id: '',
      }]}
    >
      <ChoiceField
        name="container_width"
        label="Container Width"
        choices={[
          ['container', 'Standard Container (Boxed)'],
          ['container-fluid', 'Full Width'],
          ['custom', 'Custom Width'],
        ]}
        default="container"
        display="select"
      />
      <NumberField
        name="custom_container_width"
        label="Custom Container Width (px) - if custom selected"
        default={1200}
        min={320}
        max={1920}
        step={10}
        help_text="Only applies when 'Custom Width' is selected above"
      />
      <NumberField
        name="padding_top"
        label="Section Padding Top (px)"
        default={100}
        min={0}
        max={200}
        step={10}
      />
      <NumberField
        name="padding_bottom"
        label="Section Padding Bottom (px)"
        default={100}
        min={0}
        max={200}
        step={10}
      />
      <ChoiceField
        name="background_option"
        label="Background Type"
        choices={[
          ['none', 'None'],
          ['color', 'Solid Color'],
          ['image', 'Background Image'],
        ]}
        default="image"
        display="select"
      />
      <ColorField
        name="background_color"
        label="Background Color - if color selected"
        default={{ color: '#0f172a', opacity: 100 }}
        help_text="Only applies when 'Solid Color' is selected above"
      />
      <ImageField
        name="background_image"
        label="Background Image - if image selected"
        default={{
          src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
          alt: 'Background',
        }}
        help_text="Only applies when 'Background Image' is selected above"
      />
      <ColorField
        name="overlay_color"
        label="Image Overlay Color"
        default={{ color: '#000000', opacity: 0 }}
        help_text="Add a color overlay on top of the background image"
      />
      <TextField
        name="custom_css_class"
        label="Custom CSS Class"
        default=""
        help_text="Add custom CSS classes (space-separated)"
      />
      <TextField
        name="custom_id"
        label="Custom Element ID"
        default=""
        help_text="Add a custom HTML ID for anchor links"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Hero Section',
  icon: 'star',
  categories: ['hero'],
};
