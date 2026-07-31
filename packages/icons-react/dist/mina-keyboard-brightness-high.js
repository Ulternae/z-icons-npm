import React from 'react';

export const MinaKeyboardBrightnessHigh = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10 17h4M3 17h3m6-9v3m6 6h3m-4.879-4.28L18.58 11M7.457 12.72 5 11"})
);

export default MinaKeyboardBrightnessHigh;
