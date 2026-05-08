import React from 'react';

export const MinaFatCornerLeftDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M19.923 3q-4.216 3.303-4.785 5.866-.569 2.564-.172 4.88H20L11.786 21 4 13.747h4.784Q8.82 9.46 12 6.46T19.923 3"})
);

export default MinaFatCornerLeftDown;
