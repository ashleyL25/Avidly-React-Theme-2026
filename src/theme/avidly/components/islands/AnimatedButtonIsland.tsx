'use client';

import React from 'react';

interface AnimatedButtonProps {
  text: string;
  hoverText?: string;
  url: string;
  className?: string;
  icon?: string;
  target?: string;
}

export default function AnimatedButtonIsland({
  text,
  hoverText,
  url,
  className = 'btn btn-primary',
  icon = 'ti-arrow-up-right',
  target = '_self',
}: AnimatedButtonProps) {
  const displayHoverText = hoverText || text;

  return (
    <a href={url} className={className} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      <span>
        {text} {icon && <i className={`ti ${icon}`}></i>}
      </span>
      <span>
        {displayHoverText} {icon && <i className={`ti ${icon}`}></i>}
      </span>
    </a>
  );
}

