import React from 'react';

export const LanDiamondHalf = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M248.9 5.9c4.4 3 7.1 8 7.1 13.3v473.7c0 5.3-2.7 10.3-7.1 13.3s-10.1 3.5-15 1.5c-7-2.9-13.4-7.1-18.9-12.6L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41L215 17c5.5-5.5 11.9-9.7 18.9-12.6 4.9-2 10.6-1.5 15 1.5M224 53.3 39.6 237.7c-4.9 4.8-7.6 11.4-7.6 18.3s2.7 13.5 7.6 18.3L224 458.7V53.2z"})
);

export default LanDiamondHalf;
