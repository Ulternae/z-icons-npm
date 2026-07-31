import React from 'react';

export const LanBirdRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 192v-80c0-35.3-28.7-64-64-64s-64 28.7-64 64v16c0 44.2-35.8 80-80 80H48.8c8.1 89.7 83.4 160 175.2 160 97.2 0 176-78.8 176-176M224 416h-3l32.2 60.8 1 2.2c4.6 11.3 0 24.4-11 30.2s-24.4 2.2-31.2-7.9l-1.2-2.1-48.6-91.9C68.5 380.5 0 294.3 0 192v-3.6c0-14.7 11.2-26.8 25.5-28.3l2.9-.2H192c17.7 0 32-14.3 32-32v-16C224 50 274.1-.1 336-.1c49.7 0 91.9 32.4 106.5 77.3l61.7 37c4.8 2.9 7.8 8.1 7.8 13.7s-3 10.8-7.8 13.7L448 175.3v16.6l-.3 11.5c-4.5 88.9-60.8 164.1-139.4 196l40.9 77.2 1 2.2c4.6 11.3 0 24.4-11 30.2s-24.4 2.2-31.2-7.9l-1.3-2.1-45.7-86.3c-12 2.3-24.4 3.3-37 3.3M336 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanBirdRegular;
