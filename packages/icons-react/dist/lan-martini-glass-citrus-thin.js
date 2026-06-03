import React from 'react';

export const LanMartiniGlassCitrusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 208c-18.8 0-36.6-4-52.6-11.3L433 209.5c19 9.3 40.4 14.5 63 14.5 79.5 0 144-64.5 144-144S575.5-64 496-64c-56.5 0-105.5 32.6-129 80h18.2c22.1-38.3 63.4-64 110.8-64 70.7 0 128 57.3 128 128s-57.3 128-128 128M72 64c-3.1 0-5.9 1.8-7.2 4.5s-.9 6.1 1 8.5L264 322.8V496h-96c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8h-96V322.8L478.2 77c1.9-2.4 2.3-5.7 1-8.5S475.1 64 472 64zm383.3 16L272 307.3 88.7 80z"})
);

export default LanMartiniGlassCitrusThin;
