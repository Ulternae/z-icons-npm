import React from 'react';

export const MinaFlagOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m4.75 14 13.78-4.04c.96-.282.96-1.638 0-1.92L4.75 4m0 10V4m0 10v7m0-17V3"})
);

export default MinaFlagOne;
