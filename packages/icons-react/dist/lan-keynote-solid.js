import React from 'react';

export const LanKeynoteSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M182.4 72H152c-22.1 0-40 17.9-40 40v16h249.6c13.5 0 25.5 8.4 30.1 21.1l53.9 148.3c1.6 4.4 2.4 9 2.4 13.7v1c0 22.1-17.9 40-40 40H248v112h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-112H40c-22.1 0-40-17.9-40-40v-1c0-4.7.8-9.3 2.4-13.7L64 128v-16c0-48.6 39.4-88 88-88h30.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24"})
);

export default LanKeynoteSolid;
