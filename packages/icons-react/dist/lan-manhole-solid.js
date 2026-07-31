import React from 'react';

export const LanManholeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 256a192 192 0 1 0-384 0 192 192 0 1 0 384 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m281.1-124.1c5.9-7.5 14.9-14.6 23.9-11.3 55.4 20 95 73.1 95 135.5s-39.6 115.4-95 135.5c-9 3.2-18-3.8-23.9-11.3-5.9-7.4-14.9-12.1-25.1-12.1s-19.2 4.7-25.1 12.1c-5.9 7.5-14.9 14.6-23.9 11.3-55.4-20-95-73.1-95-135.5s39.6-115.4 95-135.5c9-3.2 18 3.8 23.9 11.3 5.9 7.4 14.9 12.1 25.1 12.1s19.2-4.7 25.1-12.1M216 192a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 80a24 24 0 1 0 0 48 24 24 0 1 0 0-48m56-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
);

export default LanManholeSolid;
