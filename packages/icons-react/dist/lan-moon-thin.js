import React from 'react';

export const LanMoonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16c18.3 0 36 2 53.1 5.9 3.3.7 5.8 3.5 6.2 6.8s-1.3 6.6-4.4 8.1C245.1 69.6 200 137.5 200 215.9c0 115.5 101.4 208.5 216.1 199.4 3.4-.3 6.5 1.6 7.9 4.7s.7 6.7-1.8 9c-43.1 41.5-101.7 67-166.2 67-132.5 0-240-107.5-240-240S123.5 16 256 16m0-16C114.6 0 0 114.6 0 256s114.6 256 256 256c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1C309.4 407.8 216 322.1 216 216c0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4s-8.6-18.3-18.5-20.5C294.4 2.2 275.4 0 256 0"})
);

export default LanMoonThin;
