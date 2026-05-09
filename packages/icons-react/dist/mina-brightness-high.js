import React from 'react';

export const MinaBrightnessHigh = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 12h3M5 5l2.121 2.121M19 5l-2.121 2.121M5 19l2.121-2.121M19 19l-2.121-2.121M12 3v3m0 15v-3m6-6h3m-6 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"})
);

export default MinaBrightnessHigh;
