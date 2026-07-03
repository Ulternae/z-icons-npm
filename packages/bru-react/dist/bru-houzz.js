import React from 'react';

export function BruHouzz({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"d":"M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"})
  );
}

export default BruHouzz;
