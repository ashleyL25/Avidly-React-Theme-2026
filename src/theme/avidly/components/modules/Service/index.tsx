import React from 'react';
import {
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
  ChoiceField,
  BooleanField,
  ColorField,
  NumberField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  // Extract field values
  const heading = fieldValues.heading?.[0] || {};
  const services = fieldValues.services || [];
  const style = fieldValues.style?.[0] || {};

  // Heading styles
  const HeadingTag = `h${heading.size || '2'}` as keyof JSX.IntrinsicElements;
  const headingColorClass = heading.color === 'custom' 
    ? '' 
    : `text-${heading.color || 'dark'}`;
  const headingCustomColor = heading.color === 'custom' 
    ? heading.custom_color?.color 
    : undefined;

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
    sectionStyle.backgroundColor = style.background_color?.color || '#ffffff';
  } else if (style.background_option === 'image' && style.background_image?.src) {
    sectionStyle.backgroundImage = `url(${style.background_image.src})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundPosition = 'center';
    sectionStyle.position = 'relative';
  }

  // Spacing
  sectionStyle.paddingTop = `${style.padding_top || 80}px`;
  sectionStyle.paddingBottom = `${style.padding_bottom || 80}px`;

  // Active state for hover tabs (Style 1)
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Render Style 1: Image + List Layout (like Zivan original)
  const renderStyle1 = () => {
    const activeService = services[activeIndex]?.[0] || {};
    const imageSrc = activeService.image?.src || 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Service+Image';
    const imageAlt = activeService.image?.alt || activeService.title || 'Service';
    
    return (
      <div className="row align-items-center">
        {/* Left Column - Featured Image */}
        <div className="col-12 col-lg-5 mb-4 mb-lg-0">
          <div className="cs_service_featured_img">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-100 cs_radius_15"
              key={activeIndex}
            />
          </div>
        </div>

        {/* Right Column - Service List */}
        <div className="col-12 col-lg-7">
          <div className="cs_iconbox_3_list">
            {services.map((service, index) => {
              const serviceData = service[0] || {};
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`cs_hover_tab ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <a 
                    href={serviceData.link || '#'} 
                    className="cs_iconbox cs_style_3"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="cs_iconbox_in">
                      <h2 className="cs_iconbox_title cs_fs_29">{serviceData.title || 'Service Title'}</h2>
                      <div className="cs_iconbox_subtitle">{serviceData.subtitle || 'Service description'}</div>
                    </div>
                    <span className="cs_iconbox_icon cs_center">
                      <svg
                        width={30}
                        height={29}
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        width={30}
                        height={29}
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Render Style 2: Numbered Grid
  const renderStyle2 = () => {
    const variantColor = style.variant_color || '';
    
    return (
      <ul className={`cs_image_box_1_list ${variantColor} cs_mp0`}>
        {services.map((service, index) => {
          const serviceData = service[0] || {};

          return (
            <li key={index}>
              <div className="cs_image_box cs_style_1">
                <div className="cs_image_box_number cs_primary_color cs_primary_font cs_fs_38 cs_semibold">
                  {serviceData.number || (index + 1).toString().padStart(2, '0')}
                </div>
                <a
                  href={serviceData.link || '#'}
                  className="cs_image_box_img cs_radius_15 overflow-hidden"
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  {serviceData.thumbnail?.src && (
                    <img 
                      src={serviceData.thumbnail.src} 
                      alt={serviceData.thumbnail.alt || serviceData.title || 'Service'} 
                    />
                  )}
                </a>
                <div className="cs_image_box_info position-relative">
                  <h2 className="cs_image_box_title cs_fs_29 cs_semibold">
                    <a href={serviceData.link || '#'} style={{ textDecoration: 'none' }}>
                      {serviceData.title || 'Service Title'}
                    </a>
                  </h2>
                  <p className="cs_image_box_subtitle mb-0">{serviceData.subtitle || 'Service description'}</p>
                  <a
                    href={serviceData.link || '#'}
                    className="cs_image_box_btn cs_center position-absolute rounded-circle"
                  >
                    <svg
                      width={30}
                      height={29}
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width={30}
                      height={29}
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section
      className={`service-section ${style.custom_css_class || ''}`}
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

      <div className={containerClass} style={{ ...containerStyle, position: 'relative', zIndex: 1 }}>
        {/* Section Heading */}
        {heading.text && (
          <div className="row mb-5">
            <div className="col-12 text-center">
              <HeadingTag 
                className={`${headingColorClass} mb-3`}
                style={headingCustomColor ? { color: headingCustomColor } : {}}
              >
                {heading.text}
              </HeadingTag>
              {heading.subtitle && (
                <p className="lead">{heading.subtitle}</p>
              )}
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="row">
          <div className="col-12">
            {style.display_style === 'style2' ? renderStyle2() : renderStyle1()}
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = (
  <ModuleFields>
    {/* Heading Group */}
    <RepeatedFieldGroup
      name="heading"
      label="Heading"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{}]}
    >
      <TextField name="text" label="Heading Text" default="Our Services" />
      <TextField name="subtitle" label="Subtitle" default="" />
      <ChoiceField
        name="size"
        label="Heading Size"
        choices={[
          ['1', 'H1'],
          ['2', 'H2'],
          ['3', 'H3'],
          ['4', 'H4'],
        ]}
        default="2"
      />
      <ChoiceField
        name="color"
        label="Text Color"
        choices={[
          ['dark', 'Dark'],
          ['white', 'White'],
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['custom', 'Custom'],
        ]}
        default="dark"
      />
      <ColorField
        name="custom_color"
        label="Custom Color"
        default={{ color: '#000000', opacity: 100 }}
        visibility={{
          controllingField: 'color',
          controllingValueRegex: 'custom',
        }}
      />
    </RepeatedFieldGroup>

    {/* Services Repeater */}
    <RepeatedFieldGroup
      name="services"
      label="Services"
      occurrence={{ min: 1, max: 20 }}
      default={[
        {
          title: 'Web Development',
          subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
          number: '01',
          link: '#',
          image: {
            src: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Web+Development',
            alt: 'Web Development',
          },
          thumbnail: {
            src: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Web+Development',
            alt: 'Web Development',
          },
        },
        {
          title: 'UI/UX Design',
          subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
          number: '02',
          link: '#',
          image: {
            src: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=UI+UX+Design',
            alt: 'UI/UX Design',
          },
          thumbnail: {
            src: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=UI+UX+Design',
            alt: 'UI/UX Design',
          },
        },
        {
          title: 'Branding',
          subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
          number: '03',
          link: '#',
          image: {
            src: 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Branding',
            alt: 'Branding',
          },
          thumbnail: {
            src: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Branding',
            alt: 'Branding',
          },
        },
        {
          title: 'Social Ad Campaign',
          subtitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
          number: '04',
          link: '#',
          image: {
            src: 'https://via.placeholder.com/800x600/ec4899/ffffff?text=Social+Ad+Campaign',
            alt: 'Social Ad Campaign',
          },
          thumbnail: {
            src: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Social+Ad+Campaign',
            alt: 'Social Ad Campaign',
          },
        },
      ]}
    >
      <TextField name="title" label="Service Title" required />
      <TextField name="subtitle" label="Service Description" />
      <TextField name="number" label="Number (Style 2 only)" default="01" />
      <TextField name="link" label="Link URL" default="#" />
      <ImageField
        name="image"
        label="Hover Background Image (Style 1)"
        default={{
          src: 'https://via.placeholder.com/800x600',
          alt: 'Service background',
        }}
      />
      <ImageField
        name="thumbnail"
        label="Thumbnail Image (Style 2)"
        default={{
          src: 'https://via.placeholder.com/400x300',
          alt: 'Service thumbnail',
        }}
      />
    </RepeatedFieldGroup>

    {/* Style Group */}
    <RepeatedFieldGroup
      name="style"
      label="Style Settings"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{ display_style: 'style1' }]}
    >
      <ChoiceField
        name="display_style"
        label="Display Style"
        choices={[
          ['style1', 'Style 1: Hover Tabs'],
          ['style2', 'Style 2: Numbered Grid'],
        ]}
        default="style1"
      />
      <ChoiceField
        name="variant_color"
        label="Color Variant (Style 2 only)"
        choices={[
          ['', 'Default'],
          ['cs_color_1', 'Color 1'],
          ['cs_color_2', 'Color 2'],
          ['cs_color_3', 'Color 3'],
        ]}
        default=""
        visibility={{
          controllingField: 'display_style',
          controllingValueRegex: 'style2',
        }}
      />
      <ChoiceField
        name="background_option"
        label="Background"
        choices={[
          ['color', 'Color'],
          ['image', 'Image'],
        ]}
        default="color"
      />
      <ColorField
        name="background_color"
        label="Background Color"
        default={{ color: '#ffffff', opacity: 100 }}
        visibility={{
          controllingField: 'background_option',
          controllingValueRegex: 'color',
        }}
      />
      <ImageField
        name="background_image"
        label="Background Image"
        visibility={{
          controllingField: 'background_option',
          controllingValueRegex: 'image',
        }}
      />
      <ColorField
        name="overlay_color"
        label="Overlay Color"
        default={{ color: '#000000', opacity: 0 }}
        visibility={{
          controllingField: 'background_option',
          controllingValueRegex: 'image',
        }}
      />
      <ChoiceField
        name="container_width"
        label="Container Width"
        choices={[
          ['container', 'Standard Container'],
          ['container-fluid', 'Full Width'],
          ['custom', 'Custom'],
        ]}
        default="container"
      />
      <NumberField
        name="custom_container_width"
        label="Custom Max Width (px)"
        default={1200}
        min={800}
        max={2000}
        step={10}
        visibility={{
          controllingField: 'container_width',
          controllingValueRegex: 'custom',
        }}
      />
      <NumberField
        name="padding_top"
        label="Padding Top (px)"
        default={80}
        min={0}
        max={200}
        step={5}
      />
      <NumberField
        name="padding_bottom"
        label="Padding Bottom (px)"
        default={80}
        min={0}
        max={200}
        step={5}
      />
      <TextField name="custom_css_class" label="Custom CSS Class" />
      <TextField name="custom_id" label="Custom ID" />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'Service Grid',
  host_template_types: ['PAGE'],
  categories: ['content'],
};

