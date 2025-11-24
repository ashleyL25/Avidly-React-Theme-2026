'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationConfig {
  enabled?: boolean;
  type?: string;
  duration?: number;
  delay?: number;
  easing?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
  scrollTrigger?: boolean;
  triggerStart?: string;
}

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: AnimationConfig;
  className?: string;
}

export default function AnimationWrapperIsland({
  children,
  animation = {},
  className = '',
}: AnimationWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animation.enabled || animation.type === 'none' || !elementRef.current) {
      return;
    }

    const element = elementRef.current;
    const {
      type = 'fadeInUp',
      duration = 1,
      delay = 0,
      easing = 'power2.out',
      staggerChildren = false,
      staggerDelay = 0.1,
      scrollTrigger = true,
      triggerStart = 'top 80%',
    } = animation;

    // Define animation properties based on type
    const getAnimationProps = (animationType: string) => {
      const props: any = {
        opacity: 1,
        duration,
        delay,
        ease: easing,
      };

      switch (animationType) {
        case 'fadeIn':
          return { ...props, opacity: 1 };
        case 'fadeInUp':
          return { ...props, y: 0, opacity: 1 };
        case 'fadeInDown':
          return { ...props, y: 0, opacity: 1 };
        case 'fadeInLeft':
          return { ...props, x: 0, opacity: 1 };
        case 'fadeInRight':
          return { ...props, x: 0, opacity: 1 };
        case 'slideInUp':
          return { ...props, y: 0 };
        case 'slideInDown':
          return { ...props, y: 0 };
        case 'slideInLeft':
          return { ...props, x: 0 };
        case 'slideInRight':
          return { ...props, x: 0 };
        case 'zoomIn':
          return { ...props, scale: 1, opacity: 1 };
        case 'zoomOut':
          return { ...props, scale: 1, opacity: 1 };
        case 'rotateIn':
          return { ...props, rotation: 0, opacity: 1 };
        case 'bounceIn':
          return { ...props, scale: 1, opacity: 1, ease: 'bounce.out' };
        default:
          return props;
      }
    };

    // Set initial state
    const getInitialState = (animationType: string) => {
      switch (animationType) {
        case 'fadeIn':
          return { opacity: 0 };
        case 'fadeInUp':
        case 'slideInUp':
          return { y: 50, opacity: animationType.includes('fade') ? 0 : 1 };
        case 'fadeInDown':
        case 'slideInDown':
          return { y: -50, opacity: animationType.includes('fade') ? 0 : 1 };
        case 'fadeInLeft':
        case 'slideInLeft':
          return { x: -50, opacity: animationType.includes('fade') ? 0 : 1 };
        case 'fadeInRight':
        case 'slideInRight':
          return { x: 50, opacity: animationType.includes('fade') ? 0 : 1 };
        case 'zoomIn':
          return { scale: 0.8, opacity: 0 };
        case 'zoomOut':
          return { scale: 1.2, opacity: 0 };
        case 'rotateIn':
          return { rotation: -180, opacity: 0 };
        case 'bounceIn':
          return { scale: 0, opacity: 0 };
        default:
          return {};
      }
    };

    // Set initial state
    gsap.set(element, getInitialState(type));

    // Create animation config
    const animConfig = {
      ...getAnimationProps(type),
      scrollTrigger: scrollTrigger
        ? {
            trigger: element,
            start: triggerStart,
            toggleActions: 'play none none none',
          }
        : false,
    };

    // Apply animation
    if (staggerChildren) {
      const children = element.children;
      if (children.length > 0) {
        gsap.set(children, getInitialState(type));
        gsap.to(children, {
          ...animConfig,
          stagger: staggerDelay,
        });
      }
    } else {
      gsap.to(element, animConfig);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

