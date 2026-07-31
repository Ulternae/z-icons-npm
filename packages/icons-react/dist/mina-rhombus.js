import React from 'react';

export const MinaRhombus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m5.219 11.34 5.96-7.925a1.02 1.02 0 0 1 1.642 0l5.96 7.925c.292.388.292.932 0 1.32l-5.96 7.925a1.02 1.02 0 0 1-1.642 0L5.22 12.66a1.1 1.1 0 0 1 0-1.32"})
);

export default MinaRhombus;
