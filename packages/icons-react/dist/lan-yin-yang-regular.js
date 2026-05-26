import React from 'react';

export const LanYinYangRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 256c0 114.9-93.1 208-208 208-50.9 0-92.2-41.2-92.2-92s41.3-92 92.2-92c77.3 0 140-62.7 140-140 0-15.4-2.5-30.1-7-44 45.9 38.2 75 95.7 75 160M256 48c50.8 0 92 41.2 92 92s-41.2 92-92 92c-77.3 0-140.2 62.6-140.2 140 0 15.3 2.5 30 7 43.8C77.1 377.6 48 320.2 48 256c0-114.9 93.1-208 208-208m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-368a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanYinYangRegular;
