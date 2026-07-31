import React from 'react';

export const LanGaugeSimpleLowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96c0-35.3-28.7-64-64-64-1.7 0-3.4.1-5.1.2l-69.4-138.9c-5.9-11.9-20.3-16.7-32.2-10.7s-16.7 20.3-10.7 32.2L208 309.7c-10 11.3-16 26.1-16 42.3 0 35.3 28.7 64 64 64s64-28.7 64-64"})
);

export default LanGaugeSimpleLowSolid;
