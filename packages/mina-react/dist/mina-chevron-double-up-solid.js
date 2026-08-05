import React from 'react';

export function MinaChevronDoubleUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18.53 12.53a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h4.939l-4.94 4.94a.75.75 0 0 0 0 1.06H18.53a.75.75 0 0 0 0-1.06l-4.939-4.94z"})
  );
}

export default MinaChevronDoubleUpSolid;
