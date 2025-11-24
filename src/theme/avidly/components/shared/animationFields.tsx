import React from 'react';
import {
  BooleanField,
  ChoiceField,
  NumberField,
  TextField,
} from '@hubspot/cms-components/fields';

/**
 * Reusable GSAP animation field configuration
 * Use this in any module that needs animation options
 */
export const AnimationFields = ({ 
  prefix = 'animation',
  enabledByDefault = true
}) => (
  <>
    <BooleanField
      name={`${prefix}Enabled`}
      label="Enable Animations"
      default={enabledByDefault}
      help_text="Enable GSAP animations for this module"
    />
    <ChoiceField
      name={`${prefix}Type`}
      label="Animation Type"
      default="fadeInUp"
      choices={[
        ['none', 'None'],
        ['fadeIn', 'Fade In'],
        ['fadeInUp', 'Fade In Up'],
        ['fadeInDown', 'Fade In Down'],
        ['fadeInLeft', 'Fade In Left'],
        ['fadeInRight', 'Fade In Right'],
        ['slideInUp', 'Slide In Up'],
        ['slideInDown', 'Slide In Down'],
        ['slideInLeft', 'Slide In Left'],
        ['slideInRight', 'Slide In Right'],
        ['zoomIn', 'Zoom In'],
        ['zoomOut', 'Zoom Out'],
        ['rotateIn', 'Rotate In'],
        ['bounceIn', 'Bounce In'],
      ]}
      help_text="Choose the animation effect for this section"
    />
    <NumberField
      name={`${prefix}Duration`}
      label="Animation Duration (seconds)"
      default={1}
      min={0.1}
      max={5}
      step={0.1}
      help_text="How long the animation takes to complete"
    />
    <NumberField
      name={`${prefix}Delay`}
      label="Animation Delay (seconds)"
      default={0}
      min={0}
      max={5}
      step={0.1}
      help_text="Delay before animation starts"
    />
    <ChoiceField
      name={`${prefix}Easing`}
      label="Animation Easing"
      default="power2.out"
      choices={[
        ['none', 'None (Linear)'],
        ['power1.in', 'Power 1 In'],
        ['power1.out', 'Power 1 Out'],
        ['power1.inOut', 'Power 1 In Out'],
        ['power2.in', 'Power 2 In'],
        ['power2.out', 'Power 2 Out'],
        ['power2.inOut', 'Power 2 In Out'],
        ['power3.in', 'Power 3 In'],
        ['power3.out', 'Power 3 Out'],
        ['power3.inOut', 'Power 3 In Out'],
        ['back.in', 'Back In'],
        ['back.out', 'Back Out'],
        ['back.inOut', 'Back In Out'],
        ['elastic.in', 'Elastic In'],
        ['elastic.out', 'Elastic Out'],
        ['elastic.inOut', 'Elastic In Out'],
        ['bounce.in', 'Bounce In'],
        ['bounce.out', 'Bounce Out'],
        ['bounce.inOut', 'Bounce In Out'],
      ]}
      help_text="The easing function for smooth animation"
    />
    <BooleanField
      name={`${prefix}StaggerChildren`}
      label="Stagger Child Elements"
      default={false}
      help_text="Animate child elements with a stagger effect"
    />
    <NumberField
      name={`${prefix}StaggerDelay`}
      label="Stagger Delay (seconds)"
      default={0.1}
      min={0}
      max={2}
      step={0.05}
      help_text="Delay between each child element animation"
    />
    <BooleanField
      name={`${prefix}ScrollTrigger`}
      label="Trigger on Scroll"
      default={true}
      help_text="Start animation when section comes into view"
    />
    <TextField
      name={`${prefix}TriggerStart`}
      label="Scroll Trigger Start"
      default="top 80%"
      help_text="When to start animation (e.g., 'top 80%', 'center center')"
    />
  </>
);

