import React from 'react';

export const LanFaceLaughWink = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 144c53.7 0 99.7-33.1 118.7-80H137.3c19 46.9 65 80 118.7 80M123.3 288h265.4c14.2 0 25.4 12.3 21.7 26-18.5 68-80.6 118-154.4 118s-136-50-154.4-118c-3.7-13.7 7.5-26 21.7-26m28.7-96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m152 8c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24"})
);

export default LanFaceLaughWink;
