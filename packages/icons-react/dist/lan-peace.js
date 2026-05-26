import React from 'react';

export const LanPeace = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 479.4V289.7L93.2 409.8c37.4 39.6 89.1 65.5 146.8 69.6M72.9 385.1 240 248.4V32.6C123.8 40.8 32 137.7 32 256c0 48.1 15.1 92.6 40.9 129.1M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m16-32.6c57.7-4.1 109.4-30 146.8-69.6L272 289.8zm167.1-94.3c25.8-36.5 40.9-81 40.9-129.1 0-118.3-91.8-215.2-208-223.4v215.9l167.1 136.7z"})
);

export default LanPeace;
