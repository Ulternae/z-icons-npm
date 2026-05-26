import React from 'react';

export const LanFaceLaughBeam = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 144c53.7 0 99.7-33.1 118.7-80H137.3c19 46.9 65 80 118.7 80M123.3 288h265.4c14.2 0 25.4 12.3 21.7 26-18.5 68-80.6 118-154.4 118s-136-50-154.4-118c-3.7-13.7 7.5-26 21.7-26M176 184c-17.7 0-32 14.3-32 32 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-35.3 28.7-64 64-64s64 28.7 64 64c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-17.7-14.3-32-32-32m128 32c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-35.3 28.7-64 64-64s64 28.7 64 64c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-17.7-14.3-32-32-32s-32 14.3-32 32"})
);

export default LanFaceLaughBeam;
