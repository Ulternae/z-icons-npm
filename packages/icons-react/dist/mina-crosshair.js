import React from 'react';

export const MinaCrosshair = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12h-3M6 12H3m9-6V3m0 18v-3m9-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
);

export default MinaCrosshair;
