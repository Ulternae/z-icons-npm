import React from 'react';

export const LanHoseReel = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 256C96 132.3 196.3 32 320 32s224 100.3 224 224v96h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h1.9l12 96.1c-7.8 1-13.9 7.7-13.9 15.9 0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16 0-8.1-6.1-14.8-13.9-15.9l12-96.1h1.9c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-96C576 114.6 461.4 0 320 0S64 114.6 64 256s114.6 256 256 256c57.6 0 110.8-19 153.6-51.2 7.1-5.3 8.5-15.3 3.2-22.4s-15.3-8.5-22.4-3.2C417 463.3 370.4 480 320 480 196.3 480 96 379.7 96 256m477.9 128-12 96h-3.8l-12-96zM464 256a144 144 0 1 1-288 0 144 144 0 1 1 288 0M320 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352m0 240a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-96-64a96 96 0 1 0 192 0 96 96 0 1 0-192 0"})
);

export default LanHoseReel;
