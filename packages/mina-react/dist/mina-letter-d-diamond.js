import React from 'react';

export function MinaLetterDDiamond({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.5 15.5v-7A.5.5 0 0 1 10 8h2a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 12 16h-2a.5.5 0 0 1-.5-.5"}), React.createElement("path", {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"})
  );
}

export default MinaLetterDDiamond;
