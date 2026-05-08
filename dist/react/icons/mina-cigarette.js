import React from 'react';

export const MinaCigarette = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3 10c0-1.5 2-3.5 2-5m1.5 5c0-1.5 2-3.5 2-5m1.5 5c0-1.5 2-3.5 2-5m4 8v4M3 14v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1"})
);

export default MinaCigarette;
