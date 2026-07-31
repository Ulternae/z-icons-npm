import React from 'react';

export const MinaKeyboardBrightnessLow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8 17h8M3 17h1m8-8v1m6 2.207.707-.707m-13 .707L5 11.5M20 17h1"})
);

export default MinaKeyboardBrightnessLow;
