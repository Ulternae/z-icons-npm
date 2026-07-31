import React from 'react';

export const LanGunSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L375.8 310.1l25-70h31.1c8.5 0 16.6-3.4 22.6-9.4l22.6-22.6h66.7c17.7 0 32-14.3 32-32v-80c0-17.7-14.3-32-32-32h-16v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H129.6L40.7-24.8zM193.8 128H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H225.8zm112 112h44.1l-11.6 32.5zM6.6 76.5C2.5 81.9 0 88.6 0 96v112c0 17.7 14.3 32 32 32h10c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h96c14.7 0 27.5-10 31-24.2L217 352h65.2z"})
);

export default LanGunSlashSolid;
