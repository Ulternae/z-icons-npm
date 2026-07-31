import React from 'react';

export const LanTickThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 128 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 96c0-26.5 21.5-48 48-48s48 21.5 48 48v7.9c0 4.2-.5 8.3-1.4 12.4L77.7 261c-1.5 6.4-7.1 11-13.7 11s-12.3-4.5-13.7-11L17.4 116.3c-.9-4.1-1.4-8.2-1.4-12.4zM0 96v7.9q0 8.1 1.8 15.9l32.9 144.8C37.8 278.3 50 288 64 288s26.2-9.7 29.3-23.4l32.9-144.7c1.2-5.2 1.8-10.6 1.8-15.9v-7.9c0-35.3-28.7-64-64-64S0 60.7 0 96"})
);

export default LanTickThin;
