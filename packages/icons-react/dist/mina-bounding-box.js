import React from 'react';

export const MinaBoundingBox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5 17V7m0 10a2 2 0 1 0 2 2m-2-2a2 2 0 0 1 2 2M5 7a2 2 0 0 0 2-2M5 7a2 2 0 1 1 2-2m0 0h10m0 0a2 2 0 0 0 2 2m-2-2a2 2 0 1 1 2 2m0 0v10m0 0a2 2 0 0 0-2 2m2-2a2 2 0 1 1-2 2M7 19h10"})
);

export default MinaBoundingBox;
