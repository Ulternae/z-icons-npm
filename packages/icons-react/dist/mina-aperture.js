import React from 'react';

export const MinaAperture = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m14.079 8.4 5.166 8.946M9.921 8.4h10.332M7.842 12l5.166-8.946M9.921 15.6 4.755 6.654M14.08 15.6H3.746M16.158 12l-5.166 8.946M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
);

export default MinaAperture;
