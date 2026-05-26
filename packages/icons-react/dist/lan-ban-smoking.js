import React from 'react';

export const LanBanSmoking = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m86.7 109.3 316 316C363.4 459.4 312.1 480 256 480 132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7M278.6 256H384v32h-73.4zm64 64H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H246.6L109.3 86.7C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224 0 56.1-20.6 107.4-54.7 146.7zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-416c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48h-32c-8.8 0-16-7.2-16-16s-7.2-16-16-16m-51.9 192H128v-32h60.1l-32-32H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h140.1z"})
);

export default LanBanSmoking;
