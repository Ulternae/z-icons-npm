import React from 'react';

export const LanCircleKipThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-376c0-4.4-3.6-8-8-8s-8 3.6-8 8v112.2h-31.8c-4.4 0-8 3.6-8 8s3.6 8 8 8H192V376c0 4.4 3.6 8 8 8s8-3.6 8-8V272.3l130.9 109.8c3.4 2.8 8.4 2.4 11.3-1s2.4-8.4-1-11.3L223.3 264.1h120.5c4.4 0 8-3.6 8-8s-3.6-8-8-8H223.2l126-106.1c3.4-2.8 3.8-7.9 1-11.3s-7.9-3.8-11.3-1L208 240.1z"})
);

export default LanCircleKipThin;
