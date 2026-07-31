import React from 'react';

export const Lan4 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v240c0 35.3 28.7 64 64 64h224v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v272H64c-17.7 0-32-14.3-32-32z"})
);

export default Lan4;
