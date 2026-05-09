import React from 'react';

export const MinaBubbles = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 8.863a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M13 8A5 5 0 1 1 3 8a5 5 0 0 1 10 0m5.969 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"})
);

export default MinaBubbles;
