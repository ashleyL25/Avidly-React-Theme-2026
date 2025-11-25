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
  // Extract grouped values
  const heading = fieldValues.heading_group?.[0] || {};
  const description = fieldValues.description_group?.[0] || {};
  const images = fieldValues.images_group?.[0] || {};
  const button = fieldValues.button_group?.[0] || {};
  const style = fieldValues.style_group?.[0] || {};
  const animation = fieldValues.animation_settings?.[0] || {};

  // Heading styles
  const HeadingTag = `h${heading.size || '2'}` as keyof JSX.IntrinsicElements;
  const headingColorClass = heading.color === 'custom' ? '' : `text-${heading.color || 'auto'}`;
  const headingCustomColor = heading.color === 'custom' ? heading.custom_color?.color : undefined;
  const headingAnimClass = heading.animation_type || '';

  // Animation classes
  const imageAnimationClass = animation.enable ? 'fadeInLeft' : '';
  const contentAnimationClass = animation.enable ? 'fadeInRight' : '';
  const animationDelay = animation.delay || 0;

  // Button configuration
  const buttonClassName = `btn btn-${button.style || 'primary'} btn-${button.size || 'md'}`;
  const buttonHoverText = button.enable_hover_text ? button.hover_text : undefined;
  const buttonIcon = button.icon !== 'none' ? button.icon : '';

  return (
    <section
      className="about-section style-one"
      style={{
        backgroundImage: images.background_image?.src
          ? `url(${images.background_image.src})`
          : 'none',
      }}
    >
      <div className="divider"></div>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <div className={`about-img pe-xxl-5 ${imageAnimationClass}`} data-delay={animationDelay}>
              {images.about_image?.src && (
                <img
                  className="tilt-image w-100"
                  src={images.about_image.src}
                  alt={images.about_image.alt || 'About'}
                />
              )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`section-heading ${contentAnimationClass}`} data-delay={animationDelay + 0.2}>
              <span className="subtitle">{heading.subtitle}</span>
              <HeadingTag
                className={`mb-4 color-change ${headingColorClass} ${headingAnimClass}`}
                data-delay={animationDelay + 0.3}
                style={headingCustomColor ? { color: headingCustomColor } : {}}
              >
                {heading.text || ''}
              </HeadingTag>
              <div
                className="mb-4"
                dangerouslySetInnerHTML={{
                  __html: description.text || '',
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
              {button.show && (
                <Island
                  module={AnimatedButtonIsland}
                  text={button.text}
                  hoverText={buttonHoverText}
                  url={button.url}
                  className={buttonClassName}
                  icon={buttonIcon}
                  target={button.open_in_new_tab ? '_blank' : '_self'}
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
    {/* ========== HEADING GROUP ========== */}
    <RepeatedFieldGroup
      name="heading_group"
      label="Heading"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        subtitle: 'About Us',
        text: 'Robust, Easy-to-Use SaaS for Builders',
        size: '2',
        color: 'auto',
        custom_color: { color: '#161616', opacity: 100 },
        animation_type: 'fadeInUp',
        animation_delay: 0.3,
      }]}
    >
      <TextField
        name="subtitle"
        label="Subtitle"
        default="About Us"
      />
      <TextField
        name="text"
        label="Heading Text"
        default="Robust, Easy-to-Use SaaS for Builders"
      />
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
        default="2"
        display="select"
      />
      <ChoiceField
        name="color"
        label="Text Color"
        choices={[
          ['auto', 'Auto (Inherits)'],
          ['primary', 'Primary'],
          ['secondary', 'Secondary'],
          ['dark', 'Dark'],
          ['white', 'White'],
          ['custom', 'Custom Color'],
        ]}
        default="auto"
        display="select"
      />
      <ColorField
        name="custom_color"
        label="Custom Text Color (if custom selected)"
        default={{ color: '#161616', opacity: 100 }}
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
          ['heading-chars', 'Character Animation'],
          ['heading-word', 'Word Animation'],
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

    {/* ========== DESCRIPTION GROUP ========== */}
    <RepeatedFieldGroup
      name="description_group"
      label="Description"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        text: '<p>Scale your software operations through a custom engineering team. Meet the demand of your company\'s operations with a high-performing nearshore team skilled in modern technologies.</p>',
      }]}
    >
      <RichTextField
        name="text"
        label="Description Text"
        default="<p>Scale your software operations through a custom engineering team. Meet the demand of your company's operations with a high-performing nearshore team skilled in modern technologies.</p>"
      />
    </RepeatedFieldGroup>

    {/* ========== FEATURES LIST (Repeating) ========== */}
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

    {/* ========== IMAGES GROUP ========== */}
    <RepeatedFieldGroup
      name="images_group"
      label="Images"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        about_image: {
          src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg',
          alt: 'About Us'
        },
        background_image: {
          src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
          alt: 'Background Pattern'
        },
      }]}
    >
      <ImageField
        name="about_image"
        label="Main About Image"
        default={{
          src: 'https://bluefrogdev-4911237.hs-sites.com/hubfs/yosemite-national-park.jpg',
          alt: 'About Us'
        }}
        resizable={true}
        help_text="Main image showcasing your company or product"
      />
      <ImageField
        name="background_image"
        label="Background Pattern Image"
        default={{
          src: 'https://4911237.fs1.hubspotusercontent-na1.net/hubfs/4911237/united-language-group-heading%20(1).jpg',
          alt: 'Background Pattern'
        }}
        help_text="Optional background pattern or texture"
      />
    </RepeatedFieldGroup>

    {/* ========== BUTTON GROUP ========== */}
    <RepeatedFieldGroup
      name="button_group"
      label="Button"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        show: true,
        text: 'More About Us',
        url: '/about-us',
        enable_hover_text: true,
        hover_text: 'Learn Our Story',
        style: 'primary',
        size: 'md',
        icon: 'ti-arrow-up-right',
        open_in_new_tab: false,
      }]}
    >
      <BooleanField name="show" label="Show Button" default={true} />
      <TextField name="text" label="Button Text" default="More About Us" />
      <TextField name="url" label="Button URL" default="/about-us" />
      <BooleanField
        name="enable_hover_text"
        label="Enable Custom Hover Text"
        default={true}
        help_text="Show different text on button hover"
      />
      <TextField
        name="hover_text"
        label="Button Hover Text"
        default="Learn Our Story"
        help_text="Text shown when hovering over button"
      />
      <ChoiceField
        name="style"
        label="Button Style"
        default="primary"
        choices={[
          ['primary', 'Primary (Brand Color)'],
          ['secondary', 'Secondary'],
          ['light', 'Light'],
          ['dark', 'Dark'],
          ['outline-primary', 'Outline Primary'],
        ]}
        display="select"
      />
      <ChoiceField
        name="size"
        label="Button Size"
        default="md"
        choices={[
          ['sm', 'Small'],
          ['md', 'Medium'],
          ['lg', 'Large'],
        ]}
        display="select"
      />
      <ChoiceField
        name="icon"
        label="Button Icon"
        default="ti-arrow-up-right"
        choices={[
          ['none', 'No Icon'],
          ['ti-arrow-up-right', 'Arrow Up Right'],
          ['ti-arrow-right', 'Arrow Right'],
          ['ti-chevron-right', 'Chevron Right'],
        ]}
        display="select"
      />
      <BooleanField name="open_in_new_tab" label="Open in New Tab" default={false} />
    </RepeatedFieldGroup>

    {/* ========== ANIMATION SETTINGS ========== */}
    <RepeatedFieldGroup
      name="animation_settings"
      label="Animation Settings"
      occurrence={{ min: 1, max: 1, default: 1 }}
      default={[{
        enable: true,
        delay: 0,
      }]}
    >
      <BooleanField 
        name="enable" 
        label="Enable Animations" 
        default={true}
        help_text="Enable scroll-triggered animations"
      />
      <NumberField
        name="delay"
        label="Animation Delay"
        default={0}
        min={0}
        max={2}
        step={0.1}
        help_text="Delay before animation starts (seconds)"
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta = {
  label: 'About Section',
  icon: 'info',
  categories: ['content'],
};
