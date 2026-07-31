import React from 'react';

export const MinaWheelchair = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M14.449 16.4A4.802 4.802 0 0 1 5 15.2a4.8 4.8 0 0 1 2.8-4.365"}), React.createElement("path", {"d":"m9.8 7.2.695 6.258a1 1 0 0 0 1.051.888l5.044-.288a1 1 0 0 1 1.056.953l.11 2.434a1 1 0 0 0 1 .955H19"}), React.createElement("path", {"d":"M11.2 5.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0m1.55 4.8h3"})
);

export default MinaWheelchair;
