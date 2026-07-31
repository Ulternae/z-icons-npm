import React from 'react';

export const MinaRedo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M18.364 18.364A9 9 0 1 1 12 3c4.058 0 6.518 2.705 9 5.5"}), React.createElement("path", {"d":"M21 4.5v4h-4"})
);

export default MinaRedo;
