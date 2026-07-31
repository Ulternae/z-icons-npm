import React from 'react';

export const MinaBrightnessLow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0M3 12h1m1-7 .707.707M19 5l-.707.707M5 19l.707-.707M19 19l-.707-.707M12 3v1m0 17v-1m8-8h1"})
);

export default MinaBrightnessLow;
