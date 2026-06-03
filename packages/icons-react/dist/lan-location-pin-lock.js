import React from 'react';

export const LanLocationPinLock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 188.6C32 102.7 103.1 32 192 32c87.8 0 158.2 68.9 160 153.3 10-4 20.6-6.9 31.7-8.3C377.6 78.2 294.1 0 192.1 0 86.1 0 .1 84.4.1 188.6c0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.5 12.8 43.3 0 7.5-8.1 16.4-18.1 26.4-29.8v-50.4c-18.2 23-35.2 42.4-48 56.4-24.6-26.9-64.6-73.7-98.6-127.4C58.1 298 32.2 238.9 32.2 188.6zm208 3.4a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160m128 240.1v2.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 47.9c0-8.2 6.2-15 14.3-15.9h131.5c8 .9 14.3 7.7 14.3 15.9v96c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-96zm128-95.9V352h-96v-47.9c0-26.5 21.5-48 48-48s48 21.5 48 48"})
);

export default LanLocationPinLock;
