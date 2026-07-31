import React from 'react';

export const LanCroissantThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16c63.4 0 121 24.6 164 64.7L298.6 202.1l-65.7-185c7.6-.7 15.3-1.1 23.1-1.1m175.3 76c25.8 27.5 45.1 61.2 55.7 98.5 3.6 12.6-6.5 25.4-21.4 25.4H307.3l124-124zM19.2 216.7c16.7-101 96.4-180.8 197.4-197.4L301 257.2c1 2.9.3 6.2-1.9 8.3l-33.7 33.7c-2.2 2.2-5.4 2.9-8.3 1.9zM16 256c0-7.8.4-15.5 1.1-23.1l185 65.6L80.7 420C40.6 377 16 319.4 16 256m76 175.3 124-124v158.3c0 14.9-12.8 25-25.4 21.4-37.3-10.6-71-29.9-98.5-55.7zm140 34.3V309.2l19.8 7c8.7 3.1 18.5.9 25-5.6l33.7-33.7c6.5-6.5 8.7-16.3 5.6-25l-7-19.8h156.4c23.8-.1 43.8-21.4 36.9-45.9C472 78.7 373.2 0 256 0 114.6 0 0 114.6 0 256c0 117.2 78.7 216 186.2 246.4 24.5 6.9 45.8-13.1 45.8-36.8"})
);

export default LanCroissantThin;
